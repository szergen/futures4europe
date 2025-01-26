'use client';
import Tag from '@app/shared-components/Tag/Tag';
import { automaticallyDecidePathPrefixBasedOnPageType } from '@app/utils/parse-utils';
import TagSkeleton from './TagSkeleton';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';

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
  const { tags: allTags, tagsFetched: tagsLoading } = useAuth();

  if (tagType) {
    return (
      <div>
        {title && (
          <h2 className="mb-4">
            {title} ({!tagsLoading ? '...' : allTags.length})
          </h2>
        )}
        <div className="flex flex-wrap gap-2">
          {!tagsLoading ? (
            <>
              {Array.from({ length: limit }).map((_, idx) => (
                <TagSkeleton key={idx} />
              ))}
            </>
          ) : (
            allTags
              ?.filter((tag) => tag.tagType === tagType)
              ?.map((tag, idx) =>
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

  return (
    <div>
      {title && (
        <h2 className="mb-4">
          {title} ({!tagsLoading ? '...' : allTags.length})
        </h2>
      )}
      <div className="flex flex-wrap gap-2">
        {!tagsLoading ? (
          <>
            {Array.from({ length: limit }).map((_, idx) => (
              <TagSkeleton key={idx} />
            ))}
          </>
        ) : (
          allTags
            ?.filter((tag) => tag.tagType === infoPageType)
            ?.map((tag, idx) => (
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
