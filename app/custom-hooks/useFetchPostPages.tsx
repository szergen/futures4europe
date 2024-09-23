import { useEffect, useState } from 'react';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { referencedItemOptions } from '@app/wixUtils/server-side';

const useFetchPostPages = (refresh: boolean) => {
  const [postPages, setPostPages] = useState<any[]>([]);
  const [postPagesFetched, setPostPagesFetched] = useState(false);

  const { queryDataItems } = useWixModules(items);

  useEffect(() => {
    const fetchPostPages = async () => {
      try {
        let allPostPages = [] as any[];
        let skip = 0;
        const limit = 50;
        let totalCount = 0;
        do {
          const result = await queryDataItems({
            dataCollectionId: 'PostPages',
            referencedItemOptions: referencedItemOptions,
            returnTotalCount: true,
          })
            .skip(skip)
            .limit(limit)
            .find();
          allPostPages = [...allPostPages, ...result?._items];
          totalCount = result?._totalCount;
          skip += limit;
        } while (skip < totalCount);

        setPostPages(allPostPages);
        setPostPagesFetched(true);
      } catch (error) {
        console.error('Error fetching post pages:', error);
      }
    };

    fetchPostPages();
  }, [refresh]);

  return { postPages, postPagesFetched };
};

export default useFetchPostPages;
