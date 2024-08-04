'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import style from './PersonPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import LinkComponent from '@app/shared-components/LinkComponent/LinkComponent';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
import MiniPageEvents from '@app/shared-components/MiniPageEvents/MiniPageEvents';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PersonDescriptionComponent from './components/PersonDescriptionComponent/PersonDescriptionComponent';
import AffiliationsComponent from './components/CurrentAffiliationsComponent/AffiliationsComponent';
import TagListComponent from './components/TagListComponent/TagListComponent';
import FilesComponent from './components/FilesComponent/FilesComponent';
import ExternalLinksComponent from './components/ExternalLinksComponent/ExternalLinksComponent';

function PersonPageComponent({ pageTitle, person }: any) {
  const mockPerson = {
    title: pageTitle,
    image: 'https://picsum.photos/id/155/147/147',
    personPopularity: 253,
    linkedinLink: 'https://facebook.com',
    researchGateLink: 'https://linkedin.com',
    orcidIDLink: 'https://orcid.com',
    pageType: 'Person Info',
    postType: 'Person',
    publishedDate: '2021-10-09',
    description:
      'Eva Pericolini graduated in Pharmacy in 2003 at the University of Perugia and obtained a Ph.D. in “Molecular pathogenesis, immunology and control of transmitting agents causing the principle diseases associated with poverty: malaria, AIDS and tuberculosis” in 2010 at the University of Perugia, Department of Experimental Medicine.',
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
    projectsCoordindation: [
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: 'Coordinator',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
    ],
    projectsParticipation: [
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: 'Coordinator',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
      {
        tagText: 'Project H2020',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/project/H2020',
        arole: '',
      },
    ],
    currentAfiliations: [
      {
        tagText: 'ISINOVA',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Foresight, Strategy and Innovation',
      },
      {
        tagText: 'UEFISCDI',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Quantum Computing',
      },
    ],
    formerAfiliations: [
      {
        tagText: 'ISINOVA',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/155/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Foresight, Strategy and Innovation',
      },
      {
        tagText: 'UEFISCDI',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/145/147/147',
        href: '/organisation/ISINOVA',
        arole: 'Professor of Quantum Computing',
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
  };
  person = person || mockPerson;

  const posts = [
    {
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/193/30/30',
        ],
      },
    },
    {
      title: 'With Big Tech comes Big (Ethical) Responsibility',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/191/180/180',
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation ',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 5,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
          'https://picsum.photos/id/195/30/30',
          'https://picsum.photos/id/196/30/30',
        ],
      },
    },
    {
      title:
        'Prevention and treatment of autoimmune diseases with plant virus nanoparticles',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/194/180/180',
      text: 'Paulo Carvalho has been working in the field of futures',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
        { tagText: 'Emerging technologies', tagCounter: 253 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/199/180/180',
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
  ];

  const projectResults = [
    {
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      title: 'Project Title',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/201/180/180',
      project: {
        tagText: 'Project Tag',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/127/500/500',
      },
      text: 'Project description goes here',
      tags: [
        { tagText: 'Tag 1', tagCounter: 253 },
        { tagText: 'Tag 2', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
  ];
  const events = [
    {
      role: 'Speaker',
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      role: 'Participant',
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      role: 'Speaker',
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      role: 'Speaker',
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
    {
      role: 'Speaker',
      title: 'ORION: Meet Your Co-Pilot in Horizon Scanning',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/193/180/180',
      project: {
        tagText: 'ORION',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/125/500/500',
      },
      text: 'Paulo Carvalho has been working in the field of futures and foresight for more than 25 years. On one hand, he is a professor in foresight, strategy and innovation at the Faculty of Economics and Management at the University of Lisbon.',
      tags: [
        { tagText: 'Emerging technologies', tagCounter: 253 },
        { tagText: 'EU&RI policy', tagCounter: 153 },
      ],
      recommendations: {
        number: 3,
        images: [
          'https://picsum.photos/id/192/30/30',
          'https://picsum.photos/id/190/30/30',
          'https://picsum.photos/id/191/30/30',
        ],
      },
    },
  ];

  const [displayCountPosts, setDisplayCountPosts] = useState(3);
  const [displayCountProjectResults, setDisplayCountProjectResults] =
    useState(3);
  const [displayCountEvents, setDisplayCountEvents] = useState(3);

  const showMorePosts = () => {
    setDisplayCountPosts(posts.length);
  };
  const showFewerPosts = () => {
    setDisplayCountPosts(3);
  };
  const showMoreProjectResults = () => {
    setDisplayCountProjectResults(projectResults.length);
  };
  const showFewerProjectResults = () => {
    setDisplayCountProjectResults(3);
  };
  const showMoreEvents = () => {
    setDisplayCountEvents(events.length);
  };
  const showFewerEvents = () => {
    setDisplayCountEvents(3);
  };

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag tagText="Person Info" tagCounter={123} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Person Header */}
      <HeaderComponent post={person} />
      {/* Person Description */}
      <PersonDescriptionComponent description={person.description} />

      {/* Person Workplace/Current Affiliations*/}
      <AffiliationsComponent afiliations={person.currentAfiliations} current />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={person.foreSightMethods}
        tagListTitle="Foresight Methods"
      />
      {/* Domains */}
      <TagListComponent tagList={person.domains} tagListTitle="Domains" />
      {/* Projects Coordination */}
      <TagListComponent
        tagList={person.projectsCoordindation}
        tagListTitle="Project Coordination"
      />
      {/* Projects Participation */}
      <TagListComponent
        tagList={person.projectsParticipation}
        tagListTitle="Project Participation"
      />
      {/* Posts */}
      <section className={classNames(style.posts)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Posts
        </Typography>
        {posts.slice(0, displayCountPosts).map((post, index) => (
          <MiniPagePost key={index} {...post} />
        ))}
        {displayCountPosts < posts.length && (
          <button onClick={showMorePosts} className="w-full my-4">
            Show All Posts({posts.length})
          </button>
        )}
        {displayCountPosts >= posts.length && (
          <button onClick={showFewerPosts} className="w-full my-4">
            Show fewer Posts
          </button>
        )}
      </section>
      {/* Project Results */}
      <section className={classNames(style.projectResults)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Project Results
        </Typography>
        {projectResults
          .slice(0, displayCountProjectResults)
          .map((post, index) => (
            <MiniPageProjectResults key={index} {...post} />
          ))}
        {displayCountProjectResults < projectResults.length && (
          <button onClick={showMoreProjectResults} className="w-full my-4">
            Show All Project Results({projectResults.length})
          </button>
        )}
        {displayCountProjectResults >= projectResults.length && (
          <button onClick={showFewerProjectResults} className="w-full my-4">
            Show fewer Project Results
          </button>
        )}
      </section>
      {/* Events */}
      <section className={classNames(style.events)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Events
        </Typography>
        {events.slice(0, displayCountEvents).map((post, index) => (
          <MiniPageEvents key={index} {...post} />
        ))}
        {displayCountEvents < events.length && (
          <button onClick={showMoreEvents} className="w-full my-4">
            Show All Events({events.length})
          </button>
        )}
        {displayCountEvents >= events.length && (
          <button onClick={showFewerEvents} className="w-full my-4">
            Show fewer Events
          </button>
        )}
      </section>
      {/* Former Affiliations */}
      <section className={classNames(style.affiliations)}>
        <AffiliationsComponent afiliations={person.formerAfiliations} />
      </section>
      {/* Files */}
      <FilesComponent files={person.files} />
      {/* External Links */}
      <ExternalLinksComponent links={person.links} />
    </div>
  );
}

export default PersonPageComponent;
