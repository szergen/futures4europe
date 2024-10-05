// 'use client';
import classNames from 'classnames';
import React from 'react';
import OrganisationPageComponent from '@app/page-components/OrganisationPageComponent/OrganisationPageComponent';
import {
  getCollectionItemBySlug,
  getCollection,
} from '@app/wixUtils/server-side';

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
        post?.data?.slug !== 'New_Organisation_Page' &&
        post.data?.organisation[0]
    )
    ?.map((post: any) => ({
      params: { slug: post?.data?.slug },
    }));

  console.log('Generated static slugs for Organisation Info Pages ', slugs);
  return slugs;
}

export default async function OrganisationPage({ params }: any) {
  console.log('Organisation Page Params', params.slug);

  // Grab specific Project by slug
  const infoPageItem = await getCollectionItemBySlug('InfoPages', params.slug);
  // console.log('infoPageItem Data', infoPageItem?.data);

  return (
    <div className={classNames('w-full')}>
      <OrganisationPageComponent
        pageTitle={params.slug}
        organisation={infoPageItem}
      />
    </div>
  );
}
