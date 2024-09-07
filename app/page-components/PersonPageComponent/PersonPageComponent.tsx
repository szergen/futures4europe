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
  // person = person || mockPerson(pageTitle);
  person = { ...mockPerson(pageTitle), ...person };

  person = {
    ...person,
    pageType: person?.data?.pageTypes[0],
    updatedDate: person?.data?._updatedDate,
    personTag: person?.data?.person[0],
    activity: person?.data?.activity,
    countryTag: person?.data?.countryTag[0],
    description: person?.data?.description,
    methods: person?.data?.methods,
    domains: person?.data?.domains,
  };

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag {...person.pageType} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited {new Date(person.updatedDate['$date']).toLocaleString()}
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Person Header */}
      <HeaderComponent person={person} />
      {/* Person Description */}
      <PersonDescriptionComponent description={person.description} />

      {/* Person Workplace/Current Affiliations*/}
      <AffiliationsComponent afiliations={person.currentAfiliations} current />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={person.methods}
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
