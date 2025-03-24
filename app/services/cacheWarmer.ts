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

    // Fetch and cache all info pages
    const infoPagesResponse = await fetch(`${baseUrl}/api/infoPages`);
    const infoPages = await infoPagesResponse.json();
    await JsonCacheService.saveToCache(
      'infoPages.json',
      infoPages,
      5 * 60 * 1000
    );

    // Fetch and cache all post pages
    const postPagesResponse = await fetch(`${baseUrl}/api/postPages`);
    const postPages = await postPagesResponse.json();
    await JsonCacheService.saveToCache(
      'postPages.json',
      postPages,
      5 * 60 * 1000
    );

    // Fetch and cache all affiliations
    const affiliationsResponse = await fetch(`${baseUrl}/api/affiliations`);
    const affiliations = await affiliationsResponse.json();
    await JsonCacheService.saveToCache(
      'affiliations.json',
      affiliations,
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
