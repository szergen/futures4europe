// 'use client';
import classNames from 'classnames';
import React from 'react';
import { useRouter } from 'next/router';
import PostPageComponent from '@app/page-components/PostPageComponent/PostPageComponent';
import { getCollection, getCollectionItem } from '@app/wixUtils/client';

// Function to generate static paths
export async function generateStaticParams() {
  const postCollection = await getCollection('PostPages');
  const slugs = postCollection?.map((post: any) => ({
    params: { slug: post.data.title.replace(/\s+/g, '_') },
  }));
  return slugs;
}

export default async function PostPage({ params }: any) {
  console.log('Post Page Params', params.slug);

  // TEST Get entire Post collection
  const postCollection = await getCollection('PostPages');
  console.log('postCollection', postCollection);

  // TEST Get specific Post by slug
  const postItem = await getCollectionItem('PostPages', params.slug);
  console.log('postItem', postItem);

  return (
    <div className={classNames('w-full')}>
      <PostPageComponent pageTitle={params.slug} post={postItem} />
    </div>
  );
}
