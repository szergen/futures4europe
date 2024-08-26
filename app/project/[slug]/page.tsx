'use client';
import classNames from 'classnames';
import React from 'react';
import ProjectPageComponent from '@app/page-components/ProjectPageComponent/ProjectPageComponent';

export default function PostPage({ params }: any) {
  console.log('Post Page Params', params.slug);
  return (
    <div className={classNames('w-full')}>
      <ProjectPageComponent pageTitle={params.slug} />
    </div>
  );
}
