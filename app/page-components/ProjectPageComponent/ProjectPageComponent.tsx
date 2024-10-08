'use client';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import style from './ProjectPageComponent.module.css';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import DescriptionComponent from '../shared-page-components/DescriptionComponent/DescriptionComponent';
import TagListComponent from '../shared-page-components/TagListComponent/TagListComponent';
import AffiliationsComponent from '../PersonPageComponent/components/AffiliationsComponent/AffiliationsComponent';
import FilesComponent from '../shared-page-components/FilesComponent/FilesComponent';
import { mockProject } from '../../mocks/pagesMocks';
// import MiniPagesListComponent from '../shared-page-components/MiniPagesListComponent/MiniPagesListComponent';
import { useRouter } from 'next/navigation';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { arraysEqual, deepEqual } from '../PageComponents.utils';
import {
  replaceDataItemReferences,
  revalidateDataItem,
  updateDataItem,
} from '@app/wixUtils/client-side';
import {
  checkIfArrayNeedsUpdate,
  generateUniqueHash,
} from '../PostPageComponent/PostPageComponent.utils';
import MiniPagesListComponentPost from '../shared-page-components/MiniPagesListComponentPost/MiniPagesListComponentPost';
import { Modal } from 'flowbite-react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import { useWixModules } from '@wix/sdk-react';
import { items } from '@wix/data';

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
    projectFunded: project?.data?.projectFunded[0], //done
    projectStartDate: project?.data?.projectStartDate, //done
    projectEndDate: project?.data?.projectEndDate, //done
    methods: project?.data?.methods, //done
    domains: project?.data?.domains, //done
    coordinators: project?.data?.projectCoordinator, //done
    participants: project?.data?.projectParticipantTeam, //done
    organisations: project?.data?.projectOrganisationRoles?.map((item: any) => {
      return {
        ...project?.data?.projectOrganisation?.find(
          (org: any) => org?.name === item?.organisation
        ),
        arole: item?.role,
      }; //done
    }), //done
    registrationDate: project?.data?._createdDate['$date'], //done-system field
    slug: project?.data?.slug, //done
  };
  // #endregion

  // #region set default post data and data for editing
  const [defaultProjectData, setDefaultProjectData] = useState(project);
  const [projectData, setProjectData] = useState(project);
  // #endregion

  // #region Methods for updating person data
  const updateProjectnData = (newData: any) => {
    setProjectData((prevData: any) => ({ ...prevData, ...newData }));
  };

  const updateProjectDataOnKeyValue = (key: string, value: any) => {
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
    if (
      projectData.description !== defaultProjectData.description ||
      !arraysEqual(
        projectData.organisations,
        defaultProjectData.organisations
      ) ||
      projectData.projectTag.name !== defaultProjectData.projectTag.name
    ) {
      const updatedItem = await updateDataItem(
        projectData.dataCollectionId,
        projectData._id,
        {
          _id: projectData._id,
          ...projectData.data,
          title: projectData.projectTag.name,
          description: projectData?.description,
          projectStartDate: projectData?.projectStartDate,
          projectEndDate: projectData?.projectEndDate,
          projectOrganisationRoles: projectData?.organisations?.map(
            (item: any) => {
              return {
                organisation: item.name,
                role: item.arole,
              };
            }
          ),
        }
      );
      console.log('updatedItem', updatedItem);
    }

    // Update projectOrganisation
    if (
      checkIfArrayNeedsUpdate(
        projectData.organisations,
        defaultProjectData.organisations
      )
    ) {
      const updatedOrganisations = await replaceDataItemReferences(
        'InfoPages',
        projectData.organisations?.map((org: any) => org._id),
        'projectOrganisation',
        projectData._id
      );
      console.log('updatedOrganisations', updatedOrganisations);
    }

    // Update Project Funded
    if (
      projectData.projectFunded?._id !== defaultProjectData.projectFunded?._id
    ) {
      const updatedProjectFunded = await replaceDataItemReferences(
        'InfoPages',
        [projectData.projectFunded?._id],
        'projectFunded',
        projectData._id
      );
      console.log('updatedProjectFunded', updatedProjectFunded);
    }

    // Update Country Tag
    if (projectData.countryTag?._id !== defaultProjectData.countryTag?._id) {
      const updatedCountryTag = await replaceDataItemReferences(
        'InfoPages',
        [projectData.countryTag?._id],
        'countryTag',
        projectData._id
      );
      console.log('updatedCountryTag', updatedCountryTag);
    }

    // Update Foresight Methods
    if (
      checkIfArrayNeedsUpdate(projectData.methods, defaultProjectData.methods)
    ) {
      const updatedMethods = await replaceDataItemReferences(
        'InfoPages',
        projectData.methods?.map((method: any) => method._id),
        'methods',
        projectData._id
      );
      console.log('updatedMethods', updatedMethods);
    }
    // Update Domains
    if (
      checkIfArrayNeedsUpdate(projectData.domains, defaultProjectData.domains)
    ) {
      const updatedDomains = await replaceDataItemReferences(
        'InfoPages',
        projectData.domains?.map((domain: any) => domain._id),
        'domains',
        projectData._id
      );
      console.log('updatedDomains', updatedDomains);
    }

    // Update Coordinators
    if (
      checkIfArrayNeedsUpdate(
        projectData.coordinators,
        defaultProjectData.coordinators
      )
    ) {
      const updatedCoordinators = await replaceDataItemReferences(
        'InfoPages',
        projectData.coordinators?.map((coordinator: any) => coordinator._id),
        'projectCoordinator',
        projectData._id
      );
      console.log('updatedCoordinators', updatedCoordinators);
    }

    // Update Participants
    if (
      checkIfArrayNeedsUpdate(
        projectData.participants,
        defaultProjectData.participants
      )
    ) {
      const updatedParticipants = await replaceDataItemReferences(
        'InfoPages',
        projectData.participants?.map((participant: any) => participant._id),
        'projectParticipantTeam',
        projectData._id
      );
      console.log('updatedParticipants', updatedParticipants);
    }

    // Revalidate the cache for the page
    await revalidateDataItem(`/project/${projectData.slug}`);

    setIsSaveInProgress(false);
  };
  // #endregion

  // #region handleProjectInternalLinks
  // console.log('postPages', postPages);
  const internalLinks = postPages
    ?.filter((page) => {
      return page?.data?.projects?.find(
        (item: TagProps) => item?.name === projectData?.projectTag?.name
      );
    })
    ?.map((link) => link?.data);
  console.log('internalLinks', internalLinks);
  // #endregion

  // #region handle save or create new page
  const { insertDataItem } = useWixModules(items);

  const createNewProjectPage = async () => {
    console.log('Creating New Person Info Page');
    setIsSaveInProgress(true);

    // Create new project info page
    const newProjectInfo = await insertDataItem({
      dataCollectionId: 'InfoPages',
      dataItem: {
        data: {
          title: projectData?.projectTag?.name,
          description: projectData?.description,
          projectStartDate: projectData?.projectStartDate,
          projectEndDate: projectData?.projectEndDate,
          projectOrganisationRoles: projectData?.organisations?.map(
            (item: any) => {
              return {
                organisation: item.name,
                role: item.arole,
              };
            }
          ),
          slug:
            projectData?.projectTag?.name.replace(/ /g, '_') +
            '_' +
            generateUniqueHash(),
        },
      },
    });

    const newProjectInfoId = newProjectInfo?.dataItem?._id;
    const newProjectInfoSlug = newProjectInfo?.dataItem?.data?.slug;

    // #region Update Author Tag and Project Tag
    const projectTag = projectData?.projectTag;

    const userTag = tags.find((tag) => tag.name === userDetails?.userName);

    if (newProjectInfoId && projectTag && userTag) {
      const updatedAuthor = await replaceDataItemReferences(
        'InfoPages',
        [userTag._id],
        'Author',
        newProjectInfoId
      );
      console.log('updatedProjectTag', updatedAuthor);

      const updatedProjectTag = await replaceDataItemReferences(
        'InfoPages',
        [projectTag._id],
        'Project',
        newProjectInfoId
      );
      console.log('updatedProjectTag', updatedProjectTag);
    }
    // #endregion

    // #region Update Page Type Tag
    if (projectData.pageType?._id && newProjectInfoId) {
      const updatedPageTypes = await replaceDataItemReferences(
        'InfoPages',
        [projectData.pageType?._id],
        'pageTypes',
        newProjectInfoId
      );
      console.log('updatedPageTypes', updatedPageTypes);
    }
    // #endregion

    // #region Update Country Tag
    if (projectData.countryTag?._id && newProjectInfoId) {
      const updatedCountryTag = await replaceDataItemReferences(
        'InfoPages',
        [projectData.countryTag?._id],
        'countryTag',
        newProjectInfoId
      );
      console.log('updatedCountryTag', updatedCountryTag);
    }
    // #endregion

    // #region Update Project Funded
    if (projectData.projectFunded?._id && newProjectInfoId) {
      const updatedProjectFunded = await replaceDataItemReferences(
        'InfoPages',
        [projectData.projectFunded?._id],
        'projectFunded',
        newProjectInfoId
      );
      console.log('updatedProjectFunded', updatedProjectFunded);
    }
    // #endregion

    // #region Update Foresight Methods
    if (projectData.methods && newProjectInfoId) {
      const updatedMethods = await replaceDataItemReferences(
        'InfoPages',
        projectData.methods?.map((method: any) => method._id),
        'methods',
        newProjectInfoId
      );
      console.log('updatedMethods', updatedMethods);
    }
    // #endregion

    // #region Update Domains
    if (projectData.domains && newProjectInfoId) {
      const updatedDomains = await replaceDataItemReferences(
        'InfoPages',
        projectData.domains?.map((domain: any) => domain._id),
        'domains',
        newProjectInfoId
      );
      console.log('updatedDomains', updatedDomains);
    }
    // #endregion

    // #region Update Coordinators
    if (projectData.coordinators && newProjectInfoId) {
      const updatedCoordinators = await replaceDataItemReferences(
        'InfoPages',
        projectData.coordinators?.map((coordinator: any) => coordinator._id),
        'projectCoordinator',
        newProjectInfoId
      );
      console.log('updatedCoordinators', updatedCoordinators);
    }
    // #endregion

    // #region Update Participants
    if (projectData.participants && newProjectInfoId) {
      const updatedParticipants = await replaceDataItemReferences(
        'InfoPages',
        projectData.participants?.map((participant: any) => participant._id),
        'projectParticipantTeam',
        newProjectInfoId
      );
      console.log('updatedParticipants', updatedParticipants);
    }
    // #endregion

    // #region Update Organisation Roles
    if (projectData.organisations && newProjectInfoId) {
      const updatedOrganisations = await replaceDataItemReferences(
        'InfoPages',
        projectData.organisations?.map((org: any) => org._id),
        'projectOrganisation',
        newProjectInfoId
      );
      console.log('updatedOrganisations', updatedOrganisations);
    }
    // #endregion

    // #region Update Person Tag
    // Check if object projectTag has changed
    if (!deepEqual(projectData?.projectTag, defaultProjectData?.projectTag)) {
      console.log('projectTag has changed');
      const updatedProjectTag = await updateDataItem(
        'Tags',
        projectData?.projectTag?._id,
        {
          _id: projectData.projectTag._id,
          ...projectData.projectTag,
          tagPageLink: '/project/' + newProjectInfoSlug,
        }
      );
      console.log('updatedProjectTag', updatedProjectTag);
    }
    // #endregion

    // #region Revalidate the cache for the page
    await revalidateDataItem(`/project/${newProjectInfoSlug}`);
    handleUserDataRefresh();
    router.push(`/project/${newProjectInfoSlug}`);
    setIsSaveInProgress(false);
    // #endregion
  };

  const saveOrCreateHandler = isNewPage
    ? createNewProjectPage
    : updateDataToServer;
  // #endregion

  // #region handle for when the page is newly created by associatig the pageType tag
  useEffect(() => {
    if (isLoggedIn && projectData && isNewPage) {
      // const personTag = tags.find((tag) => tag.name === userDetails?.userName);
      // console.log('debug1->personTag', personTag);
      // if (personTag) {
      //   updatePersonDataOnKeyValue('personTag', personTag);
      // }
      const projectInfoTag = tags.find((tag) => tag.name === 'project info');
      console.log('debug1->projectInfoTag', projectInfoTag);
      if (projectInfoTag) {
        updateProjectDataOnKeyValue('pageType', projectInfoTag);
      }
    }
  }, [userDetails, tags]);

  return (
    <div className={classNames(style.personContainer)}>
      {/*  Edit buttons */}
      {isPageOwnedByUser && (
        <div>
          <button
            onClick={() => {
              isEditModeOn && saveOrCreateHandler();
              setIsEditModeOn(!isEditModeOn);
              setDefaultProjectData(projectData);
            }}
            disabled={isEditModeOn && checkValidationErrors()}
            className={classNames(
              'px-2 py-2 rounded-md text-white bg-blue-600 w-40 mr-2',
              isEditModeOn && checkValidationErrors() && 'bg-gray-400'
            )}
          >
            {!isEditModeOn
              ? 'Edit Page'
              : isNewPage
              ? 'Publish Page'
              : 'Save&Publish Changes'}
          </button>
          {isEditModeOn && (
            <button
              onClick={() => {
                setProjectData(defaultProjectData);
                setIsEditModeOn(!isEditModeOn);
                isNewPage && router.push(`/dashboard`);
              }}
              className="px-2 py-2 rounded-md text-white bg-green-600 w-40"
            >
              Discard Changes
            </button>
          )}
        </div>
      )}
      {/* Page Type Tag */}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag {...projectData?.pageType} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Registration Date{' '}
            {new Date(project?.registrationDate)?.toLocaleString()}
          </Typography>
        </section>
      </div>
      {/* Project Header */}
      <HeaderComponent
        project={projectData}
        isEditModeOn={isEditModeOn}
        updateProjectData={updateProjectnData}
        updateProjectDataOnKeyValue={updateProjectDataOnKeyValue}
        tags={tags}
        handleTagCreated={handleTagCreated}
        setValidationState={updateValidationState}
        isNewPage={isNewPage}
      />
      {/* Project Description */}
      <DescriptionComponent
        description={projectData.description}
        isEditModeOn={isEditModeOn}
        handleUpdate={(value) =>
          updateProjectDataOnKeyValue('description', value)
        }
      />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={projectData.methods}
        tagListTitle="Foresight Methods"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'foresight method')}
        selectedValues={projectData.methods?.map((method: any) => method?.name)}
        updatePostData={(value) =>
          updateProjectDataOnKeyValue('methods', value)
        }
        tagType="foresight method"
        handleTagCreated={handleTagCreated}
      />
      {/* Domains */}
      <TagListComponent
        tagList={projectData.domains}
        tagListTitle="Domains"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'domain')}
        selectedValues={projectData.domains?.map((domain: any) => domain?.name)}
        updatePostData={(value) =>
          updateProjectDataOnKeyValue('domains', value)
        }
        tagType="domain"
        handleTagCreated={handleTagCreated}
      />
      {/* Coordinators */}
      <TagListComponent
        tagList={projectData.coordinators}
        tagListTitle="Coordinators"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'person')}
        selectedValues={projectData.coordinators?.map(
          (coordinator: any) => coordinator?.name
        )}
        updatePostData={(value) =>
          updateProjectDataOnKeyValue('coordinators', value)
        }
        tagType="person"
        handleTagCreated={handleTagCreated}
      />
      {/* Participants */}
      <TagListComponent
        tagList={projectData.participants}
        tagListTitle="Participants"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'person')}
        selectedValues={projectData.participants?.map(
          (participant: any) => participant?.name
        )}
        updatePostData={(value) =>
          updateProjectDataOnKeyValue('participants', value)
        }
        tagType="person"
        handleTagCreated={handleTagCreated}
      />
      {/* Organization Roles */}
      <AffiliationsComponent
        afiliations={projectData.organisations}
        tagListTitle="Organization Roles"
        isEditModeOn={isEditModeOn}
        updatePersonDataAffiliations={(value) =>
          updateProjectDataOnKeyValue('organisations', value)
        }
        tags={tags.filter((tag) => tag?.tagType === 'organisation')}
        handleTagCreated={handleTagCreated}
      />
      {/* Internal Links */}
      <MiniPagesListComponentPost internalLinks={internalLinks} title="Posts" />
      {/* Files */}
      <FilesComponent files={project.files} />
      {/* External Links */}
      {/* <ExternalLinksComponent links={project.links} /> */}
      {/* Modal for Saving page */}
      <Modal show={isSaveInProgress} size="md" popup>
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            Saving Page...
            <LoadingSpinner />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectPageComponent;
