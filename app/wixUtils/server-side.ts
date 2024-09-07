import {
  getWixClientData,
  getWixClientMember,
  getWixClientServerData,
} from '@app/hooks/useWixClientServer';

const getCollection = async (collectionName: string) => {
  try {
    const wixClient = await getWixClientData();
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

const getCollectionItemByTitle = async (
  collectionName: string,
  itemId: string
) => {
  try {
    const wixClient = await getWixClientData();
    const itemToBeFound = itemId.replace(/_/g, ' ');
    console.log('itemToBeFound->', itemToBeFound);
    const { items } = await wixClient.items
      .queryDataItems({
        dataCollectionId: collectionName,
        referencedItemOptions: [
          { fieldName: 'countryTag' },
          { fieldName: 'methods' },
          { fieldName: 'domains' },
          { fieldName: 'people' },
          { fieldName: 'projects' },
          { fieldName: 'organisations' },
          { fieldName: 'projectResultAuthor' },
          { fieldName: 'speakers' },
          { fieldName: 'pageTypes' },
          { fieldName: 'author' },
          { fieldName: 'person' },
          { fieldName: 'Project' },
          { fieldName: 'organisation' },
          { fieldName: 'activity' },
          { fieldName: 'personProjectCoordonation' },
          { fieldName: 'personOrganisation' },
          { fieldName: 'personOrganisation' },
          { fieldName: 'InfoPages_projectCoordinator' },
          { fieldName: 'InfoPages_personOrganisation' },
        ],
      })
      .eq('title', itemToBeFound)
      .find();
    return items[0];
  } catch (error) {
    console.error('Error getting collection item:', error);
    throw error;
  }
};

const composeReferencedItemTitlesForInfoPages = (
  referencedPagesKeys: Array<string>,
  dataItem: Record<string, any>
) => {
  let referencedPageIds = [];
  for (const [key, value] of Object.entries(dataItem)) {
    referencedPagesKeys.includes(key)
      ? referencedPageIds.push(value.map((valueItem: any) => valueItem?.title))
      : null;
  }

  return referencedPageIds?.flat();
};

const getAllReferencedItemsByTitle = async (
  collectionName: string,
  referencedTitles: Array<string>
) => {
  try {
    const wixClient = await getWixClientData();
    const { items } = await wixClient.items
      .queryDataItems({
        dataCollectionId: collectionName,
        referencedItemOptions: [
          { fieldName: 'countryTag' },
          { fieldName: 'methods' },
          { fieldName: 'domains' },
          { fieldName: 'people' },
          { fieldName: 'projects' },
          { fieldName: 'organisations' },
          { fieldName: 'projectResultAuthor' },
          { fieldName: 'speakers' },
          { fieldName: 'pageTypes' },
          { fieldName: 'author' },
          { fieldName: 'person' },
          { fieldName: 'Project' },
          { fieldName: 'organisation' },
          { fieldName: 'activity' },
          { fieldName: 'personProjectCoordonation' },
          { fieldName: 'personOrganisation' },
          { fieldName: 'personOrganisation' },
          { fieldName: 'InfoPages_projectCoordinator' },
          { fieldName: 'InfoPages_personOrganisation' },
        ],
      })
      .in('title', referencedTitles)
      .find();
    return items;
  } catch (error) {
    console.error('Error getting collection item:', error);
    throw error;
  }
};

const composePageWithReferencedItems = async (
  pageData: Record<string, any>,
  referencedTitleKeys: Array<string>,
  referencesPayload: Array<Record<string, any>>
) => {
  referencedTitleKeys.forEach((element) => {
    pageData[element] = pageData[element]?.map((item: any) => {
      const referencedItem = referencesPayload.find(
        (reference) => reference.data.title === item.title
      );
      return referencedItem?.data;
    });
  });
  return pageData;
};

const getMemberById = async (memberId: string) => {
  const wixClientMember = await getWixClientMember();
  try {
    const member = await wixClientMember.members.getMember(memberId);
    return member;
  } catch (error) {
    console.error('Error getting member:', error);
    throw error;
  }
};

const updateDataItem = async (
  collectionName: string,
  itemId: string,
  data: Record<string, any> | null
) => {
  const wixClientServer = await getWixClientServerData();

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

export {
  getCollection,
  getCollectionItemByTitle,
  updateDataItem,
  getMemberById,
  composeReferencedItemTitlesForInfoPages,
  getAllReferencedItemsByTitle,
  composePageWithReferencedItems,
};