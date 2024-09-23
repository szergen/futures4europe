import classNames from 'classnames';
import React from 'react';
import PostPageComponent from '@app/page-components/PostPageComponent/PostPageComponent';
import {
  getCollection,
  getCollectionItemByTitle,
} from '@app/wixUtils/server-side';
// import { getCollection } from '@app/wixUtils/client-side';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

// Function to generate static paths
export async function generateStaticParams() {
  const postCollection = await getCollection('PostPages');
  const slugs = postCollection?.map((post: any) => ({
    params: { slug: post?.data?.title?.replace(/\s+/g, '_') },
  }));
  console.log('Generated static slugs for PostPages:', slugs);
  return slugs;
}

export default async function PostPage({ params }: any) {
  console.log('Post Page Params', params.slug);

  //Get specific Post by slug
  const postPageItem = await getCollectionItemByTitle('PostPages', params.slug);
  // console.log('postItem Data', postPageItem?.data);

  if (!postPageItem) {
    return <div>Loading...</div>; // You can also add a loading spinner here
  }

  return (
    <div className={classNames('w-full')}>
      <PostPageComponent pageTitle={params.slug} post={postPageItem} />
    </div>
  );
}
