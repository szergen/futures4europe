// 'use client';
import classNames from 'classnames';
import React from 'react';
import { useRouter } from 'next/router';
import PostPageComponent from '@app/page-components/PostPageComponent/PostPageComponent';
import {
  getCollection,
  getCollectionItemByTitle,
  getMemberById,
  updateDataItem,
} from '@app/wixUtils/server-side';

// Function to generate static paths
// export async function generateStaticParams() {
//   const postCollection = await getCollection('PostPages');
//   const slugs = postCollection?.map((post: any) => ({
//     params: { slug: post.data.title.replace(/\s+/g, '_') },
//   }));
//   return slugs;
// }

export default async function PostPage({ params }: any) {
  console.log('Post Page Params', params.slug);

  // TEST Get entire Post collection
  // const postCollection = await getCollection('PostPages');
  // console.log('postCollection', postCollection);

  //Get specific Post by slug
  const postPageItem = await getCollectionItemByTitle('PostPages', params.slug);
  console.log('postItem Data', postPageItem.data);

  const member = await getMemberById(postPageItem?.data._owner);

  console.log('member', member);

  // const updatedItem = await updateDataItem(
  //   postItem.dataCollectionId,
  //   postItem._id,
  //   {
  //     _id: postItem._id,
  //     subtitle: 'This is a new subtitle',
  //   }
  // );
  // console.log('Updated Item', updatedItem);

  return (
    <div className={classNames('w-full')}>
      <PostPageComponent pageTitle={params.slug} post={postPageItem} />
    </div>
  );
}
