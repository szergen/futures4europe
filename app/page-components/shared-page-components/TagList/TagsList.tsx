'use client';
import { useState } from 'react';
import useFetchInfoPages from '@app/custom-hooks/useFetchInfoPages';
import useTags from '@app/custom-hooks/useFetchListTags';
import Tag from '@app/shared-components/Tag/Tag';
import { automaticallyDecidePathPrefixBasedOnPageType } from '@app/utils/parse-utils';
import TagSkeleton from './TagSkeleton';

interface TagsListProps {
  infoPageType?: string;
  tagType?: string;
  limit?: number;
  offset?: number;
  title?: string;
  disableTooltip?: boolean;
  disablePopularityHover?: boolean;
  shouldLinkToMentions?: boolean;
}

const TagsList = ({
  infoPageType,
  tagType,
  limit = 25,
  offset = 0,
  title,
  disableTooltip = false,
  disablePopularityHover = false,
  shouldLinkToMentions,
}: TagsListProps) => {
  // console.log('debug1->', { infoPageType, tagType, limit, offset, title, disableTooltip, disablePopularityHover });

  const [isLoading, setIsLoading] = useState(true);

  const { infoPages, infoPagesFetched } = useFetchInfoPages(false);
  const { tags: allTags, loading: tagsLoading } = useTags({
    tagType,
    // Remove limit and offset from initial fetch to get all tags
  });
  // console.log('debug2->', { ...allTags });
  // If tagType is provided, use regular tags
  if (tagType) {
    // Sort all tags by popularity and then take the specified slice
    const topTags = [...allTags]
      .sort((a, b) => (b.popularity || 0) - (a.popularity || 0))
      .slice(offset, offset + limit);

    return (
      <div>
        {title && (
          <h2 className="mb-4">
            {title} ({tagsLoading ? '...' : topTags.length})
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
            topTags.map((tag, idx) =>
              tag && tag.name ? (
                <Tag
                  key={`${tag._id || tag.id || idx}`}
                  name={tag.name}
                  picture={tag.picture}
                  disableTooltip={disableTooltip}
                  disablePopularityHover={disablePopularityHover}
                  tagPageLink={
                    shouldLinkToMentions
                      ? `/mentions/${tag._id}`
                      : `${automaticallyDecidePathPrefixBasedOnPageType(
                          tag.tagType
                        )}${tag.slug || ''}`
                  }
                  tagType={tag.tagType}
                />
              ) : null
            )
          )}
        </div>
      </div>
    );
  }

  // Handle info pages - same logic for sorting by popularity
  const allFilteredPages = infoPages.filter(
    (page) => !infoPageType || page?.data?.pageTypes?.[0]?.name === infoPageType
  );

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

  // Get all tags, sort by popularity, then take the slice we want
  const topTags = allFilteredPages
    .map(getTagsForInfoPage)
    .flat()
    .filter((tag) => tag?.name && tag?.picture)
    .sort((a, b) => (b.mentions || 0) - (a.mentions || 0))
    .slice(offset, offset + limit);

  // console.log('debug3->', { ...topTags });

  return (
    <div>
      {title && (
        <h2 className="mb-4">
          {title} ({isLoading ? '...' : topTags.length})
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
          topTags.map((tag, idx) => (
            <Tag
              key={`${tag._id || idx}`}
              name={tag.name}
              picture={tag.picture}
              disableTooltip={disableTooltip}
              disablePopularityHover={disablePopularityHover}
              tagPageLink={tag.tagPageLink}
              tagType={tag.tagType}
              // mentions={tag.popularity}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default TagsList;
