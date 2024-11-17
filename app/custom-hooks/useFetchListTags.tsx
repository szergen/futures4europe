import { useState, useEffect } from 'react';
import { getCollectionItems } from '@app/wixUtils/client-side';

interface UseTagsProps {
  tagType?: string;
  limit?: number;
  offset?: number;
}

const useTags = ({ tagType, limit = 25, offset = 0 }: UseTagsProps = {}) => {
  const [tags, setTags] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const allTags = await getCollectionItems('Tags');
        let matchedTags = [];
        let count = 0;

        // Iterate through tags only until we find what we need
        for (const tag of allTags) {
          const tagData = tag.data;

          // Check if tag matches our filter
          const normalizedTagType = tagData.tagType?.toLowerCase();
          const normalizedFilterType = tagType?.toLowerCase();
          const isMatch =
            !tagType ||
            normalizedTagType === normalizedFilterType ||
            normalizedTagType === normalizedFilterType?.replace(/s$/, '') ||
            normalizedTagType + 's' === normalizedFilterType;

          if (isMatch) {
            // Skip tags if there's an offset
            if (count >= offset) {
              matchedTags.push(tagData);
            }
            count++;

            // Break once we have enough tags
            if (matchedTags.length >= limit) {
              break;
            }
          }
        }

        // Sort the matched tags
        matchedTags.sort((a: any, b: any) => a.name.localeCompare(b.name));

        setTags(matchedTags);
      } catch (error) {
        console.error('Error fetching tags:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTags();
  }, [tagType, limit, offset]);

  return { tags, loading };
};

export default useTags;
