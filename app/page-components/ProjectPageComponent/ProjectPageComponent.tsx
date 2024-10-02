'use client';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
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
import { useRouter } from 'next/navigation';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { arraysEqual, deepEqual } from '../PageComponents.utils';
import {
  replaceDataItemReferences,
  revalidateDataItem,
  updateDataItem,
} from '@app/wixUtils/client-side';
import { checkIfArrayNeedsUpdate } from '../PostPageComponent/PostPageComponent.utils';

function ProjectPageComponent({ pageTitle, project, isNewPage }: any) {
  project = { ...mockProject(pageTitle), ...project };

  const router = useRouter();

  // #region useAuth hook for grabbing user details and tags needed for editing
  const {
    isLoggedIn,
    userDetails,
    tags,
    handleTagCreated,
    handleUserDataRefresh,
    postPages,
  } = useAuth();

  const [isPageOwnedByUser, setIsPageOwnedByUser] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  // #endregion

  // #region check if page is owned by user
  useEffect(() => {
    if (!isLoggedIn) return;
    const userDetailsIds = [userDetails.contactId, userDetails.accountId];
    userDetailsIds.find((id) => {
      if (project?.data?._owner === id) {
        setIsPageOwnedByUser(true);
      }
    });
    if (isNewPage && isLoggedIn) {
      setIsPageOwnedByUser(true);
      setIsEditModeOn(true);
    }
  }, [isLoggedIn]);
  // #endregion

  // #region Overwrite mock data with Wix data
  project = {
    ...project,
    pageType: project?.data?.pageTypes[0],
    updatedDate: project?.data?._updatedDate, //done - system field
    projectTag: project?.data?.Project[0], //done
    description: project?.data?.description, //done
    countryTag: project?.data?.countryTag[0], //done
    projectFunded: project?.data?.projectFunded[0],
    projectStartDate: project?.data?.projectStartDate,
    projectEndDate: project?.data?.projectEndDate,
    methods: project?.data?.methods, //done
    domains: project?.data?.domains, //done
    coordinators: project?.data?.projectCoordinator,
    participants: project?.data?.projectParticipantTeam,
    organisations: project?.data?.projectOrganisationRoles?.map((item: any) => {
      return {
        ...project?.data?.projectOrganisation?.find(
          (org: any) => org?.name === item?.organisation
        ),
        arole: item?.role,
      };
    }), //done
    registrationDate: project?.data?._createdDate['$date'], //done-system field
  };
  // #endregion

  // #region set default post data and data for editing
  const [defaultProjectData, setDefaultProjectData] = useState(project);
  const [projectData, setProjectData] = useState(project);
  // #endregion

  // #region Methods for updating person data
  const updatePersonData = (newData: any) => {
    setProjectData((prevData: any) => ({ ...prevData, ...newData }));
  };

  const updatePersonDataOnKeyValue = (key: string, value: any) => {
    setProjectData((prevData: any) => ({ ...prevData, [key]: value }));
  };
  // #endregion

  // #region validation state
  const [validationState, setValidationState] = useState({
    title: '',
    subtitle: '',
  });

  const updateValidationState = (newData: any) => {
    setValidationState((prevData: any) => ({ ...prevData, ...newData }));
  };

  const checkValidationErrors = () => {
    return Object.values(validationState).some((error) => error);
  };

  // #endregion

  // #region handle updating data to server
  const [isSaveInProgress, setIsSaveInProgress] = useState(false);

  const updateDataToServer = async () => {
    console.log(
      'Updating Page from',
      projectData.dataCollectionId,
      projectData._id
    );
    setIsSaveInProgress(true);

    // #region Update Person Tag
    // Check if object personTag has changed
    if (!deepEqual(projectData.projectTag, defaultProjectData.projectTag)) {
      console.log('personTag has not changed');
      const updatedProjectTag = await updateDataItem(
        'Tags',
        projectData.projectTag._id,
        {
          _id: projectData.projectTag._id,
          ...projectData.projectTag,
        }
      );
      console.log('updatedProjectTag', updatedProjectTag);
    }
    // #endregion

    // Update page fields
    // if (
    //   projectData.description !== defaultProjectData.description ||
    //   !arraysEqual(
    //     projectData.organisations,
    //     defaultProjectData.organisations
    //   ) ||
    //   projectData.projectTag.name !== defaultProjectData.projectTag.name
    // ) {
    //   const updatedItem = await updateDataItem(
    //     projectData.dataCollectionId,
    //     projectData._id,
    //     {
    //       _id: projectData._id,
    //       ...projectData.data,
    //       title: projectData.projectTag.name,
    //       description: projectData?.description,
    //       projectOrganisationRoles: projectData?.currentAfiliations?.map(
    //         (item: any) => {
    //           return {
    //             organisation: item.name,
    //             role: item.arole,
    //           };
    //         }
    //       ),
    //     }
    //   );
    //   console.log('updatedItem', updatedItem);
    // }

    // Update projectOrganisation
    // if (
    //   checkIfArrayNeedsUpdate(
    //     projectData.organisations,
    //     defaultProjectData.organisations
    //   )
    // ) {
    //   const updatedOrganisations = await replaceDataItemReferences(
    //     'InfoPages',
    //     projectData.organisations?.map((org: any) => org._id),
    //     'personOrganisation',
    //     projectData._id
    //   );
    //   console.log('updatedOrganisations', updatedOrganisations);
    // }

    // Update Country Tag
    // if (projectData.countryTag?._id !== defaultProjectData.countryTag?._id) {
    //   const updatedCountryTag = await replaceDataItemReferences(
    //     'InfoPages',
    //     [projectData.countryTag?._id],
    //     'countryTag',
    //     projectData._id
    //   );
    //   console.log('updatedCountryTag', updatedCountryTag);
    // }

    // Update Foresight Methods
    // if (
    //   checkIfArrayNeedsUpdate(projectData.methods, defaultProjectData.methods)
    // ) {
    //   const updatedMethods = await replaceDataItemReferences(
    //     'InfoPages',
    //     projectData.methods?.map((method: any) => method._id),
    //     'methods',
    //     projectData._id
    //   );
    //   console.log('updatedMethods', updatedMethods);
    // }
    // Update Domains
    // if (
    //   checkIfArrayNeedsUpdate(projectData.domains, defaultProjectData.domains)
    // ) {
    //   const updatedDomains = await replaceDataItemReferences(
    //     'InfoPages',
    //     projectData.domains?.map((domain: any) => domain._id),
    //     'domains',
    //     projectData._id
    //   );
    //   console.log('updatedDomains', updatedDomains);
    // }

    // Revalidate the cache for the page
    await revalidateDataItem(`/person/${projectData.slug}`);

    setIsSaveInProgress(false);
  };
  // #endregion

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
