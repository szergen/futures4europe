'use client';
import classNames from 'classnames';
import React from 'react';
import style from './PostPageComponent.module.css';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import ContentComponent from './components/ContentComponent/ContentComponent';
import TagListComponent from './components/TagListComponent/TagListComponent';
import ExternalLinksComponent from './components/ExternalLinksComponent/ExternalLinksComponent';
import { start } from 'repl';
import AuthorComponent from './components/AuthorComponent/AuthorComponent';
import { format } from 'path';
import FilesComponent from './components/FilesComponent/FilesComponent';

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
  const mockPost = {
    title: pageTitle,
    pageType: 'Post',
    postType: 'Editorial',
    eventDate: {
      start: '2021-10-10',
      end: '2021-10-12',
    },
    registrationLink:
      'https://futures-garden-human-perception-identity.eventbrite.de',
    postDate: '2021-10-09',
    subtitle:
      'Deep-Learning and HPC to Boost Biomedical Applications for Health',
    countryTag: {
      tagText: 'Italy',
      tagCounter: 253,
    },
    recommendations: {
      number: 3,
      images: [
        'https://picsum.photos/id/192/30/30',
        'https://picsum.photos/id/190/30/30',
        'https://picsum.photos/id/193/30/30',
      ],
    },
    views: 320,
    authors: [
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    project: {
      tagText: 'Project H2020',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/155/147/147',
      href: '/project/H2020',
    },
    organisation: {
      tagText: 'ISINOVA',
      tagCounter: 253,
      thumbnail: 'https://picsum.photos/id/155/147/147',
      href: '/organisation/ISINOVA',
    },
    eventSpeakers: [
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        tagText: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    foreSightMethods: [
      {
        tagText: 'Horizon Scanning',
        tagCounter: 253,
      },
      {
        tagText: 'Delphi Method',
        tagCounter: 153,
        href: 'https://google.com',
        thumbnail: 'https://picsum.photos/id/185/300/300',
      },
    ],
    domains: [
      {
        tagText: 'Biology',
        tagCounter: 253,
      },
      {
        tagText: 'Infectious Diseases',
        tagCounter: 153,
      },
      {
        tagText: 'Imune Response',
        tagCounter: 73,
      },
      {
        tagText: 'Innate Immunity',
        tagCounter: 55,
      },
      {
        tagText: 'Cell Culture',
        tagCounter: 45,
      },
      {
        tagText: 'T Cells',
        tagCounter: 23,
      },
    ],
    files: [
      {
        href: '/files/1.pdf',
        title: 'Styleguide',
        fileSize: '2.3 MB',
        format: 'PDF',
      },
      {
        href: '/files/2.pdf',
        title: 'Description',
        fileSize: '2.1 MB',
        format: 'PDF',
      },
    ],
    projectResultFile: {
      href: 'https://framerusercontent.com/images/F46jYRatmGwgDHnyDPIaUs1us.png?scale-down-to=1024',
      title: 'Project Result Guide',
      fileSize: '2.5 MB',
      format: 'PDF',
    },
    links: [
      {
        href: 'https://google.com',
        description:
          'Anticipation and monitoring of emerging technologies and disruptive innovation',
      },
      {
        href: 'https://google.com',
        description:
          'An Interview of transforming Innovation Ecosystems Towards Sustainability',
      },
      {
        href: 'https://google.com',
        description: ' NEXT conference overview',
      },
    ],
    speakers: [
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
      {
        name: 'Eva Pericolini',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/person/Eva_Pericolini',
      },
    ],
    eventHostOrganisations: [
      {
        tagText: 'European Commission',
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/European_Commission',
      },
      {
        tagText: 'French National Centre for Scientific Research',
        thumbnail: 'https://picsum.photos/id/154/147/147',
        href: '/organisation/European_Commission',
      },
      {
        tagText: 'ISINOVA',
        thumbnail: 'https://picsum.photos/id/153/147/147',
        href: '/organisation/European_Commission',
      },
    ],
  };
  post = post || mockPost;

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
      <AuthorComponent authors={post.authors} />

      {/* Post Content */}
      <ContentComponent />
      {/* Event Project */}
      <TagListComponent tagList={[post.project]} tagListTitle="Project" />
      {/* Organisation */}
      {post.pageType !== 'Event' && (
        <TagListComponent
          tagList={[post.organisation]}
          tagListTitle="Organisation"
        />
      )}
      {/* EVENT SPECIFIC START*/}
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
        </>
      )}

      {/* Foresight Methods */}
      <TagListComponent
        tagList={post.foreSightMethods}
        tagListTitle="Foresight Methods"
      />

      {/* Domains */}
      <TagListComponent tagList={post.domains} tagListTitle="Domains" />
      {/* Files */}
      <FilesComponent files={post.files} />
      {/* External Links */}
      <ExternalLinksComponent links={post.links} />
    </div>
  );
}

export default PostPageComponent;
