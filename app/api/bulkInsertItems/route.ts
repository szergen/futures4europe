import { NextRequest, NextResponse } from 'next/server';
import { getWixClientServer } from '@app/hooks/useWixClientServer';

export const POST = async (req: NextRequest) => {
  const { collectionName, dataItems } = await req.json();
  console.log('itemId->', dataItems);

  try {
    const wixClientServer = await getWixClientServer();
    const insertedItems = await wixClientServer.items.bulkInsertDataItems({
      dataCollectionId: collectionName,
      dataItems: dataItems,
    });
    return NextResponse.json(insertedItems, { status: 200 });
  } catch (error) {
    console.error('Error inserting dataItems', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};

export const GET = () => {
  return NextResponse.json(
    { message: 'Method not allowed for bulkInsertDataItems' },
    { status: 405 }
  );
};
