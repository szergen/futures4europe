import { NextResponse } from 'next/server';
import { getWixClientServerData } from '@app/hooks/useWixClientServer';

export const POST = async () => {
  try {
    const wixClientServer = await getWixClientServerData();

    let allContacts = [] as any[];
    let skip = 0;
    const limit = 1000;
    let totalCount = 0;

    do {
      const result = await wixClientServer.members
        .queryMembers({
          fieldsets: ['FULL' as any],
        })
        .skip(skip)
        .limit(limit)
        .find();

      allContacts = [...allContacts, ...result?._items];
      totalCount = result?._totalCount;
      skip = limit + skip;
    } while (skip < totalCount);

    console.log('allPages', allContacts);
    return NextResponse.json(allContacts, { status: 200 });
  } catch (error) {
    console.error(`Error getting contact with id: ${itemId}`, error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};

export const GET = () => {
  return NextResponse.json(
    { message: 'Method not allowed for getAllContacts' },
    { status: 405 }
  );
};
