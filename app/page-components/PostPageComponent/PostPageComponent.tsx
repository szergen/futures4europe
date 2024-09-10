'use client';
import classNames from 'classnames';
import React from 'react';
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
import {
  getCollection,
  getCollectionItemByTitle,
  updateDataItem,
  bulkInsertItems,
} from '@app/wixUtils/client-side';
import { mockedTags } from '../../custom-hooks/SearchContext/SearchContext.utils';

export type PostPageComponentProps = {
  pageTitle: string;
  post: any;
};

function PostPageComponent({ pageTitle, post }: any) {
  post = { ...mockPost(pageTitle), ...post };

  post = {
    ...post,
    pageType: post?.data?.postType,
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
  // console.log('mockedTags', mockedTags);
  // Client calls
  const updateSubtitle = async () => {
    console.log('Update Subtitle', post.dataCollectionId, post._id);
    // const updatedItem = await updateDataItem(post.dataCollectionId, post._id, {
    //   _id: post._id,
    //   subtitle: 'This is a new subtitle',
    // });
    // const collection = await getCollection('PostPages');
    // console.log('Updated Item', collection);
    // Get Collection
    // const collection = await getCollection('PostPages');
    // console.log('Collection', collection);
    // Bulk Insert
    // const pageTypeTags = [
    //   { tagId: 252524, tagType: 'page type', name: 'info', popularity: 184 },
    //   {
    //     tagId: 252525,
    //     tagType: 'page type',
    //     name: 'organisation info',
    //     popularity: 58,
    //   },
    //   {
    //     tagId: 252526,
    //     tagType: 'page type',
    //     name: 'person info',
    //     popularity: 91,
    //   },
    //   {
    //     tagId: 252527,
    //     tagType: 'page type',
    //     name: 'project info',
    //     popularity: 35,
    //   },
    //   { tagId: 252528, tagType: 'page type', name: 'post', popularity: 253 },
    //   {
    //     tagId: 252529,
    //     tagType: 'page type',
    //     name: 'project result',
    //     popularity: 126,
    //   },
    //   { tagId: 252530, tagType: 'page type', name: 'event', popularity: 46 },
    //   {
    //     tagId: 252531,
    //     tagType: 'page type',
    //     name: 'foresight method',
    //     popularity: 8,
    //   },
    // ];
    // const bulkInsert = await bulkInsertItems(
    //   'Tags',
    //   pageTypeTags.map((tag: any) => ({ data: tag }))
    // );
    // console.log('Bulk Insert', bulkInsert);
  };

  return (
    <div className={classNames(style.postContainer)}>
      {/* Test Update */}
      <button onClick={updateSubtitle}> Update Subtitle</button>
      {/* Page Type Tag */}
      <div className={classNames('py-3 justify-start', style.preHeader)}>
        <div>
          <Tag name="Post" popularity={123} />
          <Tag name={post.pageType} popularity={123} />
        </div>
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited {new Date(post.updatedDate['$date']).toLocaleString()}
          </Typography>
        </section>
      </div>
      {/* Post Header */}
      <HeaderComponent post={post} />
      {/* Author */}
      {post.pageType !== 'Project Result' && post.pageType !== 'Event' && (
        <AuthorComponent authors={post.authors} />
      )}
      {/* Project Result Authors */}
      {post.pageType === 'Project Result' && (
        <TagListComponent
          tagList={post.projectAuthors}
          tagListTitle="Authors"
        />
      )}
      {/* Post Content */}
      <ContentComponent
        contentText={post.contentText}
        contentImages={post.contentImages}
      />
      {/* <div>{post.data.postContent}</div> */}
      {/* EVENT SPECIFIC*/}
      {post.pageType === 'Event' && (
        <>
          {/* Speakers */}
          <TagListComponent
            tagList={post.eventSpeakers}
            tagListTitle="Speakers"
          />
        </>
      )}

      {/* Post People */}

      <TagListComponent
        tagList={post.people}
        tagListTitle={post.pageType !== 'Event' ? 'People' : 'Participants'}
      />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={post.foreSightMethods}
        tagListTitle="Foresight Methods"
      />

      {/* Domains */}
      <TagListComponent tagList={post.domains} tagListTitle="Domains" />

      {/* Project */}
      <TagListComponent tagList={post.project} tagListTitle="Project" />
      {/* Organisation */}

      <TagListComponent
        tagList={post.organisation}
        tagListTitle={
          post.pageType !== 'Event' ? 'Organisation' : 'Host Organisations'
        }
      />
      {/* Internal Links */}
      <MiniPagesListComponent
        posts={posts}
        projectResults={projectResults.slice(0, 1)}
        events={events.slice(0, 1)}
      />
      {/* Files */}
      {post.pageType !== 'Project Result' && (
        <FilesComponent files={post.files} />
      )}
      {/* External Links */}
      <ExternalLinksComponent links={post.links} />
    </div>
  );
}

export default PostPageComponent;
