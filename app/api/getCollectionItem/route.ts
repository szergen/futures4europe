import { NextRequest, NextResponse } from 'next/server';
import { getWixClientData } from '@app/hooks/useWixClientServer';

export const POST = async (req: NextRequest) => {
  const { collectionName, itemId } = await req.json();

  try {
    const wixClient = await getWixClientData();
    const itemToBeFound = itemId.replace(/_/g, ' ');
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
    return NextResponse.json(items[0], { status: 200 });
  } catch (error) {
    console.error(
      `Error getting item: ${itemId} from collection ${collectionName}`,
      error
    );
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};

export const GET = () => {
  return NextResponse.json(
    { message: 'Method not allowed for getCollectionItemByTitle' },
    { status: 405 }
  );
};
