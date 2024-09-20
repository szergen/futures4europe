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
import { it } from 'node:test';

function OrganisationPageComponent({ pageTitle, organisation }: any) {
  organisation = { ...mockOrganisation(pageTitle), ...organisation };

  organisation = {
    ...organisation,
    pageType: organisation?.data?.pageTypes[0],
    registrationDate: organisation?.data?._createdDate['$date'],
    organisationTag: organisation?.data?.organisation[0],
    organisationEstablishedDate:
      organisation?.data?.organisationEstablishedDate,
    activity: organisation?.data?.activity,
    countryTag: organisation?.data?.countryTag[0],
    description: organisation?.data?.description,
    foreSightMethods: organisation?.data?.methods,
    domains: organisation?.data?.domains,
    projects: organisation?.data?.organisationProjectRoles?.map((item: any) => {
      return {
        ...organisation?.data?.organisationProject?.find(
          (org: any) => org.Project[0].name === item.project
        )?.Project[0],
        arole: item.role,
      };
    }),
    people: organisation?.data?.organisationPeopleRoles?.map((item: any) => {
      return {
        ...organisation?.data?.organisationPeople?.find(
          (org: any) => org.person[0].name === item.people
        )?.person[0],
        arole: item.role,
      };
    }),
    memberOrganisations: organisation?.data?.organisationHasMember.map(
      (item: any) => item.organisation[0]
    ),
    memberOfOrganisations: organisation?.data?.organisationMemberOf.map(
      (item: any) => item.organisation[0]
    ),
    // files: organisation?.data?.files,
    // links: organisation?.data?.links,
  };

  const people = organisation?.data?.organisationPeopleRoles?.map(
    (item: any) => {
      return {
        ...organisation?.data?.organisationPeople?.find(
          (org: any) => org.person[0].name === item.people
        )?.person[0],
        arole: item.role,
      };
    }
  );

  console.log('people', people);

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag {...organisation.pageType} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            {new Date(organisation.registrationDate).toLocaleString()}
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Organisation Header */}
      <HeaderComponent organisation={organisation} />
      {/* Organisation Description */}
      <PersonDescriptionComponent description={organisation.description} />
      {/* People */}
      <AffiliationsComponent afiliations={organisation.people} title="Afilliates" />
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
