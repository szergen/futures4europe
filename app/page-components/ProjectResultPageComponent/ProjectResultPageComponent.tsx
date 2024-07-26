'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import style from './ProjectResultPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
import LinkComponent from '@app/shared-components/LinkComponent/LinkComponent';
import Button from '@app/shared-components/Button/Button';

function ProjectResultPageComponent({ pageTitle }: any) {
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
      title: 'Project Result Title',
      date: '12.02.2022',
      image: 'https://picsum.photos/id/201/180/180',
      project: {
        tagText: 'Project Result Tag',
        tagCounter: 253,
        thumbnail: 'https://picsum.photos/id/127/500/500',
      },
      text: 'Project Result description goes here',
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

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag tagText="Project Result" tagCounter={125} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Project Result Header */}
      <div className={classNames(style.personHeader)}>
        {/* Project Result Image */}
        <div className={style.imageAndButtons}>
          <Image
            src="https://framerusercontent.com/images/F46jYRatmGwgDHnyDPIaUs1us.png?scale-down-to=1024"
            width={247}
            height={368}
            className={classNames('rounded-full', style.projectResultImage)}
            alt="User Avatar - Eva Pericolini"
          />
          {/* Social Icons */}
          <div className={style.downloadAndViews}>
            <Button>
              Download result (512kb){' '}
              <span className="rounded-lg bg-white text-blue-500 p-1 font-bold">
                PDF
              </span>
            </Button>
          </div>

          {/* Views */}
          <Typography
            data-after="2153"
            tag="p"
            className="text-sm text-gray-800 mb-3 after:content-[attr(data-after)]]"
          >
            2153 views
          </Typography>
        </div>
        <div className={style.detailsColumn}>
          {/* Project Result Name */}
          <Typography tag="h1" className=" text-gray-800">
            {pageTitle.replace(/_/g, ' ')}
            {/* Project Result Popularity */}
            <span
              data-after="320"
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
          {/* Project Result Tagline */}
          <Typography tag="h3" className="text-gray-800 italic">
            Deep-Learning and HPC to Boost Biomedical Applications for Health
          </Typography>
          {/* Project Result Country */}
          <Tag tagText="Italy" tagCounter={253} className="mb-2" />
          {/* Recommandations */}
          <div className={classNames(style.recommandations)}>
            {projectResults[0].recommendations?.images.map((image, index) => (
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
              Recommended by {projectResults[0].recommendations?.number ?? 0}{' '}
              {projectResults[0].recommendations?.number &&
              projectResults[0].recommendations.number < 1
                ? 'person'
                : 'persons'}
            </Typography>
          </div>
        </div>
      </div>
      {/* Project Result Description */}
      <section
        className={classNames('text-gray-500 text-sm', style.personDescription)}
      >
        The aim of this narrative review is to provide an overview of all the
        current measuresrecommended by international and some national (or
        local) guidelines to control CRE-CRAB-CRPsA inacute care settings and
        highlight the controversies and challenges. The review will feed into
        theprotocol of IPC interventions planned to be implemented in the
        REVERSE project.
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
      {/* Authors */}
      <section className={classNames(style.coordinators)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.projectsTitle
          )}
        >
          Authors
        </Typography>
        <div className={style.coordinatorsContent}>
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
        </div>
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

export default ProjectResultPageComponent;
