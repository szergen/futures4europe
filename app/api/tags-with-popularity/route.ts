import { NextRequest, NextResponse } from 'next/server';
import { calculatePopularity } from '@app/utils/tags.utls';
import { JsonCacheService } from '@app/services/jsonCache';

// Keep the revalidate setting
export const revalidate = 300; // 5 minutes

export const GET = async (req: NextRequest) => {
  const cacheKey = 'tags-with-popularity.json';

  // Try to get from file cache
  const cachedData = await JsonCacheService.getFromCache(cacheKey);
  if (cachedData) {
    return NextResponse.json(cachedData, { status: 200 });
  }

  try {
    // Determine the base URL for API calls
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || '';

    // Fetch all data using the simplified APIs
    console.log('Fetching data for tags-with-popularity calculation');

    const tagsResponse = await fetch(`${baseUrl}/api/tags`);
    if (!tagsResponse.ok) {
      throw new Error(`Failed to fetch tags: ${tagsResponse.status}`);
    }
    const tags = await tagsResponse.json();
    console.log(`Fetched ${tags.length} tags`);

    const infoPagesResponse = await fetch(`${baseUrl}/api/infoPages`);
    if (!infoPagesResponse.ok) {
      throw new Error(`Failed to fetch infoPages: ${infoPagesResponse.status}`);
    }
    const infoPages = await infoPagesResponse.json();
    console.log(`Fetched ${infoPages.length} infoPages`);

    const postPagesResponse = await fetch(`${baseUrl}/api/postPages`);
    if (!postPagesResponse.ok) {
      throw new Error(`Failed to fetch postPages: ${postPagesResponse.status}`);
    }
    const postPages = await postPagesResponse.json();
    console.log(`Fetched ${postPages.length} postPages`);

    const affiliationsResponse = await fetch(`${baseUrl}/api/affiliations`);
    if (!affiliationsResponse.ok) {
      throw new Error(
        `Failed to fetch affiliations: ${affiliationsResponse.status}`
      );
    }
    const affiliations = await affiliationsResponse.json();
    console.log(`Fetched ${affiliations.length} affiliations`);

    // Calculate popularity
    console.log('Calculating tag popularity...');
    const tagsWithMentions = tags.map((tag: any) => tag.data);
    const popularTags = calculatePopularity(
      tagsWithMentions,
      infoPages,
      postPages,
      affiliations.map((affiliation: any) => affiliation.data)
    );

    // Sort by popularity
    const sortedTags = popularTags.sort(
      (a: any, b: any) => b.mentions - a.mentions
    );
    console.log(`Calculated popularity for ${sortedTags.length} tags`);

    // Save to file cache with 5 minute expiry
    await JsonCacheService.saveToCache(cacheKey, sortedTags, 5 * 60 * 1000);

    return NextResponse.json(sortedTags, { status: 200 });
  } catch (error) {
    console.error('Error calculating tag popularity:', error);
    return NextResponse.json(
      { message: 'Error calculating tag popularity', error: String(error) },
      { status: 500 }
    );
  }
};
