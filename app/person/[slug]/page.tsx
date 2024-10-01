import classNames from 'classnames';
import React from 'react';
import {
  getCollection,
  // getCollectionItemByTitle,
  // getMemberById,
  // updateDataItem,
  // composeReferencedItemTitlesForInfoPages,
  // getAllReferencedItemsByTitle,
  // composePageWithReferencedItems,
  getCollectionItemBySlug,
} from '@app/wixUtils/server-side';
import PersonPageComponent from '@app/page-components/PersonPageComponent/PersonPageComponent';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 0;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const postCollection = await getCollection('InfoPages');
  const slugs = postCollection
    ?.filter(
      (post: any) =>
        post?.data?.slug !== 'New_Info_Page' && post.data?.person[0]
    )
    ?.map((post: any) => ({
      params: { slug: post?.data?.slug },
    }));
  // const excludedPaths = ['New_Post'];

  // const filteredSlugs = slugs.filter(
  //   (slug) => !excludedPaths.includes(slug.params.slug)
  // );

  console.log('Generated static slugs for PersonInfo Pages ', slugs);
  return slugs;
}

export default async function PersonPage({ params }: any) {
  console.log('Person Page Params', params.slug);

  // Grab specific Person by slug
  const infoPageItem = await getCollectionItemBySlug('InfoPages', params.slug);
  // console.log('infoPageItem Data', infoPageItem.data);
  // const referencedTitles = composeReferencedItemTitlesForInfoPages(
  //   ['personOrganisation'],
  //   infoPageItem?.data || {}
  // );

  // console.log('referencedIDs', referencedTitles);

  // const infoPageWithReferencedItems = await getAllReferencedItemsByTitle(
  //   'InfoPages',
  //   referencedTitles
  // );

  // console.log('infoPageWithReferencedItems', infoPageWithReferencedItems);

  // const newPage = await composePageWithReferencedItems(
  //   infoPageItem?.data || {},
  //   ['personOrganisation'],
  //   infoPageWithReferencedItems
  // );

  // console.log('newPage', newPage);

  // const member = await getMemberById(infoPageItem.data._owner);
  // console.log('member', member);
  if (!infoPageItem) {
    return <div>Loading...</div>; // You can also add a loading spinner here
  }

  return (
    <div className={classNames('w-full')}>
      <PersonPageComponent pageTitle={params.slug} person={infoPageItem} />
    </div>
  );
}
