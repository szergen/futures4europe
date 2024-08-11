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

export type PostPageComponentProps = {
  pageTitle: string;
  post?: {
    title: string;
    pageType: 'Post' | 'Project Result' | 'Event';
    subtitle: string;
    countryTag: {
      tagText: string;
      tagCounter: number;
    };
    recommendations: {
      number: number;
      images: string[];
    };
    views: number;
    author: {
      name: string;
      thumbnail: string;
      href: string;
    };
    foresightMethods: Array<TagProps>;
    domains: Array<TagProps>;
    links: Array<{
      href: string;
      description: string;
    }>;
  };
};

function PostPageComponent({ pageTitle, post }: any) {
  post = post || mockPost(pageTitle);

  return (
    <div className={classNames(style.postContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag tagText="Post" tagCounter={123} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
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
      <ContentComponent />

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
      <TagListComponent tagList={post.people} tagListTitle="People" />

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
