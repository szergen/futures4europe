import { useEffect, useState } from 'react';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { referencedItemOptions } from '@app/wixUtils/server-side';

const useFetchTags = () => {
  const [tags, setTags] = useState<any[]>([]);
  const [tagsFetched, setTagsFetched] = useState(false);

  const { queryDataItems } = useWixModules(items);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        let allTags = [] as any[];
        let skip = 0;
        const limit = 1000;
        let totalCount = 0;
        do {
          const result = await queryDataItems({
            dataCollectionId: 'Tags',
            referencedItemOptions: referencedItemOptions,
            returnTotalCount: true,
          })
            .skip(skip)
            .limit(limit)
            .find();
          allTags = [...allTags, ...result?._items];
          totalCount = result?._totalCount;
          skip = limit + skip;
        } while (skip < totalCount);

        setTags(allTags.map((tag: any) => tag.data));
        setTagsFetched(true);
      } catch (error) {
        console.error('Error fetching tags:', error);
      }
    };

    fetchTags();
  }, []);

  return { tags, tagsFetched };
};

export default useFetchTags;
