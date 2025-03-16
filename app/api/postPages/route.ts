import { NextRequest, NextResponse } from 'next/server';
import { getWixClientData } from '@app/hooks/useWixClientServer';
import { JsonCacheService } from '@app/services/jsonCache';
import { referencedItemOptions } from '@app/wixUtils/server-side';

// Keep the revalidate setting
// export const revalidate = 300; // 5 minutes

export const GET = async (req: NextRequest) => {
  const cacheKey = 'postPages.json';

  // Try to get from file cache
  const cachedData = await JsonCacheService.getFromCache(cacheKey);
  if (cachedData) {
    return NextResponse.json(cachedData, { status: 200 });
  }

  try {
    const wixClient = await getWixClientData();

    // Fetch all pages with pagination
    let allItems = [] as any[];
    let skip = 0;
    const limit = 1000; // Maximum allowed by Wix
    let totalCount = 0;
    let hasMore = true;

    while (hasMore) {
      console.log(`Fetching PostPages: skip=${skip}, limit=${limit}`);
      const result = await wixClient.items
        .queryDataItems({
          dataCollectionId: 'PostPages',
          referencedItemOptions: referencedItemOptions,
          returnTotalCount: true,
        })
        .skip(skip)
        .limit(limit)
        .find();

      const items = result?._items || [];
      allItems = [...allItems, ...items];
      totalCount = result?._totalCount || 0;

      skip += items.length;
      hasMore = skip < totalCount && items.length > 0;

      console.log(
        `Fetched ${items.length} PostPages, total so far: ${allItems.length}/${totalCount}`
      );
    }

    console.log(`Completed fetching all ${allItems.length} PostPages`);

    // Save to file cache with 5 minute expiry
    await JsonCacheService.saveToCache(cacheKey, allItems, 5 * 60 * 1000);

    // Return all items as an array (original format)
    return NextResponse.json(allItems, { status: 200 });
  } catch (error) {
    console.error('Error fetching Post Pages:', error);
    return NextResponse.json(
      { message: 'Error fetching Post Pages', error: String(error) },
      { status: 500 }
    );
  }
};
