import style from './MiniPagesListItemPost.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import { JSXElementConstructor, useEffect, useState } from 'react';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
// import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
// import MiniPageEvents from '@app/shared-components/MiniPageEvents/MiniPageEvents';

export type MiniPagesListItemPostProps = {
  items: any[];
  title?: string;
};

const MiniPagesListItemPost: React.FC<MiniPagesListItemPostProps> = ({
  items,
  title = 'Internal Links',
}) => {
  const [displayCountPosts, setDisplayCountPosts] = useState(3);

  const showMorePosts = () => {
    setDisplayCountPosts(items?.length);
  };
  const showFewerPosts = () => {
    setDisplayCountPosts(3);
  };

  //   #region get all pages from Wix

  const [internalLinks, setInternalLinks] = useState(items || []);

  const { postPages, postPagesFetched } = useAuth();
  console.log('postPages', postPages);
  console.log('internalLinks', internalLinks);
  const findInternalLinksInPostPages = (internalLinks: any[]) => {
    return internalLinks
      ?.map((link) =>
        postPages?.find(
          (postPage) =>
            postPage?.data?.slug === link?.slug &&
            postPage?.data?.title === link?.title
        )
      )
      ?.map((link) => link?.data);
  };

  useEffect(() => {
    if (postPagesFetched && postPages) {
      const fullInternalLinks = findInternalLinksInPostPages(internalLinks);
      console.log('fullInternalLinks', fullInternalLinks);
      fullInternalLinks && setInternalLinks(fullInternalLinks);
    }
  }, [postPagesFetched]);

  return (
    <section className={classNames(style.posts)}>
      <Typography
        tag="h2"
        className={classNames('text-gray-800 w-full my-4', style.title)}
      >
        {title}
      </Typography>
      {items.slice(0, displayCountPosts).map((item, index) => (
        <MiniPagePost
          key={index}
          title={item?.title}
          date={item?._updatedDate?.$date}
          image={item?.postImage1}
          text={item?.postContentRIch1}
          tags={[...(item?.domains ?? []), ...(item?.methods ?? [])]}
        />
      ))}
      {displayCountPosts < items.length && (
        <button onClick={showMorePosts} className="w-full my-4">
          Show All Internal Links({items.length})
        </button>
      )}
      {displayCountPosts >= items.length && (
        <button onClick={showFewerPosts} className="w-full my-4">
          Show fewer Internal Links
        </button>
      )}
    </section>
  );
};

export default MiniPagesListItemPost;
