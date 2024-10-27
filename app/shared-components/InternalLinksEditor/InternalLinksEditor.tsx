import { Label, TextInput } from 'flowbite-react';
import { useEffect, useState } from 'react';
import InputText from '../InputText/InputText';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import Typography from '../Typography/Typography';
import classNames from 'classnames';
import style from './InternalLinksEditor.module.css';
import MiniPagePost from '../MiniPagePost/MiniPagePost';
import { getPropsForMiniPagesListItemPost } from '@app/page-components/shared-page-components/MiniPagesListComponentPost/components/MiniPagesListItemPost/MiniPagesListItemPost.utils';

export type InternalLinksEditorProps = {
  internalLinks?: any[];
  handleUpdatePostData?: (data: any) => void;
};

export const InternalLinksEditor: React.FC<InternalLinksEditorProps> = ({
  internalLinks: initialInternalLinks,
  handleUpdatePostData,
}) => {
  const [internalLinks, setInternalLinks] = useState(
    initialInternalLinks || []
  );

  //   #region get all pages from Wix
  const { postPages, postPagesFetched } = useAuth();
  //   console.log('postPages', postPages);
  //   console.log('internalLinks', internalLinks);
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

  //   #endregion
  // #region extractedValidPaths
  //   const getURLFromName = (name: string) => name.replace(/ /g, '_');

  const extractedValidPaths = postPages?.map(
    (link) => '/post/' + link.data.slug
  );
  console.log('extractedValidPaths', extractedValidPaths);
  //   #endregion

  //   #region add new link
  const [newLink, setNewLink] = useState('');
  const [error, setError] = useState('');

  const handleAddLink = (e: React.FormEvent) => {
    e.preventDefault();

    if (newLink.trim()) {
      if (extractedValidPaths.includes(newLink)) {
        const pageFound = postPages.find(
          (postPage) => '/post/' + postPage?.data?.slug === newLink
        )?.data;
        console.log('pageFound', pageFound);
        setInternalLinks([...internalLinks, pageFound]);
        handleUpdatePostData &&
          handleUpdatePostData([...internalLinks, pageFound]);
        setNewLink('');
        setError('');
      } else {
        setError('The link does not exist');
      }
    } else {
      setError('The link cannot be empty.');
    }
  };
  //   #endregion

  if (!postPagesFetched) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full">
      <Typography
        tag="h2"
        className={classNames('text-gray-800 w-full my-4', style.tagListTitle)}
      >
        Internal Links
      </Typography>
      {/* Input field and submit button */}
      <form className="relative" onSubmit={handleAddLink}>
        <input
          type="text"
          value={newLink}
          onChange={(e) => setNewLink(e.target.value)}
          placeholder="Paste a link to a related post on this site"
          className={classNames(
            'text-gray-400 w-full',
            style.InternalLinksEditor_input
          )}
        />
        <button
          type="submit"
          className={classNames('', style.InternalLinksEditor_button)}
        >
          Add Link
        </button>
      </form>
      {/* Error message */}
      {error && <div className="text-red-500 mt-2">{error}</div>}

      {/* List of internal links */}
      <div>
        {internalLinks?.map((link, index) => (
          <div className="relative" key={link.title}>
            <MiniPagePost
              key={index}
              {...getPropsForMiniPagesListItemPost(link)}
            />
            <button
              onClick={() =>
                setInternalLinks(internalLinks.filter((_, i) => i !== index))
              }
              className="bg-red-500 text-white p-2 absolute -right-32 top-0"
            >
              Remove Link
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InternalLinksEditor;
