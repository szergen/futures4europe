'use client';
import classNames from 'classnames';
import React from 'react';
import ProjectResultPageComponent from '@app/page-components/ProjectResultPageComponent/ProjectResultPageComponent';

export default function PostPage({ params }: any) {
  console.log('Post Page Params', params.slug);
  return (
    <div className={classNames('w-full')}>
      <ProjectResultPageComponent pageTitle={params.slug} />
    </div>
  );
}
