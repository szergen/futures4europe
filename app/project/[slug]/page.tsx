// 'use client';
import classNames from 'classnames';
import React from 'react';
import ProjectPageComponent from '@app/page-components/ProjectPageComponent/ProjectPageComponent';
import {
  getAffiliationsCollectionItemsByTag,
  getCollection,
  getCollectionItemBySlug,
} from '@app/wixUtils/server-side';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 300; // Revalidate every 5 minutes

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const postCollection = await getCollection('InfoPages');
  const slugs = postCollection
    ?.filter(
      (post: any) =>
        post?.data?.slug !== 'New_Project_Page' && post.data?.Project[0]
    )
    ?.map((post: any) => ({
      params: { slug: post?.data?.slug },
    }));
  // const excludedPaths = ['New_Post'];

  // const filteredSlugs = slugs.filter(
  //   (slug) => !excludedPaths.includes(slug.params.slug)
  // );

  // console.log('Generated static slugs for Project Info Pages ', slugs);
  return slugs;
}

export default async function ProjectPage({ params }: any) {
  console.log('Person Project Params', params.slug);
  const infoPageItem = await getCollectionItemBySlug('InfoPages', params.slug);

  const tagIdForProjectPage = infoPageItem?.data?.Project?.[0]?._id;
  const affiliations = await getAffiliationsCollectionItemsByTag(
    tagIdForProjectPage,
    'projectTag'
  );

  // console.log('Affiliations', affiliations);
  const infoPageItemWithAffiliations = {
    ...infoPageItem,
    affiliationsItems: affiliations.map((affiliation: any) => affiliation.data),
  };

  if (!infoPageItem) {
    return <div>Loading...</div>; // You can also add a loading spinner here
  }
  return (
    <div className={classNames('w-full')}>
      <ProjectPageComponent
        pageTitle={params.slug}
        project={infoPageItemWithAffiliations}
      />
    </div>
  );
}
