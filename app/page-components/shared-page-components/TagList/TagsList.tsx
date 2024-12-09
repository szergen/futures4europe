'use client';
import { useState } from 'react';
import useFetchInfoPages from '@app/custom-hooks/useFetchInfoPages';
import useTags from '@app/custom-hooks/useFetchListTags';
import Tag from '@app/shared-components/Tag/Tag';
import { automaticallyDecidePathPrefixBasedOnPageType } from '@app/utils/parse-utils';
import TagSkeleton from './TagSkeleton';

interface TagsListProps {
  infoPageType?: string;
  tagType?: string; // For domains, foresight methods, etc.
  limit?: number;
  offset?: number;
  title?: string;
  disableTooltip?: boolean;
  disablePopularityHover?: boolean;
}

const TagsList = ({
  infoPageType,
  tagType,
  limit = 25,
  offset = 0,
  title,
  disableTooltip = false,
  disablePopularityHover = false,
}: TagsListProps) => {
  const [isLoading, setIsLoading] = useState(true);

  // Use appropriate hook based on whether we're fetching info pages or regular tags
  const { infoPages, infoPagesFetched } = useFetchInfoPages(
    false,
    setIsLoading
  );
  const { tags: regularTags, loading: tagsLoading } = useTags({
    tagType,
    limit,
    offset,
  });

  // If tagType is provided, use regular tags
  if (tagType) {
    return (
      <div>
        {title && (
          <h2 className="mb-4">
            {title} ({tagsLoading ? '...' : regularTags.length})
          </h2>
        )}
        <div className="flex flex-wrap gap-2">
          {tagsLoading ? (
            <>
              {Array.from({ length: limit }).map((_, idx) => (
                <TagSkeleton key={idx} />
              ))}
            </>
          ) : (
            regularTags.map((tag, idx) =>
              tag && tag.name ? (
                <Tag
                  key={`${tag._id || tag.id || idx}`}
                  name={tag.name}
                  picture={tag.picture}
                  disableTooltip={disableTooltip}
                  disablePopularityHover={disablePopularityHover}
                  tagPageLink={`${automaticallyDecidePathPrefixBasedOnPageType(
                    tag.tagType
                  )}${tag.slug || ''}`}
                  tagType={tag.tagType}
                  mentions={tag.popularity}
                />
              ) : null
            )
          )}
        </div>
      </div>
    );
  }

  // Handle info pages
  const filteredPages = infoPages
    .filter(
      (page) =>
        !infoPageType || page?.data?.pageTypes?.[0]?.name === infoPageType
    )
    .slice(offset, offset + limit);

  const getTagsForInfoPage = (infoPage: any) => {
    const tagTypeMap: { [key: string]: any[] } = {
      'person info': infoPage.data.person || [],
      'organisation info': infoPage.data.organisation || [],
      'project info': infoPage.data.Project || [],
    };

    const pageTypeName = infoPage?.data?.pageTypes?.[0]?.name as string;
    const tagsForType = tagTypeMap[pageTypeName] || [];
    return tagsForType.map((tag: any) => ({
      ...tag,
      tagPageLink: `${automaticallyDecidePathPrefixBasedOnPageType(
        infoPage.data.pageTypes?.[0]?.name
      )}${infoPage.data.slug}`,
    }));
  };

  const tags = filteredPages
    .map(getTagsForInfoPage)
    .flat()
    .filter((tag) => tag?.name && tag?.picture);

  return (
    <div>
      {title && (
        <h2 className="mb-4">
          {title} ({isLoading ? '...' : tags.length})
        </h2>
      )}
      <div className="flex flex-wrap gap-2">
        {isLoading && !infoPagesFetched ? (
          <>
            {Array.from({ length: limit }).map((_, idx) => (
              <TagSkeleton key={idx} />
            ))}
          </>
        ) : (
          tags.map((tag, idx) => (
            <Tag
              key={`${tag._id || idx}`}
              name={tag.name}
              picture={tag.picture}
              disableTooltip={disableTooltip}
              disablePopularityHover={disablePopularityHover}
              tagPageLink={tag.tagPageLink}
              tagType={tag.tagType}
              mentions={tag.popularity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TagsList;
