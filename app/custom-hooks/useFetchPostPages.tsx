import { useEffect, useState } from 'react';
// import { items } from '@wix/data';
// import { useWixModules } from '@wix/sdk-react';
// import { referencedItemOptions } from '@app/wixUtils/server-side';

const useFetchPostPages = (
  refresh: boolean
  // setIsLoadingInProgress: (value: boolean) => void
) => {
  const [postPages, setPostPages] = useState<any[]>([]);
  const [postPagesFetched, setPostPagesFetched] = useState(false);

  // const { queryDataItems } = useWixModules(items);

  useEffect(() => {
    const fetchPostPages = async () => {
      // setIsLoadingInProgress(true);
      try {
        // let allPostPages = [] as any[];
        // let skip = 0;
        // const limit = 50;
        // let totalCount = 0;
        // do {
        //   const result = await queryDataItems({
        //     dataCollectionId: 'PostPages',
        //     referencedItemOptions: referencedItemOptions,
        //     returnTotalCount: true,
        //   })
        //     .skip(skip)
        //     .limit(limit)
        //     .find();
        //   allPostPages = [...allPostPages, ...result?._items];
        //   totalCount = result?._totalCount;
        //   skip += limit;
        // } while (skip < totalCount);
        const allPostPagesResponse = await fetch('/api/postPages');
        const allPostPages = await allPostPagesResponse.json();

        setPostPages(allPostPages);
        setPostPagesFetched(true);
      } catch (error) {
        console.error('Error fetching post pages:', error);
      }
      // setIsLoadingInProgress(false);
    };

    fetchPostPages();
  }, [refresh]);

  return { postPages, postPagesFetched };
};

export default useFetchPostPages;
