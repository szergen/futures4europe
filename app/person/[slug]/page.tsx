import classNames from 'classnames';
import React from 'react';
import {
  getAffiliationsCollectionItemsByTag,
  getCollection,
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
  const tagIdForPersonPage = infoPageItem?.data?.person?.[0]._id;
  const affiliations = await getAffiliationsCollectionItemsByTag(
    tagIdForPersonPage,
    'personTag'
  );

  console.log('Affiliations', affiliations);
  const infoPageItemWithAffiliations = {
    ...infoPageItem,
    affiliationsItems: affiliations.map((affiliation: any) => affiliation.data),
  };

  if (!infoPageItem) {
    return <div>Loading...</div>; // You can also add a loading spinner here
  }

  return (
    <div className={classNames('w-full')}>
      <PersonPageComponent
        pageTitle={params.slug}
        person={infoPageItemWithAffiliations}
      />
    </div>
  );
}
