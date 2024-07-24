'use client';
import classNames from 'classnames';
import React from 'react';
import PostPageComponent from '@app/page-components/PostPageComponent/PostPageComponent';

export default function PostPage({ params }: any) {
  console.log('Post Page Params', params.slug);
  return (
    <div className={classNames('w-full')}>
      <PostPageComponent pageTitle={params.slug} />
    </div>
  );
}
