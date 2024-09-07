'use client';
import classNames from 'classnames';
import React from 'react';
import style from './OrganisationPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PersonDescriptionComponent from '../shared-page-components/DescriptionComponent/DescriptionComponent';
import TagListComponent from '../shared-page-components/TagListComponent/TagListComponent';
import AffiliationsComponent from './components/AffiliationsComponent/AffiliationsComponent';
import FilesComponent from '../shared-page-components/FilesComponent/FilesComponent';
import ExternalLinksComponent from '../shared-page-components/ExternalLinksComponent/ExternalLinksComponent';
import {
  mockOrganisation,
  projectResults,
  events,
  posts,
} from '../../mocks/pagesMocks';
import MiniPagesListComponent from '../shared-page-components/MiniPagesListComponent/MiniPagesListComponent';

function OrganisationPageComponent({ pageTitle, organisation }: any) {
  organisation = organisation || mockOrganisation(pageTitle);

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag name="Organisation info" popularity={123} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Organisation Header */}
      <HeaderComponent organisation={organisation} />
      {/* Organisation Description */}
      <PersonDescriptionComponent description={organisation.description} />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={organisation.foreSightMethods}
        tagListTitle="Foresight Methods"
      />
      {/* Domains */}
      <TagListComponent tagList={organisation.domains} tagListTitle="Domains" />
      {/* Projects */}
      <AffiliationsComponent
        afiliations={organisation.projects}
        title="Projects"
      />
      {/* People */}
      <AffiliationsComponent afiliations={organisation.people} title="People" />
      {/* Member Organisations */}
      <TagListComponent
        tagList={organisation.memberOrganisations}
        tagListTitle="Member Organisations"
      />
      {/* Member of Organisations */}
      <TagListComponent
        tagList={organisation.memberOfOrganisations}
        tagListTitle="Member of Organisations"
      />
      {/* Internal Links */}
      <MiniPagesListComponent
        posts={posts}
        projectResults={projectResults.slice(0, 1)}
        events={events.slice(0, 1)}
      />
      {/* Files */}
      <FilesComponent files={organisation.files} />
      {/* External Links */}
      <ExternalLinksComponent links={organisation.links} />
    </div>
  );
}

export default OrganisationPageComponent;
