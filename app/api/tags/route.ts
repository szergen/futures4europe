import { NextRequest, NextResponse } from 'next/server';
import { getWixClientData } from '@app/hooks/useWixClientServer';
import { saveToCache, getFromCache } from '../../utils/cache';
import { referencedItemOptions } from '@app/wixUtils/server-side';

export const GET = async (req: NextRequest) => {
  const cacheKey = 'tags.json';
  const cachedData = getFromCache(cacheKey);

  if (cachedData) {
    return new Response(JSON.stringify(cachedData), { status: 200 });
  }

  try {
    const wixClient = await getWixClientData();

    let allItems = [] as any[];
    let skip = 0;
    const limit = 1000;
    let totalCount = 0;

    do {
      const result = await wixClient.items
        .queryDataItems({
          dataCollectionId: 'Tags',
          // referencedItemOptions: referencedItemOptions,
          returnTotalCount: true,
        })
        .skip(skip)
        .limit(limit)
        .find();
      allItems = [...allItems, ...result?._items];
      totalCount = result?._totalCount;
      skip = limit + skip;
    } while (skip < totalCount);
    // // console.log('allItems', allItems);

    saveToCache(cacheKey, allItems);
    return NextResponse.json(allItems, { status: 200 });
  } catch (error) {
    console.error('Error fetching Tags:', error);
    return NextResponse.json(
      { message: 'Error fetching Tags' },
      { status: 500 }
    );
  }
};

export const POST = async (req: NextRequest) => {
  const cacheKey = 'tags.json';

  try {
    const wixClient = await getWixClientData();

    let allItems = [] as any[];
    let skip = 0;
    const limit = 1000;
    let totalCount = 0;

    do {
      const result = await wixClient.items
        .queryDataItems({
          dataCollectionId: 'Tags',
          // referencedItemOptions: referencedItemOptions,
          returnTotalCount: true,
        })
        .skip(skip)
        .limit(limit)
        .find();
      allItems = [...allItems, ...result?._items];
      totalCount = result?._totalCount;
      skip = limit + skip;
    } while (skip < totalCount);
    // // console.log('allItems', allItems);

    saveToCache(cacheKey, allItems);
    return new Response(
      JSON.stringify({ message: 'Cache updated successfully.' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error updating cache:', error);
    return new Response(JSON.stringify({ error: 'Failed to update cache' }), {
      status: 500,
    });
  }
};
