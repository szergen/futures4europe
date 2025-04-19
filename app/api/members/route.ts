import { NextRequest, NextResponse } from 'next/server';
import { getWixClientServerData } from '@app/hooks/useWixClientServer';

export async function GET(req: NextRequest) {
  try {
    const wixClient = await getWixClientServerData();

    let allContacts = [];
    let skip = 0;
    const limit = 1000;
    let totalCount = 0;

    do {
      const result = await wixClient.contacts
        .queryContacts()
        .skip(skip)
        .limit(limit)
        .find();

      allContacts = [...allContacts, ...result.items];
      totalCount = result.totalCount || result.items.length; // Fallback in case totalCount is missing
      skip += limit;
    } while (skip < totalCount);

    return NextResponse.json(
      {
        success: true,
        contacts: allContacts,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching contacts:', error);
    return NextResponse.json(
      { message: 'Error fetching contacts', error: error.message },
      { status: 500 }
    );
  }
}
