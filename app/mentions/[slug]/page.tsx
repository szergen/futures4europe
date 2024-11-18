import classNames from 'classnames';
import React from 'react';
// import PostPageComponent from '@app/page-components/PostPageComponent/PostPageComponent';
import {
  getCollection,
  getItemById,
  // getCollectionItemByTitle,
  // getCollectionItemBySlug,
} from '@app/wixUtils/server-side';
import MiniPagesListComponent from '@app/page-components/shared-page-components/MiniPagesListComponent/MiniPagesListComponent';
import MiniPagesListItemPost from '@app/page-components/shared-page-components/MiniPagesListComponentPost/components/MiniPagesListItemPost/MiniPagesListItemPost';
import Hero from '@app/shared-components/Hero/Hero';
import style from './page.module.css';
import { decidePageTypeItems } from '@app/utils/parse-utils';
import { containsId } from '@app/utils/tags.utls';
import Tag from '@app/shared-components/Tag/Tag';
// import { getCollection } from '@app/wixUtils/client-side';

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 0;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export default async function Pages({ params }: any) {
  const tagId = params.slug;

  const postCollection = await getCollection('PostPages');
  const infoPagesCollection = await getCollection('InfoPages');
  const currentTagData = await getItemById('Tags', tagId);

  const postPages = postCollection.map((item) => item.data);
  const infoPages = infoPagesCollection.map((item) => item.data);

  const allPages = [...postPages, ...infoPages];

  let items = allPages.filter((page: any) => {
    return containsId(page, tagId);
  });

  // Get specific Post by slug
  // const postPageItem = await getCollectionItemBySlug('PostPages', params.slug);
  // console.log('postItem Data', postPageItem?.data);

  if (!postCollection || !infoPagesCollection || !currentTagData) {
    return <div>Loading...</div>; // You can also add a loading spinner here
  }

  return (
    <div className={classNames('w-full')}>
      <Hero subtitle={`sorted by published dates`}>
        <div className="flex justify-center">
          <h1
            className={classNames(
              'text-4xl',
              'font-bold',
              'mb-4',
              style.heroTitle
            )}
          >
            Mentions of
          </h1>
          <Tag {...currentTagData?.data} className="ml-2" />
        </div>
      </Hero>
      <div className={classNames(style.listContainer)}>
        <MiniPagesListItemPost
          // postCollection={postCollection}
          items={items}
          automaticallyCalculatePath={true}
          hideTitle
        />
      </div>
    </div>
  );
}
