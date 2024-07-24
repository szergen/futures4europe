'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import style from './ProjectPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
import MiniPageEvents from '@app/shared-components/MiniPageEvents/MiniPageEvents';
import LinkComponent from '@app/shared-components/LinkComponent/LinkComponent';

function ProjectPageComponent({ params }: any) {
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

  const [displayCountProjectResults, setDisplayCountProjectResults] =
    useState(3);

  const showMoreProjectResults = () => {
    setDisplayCountProjectResults(projectResults.length);
  };
  const showFewerProjectResults = () => {
    setDisplayCountProjectResults(3);
  };

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag tagText="Project Info" tagCounter={125} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Project Header */}
      <div className={classNames(style.personHeader)}>
        <div className={style.imageAndSocialColumn}>
          <Image
            src="https://picsum.photos/id/355/147/147"
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
          {/* Project Info Name */}
          <Typography tag="h1" className=" text-gray-800">
            DiAHealth
            {/* Project Popularity */}
            <span
              data-after="320"
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
          {/* Project Tagline */}
          <Typography tag="h3" className="text-gray-800 italic">
            Deep-Learning and HPC to Boost Biomedical Applications for Health
          </Typography>
          {/* Project Timeline */}
          <Typography tag="p" className="text-gray-500 text-sm pt-4">
            2020 - 2023
          </Typography>
          {/* Project domains */}
          <div className={style.domains}>
            <Tag tagText="EU Funded" tagCounter={253} />
          </div>
          {/* Project Country */}
          <Tag tagText="Italy" tagCounter={253} className="mb-2" />
        </div>
      </div>
      {/* Project Description */}
      <section
        className={classNames('text-gray-500 text-sm', style.personDescription)}
      >
        The so-called fourth paradigm of science is based on the unified
        environments of high-performance computing (HPC) and Big Data analytics.
        It is expected to considerably advance health scientific research and
        innovation. The EU-funded DeepHealth project will deliver HPC power at
        the service of biomedical applications and apply deep learning (DL)
        techniques on vast and compound biomedical data sets, aiming to underpin
        new and more effective methods of diagnosis, monitoring and treatment of
        diseases. The project will develop a resilient and scalable structure
        for the HPC + Big Data environment that will rely on two new libraries:
        the European Distributed Deep Learning Library (EDDLL) and the European
        Computer Vision Library (ECVL). The structure, after it is validated,
        will allow training of models and provide training data from different
        medical fields.
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
      {/* Coordinators */}
      <section className={classNames(style.coordinators)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.projectsTitle
          )}
        >
          Coordinators
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
      {/* Team */}
      <section className={classNames(style.team)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.projectsTitle
          )}
        >
          Team
        </Typography>
        <div className={style.teamContent}>
          <Tag
            tagText="Anton Plimon"
            tagCounter={8}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/122/500/500"
          />
          <Tag tagText="Anna Huditz" tagCounter={2} />
          <Tag
            tagText="Alexander Svejkovsky"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/119/500/500"
          />
          <Tag
            tagText="Beatrice Kornelis"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/119/500/500"
          />
          <Tag
            tagText="Elke Guenther"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/129/500/500"
          />
          <Tag
            tagText="Andreas Kugi"
            tagCounter={121}
            href="https://google.com"
            thumbnail="https://picsum.photos/id/129/500/500"
          />
        </div>
      </section>
      {/* Organizations */}
      <section className={classNames(style.organisations)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.projectsTitle
          )}
        >
          Organizations
        </Typography>
        <div className={style.organisationsContent}>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="Universitat Politecnica de Valencia (UPV)"
              tagCounter={8}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/322/500/500"
            />
            <Typography tag="p">Project Lead</Typography>
          </div>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="THALES"
              tagCounter={8}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/452/500/500"
            />
            <Typography tag="p" className="ml-4">
              WP3 Lead
            </Typography>
          </div>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="Philips Medical Systems"
              tagCounter={18}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/622/500/500"
            />
          </div>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="SIMAVI"
              tagCounter={18}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/722/500/500"
            />
          </div>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="WINGS ICT Solutions"
              tagCounter={18}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/822/500/500"
            />
          </div>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="LIST cea tech"
              tagCounter={18}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/922/500/500"
            />
          </div>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="Centro Nacional de Supercomputacion (BSC)"
              tagCounter={18}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/1022/500/500"
            />
          </div>
          <div className={style.organisationContentItem}>
            <Tag
              tagText="Karolinska Institutet"
              tagCounter={18}
              href="https://google.com"
              thumbnail="https://picsum.photos/id/532/500/500"
            />
          </div>
        </div>
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

export default ProjectPageComponent;
