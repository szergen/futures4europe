'use client';
import useTags from '@app/custom-hooks/useFetchListTags';
import Tag from '@app/shared-components/Tag/Tag';
import { automaticallyDecidePathPrefixBasedOnPageType } from '@app/utils/parse-utils';
import TagSkeleton from './TagSkeleton';

interface TagsListProps {
  tagType?: string;
  limit?: number;
  offset?: number;
  title?: string;
  disableTooltip?: boolean;
  disablePopularityHover?: boolean;
}

const TagsList = ({
  tagType,
  limit = 25,
  offset = 0,
  title,
  disableTooltip = false,
  disablePopularityHover = false,
}: TagsListProps) => {
  const { tags, loading } = useTags({ tagType, limit, offset });

  return (
    <div>
      {title && (
        <h2 className="mb-4">
          {title} ({loading ? '...' : tags.length})
        </h2>
      )}
      <div className="flex flex-wrap gap-2">
        {loading ? (
          // Show skeleton loaders while loading
          <>
            {Array.from({ length: limit }).map((_, idx) => (
              <TagSkeleton key={idx} />
            ))}
          </>
        ) : (
          // Show actual tags when loaded
          tags.map((tag, idx) =>
            tag && tag.name ? (
              <Tag
                key={`${tag._id || tag.id || idx}`}
                name={tag.name}
                picture={tag.picture}
                disableTooltip={disableTooltip}
                disablePopularityHover={disablePopularityHover}
                tagPageLink={
                  ['person', 'project', 'organisation'].find(
                    (item) => item === tag?.tagType
                  )
                    ? `${automaticallyDecidePathPrefixBasedOnPageType(
                        tag.tagType
                      )}${tag.slug || ''}`
                    : `/mentions/${tag._id}`
                }
                tagType={tag.tagType}
                mentions={tag.popularity}
              />
            ) : null
          )
        )}
      </div>
    </div>
  );
};

export default TagsList;
