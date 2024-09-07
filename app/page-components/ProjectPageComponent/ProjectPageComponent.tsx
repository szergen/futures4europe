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
  project = project || mockProject(pageTitle);

  return (
    <div className={classNames(style.personContainer)}>
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag name="Project Info" popularity={125} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited 22h ago
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
        tagList={project.foreSightMethods}
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
