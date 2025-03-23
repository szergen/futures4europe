import { JsonCacheService } from './jsonCache';

export async function warmCache() {
  try {
    console.log('Warming cache...');

    // Determine the base URL for API calls
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    // Fetch and cache tags
    const tagsResponse = await fetch(`${baseUrl}/api/tags`);
    const tags = await tagsResponse.json();
    await JsonCacheService.saveToCache('tags.json', tags, 5 * 60 * 1000);

    // Fetch and cache info pages in chunks
    let allInfoPages: any[] = [];
    let infoPagesTotalPages = 1;
    let infoPagesCurrent = 1;

    do {
      const response = await fetch(
        `${baseUrl}/api/infoPages?page=${infoPagesCurrent}&pageSize=100`
      );
      const data = await response.json();
      allInfoPages = [...allInfoPages, ...data.items];
      infoPagesTotalPages = data.totalPages;
      infoPagesCurrent++;

      // Cache each page individually
      await JsonCacheService.saveToCache(
        `infoPages-page-${infoPagesCurrent - 1}-100.json`,
        data,
        5 * 60 * 1000
      );
    } while (infoPagesCurrent <= infoPagesTotalPages);

    // Cache all info pages
    await JsonCacheService.saveToCache(
      'infoPages-all.json',
      allInfoPages,
      5 * 60 * 1000
    );

    // Fetch and cache post pages in chunks
    let allPostPages: any[] = [];
    let postPagesTotalPages = 1;
    let postPagesCurrent = 1;

    do {
      const response = await fetch(
        `${baseUrl}/api/postPages?page=${postPagesCurrent}&pageSize=100`
      );
      const data = await response.json();
      allPostPages = [...allPostPages, ...data.items];
      postPagesTotalPages = data.totalPages;
      postPagesCurrent++;

      // Cache each page individually
      await JsonCacheService.saveToCache(
        `postPages-page-${postPagesCurrent - 1}-100.json`,
        data,
        5 * 60 * 1000
      );
    } while (postPagesCurrent <= postPagesTotalPages);

    // Cache all post pages
    await JsonCacheService.saveToCache(
      'postPages-all.json',
      allPostPages,
      5 * 60 * 1000
    );

    // Fetch and cache affiliations in chunks
    let allAffiliations: any[] = [];
    let affiliationsTotalPages = 1;
    let affiliationsCurrent = 1;

    do {
      const response = await fetch(
        `${baseUrl}/api/affiliations?page=${affiliationsCurrent}&pageSize=100`
      );
      const data = await response.json();
      allAffiliations = [...allAffiliations, ...data.items];
      affiliationsTotalPages = data.totalPages;
      affiliationsCurrent++;

      // Cache each page individually
      await JsonCacheService.saveToCache(
        `affiliations-page-${affiliationsCurrent - 1}-100.json`,
        data,
        5 * 60 * 1000
      );
    } while (affiliationsCurrent <= affiliationsTotalPages);

    // Cache all affiliations
    await JsonCacheService.saveToCache(
      'affiliations-all.json',
      allAffiliations,
      5 * 60 * 1000
    );

    // Now fetch and cache the calculated data
    const popularTagsResponse = await fetch(
      `${baseUrl}/api/tags-with-popularity`
    );
    const popularTags = await popularTagsResponse.json();
    await JsonCacheService.saveToCache(
      'tags-with-popularity.json',
      popularTags,
      5 * 60 * 1000
    );

    console.log('Cache warming complete!');
    return true;
  } catch (error) {
    console.error('Error warming cache:', error);
    return false;
  }
}
