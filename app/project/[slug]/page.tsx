// 'use client';
import classNames from 'classnames';
import React from 'react';
import ProjectPageComponent from '@app/page-components/ProjectPageComponent/ProjectPageComponent';
import {
  getCollectionItemByTitle,
  composeReferencedItemTitlesForInfoPages,
  getAllReferencedItemsByTitle,
  composePageWithReferencedItems,
} from '@app/wixUtils/server-side';

export default async function PostPage({ params }: any) {
  console.log('Project Page Params', params.slug);

  const referencedKeys = [
    'projectCoordinator',
    'projectParticipantTeam',
    'projectOrganisation',
  ];

  // Grab specific Project by slug
  const infoPageItem = await getCollectionItemByTitle('InfoPages', params.slug);
  console.log('infoPageItem Data', infoPageItem?.data);
  const referencedTitles = composeReferencedItemTitlesForInfoPages(
    referencedKeys,
    infoPageItem?.data || {}
  );

  const infoPageWithReferencedItems = await getAllReferencedItemsByTitle(
    'InfoPages',
    referencedTitles
  );

  const newPage = await composePageWithReferencedItems(
    infoPageItem?.data || {},
    referencedKeys,
    infoPageWithReferencedItems
  );

  console.log('newPage', newPage);
  return (
    <div className={classNames('w-full')}>
      <ProjectPageComponent
        pageTitle={params.slug}
        project={{ data: newPage }}
      />
    </div>
  );
}
