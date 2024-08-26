import { NextRequest, NextResponse } from 'next/server';
import { getWixClient } from '@app/hooks/useWixClientServer';

export const POST = async (req: NextRequest) => {
  const { collectionName, itemId } = await req.json();

  try {
    const wixClient = await getWixClient();
    const itemToBeFound = itemId.replace(/_/g, ' ');
    const { items } = await wixClient.items
      .queryDataItems({
        dataCollectionId: collectionName,
        includeReferencedItems: ['countryTag'],
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
    { message: 'Method not allowed for GetCollectionItem' },
    { status: 405 }
  );
};
