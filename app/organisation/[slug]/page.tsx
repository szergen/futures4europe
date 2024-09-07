// 'use client';
import classNames from 'classnames';
import React from 'react';
import OrganisationPageComponent from '@app/page-components/OrganisationPageComponent/OrganisationPageComponent';
import {
  getCollectionItemByTitle,
  composeReferencedItemTitlesForInfoPages,
  getAllReferencedItemsByTitle,
  composePageWithReferencedItems,
} from '@app/wixUtils/server-side';

export default async function OrganisationPage({ params }: any) {
  console.log('Organisation Page Params', params.slug);

  const referencedKeys = [
    'organisationProject',
    'organisationPeople',
    'organisationHasMember',
    'organisationMemberOf',
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
      <OrganisationPageComponent
        pageTitle={params.slug}
        organisation={{ data: newPage }}
      />
    </div>
  );
}
