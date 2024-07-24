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

function PersonPageComponent({ pageTitle }: any) {
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
      <div className={classNames(style.personHeader)}>
        <div className={style.imageAndSocialColumn}>
          <Image
            src="https://picsum.photos/id/155/147/147"
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
            {/* Research Gate */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32px"
              height="32px"
              version="1.1"
              style={{
                shapeRendering: 'geometricPrecision',
                textRendering: 'geometricPrecision',
                fillRule: 'evenodd',
                clipRule: 'evenodd',
              }}
              viewBox="0 0 32 32"
            >
              <g id="Capa_x0020_1">
                <metadata id="CorelCorpID_0Corel-Layer" />
                <path
                  style={{ fill: '#04D4AC', fillRule: 'nonzero' }}
                  d="M32.04 15.97c0,8.85 -7.18,16.03 -16.02,16.03 -8.85,0 -16.02,-7.18 -16.02,-16.03 0,-8.85 7.17,-16.03 16.02,-16.03 8.84,0 16.02,7.18 16.02,16.03zm-14.79 7c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22z"
                />
                <path
                  style={{ fill: 'white', fillRule: 'nonzero' }}
                  d="M17.25 22.97c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22zm0 0z"
                />
              </g>
            </svg>
            {/* Orcid */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              id="Layer_1"
              x="0px"
              y="0px"
              width="32px"
              height="32px"
              viewBox="0 0 256 256"
            >
              <path
                style={{
                  fill: '#A6CE39',
                }}
                d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"
              />
              <g>
                <path
                  style={{ fill: '#FFF' }}
                  d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z"
                />
                <path
                  style={{ fill: '#FFF' }}
                  d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5   c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"
                />
                <path d="M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1   C84.2,46.7,88.7,51.3,88.7,56.8z" />
              </g>
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
          {/* Person Info Name */}
          <Typography tag="h1" className=" text-gray-800">
            {pageTitle.replace('_', ' ').replace('_', ' ')}
            {/* Person Popularity */}
            <span
              data-after="320"
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
          {/* Person Tagline */}
          <Typography tag="h3" className="text-gray-800 italic">
            Sail away from the safe harbor - Catch the trade winds in your sails
          </Typography>
          {/* Person domains */}
          <div className={style.domains}>
            <Tag tagText="Journalist" tagCounter={253} />
            <Tag tagText="Foresight Expert" tagCounter={153} />
          </div>
          {/* Person Country */}
          <Tag tagText="Italy" tagCounter={253} />
        </div>
      </div>
      {/* Person Description */}
      <section
        className={classNames('text-gray-500 text-sm', style.personDescription)}
      >
        Eva Pericolini graduated in Pharmacy in 2003 at the University of
        Perugia and obtained a Ph.D. in “Molecular pathogenesis, immunology and
        control of transmitting agents causing the principle diseases associated
        with poverty: malaria, AIDS and tuberculosis” in 2010 at the University
        of Perugia, Department of Experimental Medicine.
      </section>

      {/* Person Workplace*/}
      <section className={style.personWorkplace}>
        <div className={classNames(style.personWorkplaceItem)}>
          <Tag
            tagText="University of Perugia"
            tagCounter={253}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/125/500/500"
          />
          <span className="pl-5">Associate Proffessor</span>
          <span className="pl-1">since 2020</span>
        </div>
        <div className={classNames(style.personWorkplaceItem)}>
          <Tag
            tagText="Department of Experimental Medicine"
            tagCounter={153}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/126/500/500"
          />
          <span className="pl-5">Researcher</span>
          <span className="pl-1">since 2021</span>
        </div>
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
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.affiliationsTitle
          )}
        >
          Former Affiliations
        </Typography>
        <div className={style.affiliationsContent}>
          <div className={style.affiliationsItem}>
            <Tag
              tagText="ISINNOVA"
              thumbnail="https://picsum.photos/id/25/500/500"
              tagCounter={253}
            />
            <Typography tag="p" className="text-gray-500 px-4">
              Doctor of Medicine (MD) 2020-2023
            </Typography>
          </div>
          <div className={style.affiliationsItem}>
            <Tag
              tagText="Strategic Foresight & Trendforschung"
              tagCounter={253}
              thumbnail="https://picsum.photos/id/125/500/500"
            />
            <Typography tag="p" className="text-gray-500 px-4">
              Associate Proffessor
            </Typography>
          </div>
          <div className={style.affiliationsItem}>
            <Tag
              tagText="Ministry of Agriculture and Forestry of and"
              thumbnail="https://picsum.photos/id/26/500/500"
              tagCounter={253}
            />
            <Typography tag="p" className="text-gray-500 px-4">
              Proffessor
            </Typography>
          </div>
          <div className={style.affiliationsItem}>
            <Tag
              tagText="Austrian Institute of Technology"
              thumbnail="https://picsum.photos/id/27/500/500"
              tagCounter={253}
            />
            <Typography tag="p" className="text-gray-500 px-4">
              Proffessor
            </Typography>
          </div>
          <div className={style.affiliationsItem}>
            <Tag
              tagText="University of Perugia"
              thumbnail="https://picsum.photos/id/287/500/500"
              tagCounter={253}
            />
            <Typography tag="p" className="text-gray-500 px-4">
              Associate Proffessor
            </Typography>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PersonPageComponent;
