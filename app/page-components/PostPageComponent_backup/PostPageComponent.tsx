'use client';
import classNames from 'classnames';
import React from 'react';
import Image from 'next/image';
import style from './PostPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import LinkComponent from '@app/shared-components/LinkComponent/LinkComponent';

function PostPageComponent({ params }: any) {
  return (
    <div className={classNames(style.postContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3')}>
        <Tag tagText="post" tagCounter={253} />
      </div>
      {/* Views */}
      <div className={classNames('py-1')}>
        <Typography tag="p" className="text-sm text-gray-800">
          2153 views
        </Typography>
      </div>
      {/* Title */}
      <header className="post-header">
        {/* <h1>{params?.slug}</h1> */}
        <h1>
          Portugal’s path forward: Key insights from recent foresight
          publications
        </h1>
      </header>
      {/* Timestamp */}
      <section className="post-meta">
        <Typography tag="p" className="text-sm text-gray-400">
          Edited 22h ago
        </Typography>
        {/* Additional meta content */}
      </section>
      {/* Image */}
      <div className={classNames(style.postImage)}>
        <Image
          src="https://picsum.photos/id/195/900/500"
          width={900}
          height={500}
          className={classNames('rounded-md')}
          alt="Portugal’s path forward: Key insights from recent foresight publications"
        />
      </div>
      {/* Reccomandations */}
      <div className={classNames(style.recommandations)}>
        <Image
          src="https://picsum.photos/id/192/30/30"
          width={30}
          height={30}
          className={classNames('rounded-full')}
          alt="Portugal’s path forward: Key insights from recent foresight publications"
        />
        <Image
          src="https://picsum.photos/id/190/30/30"
          width={30}
          height={30}
          className={classNames('rounded-full')}
          alt="Portugal’s path forward: Key insights from recent foresight publications"
        />
        <Image
          src="https://picsum.photos/id/191/30/30"
          width={30}
          height={30}
          className={classNames('rounded-full')}
          alt="Portugal’s path forward: Key insights from recent foresight publications"
        />
        <Typography tag="p" className="text-sm text-gray-400 px-4">
          Recommended by 3 people
        </Typography>
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
      </section>
      {/* Author */}
      <section className={classNames(style.author)}>
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full my-4', style.authorTitle)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          <span>Author</span>
        </Typography>
        <Tag
          tagText="Anton Plimon"
          tagCounter={153}
          href="https://google.com"
          thumbnail="https://picsum.photos/id/125/500/500"
          thumbnailAlt="Anton Plimon"
        />
      </section>
      {/* Content */}
      <main className={classNames('', style.postContent)}>
        <p>
          The following recently published and upcoming reports and books shed
          light on future-oriented insights with a special focus on Portugal.
          These materials explore a range of topics, from economic development
          and technological innovation to environmental sustainability and
          social trends specific to the region. By delving into these resources,
          readers can gain a comprehensive understanding of the challenges and
          opportunities that Portugal may face in the coming years. <br />
          <br />
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
      <aside className="post-sidebar">
        {/* Sidebar content or links can go here */}
      </aside>
      <footer className="post-footer">
        {/* <p>Posted on [Post Date]</p> */}
        {/* Additional footer content */}
      </footer>
    </div>
  );
}

export default PostPageComponent;
