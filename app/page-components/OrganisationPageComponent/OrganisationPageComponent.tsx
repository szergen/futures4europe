'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import style from './OrganisationPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
import MiniPageEvents from '@app/shared-components/MiniPageEvents/MiniPageEvents';
import LinkComponent from '@app/shared-components/LinkComponent/LinkComponent';

function OrganisationPageComponent({ pageTitle }: any) {
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
        <Tag tagText="Organisation info" tagCounter={123} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Organisation Header */}
      <div className={classNames(style.personHeader)}>
        <div className={style.imageAndSocialColumn}>
          <Image
            src="https://picsum.photos/id/122/147/147"
            width={147}
            height={147}
            className={classNames('rounded-full')}
            alt="User Avatar - Eva Pericolini"
          />
          {/* Social Icons */}
          <div className={style.socialIcons}>
            {/* Linkedin */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" rounded-full"
              fill="currentColor"
              width={32}
              height={32}
              style={{
                color: '#fff',
                backgroundColor: '#0077b5',
                padding: '5px',
              }}
              viewBox="0 -7 23 40"
            >
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
            </svg>
            {/* Link */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 rounded-full p-1"
              style={{ backgroundColor: '#9d8fdf', color: 'white' }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </div>
          {/* Views */}
          <Typography
            data-after="2153"
            tag="p"
            className="text-sm text-gray-800 my-3 after:content-[attr(data-after)]]"
          >
            2153 views
          </Typography>
        </div>
        <div className={style.detailsColumn}>
          {/* Organisation Info Name */}
          <Typography tag="h1" className=" text-gray-800">
            {pageTitle.replace('_', ' ').replace('_', ' ')}
            {/* Organisation Popularity */}
            <span
              data-after="320"
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
          {/* Organisation Tagline */}
          <Typography tag="h3" className="text-gray-800 italic">
            Sail away from the safe harbor - Catch the trade winds in your sails
          </Typography>
          {/* Founded */}
          <div className="flex items-center mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
              />
            </svg>
            <Typography
              tag="span"
              className="text-gray-800 italic text-xs ml-2"
            >
              Founded in 1479
            </Typography>
          </div>
          {/* Organisation domains */}
          <div className={'mt-3'}>
            <Tag tagText="Journalist" tagCounter={253} />
            <Tag tagText="Foresight Expert" tagCounter={153} />
          </div>
          {/* Organisation Country */}
          <Tag tagText="Romania" tagCounter={253} />
        </div>
      </div>
      {/* Organisation Description */}
      <section
        className={classNames('text-gray-500 text-sm', style.personDescription)}
      >
        Driven by intellectual creativity and critical thinking since 1479,
        researchers and students at the University of Copenhagen have expanded
        horizons and contributed to moving the world forward. With its 5,000
        researchers and 37,500 students, the University boasts an international
        research and study environment and is highly ranked among the world's
        best universities.
      </section>

      {/* Foresight Methods */}
      <section className={classNames(style.foresight)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Foresight Methods
        </Typography>
        <Tag tagText="Horizon Scanning" tagCounter={253} />
        <Tag
          tagText="Delphi"
          tagCounter={153}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/185/500/500"
          thumbnailAlt="Portugal’s path forward: Key insights from recent foresight publications"
        />
      </section>
      {/* Domains */}
      <section className={classNames(style.domains)}>
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full my-4', style.domainTitle)}
        >
          Domains
        </Typography>
        <Tag tagText="Biology" tagCounter={253} />
        <Tag tagText="Infectious Diseases" tagCounter={153} />
        <Tag tagText="Imune Response" tagCounter={73} />
        <Tag tagText="Innate Immunity" tagCounter={55} />
        <Tag tagText="Cell Culture" tagCounter={45} />
        <Tag tagText="T Cells" tagCounter={23} />
        <Tag tagText="Biology" tagCounter={253} />
        <Tag tagText="Infectious Diseases" tagCounter={153} />
        <Tag tagText="Imune Response" tagCounter={73} />
        <Tag tagText="Innate Immunity" tagCounter={55} />
      </section>
      {/* Projects */}
      <section className={classNames(style.projects)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.projectsTitle
          )}
        >
          Projects
        </Typography>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Futures GARDEN"
            tagCounter={8}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/122/500/500"
          />
          <span className="pl-5">Coordinator</span>
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Mutual Learning Exercise (MLE)"
            tagCounter={45}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/121/500/500"
          />
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Veltha DIGIPRIME"
            tagCounter={2}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/120/500/500"
          />
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Google ML Research"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/119/500/500"
          />
        </div>
      </section>
      {/* People */}
      <section className={classNames(style.projects)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.projectsTitle
          )}
        >
          People
        </Typography>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Futures GARDEN"
            tagCounter={8}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/122/500/500"
          />
          <span className="pl-5">Coordinator</span>
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Mutual Learning Exercise (MLE)"
            tagCounter={45}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/121/500/500"
          />
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Veltha DIGIPRIME"
            tagCounter={2}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/120/500/500"
          />
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Google ML Research"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/119/500/500"
          />
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Google ML Research"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/119/500/500"
          />
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Google ML Research"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/119/500/500"
          />
        </div>
        <div className={classNames(style.projectsItem)}>
          <Tag
            tagText="Google ML Research"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/119/500/500"
          />
        </div>
      </section>
      {/* Member of */}
      <section className={classNames(style.foresight)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Member of
        </Typography>
        <Tag tagText="Horizon Scanning" tagCounter={253} />
        <Tag
          tagText="Delphi"
          tagCounter={153}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/185/500/500"
          thumbnailAlt="Portugal’s path forward: Key insights from recent foresight publications"
        />
      </section>
      {/* Member organisations */}
      <section className={classNames(style.foresight)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Member organisations
        </Typography>
        <Tag tagText="Horizon Scanning" tagCounter={253} />
        <Tag
          tagText="Delphi"
          tagCounter={153}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/185/500/500"
          thumbnailAlt="Portugal’s path forward: Key insights from recent foresight publications"
        />
      </section>
      {/* External Links */}
      <section className={classNames(style.externalLinks)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.externalLinksTitle
          )}
        >
          External Links
        </Typography>
        <LinkComponent
          href="https://google.com"
          description="Anticipation and monitoring of emerging technologies and disruptive
          innovation"
        />
        <LinkComponent
          href="https://google.com"
          description="An Interview of transforming Innovation Ecosystems Towards
          Sustainability"
        />
        <LinkComponent
          href="https://google.com"
          description=" NEXT conference overview"
        />
      </section>
    </div>
  );
}

export default OrganisationPageComponent;
