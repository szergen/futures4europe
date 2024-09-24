'use client';
import classNames from 'classnames';
import React from 'react';
import style from './ProjectPageComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import DescriptionComponent from '../shared-page-components/DescriptionComponent/DescriptionComponent';
import TagListComponent from '../shared-page-components/TagListComponent/TagListComponent';
import AffiliationsComponent from './components/AffiliationsComponent/AffiliationsComponent';
import FilesComponent from '../shared-page-components/FilesComponent/FilesComponent';
import ExternalLinksComponent from '../shared-page-components/ExternalLinksComponent/ExternalLinksComponent';
import { mockProject, projectResults } from '../../mocks/pagesMocks';
import MiniPagesListComponent from '../shared-page-components/MiniPagesListComponent/MiniPagesListComponent';

function ProjectPageComponent({ pageTitle, project }: any) {
  // project = project || mockProject(pageTitle);
  project = { ...mockProject(pageTitle), ...project };

  project = {
    ...project,
    pageType: project?.data?.pageTypes?.[0],
    updatedDate: project?.data?._updatedDate,
    projectTag: project?.data?.Project?.[0],
    description: project?.data?.description,
    countryTag: project?.data?.countryTag?.[0],
    projectFunded: project?.data?.projectFunded?.[0],
    projectStartDate: project?.data?.projectStartDate,
    projectEndDate: project?.data?.projectEndDate,
    methods: project?.data?.methods,
    domains: project?.data?.domains,
    coordinators: project?.data?.projectCoordinator?.map(
      (item: any) => item.person?.[0]
    ),
    participants: project?.data?.projectParticipantTeam?.map(
      (item: any) => item.person?.[0]
    ),
    organisations: project?.data?.projectOrganisationRoles?.map((item: any) => {
      return {
        ...project?.data?.projectOrganisation?.find(
          (org: any) => org.organisation[0].name === item.organisation
        )?.organisation[0],
        arole: item.role,
      };
    }),
    registrationDate: project?.data?._createdDate?.['$date'],
  };

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag {...project.pageType} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Registration Date{' '}
            {new Date(project.registrationDate).toLocaleString()}
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Project Header */}
      <HeaderComponent project={project} />
      {/* Project Description */}
      <DescriptionComponent description={project.description} />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={project.methods}
        tagListTitle="Foresight Methods"
      />
      {/* Domains */}
      <TagListComponent tagList={project.domains} tagListTitle="Domains" />
      {/* Coordinators */}
      <TagListComponent
        tagList={project.coordinators}
        tagListTitle="Coordinators"
      />
      {/* Participants */}
      <TagListComponent
        tagList={project.participants}
        tagListTitle="Participants"
      />
      {/* Organizations */}
      <AffiliationsComponent
        afiliations={project.organisations}
        title="Organisations"
      />
      {/* Internal Links */}
      <MiniPagesListComponent projectResults={projectResults} />
      {/* Files */}
      <FilesComponent files={project.files} />
      {/* External Links */}
      <ExternalLinksComponent links={project.links} />
    </div>
  );
}

export default ProjectPageComponent;
