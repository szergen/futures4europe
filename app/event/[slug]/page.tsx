'use client';
import classNames from 'classnames';
import React from 'react';
import EventPageComponent from '@app/page-components/EventPageComponent/EventPageComponent';

export default function PostPage({ params }: any) {
  console.log('Post Page Params', params.slug);
  return (
    <div className={classNames('w-full')}>
      <EventPageComponent pageTitle={params.slug} />
    </div>
  );
}
