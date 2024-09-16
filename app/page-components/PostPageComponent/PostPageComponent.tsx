'use client';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import style from './PostPageComponent.module.css';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ContentComponent from './components/ContentComponent/ContentComponent';
import TagListComponent from '../shared-page-components/TagListComponent/TagListComponent';
import ExternalLinksComponent from '../shared-page-components/ExternalLinksComponent/ExternalLinksComponent';
import AuthorComponent from './components/AuthorComponent/AuthorComponent';
import FilesComponent from '../shared-page-components/FilesComponent/FilesComponent';
import MiniPagesListComponent from '../shared-page-components/MiniPagesListComponent/MiniPagesListComponent';
import {
  mockPost,
  projectResults,
  events,
  posts,
} from '../../mocks/pagesMocks';
// import { mockedTags } from '../../custom-hooks/SearchContext/SearchContext.utils';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import {
  updateDataItem,
  bulkInsertDataItemReferences,
  replaceDataItemReferences,
} from '@app/wixUtils/client-side';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import { useWixModules } from '@wix/sdk-react';
import { items } from '@wix/data';
// import { extactOwnedPagesIds } from '@app/utils/parse-utils';

export type PostPageComponentProps = {
  pageTitle: string;
  post: any;
};

function PostPageComponent({ pageTitle, post }: any) {
  // Initial mock data
  post = { ...mockPost(pageTitle), ...post };

  // #region useAuth hook for grabbing user details and tags needed for editing
  // state for if the page is owned by the user
  // state for if the edit mode is on
  const { isLoggedIn, userDetails, tags, tagsFetched } = useAuth();
  const { insertDataItemReference } = useWixModules(items);
  // console.log('debug1->tags', tags);
  const [isPageOwnedByUser, setIsPageOwnedByUser] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useState(false);

  // check if the page is owned by the user
  useEffect(() => {
    if (!isLoggedIn) return;
    const userDetailsIds = [userDetails.contactId, userDetails.accountId];
    userDetailsIds.find((id) => {
      if (post.data._owner === id) {
        setIsPageOwnedByUser(true);
      }
    });
  }, [isLoggedIn]);
  // Overwrite with Wix Data
  post = {
    ...post,
    pageType: post?.data?.pageTypes[0],
    subtitle: post?.data?.subtitle,
    updatedDate: post?.data?._updatedDate,
    countryTag: post?.data?.countryTag[0],
    recommendations: {
      number: post?.data?.recomendations,
    },
    authors: post?.data?.author,
    contentText: [
      post?.data?.postContentRIch1,
      post?.data?.postContentRIch2,
      post?.data?.postContentRIch3,
      post?.data?.postContentRIch4,
      post?.data?.postContentRIch5,
      post?.data?.postContentRIch6,
      post?.data?.postContentRIch7,
      post?.data?.postContentRIch8,
      post?.data?.postContentRIch9,
      post?.data?.postContentRIch10,
    ],
    contentImages: [
      post?.data?.postImage1,
      post?.data?.postImage2,
      post?.data?.postImage3,
      post?.data?.postImage4,
      post?.data?.postImage5,
      post?.data?.postImage6,
      post?.data?.postImage7,
      post?.data?.postImage8,
      post?.data?.postImage9,
      post?.data?.postImage10,
    ],
    projectAuthors: post?.data?.projectResultAuthor,
    people: post?.data?.people,
    foreSightMethods: post?.data?.methods,
    domains: post?.data?.domains,
    project: post?.data?.projects,
    organisation: post?.data?.organisations,
    eventSpeakers: post?.data?.speakers,
    eventRegistration: post?.data?.eventRegistration,
    eventDate: {
      start: post?.data?.eventStartDate?.['$date'],
      end: post?.data?.eventEndDate?.['$date'],
    },
  };
  console.log('debug1-post', post);
  // set default post data and data for editing
  const [defaultPostData, setDefaultPostData] = useState(post);
  const [postData, setPostData] = useState(post);

  // Method for updating post data
  const updatePostData = (newData: any) => {
    setPostData((prevData: any) => ({ ...prevData, ...newData }));
  };
  const updatePostDataBasedOnKeyValue = (key: string, value: any) => {
    setPostData((prevData: any) => ({
      ...prevData,
      [key]: value,
    }));
  };

  // Method for updating data to server
  const updateDataToServer = async () => {
    console.log('Updating Page from', postData.dataCollectionId, postData._id);

    // Update Subtitle
    if (postData.subtitle !== defaultPostData.subtitle) {
      const updatedItem = await updateDataItem(
        postData.dataCollectionId,
        postData._id,
        {
          _id: postData._id,
          ...postData.data,
          subtitle: postData?.subtitle,
          postContentRIch1: postData?.contentText[0],
          postContentRIch2: postData?.contentText[1],
          postContentRIch3: postData?.contentText[2],
          postContentRIch4: postData?.contentText[3],
          postContentRIch5: postData?.contentText[4],
          postContentRIch6: postData?.contentText[5],
          postContentRIch7: postData?.contentText[6],
          postContentRIch8: postData?.contentText[7],
          postContentRIch9: postData?.contentText[8],
          postContentRIch10: postData?.contentText[9],

          // pageTypes: postData?.pageType,
        }
      );
      console.log('updatedItem', updatedItem);
    }
    // Update Page Type
    if (postData.pageType?._id !== defaultPostData.pageType?._id) {
      const updatedPageTypes = await replaceDataItemReferences(
        'PostPages',
        [postData.pageType?._id],
        'pageTypes',
        postData._id
      );
      console.log('updatedPageTypes', updatedPageTypes);
    }
    // Update Country Tag
    if (postData.countryTag?._id !== defaultPostData.countryTag?._id) {
      const updatedCountryTag = await replaceDataItemReferences(
        'PostPages',
        [postData.countryTag?._id],
        'countryTag',
        postData._id
      );
      console.log('updatedCountryTag', updatedCountryTag);
    }
  };

  // #endregion

  return (
    <div className={classNames(style.postContainer)}>
      {/* Test Update */}
      {isPageOwnedByUser && (
        <div>
          <button
            onClick={() => {
              isEditModeOn && updateDataToServer();
              setIsEditModeOn(!isEditModeOn);
              setDefaultPostData(postData);
            }}
            className="px-2 py-2 rounded-md text-white bg-blue-600 w-40 mr-2"
          >
            {!isEditModeOn ? 'Edit Page' : 'Save Changes'}
          </button>
          {isEditModeOn && (
            <button
              onClick={() => {
                setPostData(defaultPostData);
                setIsEditModeOn(!isEditModeOn);
              }}
              className="px-2 py-2 rounded-md text-white bg-green-600 w-40"
            >
              Discard Changes
            </button>
          )}
        </div>
      )}
      {/* Page Type Tag */}
      <div className={classNames('py-3 justify-start', style.preHeader)}>
        <div>
          {!isEditModeOn ? (
            <>{postData.pageType && <Tag {...postData.pageType} />}</>
          ) : (
            <TagPicker
              tags={tags?.filter(
                (tag) =>
                  tag?.tagType === 'page type' && !tag?.name?.includes('info')
              )}
              className="w-80"
              selectedValue={postData.pageType?.name}
              updatePostData={(value) =>
                updatePostDataBasedOnKeyValue('pageType', value)
              }
            />
          )}
        </div>
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited {new Date(postData.updatedDate['$date']).toLocaleString()}
          </Typography>
        </section>
      </div>
      {/* Post Header */}
      <HeaderComponent
        post={postData}
        isEditModeOn={isEditModeOn}
        updatePostData={updatePostData}
        updatePostDataBasedOnKeyValue={updatePostDataBasedOnKeyValue}
        tags={tags}
      />
      {/* Author */}
      {postData.pageType?.name.toLowerCase() !== 'project result' &&
        postData.pageType?.name.toLowerCase() !== 'event' && (
          <AuthorComponent authors={postData.authors} />
        )}
      {/* Project Result Authors */}
      {postData.pageType?.name.toLowerCase() === 'project result' && (
        <TagListComponent
          tagList={postData.projectAuthors}
          tagListTitle="Authors"
        />
      )}
      {/* Post Content */}
      <ContentComponent
        contentText={postData.contentText}
        contentImages={postData.contentImages}
        isEditModeOn={isEditModeOn}
        updatePostData={(value, index) => {
          const newContentText = [...postData.contentText];
          newContentText[index] = value;
          return updatePostData({ contentText: newContentText });
        }}
      />
      {/* <div>{post.data.postContent}</div> */}
      {/* EVENT SPECIFIC*/}
      {postData?.pageType?.name?.toLowerCase() === 'event' && (
        <>
          {/* Speakers */}
          <TagListComponent
            tagList={postData.eventSpeakers}
            tagListTitle="Speakers"
          />
        </>
      )}

      {/* Post People */}

      <TagListComponent
        tagList={postData.people}
        tagListTitle={
          postData?.pageType?.name?.toLowerCase() !== 'event'
            ? 'People'
            : 'Participants'
        }
      />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={postData.foreSightMethods}
        tagListTitle="Foresight Methods"
      />

      {/* Domains */}
      <TagListComponent tagList={postData.domains} tagListTitle="Domains" />

      {/* Project */}
      <TagListComponent tagList={postData.project} tagListTitle="Project" />
      {/* Organisation */}

      <TagListComponent
        tagList={postData.organisation}
        tagListTitle={
          postData?.pageType?.name?.toLowerCase() !== 'event'
            ? 'Organisation'
            : 'Host Organisations'
        }
      />
      {/* Internal Links */}
      <MiniPagesListComponent
        posts={posts}
        projectResults={projectResults.slice(0, 1)}
        events={events.slice(0, 1)}
      />
      {/* Files */}
      {postData?.pageType?.name?.toLowerCase() !== 'project result' && (
        <FilesComponent files={postData.files} />
      )}
      {/* External Links */}
      <ExternalLinksComponent links={postData.links} />
    </div>
  );
}

export default PostPageComponent;
