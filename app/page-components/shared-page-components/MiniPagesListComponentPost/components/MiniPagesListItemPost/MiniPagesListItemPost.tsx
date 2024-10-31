'use client';
import style from './MiniPagesListItemPost.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import Link from 'next/link';
import { getPropsForMiniPagesListItemPost } from './MiniPagesListItemPost.utils';

export type MiniPagesListItemPostProps = {
  items: any[];
  title?: string;
  hideTitle?: boolean;
  pageTypePath?: 'post' | 'project' | 'person' | 'organisation';
};

const MiniPagesListItemPost: React.FC<MiniPagesListItemPostProps> = ({
  items,
  title = 'Internal Links',
  hideTitle,
  pageTypePath,
  postCollection,
}) => {
  console.log('debug2->items', items);
  console.log('postCollection', postCollection);

  return (
    <section className={classNames(style.posts)}>
      {!hideTitle && (
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full my-4', style.title)}
        >
          {title}
        </Typography>
      )}
      {items.map((item, index) => (
        <Link
          key={item?.title + index}
          href={`/${pageTypePath || 'post'}/${item.slug}`}
        >
          <MiniPagePost {...getPropsForMiniPagesListItemPost(item)} />
        </Link>
      ))}
      {/* {displayCountPosts < items.length && (
        <button onClick={showMorePosts} className="w-full my-4">
          Show All Internal Links({items.length})
        </button>
      )}
      {displayCountPosts >= items.length && (
        <button onClick={showFewerPosts} className="w-full my-4">
          Show fewer Internal Links
        </button>
      )} */}
    </section>
  );
};

export default MiniPagesListItemPost;
