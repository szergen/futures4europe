'use client';
import classNames from 'classnames';
import React from 'react';
import OrganisationPageComponent from '@app/page-components/OrganisationPageComponent/OrganisationPageComponent';

export default function PersonPage({ params }: any) {
  console.log('Person Page Params', params.slug);
  return (
    <div className={classNames('w-full')}>
      <OrganisationPageComponent pageTitle={params.slug} />
    </div>
  );
}
