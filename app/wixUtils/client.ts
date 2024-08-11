import { getWixClient } from '@app/hooks/useWixClientServer';

const getCollection = async (collectionName: string) => {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items
    .queryDataItems({
      dataCollectionId: collectionName,
    })
    .find();
  return items;
};

const getCollectionItem = async (collectionName: string, itemId: string) => {
  const wixClient = await getWixClient();
  const itemToBeFound = itemId.replace(/_/g, ' ');
  console.log('itemToBeFound->', itemToBeFound);
  const { items } = await wixClient.items
    .queryDataItems({
      dataCollectionId: collectionName,
    })
    .eq('title', itemToBeFound)
    .find();
  return items[0];
};

export { getCollection, getCollectionItem };
