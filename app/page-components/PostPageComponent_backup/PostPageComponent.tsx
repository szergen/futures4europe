'use client';
import classNames from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import style from './PostPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import MiniPageEvents from '@app/shared-components/MiniPageEvents/MiniPageEvents';
import LinkComponent from '@app/shared-components/LinkComponent/LinkComponent';

function PostPageComponent({ pageTitle }: any) {
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
    <div className={classNames(style.postContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag tagText="Post" tagCounter={123} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Post Header */}
      <div className={classNames(style.postHeader)}>
        <div className={style.imageAndAuthor}>
          <Image
            src="https://picsum.photos/id/155/280/280"
            width={280}
            height={280}
            className={classNames('rounded-xl')}
            alt="User Avatar - Eva Pericolini"
          />
          {/* Social Icons */}
          <div className={style.author}>
            <span className="me-2.5 text-gray-400">Author: </span>
            <Tag
              tagText="Eva Pericolini"
              href="/person/Eva_Pericolini"
              thumbnail="https://picsum.photos/id/155/147/147"
            />
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
          {/* Post Info Name */}
          <Typography tag="h1" className=" text-gray-800">
            {pageTitle.replace(/_/g, ' ')}
            {/* Post Popularity */}
            <span
              data-after="320"
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
          {/* Post Country */}
          <Tag tagText="Italy" tagCounter={253} className="mt-5" />
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
      {/* Post Content */}
      <main className={style.postContent}>
        <p>
          The following recently published and upcoming reports and books shed
          light on future-oriented insights with a special focus on Portugal.
          These materials explore a range of topics, from economic development
          and technological innovation to environmental sustainability and
          social trends specific to the region. By delving into these resources,
          readers can gain a comprehensive understanding of the challenges and
          opportunities that Portugal may face in the coming years. <br />
          <br />
          <Image
            src="https://picsum.photos/id/155/600/400"
            width={600}
            height={400}
            className={classNames('rounded-md block mx-auto')}
            alt="Post Image"
          />
          <br />
          (Portuguese version only) This book was published by Orient Foundation
          (co-edited by the Institute for Prospective Studies) and launched in
          Lisbon on the 4th April 2024. It includes essays and reflections that
          have resulted from the annual Foresight Meetings of Arrábida, held
          since 1992 and which aim to analyze their impact on development. It is
          organized in four parts, debating and clarifying the conditions for
          the development of the Portuguese society (and European societies) as
          a knowledge-based society and economy, and with the direct involvement
          of the most relevant actors: Introductory Essays, Policies –
          Production, dissemination and transmission of knowledge, Reflections –
          the conditions and the dynamics of social and economic appropriation
          of knowledge, Future Challenges – The prospective and Portugal’s
          position in the world.(2024, RePLAN multisectoral team) (Portuguese
          version only) This digital brochure, recently published on March 2024,
          is a publication by the Planning and Foresight Services Network of the
          Public Administration (PlanAPP), as part of the activities carried out
          by the Multisectoral Foresight Team of the Portuguese Network of
          Public Administration Planning and Foresight Services (RePLAN). <br />
          <br />
          <Image
            src="https://picsum.photos/id/154/600/400"
            width={600}
            height={400}
            className={classNames('rounded-md block mx-auto')}
            alt="Post Image"
          />
          <br />
          This brochure is a brief introduction to the 2050 Megatrends Report
          for Portugal, to be published by the end of 2024. Both publications
          are coordinated by the Planning and Foresight Services Network of the
          Public Administration (PlanAPP), as part of the activities carried out
          by the Multisectoral Foresight Team of the Portuguese Network of
          Public Administration Planning and Foresight Services (RePLAN). The
          brochure presents, in a very brief and preliminary way, the nine
          global megatrends that are likely to shape the future of Portugal,
          with a general description and a list of the most relevant potential
          impacts: Worsening climate change; Growing pressure on natural
          resources; Diversifying and changing economic models; Diverging
          demographic trends; A more urban world; A more digital world;
          Accelerating technological development; A multipolar world and New
          challenges to democracy. The identification and description of
          megatrends for Portugal is a work in progress, based on a
          collaborative, systematic and open process. During 2024, with the aim
          of producing a report and supporting the formulation of public
          policies, this process will be deepened with workshops, expert
          consultation, and citizen participation. <br />
          <br />
          To support the discussion of the megatrends in a multisectorial
          approach, a series of workshops/webinars were planned: Workshop
          RePLAN: Megatrends for Portugal from the prospective of security and
          defense (26 – 27 March 2024) was organized by the Portuguese Institute
          of National Defense and included a discussion about all identified
          megatrends and its relation to the security and defense sectors.
          Workshop RePLAN: Megatrends with impact for Portugal from the
          prospective of Territory-Sea-Environment (10th may 2024) <br />
          <br />
          This workshop is being organized by the Directorate-General for Sea
          Policy and the General Secretariat for the Environment, in
          collaboration with PlanAPP, it is the second of a set of initiatives
          in a collaborative, systematic and open process that aims to encourage
          the presentation of ideas and debates able to support the formulation
          of public policies, within the scope of the attributions of the Public
          Administration Planning and Foresight Services Network (RePLAN), with
          the objective of producing a “Report on Megatrends with Impact on
          Portugal” by the end of this year.
        </p>
      </main>
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

export default PostPageComponent;
