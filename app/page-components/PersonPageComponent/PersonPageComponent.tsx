'use client';
import classNames from 'classnames';
import React from 'react';
import style from './PersonPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PersonDescriptionComponent from '../shared-page-components/DescriptionComponent/DescriptionComponent';
import AffiliationsComponent from './components/AffiliationsComponent/AffiliationsComponent';
import TagListComponent from '../shared-page-components/TagListComponent/TagListComponent';
import FilesComponent from '../shared-page-components/FilesComponent/FilesComponent';
import ExternalLinksComponent from '../shared-page-components/ExternalLinksComponent/ExternalLinksComponent';
import MiniPagesListComponent from '../shared-page-components/MiniPagesListComponent/MiniPagesListComponent';
import {
  mockPerson,
  projectResults,
  events,
  posts,
} from '@app/mocks/pagesMocks';

function PersonPageComponent({ pageTitle, person }: any) {
  person = person || mockPerson(pageTitle);

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
      {/* Internal Links */}
      <MiniPagesListComponent
        posts={posts}
        projectResults={projectResults}
        events={events}
      />
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
