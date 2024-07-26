'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import style from './EventPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import LinkComponent from '@app/shared-components/LinkComponent/LinkComponent';
import Link from 'next/link';

function EventPageComponent({ pageTitle }: any) {
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

  return (
    <div className={classNames(style.postContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag tagText="Event" tagCounter={123} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Event Header */}
      <div className={classNames(style.postHeader)}>
        <div className={style.imageAndLinks}>
          <Image
            src="https://picsum.photos/id/155/280/280"
            width={280}
            height={280}
            className={classNames('rounded-xl')}
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
            className="text-sm text-gray-800 mb-2 after:content-[attr(data-after)]]"
          >
            2153 views
          </Typography>
        </div>
        <div className={style.detailsColumn}>
          {/* Event Info Name */}
          <Typography tag="h1" className=" text-gray-800">
            {pageTitle.replace(/_/g, ' ')}
            {/* Event Popularity */}
            <span
              data-after="320"
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
          {/* Event Period */}
          <Typography tag="p" className=" text-gray-500 font-bold text-sm">
            27 July - 04 August 2024
          </Typography>
          {/* Event Location */}
          <Typography tag="p" className=" text-gray-500 text-xs">
            Maison de la Réanimation 48 Avenue, Claude Vellefaux, 75010 Paris
          </Typography>
          {/* Event Country */}
          <Tag tagText="Italy" tagCounter={253} className="mt-2" />
          {/* Registration Period */}
          <Typography
            tag="p"
            className=" text-gray-500 text-sm mt-2 font-bold border-solid border-t border-neutral-300 pt-2"
          >
            Registration open until 01 August 2024
          </Typography>
          {/* Registration Link */}
          <Typography
            tag="p"
            className="text-primary-500 text-xs mt-2 text-gray-500"
          >
            Register Link:
            <Link href="https://google.com" className="ml-2">
              https://futures-garden-human-perception-identity.eventbrite.de
            </Link>
          </Typography>
          {/* Recommandations */}
          <div className={classNames(style.recommandations)}>
            {posts[0].recommendations?.images.map((image, index) => (
              <Image
                src={image}
                key={`${index} - ${image}`}
                width={17}
                height={17}
                className={classNames('rounded-full')}
                alt={`Recommended by Person Image ${image}`}
              />
            ))}
            <Typography tag="p" className="text-xs text-gray-400 px-4">
              Recommended by {posts[0].recommendations?.number ?? 0}{' '}
              {posts[0].recommendations?.number &&
              posts[0].recommendations.number < 1
                ? 'person'
                : 'persons'}
            </Typography>
          </div>
        </div>
      </div>

      {/* Event Description */}
      <section
        className={classNames('text-gray-500 text-sm', style.personDescription)}
      >
        Like every year, the SRLF, the SKR and the GFRUP have combined their
        efforts to build a rich and complete program , including the most common
        themes (hemodynamics, respiratory, neurology, etc.) and other more
        specific ones such as obstetrics, military medicine, eco-care,
        decarbonization of care and the dynamic created around sustainable
        development by the Réagir group of the SRLF.
      </section>
      {/* Host Organisations */}
      <section className={classNames(style.foresight)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Host Organisations
        </Typography>
        <Tag
          tagText="French National Research Agency"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/155/500/500"
        />
        <Tag
          tagText="ISINOVA"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/155/500/500"
        />
      </section>

      {/* Project */}
      <section className={classNames(style.foresight)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.foresightTitle
          )}
        >
          Project
        </Typography>
        <Tag
          tagText="Deep-Learning and HPC to Boost Bio"
          tagCounter={153}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/185/500/500"
          thumbnailAlt="Portugal’s path forward: Key insights from recent foresight publications"
        />
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
          className={classNames('text-gray-800 w-full', style.domainTitle)}
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
      {/* Speakers */}
      <section className={classNames(style.domains)}>
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full', style.domainTitle)}
        >
          Speakers
        </Typography>
        <Tag
          tagText="Paulo Carvalho"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/155/500/500"
        />
        <Tag
          tagText="Wolfgang Knoll"
          tagCounter={8}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/122/500/500"
        />
        <Tag tagText="Manfred Tscheligi" tagCounter={2} />
        <Tag
          tagText="Matthias Weber"
          tagCounter={121}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/119/500/500"
        />
        <Tag
          tagText="lexander Svejkovsky"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/115/500/500"
        />
        <Tag
          tagText="Paulo Carvalho"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/155/500/500"
        />
      </section>
      {/* Speakers */}
      <section className={classNames(style.domains)}>
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full', style.domainTitle)}
        >
          Participants
        </Typography>
        <Tag
          tagText="Paulo Carvalho"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/155/500/500"
        />
        <Tag
          tagText="Wolfgang Knoll"
          tagCounter={8}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/122/500/500"
        />
        <Tag tagText="Manfred Tscheligi" tagCounter={2} />
        <Tag
          tagText="Matthias Weber"
          tagCounter={121}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/119/500/500"
        />
        <Tag
          tagText="lexander Svejkovsky"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/115/500/500"
        />
        <Tag
          tagText="Paulo Carvalho"
          href="https://google.com"
          tagCounter={253}
          thumbnail="https://picsum.photos/id/155/500/500"
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

export default EventPageComponent;
