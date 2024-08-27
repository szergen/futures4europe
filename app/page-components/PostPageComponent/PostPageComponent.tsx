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
  getCollectionItem,
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
  console.log('Post Page', post);
  post.pageType = post?.data?.postType;
  post.subtitle = post?.data?.subtitle;
  // console.log('mockedTags', mockedTags);
  // Update Subtitle
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
    const pageTypeTags = [
      { tagId: 252524, tagType: 'page type', name: 'info', popularity: 184 },
      {
        tagId: 252525,
        tagType: 'page type',
        name: 'organisation info',
        popularity: 58,
      },
      {
        tagId: 252526,
        tagType: 'page type',
        name: 'person info',
        popularity: 91,
      },
      {
        tagId: 252527,
        tagType: 'page type',
        name: 'project info',
        popularity: 35,
      },
      { tagId: 252528, tagType: 'page type', name: 'post', popularity: 253 },
      {
        tagId: 252529,
        tagType: 'page type',
        name: 'project result',
        popularity: 126,
      },
      { tagId: 252530, tagType: 'page type', name: 'event', popularity: 46 },
      {
        tagId: 252531,
        tagType: 'page type',
        name: 'foresight method',
        popularity: 8,
      },
    ];
    const bulkInsert = await bulkInsertItems(
      'Tags',
      pageTypeTags.map((tag: any) => ({ data: tag }))
    );
    console.log('Bulk Insert', bulkInsert);
  };

  return (
    <div className={classNames(style.postContainer)}>
      {/* Test Update */}
      <button onClick={updateSubtitle}> Update Subtitle</button>
      {/* Page Type Tag */}
      <div className={classNames('py-3 justify-start', style.preHeader)}>
        <div>
          <Tag tagText="Post" tagCounter={123} />
          <Tag tagText={post.pageType} tagCounter={123} />
        </div>
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited {new Date(post.data._updatedDate['$date']).toLocaleString()}
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
      <ContentComponent content={post.data.postContentRIch} />
      {/* <div>{post.data.postContent}</div> */}
      {/* EVENT SPECIFIC*/}
      {post.pageType === 'Event' && (
        <>
          {/* Event Host Organisations */}
          <TagListComponent
            tagList={post.eventHostOrganisations}
            tagListTitle="Host Organisations"
          />
          {/* Speakers */}
          <TagListComponent
            tagList={post.eventSpeakers}
            tagListTitle="Speakers"
          />
          {/* Participants */}
          <TagListComponent
            tagList={post.participants}
            tagListTitle="Participants"
          />
        </>
      )}

      {/* Post People */}
      {post.pageType !== 'Event' && (
        <TagListComponent tagList={post.people} tagListTitle="People" />
      )}

      {/* Foresight Methods */}
      <TagListComponent
        tagList={post.foreSightMethods}
        tagListTitle="Foresight Methods"
      />

      {/* Domains */}
      <TagListComponent tagList={post.domains} tagListTitle="Domains" />

      {/* Project */}
      <TagListComponent tagList={[post.project]} tagListTitle="Project" />
      {/* Organisation */}
      {post.pageType !== 'Event' && (
        <TagListComponent
          tagList={[post.organisation]}
          tagListTitle="Organisation"
        />
      )}
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
