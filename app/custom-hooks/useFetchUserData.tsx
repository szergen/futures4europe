// useFetchUserData.ts
import { useEffect, useState } from 'react';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { referencedItemOptions } from '@app/wixUtils/server-side';

const useFetchUserData = (isLoggedIn: boolean, userDetails: any) => {
  const [ownedPostPages, setOwnedPostPages] = useState<any[]>([]);
  const [ownedInfoPages, setOwnedInfoPages] = useState<any[]>([]);
  const [ownedPostPagesFetched, setOwnedPostPagesFetched] = useState(false);
  const [ownedInfoPagesFetched, setOwnedInfoPagesFetched] = useState(false);

  const { queryDataItems } = useWixModules(items);

  useEffect(() => {
    if (!isLoggedIn) return;

    const fetchPages = async (
      dataCollectionId: string,
      setterObject: (obj: any) => void,
      ids: string[],
      setterFetched: (value: boolean) => void
    ) => {
      try {
        const { _items: result } = await queryDataItems({
          dataCollectionId: dataCollectionId,
          referencedItemOptions: referencedItemOptions,
        })
          .in('_owner', ids)
          .find();
        console.log('result', result);
        setterObject(result);
        setterFetched(true);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchPages(
      'PostPages',
      setOwnedPostPages,
      [userDetails.contactId, userDetails.accountId],
      setOwnedPostPagesFetched
    );
    fetchPages(
      'InfoPages',
      setOwnedInfoPages,
      [userDetails.contactId, userDetails.accountId],
      setOwnedInfoPagesFetched
    );
  }, [isLoggedIn, userDetails]);

  return {
    ownedPostPages,
    ownedInfoPages,
    ownedPostPagesFetched,
    ownedInfoPagesFetched,
  };
};

export default useFetchUserData;
