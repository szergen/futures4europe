// 'use client';
import classNames from 'classnames';
import React from 'react';
import {
  getCollection,
  getCollectionItemByTitle,
  getMemberById,
  updateDataItem,
  composeReferencedItemTitlesForInfoPages,
  getAllReferencedItemsByTitle,
  composePageWithReferencedItems,
} from '@app/wixUtils/server-side';
import PersonPageComponent from '@app/page-components/PersonPageComponent/PersonPageComponent';

export default async function PersonPage({ params }: any) {
  console.log('Person Page Params', params.slug);

  // Grab specific Person by slug
  const infoPageItem = await getCollectionItemByTitle('InfoPages', params.slug);
  // console.log('infoPageItem Data', infoPageItem.data);
  const referencedTitles = composeReferencedItemTitlesForInfoPages(
    ['personOrganisation', 'personProjectCoordonation'],
    infoPageItem?.data || {}
  );

  // console.log('referencedIDs', referencedTitles);

  const infoPageWithReferencedItems = await getAllReferencedItemsByTitle(
    'InfoPages',
    referencedTitles
  );

  // console.log('infoPageWithReferencedItems', infoPageWithReferencedItems);

  const newPage = await composePageWithReferencedItems(
    infoPageItem?.data || {},
    ['personOrganisation', 'personProjectCoordonation'],
    infoPageWithReferencedItems
  );

  console.log('newPage', newPage);

  // const member = await getMemberById(infoPageItem.data._owner);
  // console.log('member', member);

  return (
    <div className={classNames('w-full')}>
      <PersonPageComponent pageTitle={params.slug} person={{ data: newPage }} />
    </div>
  );
}
