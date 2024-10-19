import { useEffect, useState } from 'react';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { referencedItemOptions } from '@app/wixUtils/server-side';

const useFetchInfoPages = (
  refresh: boolean,
  setIsLoadingInProgress: (value: boolean) => undefined
) => {
  const [infoPages, setInfoPages] = useState<any[]>([]);
  const [infoPagesFetched, setInfoPagesFetched] = useState(false);

  const { queryDataItems } = useWixModules(items);

  useEffect(() => {
    const fetchInfoPages = async () => {
      setIsLoadingInProgress(true);
      try {
        let allInfoPages = [] as any[];
        let skip = 0;
        const limit = 50;
        let totalCount = 0;
        do {
          const result = await queryDataItems({
            dataCollectionId: 'InfoPages',
            referencedItemOptions: referencedItemOptions,
            returnTotalCount: true,
          })
            .skip(skip)
            .limit(limit)
            .find();
          allInfoPages = [...allInfoPages, ...result?._items];
          totalCount = result?._totalCount;
          skip += limit;
        } while (skip < totalCount);

        setInfoPages(allInfoPages);
        setInfoPagesFetched(true);
      } catch (error) {
        console.error('Error fetching info pages:', error);
      }
      setIsLoadingInProgress(false);
    };

    fetchInfoPages();
  }, [refresh]);

  return { infoPages, infoPagesFetched };
};

export default useFetchInfoPages;
