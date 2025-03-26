import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { JsonCacheService } from '@app/services/jsonCache';

export async function POST(req: NextRequest) {
  try {
    const { key, path } = await req.json();

    // Invalidate specific cache key
    if (key) {
      await JsonCacheService.invalidateCache(key);
    }

    // Invalidate all cache
    if (key === '*') {
      await JsonCacheService.invalidateAllCache();
    }

    // Revalidate path if provided
    if (path) {
      revalidatePath(path);
    }

    return NextResponse.json({
      success: true,
      invalidated: key || 'none',
      revalidated: path || 'none',
    });
  } catch (error) {
    console.error('Error invalidating cache:', error);
    return NextResponse.json(
      { message: 'Error invalidating cache' },
      { status: 500 }
    );
  }
}
