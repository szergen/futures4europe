'use client';
import classNames from 'classnames';
import React, { use, useEffect, useState } from 'react';
import style from './PersonPageComponent.module.css';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
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
import { useRouter } from 'next/navigation';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { revalidateDataItem, updateDataItem } from '@app/wixUtils/client-side';
import { checkIfArrayNeedsUpdate } from '../PostPageComponent/PostPageComponent.utils';
import { useWixModules } from '@wix/sdk-react';
import { items } from '@wix/data';
import MiniPagesListComponentPost from '../shared-page-components/MiniPagesListComponentPost/MiniPagesListComponentPost';

function PersonPageComponent({ pageTitle, person, isNewPage }: any) {
  // person = person || mockPerson(pageTitle);
  person = { ...mockPerson(pageTitle), ...person };

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
  // console.log('debug1->tags', tags);
  const [isPageOwnedByUser, setIsPageOwnedByUser] = useState(false);
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  // #endregion

  // #region check if page is owned by user
  useEffect(() => {
    if (!isLoggedIn) return;
    const userDetailsIds = [userDetails.contactId, userDetails.accountId];
    userDetailsIds.find((id) => {
      if (person?.data?._owner === id) {
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
  person = {
    ...person,
    title: person?.data?.title,
    pageType: person?.data?.pageTypes[0],
    updatedDate: person?.data?._updatedDate,
    personTag: person?.data?.person[0],
    activity: person?.data?.activity,
    countryTag: person?.data?.countryTag[0],
    description: person?.data?.description,
    methods: person?.data?.methods,
    domains: person?.data?.domains,
    personType: person?.data?.personType,
    currentAfiliations: person?.data?.personOrganisationRoles?.map(
      (item: any) => {
        return {
          ...person?.data?.personOrganisation?.find(
            (org: any) => org.name === item.organisation
          ),
          arole: item.role,
        };
      }
    ),
    formerAfiliations: person?.data?.personOrganisationRolesFormer?.map(
      (item: any) => {
        return {
          ...person?.data?.personOrganisationFormer?.find(
            (org: any) => org.name === item.organisation
          ),
          arole: item.role,
        };
      }
    ),
    projectsCoordindation: person?.data?.personProjectCoordonation,
    projectsParticipation: person?.data?.personProjectParticipation,
  };
  // #endregion

  // #region set default post data and data for editing
  const [defaultPersonData, setDefaultPersonData] = useState(person);
  const [personData, setPersonData] = useState(person);
  // #endregion

  // #region Methods for updating person data
  const updatePersonData = (newData: any) => {
    setPersonData((prevData: any) => ({ ...prevData, ...newData }));
  };

  const updatePersonDataOnKeyValue = (key: string, value: any) => {
    setPersonData((prevData: any) => ({ ...prevData, [key]: value }));
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
      personData.dataCollectionId,
      personData._id
    );
    setIsSaveInProgress(true);
    // Update Subtitle
    // if (
    //   personData.subtitle !== personData.subtitle
    //   // postData.title !== defaultPostData.title ||
    //   // checkIfArrayNeedsUpdate(
    //   //   postData.contentText,
    //   //   defaultPostData.contentText
    //   // ) ||
    //   // checkIfArrayNeedsUpdate(
    //   //   postData.contentImages,
    //   //   defaultPostData.contentImages
    //   // ) ||
    //   // postData.eventDate?.start !== defaultPostData.eventDate?.start ||
    //   // postData.eventDate?.end !== defaultPostData.eventDate?.end ||
    //   // postData.eventRegistration !== defaultPostData.eventRegistration ||
    //   // postData.projectResultMedia?.url !==
    //   //   defaultPostData.projectResultMedia?.url ||
    //   // postData.projectResultMedia?.displayName !==
    //   //   defaultPostData.projectResultMedia?.displayName
    // ) {
    //   const updatedItem = await updateDataItem(
    //     personData.dataCollectionId,
    //     personData._id,
    //     {
    //       _id: personData._id,
    //       ...personData.data,
    //       title: personData?.title,
    //       subtitle: personData?.subtitle,
    //       // postContentRIch1: postData?.contentText[0],
    //       // postContentRIch2: postData?.contentText[1],
    //       // postContentRIch3: postData?.contentText[2],
    //       // postContentRIch4: postData?.contentText[3],
    //       // postContentRIch5: postData?.contentText[4],
    //       // postContentRIch6: postData?.contentText[5],
    //       // postContentRIch7: postData?.contentText[6],
    //       // postContentRIch8: postData?.contentText[7],
    //       // postContentRIch9: postData?.contentText[8],
    //       // postContentRIch10: postData?.contentText[9],
    //       // postImage1: postData?.contentImages[0],
    //       // postImage2: postData?.contentImages[1],
    //       // postImage3: postData?.contentImages[2],
    //       // postImage4: postData?.contentImages[3],
    //       // postImage5: postData?.contentImages[4],
    //       // postImage6: postData?.contentImages[5],
    //       // postImage7: postData?.contentImages[6],
    //       // postImage8: postData?.contentImages[7],
    //       // postImage9: postData?.contentImages[8],
    //       // postImage10: postData?.contentImages[9],
    //       // eventStartDate: { $date: postData?.eventDate?.start },
    //       // eventEndDate: { $date: postData?.eventDate?.end },
    //       // eventRegistration: postData?.eventRegistration,
    //       // projectResultMedia: postData?.projectResultMedia,
    //       // pageTypes: postData?.pageType,
    //     }
    //   );
    //   console.log('updatedItem', updatedItem);
    // }
    // Update Page Type
    // if (postData.pageType?._id !== defaultPostData.pageType?._id) {
    //   const updatedPageTypes = await replaceDataItemReferences(
    //     'PostPages',
    //     [postData.pageType?._id],
    //     'pageTypes',
    //     postData._id
    //   );
    //   console.log('updatedPageTypes', updatedPageTypes);
    // }
    // Update Country Tag
    // if (postData.countryTag?._id !== defaultPostData.countryTag?._id) {
    //   const updatedCountryTag = await replaceDataItemReferences(
    //     'PostPages',
    //     [postData.countryTag?._id],
    //     'countryTag',
    //     postData._id
    //   );
    //   console.log('updatedCountryTag', updatedCountryTag);
    // }
    // Update People Tags
    // if (checkIfArrayNeedsUpdate(postData.people, defaultPostData.people)) {
    //   const updatedPeople = await replaceDataItemReferences(
    //     'PostPages',
    //     postData?.people.map((person: any) => person._id),
    //     'people',
    //     postData?._id
    //   );
    //   console.log('updatedPeople', updatedPeople);
    // }
    // Update Foresight Methods
    // if (
    //   checkIfArrayNeedsUpdate(
    //     postData.foreSightMethods,
    //     defaultPostData.foreSightMethods
    //   )
    // ) {
    //   const updatedMethods = await replaceDataItemReferences(
    //     'PostPages',
    //     postData.foreSightMethods?.map((method: any) => method._id),
    //     'methods',
    //     postData._id
    //   );
    //   console.log('updatedMethods', updatedMethods);
    // }
    // Update Domains
    // if (checkIfArrayNeedsUpdate(postData.domains, defaultPostData.domains)) {
    //   const updatedDomains = await replaceDataItemReferences(
    //     'PostPages',
    //     postData.domains?.map((domain: any) => domain._id),
    //     'domains',
    //     postData._id
    //   );
    //   console.log('updatedDomains', updatedDomains);
    // }
    // Update Projects
    // if (checkIfArrayNeedsUpdate(postData.project, defaultPostData.project)) {
    //   const updatedProjects = await replaceDataItemReferences(
    //     'PostPages',
    //     postData.project?.map((project: any) => project._id),
    //     'projects',
    //     postData._id
    //   );
    //   console.log('updatedProjects', updatedProjects);
    // }
    // Update Organisation
    // if (
    //   checkIfArrayNeedsUpdate(
    //     postData.organisation,
    //     defaultPostData.organisation
    //   )
    // ) {
    //   const updatedOrganisations = await replaceDataItemReferences(
    //     'PostPages',
    //     postData.organisation?.map((organisation: any) => organisation._id),
    //     'organisations',
    //     postData._id
    //   );
    //   console.log('updatedOrganisations', updatedOrganisations);
    // }
    // Update Internal Links
    // if (
    //   checkIfArrayNeedsUpdate(
    //     postData.internalLinks,
    //     defaultPostData.internalLinks
    //   )
    // ) {
    //   const updatedInternalLinks = await replaceDataItemReferences(
    //     'PostPages',
    //     postData.internalLinks?.map((link: any) => link._id),
    //     'internalLinks',
    //     postData._id
    //   );
    //   console.log('updatedInternalLinks', updatedInternalLinks);
    // }
    // Update Moderators
    // if (
    //   checkIfArrayNeedsUpdate(
    //     postData.eventModerators,
    //     defaultPostData.eventModerators
    //   )
    // ) {
    //   const updatedModerators = await replaceDataItemReferences(
    //     'PostPages',
    //     postData.eventModerators?.map((moderator: any) => moderator._id),
    //     'moderators',
    //     postData._id
    //   );
    //   console.log('updatedModerators', updatedModerators);
    // }

    // Update Speakers
    // if (
    //   checkIfArrayNeedsUpdate(
    //     postData?.eventSpeakers,
    //     defaultPostData?.eventSpeakers
    //   )
    // ) {
    //   const updatedSpeakers = await replaceDataItemReferences(
    //     'PostPages',
    //     postData.eventSpeakers?.map((speaker: any) => speaker._id),
    //     'speakers',
    //     postData._id
    //   );
    //   console.log('updatedSpeakers', updatedSpeakers);
    // }

    // Revalidate the cache for the page
    await revalidateDataItem(`/person/${personData.title.replace(/ /g, '_')}`);

    setIsSaveInProgress(false);
  };
  // #endregion

  // #region handle for when the page is newly created
  // const { insertDataItem } = useWixModules(items);

  // useEffect(() => {
  //   console.log('defaultPersonData', defaultPersonData);
  //   // console.log('personData', personData);
  // }, [defaultPersonData]);

  // #region handlePersonInternalLinks
  console.log('postPages', postPages);
  const internalLinks = postPages
    ?.filter((page) => {
      return page?.data?.author?.find(
        (item: TagProps) => item?.name === personData?.personTag?.name
      );
    })
    ?.map((link) => link?.data);
  console.log('internalLinks', internalLinks);
  // #endregion

  return (
    <div className={classNames(style.personContainer)}>
      {/* Edit buttons */}
      {isPageOwnedByUser && (
        <div>
          <button
            onClick={() => {
              isEditModeOn && updateDataToServer();
              setIsEditModeOn(!isEditModeOn);
              setDefaultPersonData(personData);
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
              ? 'Create Post'
              : 'Save Changes'}
          </button>
          {isEditModeOn && (
            <button
              onClick={() => {
                setPersonData(defaultPersonData);
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
      {/* Page Type Tag NON editable*/}
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
      <HeaderComponent
        person={personData}
        isEditModeOn={isEditModeOn}
        updatePersonData={updatePersonData}
        updatePersonDataOnKeyValue={updatePersonDataOnKeyValue}
        tags={tags}
        handleTagCreated={handleTagCreated}
        setValidationState={updateValidationState}
      />
      {/* Person Description */}
      <PersonDescriptionComponent
        description={personData.description}
        isEditModeOn={isEditModeOn}
        handleUpdate={(value) =>
          updatePersonDataOnKeyValue('description', value)
        }
      />

      {/* Person Workplace/Current Affiliations*/}
      <AffiliationsComponent
        afiliations={personData.currentAfiliations}
        current
        isEditModeOn={isEditModeOn}
        updatePersonDataAffiliations={(value) =>
          updatePersonDataOnKeyValue('currentAfiliations', value)
        }
        tags={tags.filter((tag) => tag?.tagType === 'organisation')}
        handleTagCreated={handleTagCreated}
      />

      {/* Foresight Methods */}
      <TagListComponent
        tagList={personData.methods}
        tagListTitle="Foresight Methods"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'foresight method')}
        selectedValues={personData.foreSightMethods?.map(
          (method: any) => method?.name
        )}
        updatePostData={(value) =>
          updatePersonDataOnKeyValue('foreSightMethods', value)
        }
        tagType="foresight method"
        handleTagCreated={handleTagCreated}
      />
      {/* Domains */}
      <TagListComponent
        tagList={personData.domains}
        tagListTitle="Domains"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'domain')}
        selectedValues={personData.domains?.map((domain: any) => domain?.name)}
        updatePostData={(value) => updatePersonDataOnKeyValue('domains', value)}
        tagType="domain"
        handleTagCreated={handleTagCreated}
      />
      {/* Projects Coordination */}
      <TagListComponent
        tagList={personData.projectsCoordindation}
        tagListTitle="Project Coordination"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'project')}
        selectedValues={personData.projectsCoordindation?.map(
          (project: any) => project?.name
        )}
        updatePostData={(value) =>
          updatePersonDataOnKeyValue('projectsCoordindation', value)
        }
        tagType="project"
      />
      {/* Projects Participation */}
      <TagListComponent
        tagList={personData.projectsParticipation}
        tagListTitle="Project Participation"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'project')}
        selectedValues={personData.projectsParticipation?.map(
          (project: any) => project?.name
        )}
        updatePostData={(value) =>
          updatePersonDataOnKeyValue('projectsParticipation', value)
        }
        tagType="project"
      />
      {/* Internal Links */}
      <MiniPagesListComponentPost
        internalLinks={internalLinks}
        title="Posts"
        // projectResults={projectResults}
        // events={events}
      />
      {/* Former Affiliations */}
      <section className={classNames(style.affiliations)}>
        <AffiliationsComponent
          afiliations={personData.formerAfiliations}
          isEditModeOn={isEditModeOn}
          updatePersonDataAffiliations={(value) =>
            updatePersonDataOnKeyValue('formerAfiliations', value)
          }
          tags={tags.filter((tag) => tag?.tagType === 'organisation')}
          handleTagCreated={handleTagCreated}
        />
      </section>
      {/* Files */}
      <FilesComponent files={person.files} />
      {/* External Links */}
      {/* <ExternalLinksComponent links={person.links} /> */}
    </div>
  );
}

export default PersonPageComponent;
