'use client';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import style from './OrganisationPageComponent.module.css';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PersonDescriptionComponent from '../shared-page-components/DescriptionComponent/DescriptionComponent';
import TagListComponent from '../shared-page-components/TagListComponent/TagListComponent';
import AffiliationsComponent from '../PersonPageComponent/components/AffiliationsComponent/AffiliationsComponent';
import FilesComponent from '../shared-page-components/FilesComponent/FilesComponent';
import { mockOrganisation } from '../../mocks/pagesMocks';
import { useRouter } from 'next/navigation';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import {
  arraysEqual,
  deepEqual,
  sanitizeTitleForSlug,
} from '../PageComponents.utils';
import {
  replaceDataItemReferences,
  revalidateDataItem,
  updateDataItem,
} from '@app/wixUtils/client-side';
import {
  checkIfArrayNeedsUpdateForTags,
  generateUniqueHash,
} from '../PostPageComponent/PostPageComponent.utils';
import MiniPagesListComponentPost from '../shared-page-components/MiniPagesListComponentPost/MiniPagesListComponentPost';
import { useWixModules } from '@wix/sdk-react';
import { items } from '@wix/data';
import { Modal } from 'flowbite-react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';

function OrganisationPageComponent({
  pageTitle,
  organisation,
  isNewPage,
}: any) {
  organisation = { ...mockOrganisation(pageTitle), ...organisation };
  const router = useRouter();

  // #region useAuth hook for grabbing user details and tags needed for editing
  const {
    isLoggedIn,
    userDetails,
    tags,
    handleTagCreated,
    handleUserDataRefresh,
    postPages,
    infoPages,
  } = useAuth();

  const [isPageOwnedByUser, setIsPageOwnedByUser] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  // #endregion

  // #region check if page is owned by user
  useEffect(() => {
    if (!isLoggedIn) return;
    const userDetailsIds = [userDetails.contactId, userDetails.accountId];
    userDetailsIds.find((id) => {
      if (organisation?.data?._owner === id) {
        setIsPageOwnedByUser(true);
      }
    });
    if (isNewPage && isLoggedIn) {
      setIsPageOwnedByUser(true);
      setIsEditModeOn(true);
    }
  }, [isLoggedIn]);
  // #endregion

  organisation = {
    ...organisation,
    title: organisation?.data?.title, // done
    pageType: organisation?.data?.pageTypes[0],
    registrationDate: organisation?.data?._createdDate['$date'], //done - system field
    organisationTag: organisation?.data?.organisation[0], //done
    organisationEstablishedDate:
      organisation?.data?.organisationEstablishedDate, //done
    // activity: organisation?.data?.activity, //not needed
    organisationType: organisation?.data?.organisationType, //done
    countryTag: organisation?.data?.countryTag[0], //done
    description: organisation?.data?.description, //done
    methods: organisation?.data?.methods, //done
    domains: organisation?.data?.domains, //done
    projects: organisation?.data?.organisationProjectRoles?.map((item: any) => {
      return {
        ...organisation?.data?.organisationProject?.find(
          (org: any) => org?.name === item?.project
        ),
        arole: item?.role,
      };
    }), //done
    people: organisation?.data?.organisationPeopleRoles?.map((item: any) => {
      return {
        ...organisation?.data?.organisationPeople?.find(
          (org: any) => org?.name === item?.person
        ),
        arole: item?.role,
      };
    }), //done
    memberOrganisations: organisation?.data?.organisationHasMember,
    memberOfOrganisations: organisation?.data?.organisationMemberOf,
    mediaFiles: organisation?.data?.mediaFiles,
    slug: organisation?.data?.slug,
  };

  // #region set default post data and data for editing
  const [defaultOrganisationData, setDefaultOrganisationData] =
    useState(organisation);
  const [organisationData, setOrganisationData] = useState(organisation);
  // #endregion

  // #region Methods for updating person data
  const updateOrganisationData = (newData: any) => {
    setOrganisationData((prevData: any) => ({ ...prevData, ...newData }));
  };

  const updateOrganisationDataOnKeyValue = (key: string, value: any) => {
    setOrganisationData((prevData: any) => ({ ...prevData, [key]: value }));
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
      organisationData.dataCollectionId,
      organisationData._id
    );
    setIsSaveInProgress(true);

    // #region Update Organisation Tag
    // Check if object personTag has changed
    if (
      !deepEqual(
        organisationData.organisationTag,
        defaultOrganisationData.organisationTag
      )
    ) {
      console.log('personTag has not changed');
      const updatedOrganisationTag = await updateDataItem(
        'Tags',
        organisationData.organisationTag._id,
        {
          _id: organisationData.organisationTag._id,
          ...organisationData.organisationTag,
        }
      );
      console.log('updatedOrganisationTag', updatedOrganisationTag);
    }
    // #endregion

    // #region Update page fields
    if (
      organisationData.description !== defaultOrganisationData.description ||
      !arraysEqual(
        organisationData.organisationProject,
        defaultOrganisationData.organisationProject
      ) ||
      !arraysEqual(
        organisationData.organisationPeople,
        defaultOrganisationData.organisationPeople
      ) ||
      organisationData?.organisationTag?.name !==
        defaultOrganisationData?.organisationTag?.name ||
      organisationData?.organisationEstablishedDate !==
        defaultOrganisationData?.organisationEstablishedDate
    ) {
      const updatedItem = await updateDataItem(
        organisationData.dataCollectionId,
        organisationData._id,
        {
          _id: organisationData._id,
          ...organisationData.data,
          title: organisationData.organisationTag.name,
          description: organisationData?.description,
          organisationEstablishedDate:
            organisationData?.organisationEstablishedDate,
          organisationProjectRoles: organisationData.projects.map(
            (project: any) => {
              return {
                project: project.name,
                role: project.arole,
              };
            }
          ),
          organisationPeopleRoles: organisationData.people.map(
            (person: any) => {
              return {
                person: person.name,
                role: person.arole,
              };
            }
          ),
          mediaFiles: organisationData.mediaFiles,
        }
      );
      console.log('updatedItem', updatedItem);
    }

    // Update projects
    if (
      checkIfArrayNeedsUpdateForTags(
        organisationData.projects,
        defaultOrganisationData.projects
      )
    ) {
      const updatedProjects = await replaceDataItemReferences(
        'InfoPages',
        organisationData.projects
          ?.map((proj: any) => proj._id)
          .filter((id: any) => id),
        'organisationProject',
        organisationData._id
      );
      console.log('updated organisationProject', updatedProjects);
    }

    // Update people
    if (
      checkIfArrayNeedsUpdateForTags(
        organisationData.people,
        defaultOrganisationData.people
      )
    ) {
      const updatedPeople = await replaceDataItemReferences(
        'InfoPages',
        organisationData.people
          ?.map((person: any) => person._id)
          .filter((id: any) => id),
        'organisationPeople',
        organisationData._id
      );
      console.log('updated organisationPeople', updatedPeople);
    }

    // Update Organisation Type
    if (
      !deepEqual(
        organisationData.organisationType,
        defaultOrganisationData.organisationType
      )
    ) {
      const updatedOrganisationType = await replaceDataItemReferences(
        'InfoPages',
        organisationData?.organisationType?.map((type: any) => type._id),
        'organisationType',
        organisationData._id
      );
      console.log('updatedOrganisationType', updatedOrganisationType);
    }

    // Update Country Tag
    if (
      !arraysEqual(
        organisationData.countryTag,
        defaultOrganisationData.countryTag
      )
    ) {
      const updatedCountryTag = await replaceDataItemReferences(
        'InfoPages',
        [organisationData.countryTag?._id],
        'countryTag',
        organisationData._id
      );
      console.log('updatedCountryTag', updatedCountryTag);
    }

    // Update domains
    if (
      !arraysEqual(organisationData.domains, defaultOrganisationData.domains)
    ) {
      const updatedDomains = await replaceDataItemReferences(
        'InfoPages',
        organisationData.domains?.map((domain: any) => domain._id),
        'domains',
        organisationData._id
      );
      console.log('updated domains', updatedDomains);
    }

    // Update foresight methods
    if (
      !arraysEqual(organisationData.methods, defaultOrganisationData.methods)
    ) {
      const updatedMethods = await replaceDataItemReferences(
        'InfoPages',
        organisationData.methods?.map((method: any) => method._id),
        'methods',
        organisationData._id
      );
      console.log('updated methods', updatedMethods);
    }

    // Update member organisations
    if (
      !arraysEqual(
        organisationData.memberOrganisations,
        defaultOrganisationData.memberOrganisations
      )
    ) {
      const updatedMemberOrgs = await replaceDataItemReferences(
        'InfoPages',
        organisationData.memberOrganisations?.map((org: any) => org._id),
        'organisationHasMember',
        organisationData._id
      );
      console.log('updated member organisations', updatedMemberOrgs);
    }

    // Update member of organisations
    if (
      !arraysEqual(
        organisationData.memberOfOrganisations,
        defaultOrganisationData.memberOfOrganisations
      )
    ) {
      const updatedMemberOfOrgs = await replaceDataItemReferences(
        'InfoPages',
        organisationData.memberOfOrganisations?.map((org: any) => org._id),
        'organisationMemberOf',
        organisationData._id
      );
      console.log('updated member of organisations', updatedMemberOfOrgs);
    }

    // Update Activity
    if (
      !arraysEqual(organisationData.activity, defaultOrganisationData.activity)
    ) {
      const updatedActivity = await replaceDataItemReferences(
        'InfoPages',
        organisationData.activity?.map((activity: any) => activity._id),
        'activity',
        organisationData._id
      );
      console.log('updatedActivity', updatedActivity);
    }

    // Revalidate the cache for the page
    await revalidateDataItem(`/organisation/${organisationData.slug}`);

    setIsSaveInProgress(false);
  };
  // #endregion

  // #region handleProjectInternalLinks
  // console.log('postPages', postPages);
  const internalLinks = postPages
    ?.filter((page) => {
      return page?.data?.organisations?.find(
        (item: TagProps) =>
          item?.name === organisationData?.organisationTag?.name
      );
    })
    ?.map((link) => link?.data);
  console.log('internalLinks', internalLinks);
  // #endregion

  // #region handle save or create new page
  const { insertDataItem } = useWixModules(items);

  const createNewOrganisationPage = async () => {
    console.log('Creating New Person Info Page');
    setIsSaveInProgress(true);

    // Create new project info page
    const newOrganisationInfo = await insertDataItem({
      dataCollectionId: 'InfoPages',
      dataItem: {
        data: {
          title: organisationData?.organisationTag?.name,
          description: organisationData?.description,
          organisationEstablishedDate:
            organisationData?.organisationEstablishedDate,
          organisationProjectRoles: organisationData.projects.map(
            (project: any) => {
              return {
                project: project.name,
                role: project.arole,
              };
            }
          ),
          organisationPeopleRoles: organisationData.people.map(
            (person: any) => {
              return {
                person: person.name,
                role: person.arole,
              };
            }
          ),
          mediaFiles: organisationData.mediaFiles,
          slug:
            sanitizeTitleForSlug(organisationData?.organisationTag?.name) +
            '-' +
            generateUniqueHash(),
        },
      },
    });

    const newOrganisationInfoId = newOrganisationInfo?.dataItem?._id;
    const newOrganisationInfoSlug = newOrganisationInfo?.dataItem?.data?.slug;

    // #region Update Author Tag and Organisation Tag
    const organisationTag = organisationData?.organisationTag;
    const userTag = tags.find((tag) => tag.name === userDetails?.userName);

    if (newOrganisationInfoId && organisationTag && userTag) {
      const updatedAuthor = await replaceDataItemReferences(
        'InfoPages',
        [userTag?._id],
        'Author',
        newOrganisationInfoId
      );
      console.log('updatedAuthor', updatedAuthor);

      const updatedOrganisationTag = await replaceDataItemReferences(
        'InfoPages',
        [organisationTag?._id],
        'organisation',
        newOrganisationInfoId
      );
      console.log('updatedOrganisationTag', updatedOrganisationTag);
    }
    // #endregion

    // #region Update Page Type Tag
    if (organisationData.pageType?._id && newOrganisationInfoId) {
      const updatedPageTypes = await replaceDataItemReferences(
        'InfoPages',
        [organisationData.pageType?._id],
        'pageTypes',
        newOrganisationInfoId
      );
      console.log('updatedPageTypes', updatedPageTypes);
    }
    // #endregion

    // #region Update Organisation Type
    if (organisationData.organisationType?._id && newOrganisationInfoId) {
      const updatedOrganisationType = await replaceDataItemReferences(
        'InfoPages',
        [organisationData.organisationType?._id],
        'organisationType',
        newOrganisationInfoId
      );
      console.log('updatedOrganisationType', updatedOrganisationType);
    }
    // #endregion

    // #region Update Country Tag
    if (organisationData.countryTag?._id && newOrganisationInfoId) {
      const updatedCountryTag = await replaceDataItemReferences(
        'InfoPages',
        [organisationData.countryTag?._id],
        'countryTag',
        newOrganisationInfoId
      );
      console.log('updatedCountryTag', updatedCountryTag);
    }
    // #endregion

    // #region Update Foresight Methods
    if (organisationData.methods && newOrganisationInfoId) {
      const updatedMethods = await replaceDataItemReferences(
        'InfoPages',
        organisationData.methods?.map((method: any) => method._id),
        'methods',
        newOrganisationInfoId
      );
      console.log('updatedMethods', updatedMethods);
    }
    // #endregion

    // #region Update Domains
    if (organisationData.domains && newOrganisationInfoId) {
      const updatedDomains = await replaceDataItemReferences(
        'InfoPages',
        organisationData.domains?.map((domain: any) => domain._id),
        'domains',
        newOrganisationInfoId
      );
      console.log('updatedDomains', updatedDomains);
    }
    // #endregion

    // #region Update activity
    if (organisationData.activity && newOrganisationInfoId) {
      const updatedActivity = await replaceDataItemReferences(
        'InfoPages',
        organisationData.activity?.map((activity: any) => activity._id),
        'activity',
        newOrganisationInfoId
      );
      console.log('updatedActivity', updatedActivity);
    }
    // #endregion

    // #region Update Projects

    if (organisationData.projects && newOrganisationInfoId) {
      const updatedProjects = await replaceDataItemReferences(
        'InfoPages',
        organisationData.projects
          ?.map((org: any) => org._id)
          .filter((id: any) => id),
        'organisationProject',
        newOrganisationInfoId
      );
      console.log('updatedProjects', updatedProjects);
    }
    // #endregion

    // #region Update People
    if (organisationData.people && newOrganisationInfoId) {
      const updatedPeople = await replaceDataItemReferences(
        'InfoPages',
        organisationData.people
          ?.map((org: any) => org._id)
          .filter((id: any) => id),
        'organisationPeople',
        newOrganisationInfoId
      );
      console.log('updatedPeople', updatedPeople);
    }
    // #endregion

    // #region Update Member Organisations
    if (organisationData.memberOrganisations && newOrganisationInfoId) {
      const updatedMemberOrgs = await replaceDataItemReferences(
        'InfoPages',
        organisationData.memberOrganisations?.map((org: any) => org._id),
        'organisationHasMember',
        newOrganisationInfoId
      );
      console.log('updatedMemberOrgs', updatedMemberOrgs);
    }
    // #endregion

    // #region Update Member of Organisations
    if (organisationData.memberOfOrganisations && newOrganisationInfoId) {
      const updatedMemberOfOrgs = await replaceDataItemReferences(
        'InfoPages',
        organisationData.memberOfOrganisations?.map((org: any) => org._id),
        'organisationMemberOf',
        newOrganisationInfoId
      );
      console.log('updatedMemberOfOrgs', updatedMemberOfOrgs);
    }
    // #endregion

    // #region Update Organisation Tag
    // Check if object projectTag has changed
    if (
      !deepEqual(
        organisationData?.organisationTag,
        defaultOrganisationData?.organisationTag
      )
    ) {
      console.log('organisation Tag has changed');
      const updatedOrganisationTag = await updateDataItem(
        'Tags',
        organisationData?.organisationTag?._id,
        {
          _id: organisationData.organisationTag._id,
          ...organisationData.organisationTag,
          tagPageLink: '/organisation/' + newOrganisationInfoSlug,
        }
      );
      console.log('updatedOrganisationTag', updatedOrganisationTag);
    }
    // #endregion

    // #region Revalidate the cache for the page
    await revalidateDataItem(`/organisation/${newOrganisationInfoSlug}`);
    handleUserDataRefresh();
    router.push(`/organisation/${newOrganisationInfoSlug}`);
    setIsSaveInProgress(false);
    // #endregion
  };

  const saveOrCreateHandler = isNewPage
    ? createNewOrganisationPage
    : updateDataToServer;
  // #endregion

  // #region handle for when the page is newly created by associatig the pageType tag
  useEffect(() => {
    if (isLoggedIn && organisationData && isNewPage) {
      // const personTag = tags.find((tag) => tag.name === userDetails?.userName);
      // console.log('debug1->personTag', personTag);
      // if (personTag) {
      //   updatePersonDataOnKeyValue('personTag', personTag);
      // }
      const organisationInfoTag = tags.find(
        (tag) => tag.name === 'organisation info'
      );
      console.log('debug1->projectInfoTag', organisationInfoTag);
      if (organisationInfoTag) {
        updateOrganisationDataOnKeyValue('pageType', organisationInfoTag);
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
              setDefaultOrganisationData(organisationData);
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
                setOrganisationData(defaultOrganisationData);
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
        <Tag {...organisationData.pageType} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            {new Date(organisationData.registrationDate).toLocaleString()}
          </Typography>
          {/* Additional meta content */}
        </section>
      </div>
      {/* Organisation Header */}
      <HeaderComponent
        organisation={organisationData}
        isEditModeOn={isEditModeOn}
        tags={tags}
        updateOrganisationData={updateOrganisationData}
        updateOrganisationDataOnKeyValue={updateOrganisationDataOnKeyValue}
        isNewPage={isNewPage}
        handleTagCreated={handleTagCreated}
        setValidationState={updateValidationState}
      />
      {/* Organisation Description */}
      <PersonDescriptionComponent
        placeholder="Type or paste a short description"
        description={organisationData.description}
        isEditModeOn={isEditModeOn}
        handleUpdate={(value) =>
          updateOrganisationDataOnKeyValue('description', value)
        }
      />
      {/* People */}
      <AffiliationsComponent
        placeholderRole="Optionally prefixed by roles"
        placeholderTag="Add one or more person tags"
        afiliations={organisationData.people}
        tagListTitle="Affiliates"
        isEditModeOn={isEditModeOn}
        updatePersonDataAffiliations={(value) =>
          updateOrganisationDataOnKeyValue('people', value)
        }
        tags={tags.filter((tag) => tag?.tagType === 'person')}
        handleTagCreated={handleTagCreated}
      />
      {/* Foresight Methods */}
      <TagListComponent
        placeholder="Add one or more foresight method tags"
        tagList={organisationData.methods}
        tagListTitle="Foresight Methods"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'foresight method')}
        selectedValues={organisationData.methods?.map(
          (method: any) => method?.name
        )}
        updatePostData={(value) =>
          updateOrganisationDataOnKeyValue('methods', value)
        }
        tagType="foresight method"
        handleTagCreated={handleTagCreated}
      />
      {/* Domains */}
      <TagListComponent
        placeholder="Add one or more domain tags"
        tagList={organisationData.domains}
        tagListTitle="Domains"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'domain')}
        selectedValues={organisationData.domains?.map(
          (domain: any) => domain?.name
        )}
        updatePostData={(value) =>
          updateOrganisationDataOnKeyValue('domains', value)
        }
        tagType="domain"
        handleTagCreated={handleTagCreated}
      />
      {/* Projects */}
      <AffiliationsComponent
        placeholderRole="Optionally prefixed by your role"
        placeholderTag="Add one or more project tags (that the organisation is/was involved into)"
        afiliations={organisationData.projects}
        tagListTitle="Projects"
        isEditModeOn={isEditModeOn}
        updatePersonDataAffiliations={(value) =>
          updateOrganisationDataOnKeyValue('projects', value)
        }
        tags={tags.filter((tag) => tag?.tagType === 'project')}
        handleTagCreated={handleTagCreated}
      />
      {/* Member Organisations */}
      <TagListComponent
        placeholder="Add one or more organisation tags (affiliated to this one)"
        tagList={organisationData.memberOrganisations}
        tagListTitle="Members"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'organisation')}
        selectedValues={organisationData.memberOrganisations?.map(
          (domain: any) => domain?.name
        )}
        updatePostData={(value) =>
          updateOrganisationDataOnKeyValue('memberOrganisations', value)
        }
        tagType="domain"
        handleTagCreated={handleTagCreated}
      />
      {/* Member of Organisations */}
      <TagListComponent
        placeholder="Add one or more organisation tags (that this one is affiliated to)"
        tagList={organisationData.memberOfOrganisations}
        tagListTitle="Member of"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'organisation')}
        selectedValues={organisationData.memberOfOrganisations?.map(
          (domain: any) => domain?.name
        )}
        updatePostData={(value) =>
          updateOrganisationDataOnKeyValue('memberOfOrganisations', value)
        }
        tagType="domain"
        handleTagCreated={handleTagCreated}
      />
      {/* Internal Links */}
      <MiniPagesListComponentPost
        internalLinks={internalLinks}
        isEditModeOn={isEditModeOn}
        handleUpdatePostData={(value) =>
          updateOrganisationDataOnKeyValue('internalLinks', value)
        }
      />
      {/* Files */}
      <FilesComponent
        isEditModeOn={isEditModeOn}
        mediaFiles={organisationData.mediaFiles}
        updatePostDataBasedOnKeyValue={updateOrganisationDataOnKeyValue}
      />
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

export default OrganisationPageComponent;
