'use client';
import classNames from 'classnames';
import React from 'react';
import PersonPageComponent from '@app/page-components/PersonPageComponent/PersonPageComponent';

export default function PersonPage({ params }: any) {
  console.log('Person Page Params', params.slug);
  return (
    <div className={classNames('w-full')}>
      <PersonPageComponent pageTitle={params.slug} />
    </div>
  );
}
