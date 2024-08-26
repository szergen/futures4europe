import {
  getWixClient,
  getWixClientServer,
} from '@app/hooks/useWixClientServer';

const getCollection = async (collectionName: string) => {
  try {
    const wixClient = await getWixClient();
    const { items } = await wixClient.items
      .queryDataItems({
        dataCollectionId: collectionName,
      })
      .find();
    return items;
  } catch (error) {
    console.error('Error getting collection:', error);
    throw error;
  }
};

const getCollectionItem = async (collectionName: string, itemId: string) => {
  try {
    const wixClient = await getWixClient();
    const itemToBeFound = itemId.replace(/_/g, ' ');
    console.log('itemToBeFound->', itemToBeFound);
    const { items } = await wixClient.items
      .queryDataItems({
        dataCollectionId: collectionName,
        includeReferencedItems: ['countryTag'],
      })
      .eq('title', itemToBeFound)
      .find();
    return items[0];
  } catch (error) {
    console.error('Error getting collection item:', error);
    throw error;
  }
};

const updateDataItem = async (
  collectionName: string,
  itemId: string,
  data: Record<string, any> | null
) => {
  const wixClientServer = await getWixClientServer();

  //   const { items } = await wixClientServer.items
  //     .queryDataItems({
  //       dataCollectionId: collectionName,
  //     })
  //     .find();
  //   return items;

  //   console.log('items from client server===>', items);

  try {
    const updatedItem = await wixClientServer.items.updateDataItem(itemId, {
      dataItem: {
        data,
      },
      dataCollectionId: collectionName,
    });
    return updatedItem;
  } catch (error) {
    console.error('Error updating data item', error);
  }
};

export { getCollection, getCollectionItem, updateDataItem };
