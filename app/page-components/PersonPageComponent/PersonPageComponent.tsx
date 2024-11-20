'use client';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import style from './PersonPageComponent.module.css';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import PersonDescriptionComponent from '../shared-page-components/DescriptionComponent/DescriptionComponent';
import AffiliationsComponent from './components/AffiliationsComponent/AffiliationsComponent';
import TagListComponent from '../shared-page-components/TagListComponent/TagListComponent';
import FilesComponent from '../shared-page-components/FilesComponent/FilesComponent';
import { mockPerson } from '@app/mocks/pagesMocks';
import { useRouter } from 'next/navigation';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import {
  bulkInsertDataItemReferences,
  bulkInsertItems,
  bulkRemoveItems,
  replaceDataItemReferences,
  revalidateDataItem,
  updateDataItem,
} from '@app/wixUtils/client-side';
import {
  checkIfArrayNeedsUpdateForTags,
  generateUniqueHash,
} from '../PostPageComponent/PostPageComponent.utils';
import { useWixModules } from '@wix/sdk-react';
import { items } from '@wix/data';
import MiniPagesListComponentPost from '../shared-page-components/MiniPagesListComponentPost/MiniPagesListComponentPost';
import {
  arraysEqual,
  deepEqual,
  sanitizeTitleForSlug,
} from '../PageComponents.utils';
import { Modal } from 'flowbite-react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import { members } from '@wix/members';
import { refetchInfoPages, refetchTags } from '@app/utils/refetch-utils';

function PersonPageComponent({ pageTitle, person, isNewPage }: any) {
  // person = person || mockPerson(pageTitle);
  person = { ...mockPerson(pageTitle), ...person };

  const router = useRouter();

  // #region useAuth hook for grabbing user details and tags needed for editing
  const {
    isLoggedIn,
    userDetails,
    tags,
    tagsFetched,
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
    if (!isLoggedIn || !tagsFetched) return;
    // #region Check PageOwner property from Wix Data, hardcoding ownership
    const permissionCondition =
      personData.pageOwner?.length > 0 &&
      !!userDetails?.userTag?.name &&
      !!personData.pageOwner?.find(
        (owner: any) => owner?._id === userDetails?.userTag?._id
      );

    console.log('debug1->permissionCondition', permissionCondition);

    if (permissionCondition) {
      setIsPageOwnedByUser(true);
      return;
    }
    // #endregion

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
  }, [isLoggedIn, tagsFetched, userDetails?.userTag]);
  // #endregion

  // #region Handle affiliations
  console.log('debug111->person.affiliationsItems', person?.affiliationsItems);

  const projectsCoordindation = person?.affiliationsItems
    ?.filter((item: any) => item?.extraIdentifier === 'coordination')
    .map((item: any) => item?.projectTag);

  const projectsParticipation = person?.affiliationsItems
    ?.filter((item: any) => item?.extraIdentifier === 'participation')
    .map((item: any) => item?.projectTag);

  const currentAfiliations = person?.affiliationsItems
    ?.filter((item: any) => item?.extraIdentifier === 'current')
    .map((item: any) => {
      return {
        ...item?.organisationTag,
        arole: item?.role,
      };
    });

  const formerAfiliations = person?.affiliationsItems
    ?.filter((item: any) => item?.extraIdentifier === 'former')
    .map((item: any) => {
      return {
        ...item?.organisationTag,
        arole: item?.role,
      };
    });

  // #endregion

  // #region Overwrite mock data with Wix data
  person = {
    ...person,
    title: person?.data?.title, // done
    pageType: person?.data?.pageTypes[0], // NON editable
    updatedDate: person?.data?._updatedDate, // NON editable
    personTag: person?.data?.person[0],
    activity: person?.data?.activity, // done
    countryTag: person?.data?.countryTag[0], //done
    description: person?.data?.description, //done
    methods: person?.data?.methods, // done
    domains: person?.data?.domains, // done
    personType: person?.data?.personType, // ???
    // currentAfiliations: person?.data?.personOrganisationRoles?.map(
    //   (item: any) => {
    //     return {
    //       ...person?.data?.personOrganisation?.find(
    //         (org: any) => org.name === item.organisation
    //       ),
    //       arole: item.role,
    //     };
    //   }
    // ), //done
    currentAfiliations: currentAfiliations, //done
    // formerAfiliations: person?.data?.personOrganisationRolesFormer?.map(
    //   (item: any) => {
    //     return {
    //       ...person?.data?.personOrganisationFormer?.find(
    //         (org: any) => org.name === item.organisation
    //       ),
    //       arole: item.role,
    //     };
    //   }
    // ), //done
    formerAfiliations: formerAfiliations, //done
    // projectsCoordindation: person?.data?.personProjectCoordonation, // done
    projectsCoordindation: projectsCoordindation, // done
    // projectsParticipation: person?.data?.personProjectParticipation, // done
    projectsParticipation: projectsParticipation, // done
    mediaFiles: person?.data?.mediaFiles, // done
    linkedinLink: person?.data?.linkedinLink,
    websiteLink: person?.data?.websiteLink,
    researchGateLink: person?.data?.researchGateLink,
    orcidLink: person?.data?.orcidLink,
    slug: person?.data?.slug,
    pageOwner: person?.data?.pageOwner,
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
  const { updateMember } = useWixModules(members);

  const updateDataToServer = async () => {
    console.log(
      'Updating Page from',
      personData.dataCollectionId,
      personData._id
    );
    setIsSaveInProgress(true);

    // #region Update Person Tag
    // Check if object personTag has changed
    if (!deepEqual(personData.personTag, defaultPersonData.personTag)) {
      console.log('personTag has  changed');
      const updatedPersonTag = await updateDataItem(
        'Tags',
        personData.personTag._id,
        {
          _id: personData.personTag._id,
          ...personData.personTag,
        }
      );
      console.log('updatedPersonTag', updatedPersonTag);
      const nickName = updatedPersonTag?.dataItem?.data?.name;
      console.log('nickName', nickName);
      if (nickName !== userDetails.userName) {
        console.log('Updating Nickname');
        const member = await updateMember(userDetails.contactId, {
          profile: {
            nickname: nickName,
          },
        });
        console.log('gotMember', member);
      }
    }
    // #endregion

    // Update page fields
    if (
      personData.description !== defaultPersonData.description ||
      !arraysEqual(
        personData.currentAfiliations,
        defaultPersonData.currentAfiliations
      ) ||
      !arraysEqual(
        personData.formerAfiliations,
        defaultPersonData.formerAfiliations
      ) ||
      personData.personTag.name !== defaultPersonData.personTag.name ||
      personData?.data?.linkedinLink !==
        defaultPersonData?.data?.linkedinLink ||
      personData?.data?.websiteLink !== defaultPersonData?.data?.websiteLink ||
      personData?.data?.researchGateLink !==
        defaultPersonData?.data?.researchGateLink ||
      personData?.data?.orcidLink !== defaultPersonData?.data?.orcidLink
    ) {
      const updatedItem = await updateDataItem(
        personData.dataCollectionId,
        personData._id,
        {
          _id: personData._id,
          ...personData.data,
          title: personData.personTag.name,
          description: personData?.description,
          // personOrganisationRoles: personData?.currentAfiliations?.map(
          //   (item: any) => {
          //     return {
          //       organisation: item.name,
          //       role: item.arole,
          //     };
          //   }
          // ),
          // personOrganisationRolesFormer: personData?.formerAfiliations?.map(
          //   (item: any) => {
          //     return {
          //       organisation: item.name,
          //       role: item.arole,
          //     };
          //   }
          // ),
          mediaFiles: personData.mediaFiles,
          linkedinLink: personData?.data?.linkedinLink,
          websiteLink: personData?.data?.websiteLink,
          researchGateLink: personData?.data?.researchGateLink,
          orcidLink: personData?.data?.orcidLink,
        }
      );
      console.log('updatedItem', updatedItem);
    }

    // Update personOrganisation
    if (
      checkIfArrayNeedsUpdateForTags(
        personData.currentAfiliations,
        defaultPersonData.currentAfiliations
      )
    ) {
      // console.log('Updating Organisations');
      // console.log(
      //   'personData.currentAfiliations',
      //   personData.currentAfiliations
      // );
      // const updatedOrganisations = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.currentAfiliations
      //     ?.map((org: any) => org?._id)
      //     .filter((id: any) => id),
      //   'personOrganisation',
      //   personData._id
      // );
      // console.log('updatedOrganisations', updatedOrganisations);
      console.log('debug111-> updating current affiliations');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'current'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.currentAfiliations?.length > 0) {
        const newAffiliationsObject = personData.currentAfiliations
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                organisationTag: item,
                role: item.arole,
                extraIdentifier: 'current',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.organisationTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedOrganisationsCurrent = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedOrganisationsCurrent',
          updatedOrganisationsCurrent
        );
      }
    }

    // Update personOrganisationFormer
    if (
      checkIfArrayNeedsUpdateForTags(
        personData.formerAfiliations,
        defaultPersonData.formerAfiliations
      )
    ) {
      // const updatedOrganisationsFormer = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.formerAfiliations
      //     ?.map((org: any) => org._id)
      //     .filter((id: any) => id),
      //   'personOrganisationFormer',
      //   personData._id
      // );
      console.log('debug111-> updating former affiliations');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'former'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.formerAfiliations?.length > 0) {
        const newAffiliationsObject = personData.formerAfiliations
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                organisationTag: item,
                role: item.arole,
                extraIdentifier: 'former',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.organisationTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedOrganisationsFormer = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedOrganisationsFormer',
          updatedOrganisationsFormer
        );
      }
    }

    // Update Country Tag
    if (personData.countryTag?._id !== defaultPersonData.countryTag?._id) {
      const updatedCountryTag = await replaceDataItemReferences(
        'InfoPages',
        [personData.countryTag?._id],
        'countryTag',
        personData._id
      );
      console.log('updatedCountryTag', updatedCountryTag);
    }

    // Update Foresight Methods
    if (
      checkIfArrayNeedsUpdateForTags(
        personData.foreSightMethods,
        defaultPersonData.foreSightMethods
      )
    ) {
      const updatedMethods = await replaceDataItemReferences(
        'InfoPages',
        personData.foreSightMethods?.map((method: any) => method._id),
        'methods',
        personData._id
      );
      console.log('updatedMethods', updatedMethods);
    }
    // Update Domains
    if (
      checkIfArrayNeedsUpdateForTags(
        personData.domains,
        defaultPersonData.domains
      )
    ) {
      const updatedDomains = await replaceDataItemReferences(
        'InfoPages',
        personData.domains?.map((domain: any) => domain._id),
        'domains',
        personData._id
      );
      console.log('updatedDomains', updatedDomains);
    }
    // Update Activity
    if (
      checkIfArrayNeedsUpdateForTags(
        personData.activity,
        defaultPersonData.activity
      )
    ) {
      const updateAcvitiy = await replaceDataItemReferences(
        'InfoPages',
        personData.activity?.map((activity: any) => activity._id),
        'activity',
        personData._id
      );
      console.log('updateAcvitiy', updateAcvitiy);
    }

    // Update projectsCoordindation
    if (
      checkIfArrayNeedsUpdateForTags(
        personData.projectsCoordindation,
        defaultPersonData.projectsCoordindation
      )
    ) {
      // const updateProjectsCoordindation = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.projectsCoordindation?.map((projects: any) => projects._id),
      //   'personProjectCoordonation',
      //   personData._id
      // );
      // console.log('updateProjectsCoordindation', updateProjectsCoordindation);
      console.log('debug111-> updating project Coordination');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'coordination'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.projectsCoordindation?.length > 0) {
        const newAffiliationsObject = personData.projectsCoordindation
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                projectTag: item,
                extraIdentifier: 'coordination',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.projectTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedProjectsCoordonation = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedProjectsCoordonation',
          updatedProjectsCoordonation
        );
      }
    }

    // Update projectsParticipation
    if (
      checkIfArrayNeedsUpdateForTags(
        personData.projectsParticipation,
        defaultPersonData.projectsParticipation
      )
    ) {
      // const updateProjectsParticipation = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.projectsParticipation?.map((projects: any) => projects._id),
      //   'personProjectParticipation',
      //   personData._id
      // );
      // console.log('updateProjectsParticipation', updateProjectsParticipation);
      console.log('debug111-> updating project participation');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'participation'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.projectsParticipation?.length > 0) {
        const newAffiliationsObject = personData.projectsParticipation
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                projectTag: item,
                extraIdentifier: 'participation',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.projectTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedProjectsParticipation = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedProjectsParticipation',
          updatedProjectsParticipation
        );
      }
    }

    // Revalidate the cache for the page
    await refetchTags();
    await refetchInfoPages();
    await revalidateDataItem(`/person/${personData.slug}`);

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
  // console.log('postPages', postPages);
  const internalLinks = postPages
    ?.filter((page) => {
      return (
        page?.data?.author?.find(
          (item: TagProps) => item?.name === personData?.personTag?.name
        ) ||
        page?.data?.projectResultAuthor?.find(
          (item: TagProps) => item?.name === personData?.personTag?.name
        )
      );
    })
    ?.map((link) => link?.data);
  console.log('internalLinks', internalLinks);
  // #endregion

  // #region for when the page is newly created
  const { insertDataItem } = useWixModules(items);

  const createNewPersonPage = async () => {
    console.log('Creating New Person Info Page');
    setIsSaveInProgress(true);

    // Create new person info page
    const newPersonInfo = await insertDataItem({
      dataCollectionId: 'InfoPages',
      dataItem: {
        data: {
          title: personData?.personTag?.name,
          description: personData?.description,
          // personOrganisationRoles: personData?.currentAfiliations?.map(
          //   (item: any) => {
          //     return {
          //       organisation: item?.name,
          //       role: item?.arole,
          //     };
          //   }
          // ),
          // personOrganisationRolesFormer: personData?.formerAfiliations?.map(
          //   (item: any) => {
          //     return {
          //       organisation: item?.name,
          //       role: item?.arole,
          //     };
          //   }
          // ),
          mediaFiles: personData?.mediaFiles,
          linkedinLink: personData?.data?.linkedinLink,
          websiteLink: personData?.data?.websiteLink,
          researchGateLink: personData?.data?.researchGateLink,
          orcidLink: personData?.data?.orcidLink,
          slug:
            sanitizeTitleForSlug(personData?.personTag?.name) +
            '-' +
            generateUniqueHash(),
          // subtitle: personData.personTag.tagLine,
        },
      },
    });

    const newPersonInfoId = newPersonInfo?.dataItem?._id;
    const newPersonInfoSlug = newPersonInfo?.dataItem?.data?.slug;

    // #region Update Author Tag and Person Tag
    const personTag = tags.find(
      (tag) => tag.name === personData?.personTag?.name
    );

    if (newPersonInfoId && personTag) {
      const updatedAuthor = await replaceDataItemReferences(
        'InfoPages',
        [personTag?._id],
        'Author',
        newPersonInfoId
      );
      console.log('updatedAuthor', updatedAuthor);

      const updatedPersonTag = await replaceDataItemReferences(
        'InfoPages',
        [personTag?._id],
        'person',
        newPersonInfoId
      );
      console.log('updatedPersonTag', updatedPersonTag);

      const updatedPageOwner = await replaceDataItemReferences(
        'InfoPages',
        [personTag?._id],
        'pageOwner',
        newPersonInfoId
      );
      console.log('updatedPageOwner', updatedPageOwner);

      console.log('updatedPersonTag', updatedPersonTag);
      const nickName = updatedPersonTag?.dataItem?.data?.name;
      if (nickName !== userDetails.userName) {
        const member = await updateMember(userDetails.contactId, {
          profile: {
            nickname: nickName,
          },
        });
        console.log('gotMember', member);
      }
    }
    // #endregion

    // #region Update Page Type Tag
    if (personData.pageType?._id && newPersonInfoId) {
      const updatedPageTypes = await replaceDataItemReferences(
        'InfoPages',
        [personData.pageType?._id],
        'pageTypes',
        newPersonInfoId
      );
      console.log('updatedPageTypes', updatedPageTypes);
    }
    // #endregion

    // #region Update Current Afiliations
    if (personData.currentAfiliations && newPersonInfoId) {
      // const updatedOrganisations = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.currentAfiliations
      //     ?.map((org: any) => org._id)
      //     .filter((id: any) => id),
      //   'personOrganisation',
      //   newPersonInfoId
      // );
      // console.log('updatedOrganisations', updatedOrganisations);
      console.log('debug111-> updating current affiliations');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'current'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.currentAfiliations?.length > 0) {
        const newAffiliationsObject = personData.currentAfiliations
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                organisationTag: item,
                role: item.arole,
                extraIdentifier: 'current',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.organisationTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedOrganisationsCurrent = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedOrganisationsCurrent',
          updatedOrganisationsCurrent
        );
      }
    }
    // #endregion

    // #region Update Former Afiliations
    if (personData.formerAfiliations && newPersonInfoId) {
      // const updatedOrganisationsFormer = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.formerAfiliations
      //     ?.map((org: any) => org._id)
      //     .filter((id: any) => id),
      //   'personOrganisationFormer',
      //   newPersonInfoId
      // );
      // console.log('updatedOrganisationsFormer', updatedOrganisationsFormer);
      console.log('debug111-> updating former affiliations');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'former'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.formerAfiliations?.length > 0) {
        const newAffiliationsObject = personData.formerAfiliations
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                organisationTag: item,
                role: item.arole,
                extraIdentifier: 'former',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.organisationTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedOrganisationsFormer = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedOrganisationsFormer',
          updatedOrganisationsFormer
        );
      }
    }
    // #endregion

    // #region Update Country Tag
    if (personData.countryTag?._id && newPersonInfoId) {
      const updatedCountryTag = await replaceDataItemReferences(
        'InfoPages',
        [personData.countryTag?._id],
        'countryTag',
        newPersonInfoId
      );
      console.log('updatedCountryTag', updatedCountryTag);
    }
    // #endregion

    // #region Update Foresight Methods
    if (personData.methods && newPersonInfoId) {
      const updatedMethods = await replaceDataItemReferences(
        'InfoPages',
        personData.methods?.map((method: any) => method._id),
        'methods',
        newPersonInfoId
      );
      console.log('updatedMethods', updatedMethods);
    }
    // #endregion

    // #region Update Domains
    if (personData.domains && newPersonInfoId) {
      const updatedDomains = await replaceDataItemReferences(
        'InfoPages',
        personData.domains?.map((domain: any) => domain._id),
        'domains',
        newPersonInfoId
      );
      console.log('updatedDomains', updatedDomains);
    }
    // #endregion

    // #region Update Activity
    if (personData.activity && newPersonInfoId) {
      const updateAcvitiy = await replaceDataItemReferences(
        'InfoPages',
        personData.activity?.map((activity: any) => activity._id),
        'activity',
        newPersonInfoId
      );
      console.log('updateAcvitiy', updateAcvitiy);
    }
    // #endregion

    // #region Update projectsCoordindation
    if (personData.projectsCoordindation && newPersonInfoId) {
      // const updateProjectsCoordindation = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.projectsCoordindation?.map((projects: any) => projects._id),
      //   'personProjectCoordonation',
      //   newPersonInfoId
      // );
      // console.log('updateProjectsCoordindation', updateProjectsCoordindation);
      console.log('debug111-> updating project Coordination');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'coordination'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.projectsCoordindation?.length > 0) {
        const newAffiliationsObject = personData.projectsCoordindation
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                projectTag: item,
                extraIdentifier: 'coordination',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.projectTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedProjectsCoordonation = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedProjectsCoordonation',
          updatedProjectsCoordonation
        );
      }
    }
    // #endregion

    // #region Update projectsParticipation
    if (personData.projectsParticipation && newPersonInfoId) {
      // const updateProjectsParticipation = await replaceDataItemReferences(
      //   'InfoPages',
      //   personData.projectsParticipation?.map((projects: any) => projects._id),
      //   'personProjectParticipation',
      //   newPersonInfoId
      // );
      // console.log('updateProjectsParticipation', updateProjectsParticipation);
      console.log('debug111-> updating project participation');
      const oldAffiliations = person?.affiliationsItems?.filter(
        (item: any) => item?.extraIdentifier === 'participation'
      );
      console.log('debug111->oldAffiliation', oldAffiliations);
      if (oldAffiliations && oldAffiliations?.length > 0) {
        const removeOldAffiliations = await bulkRemoveItems(
          'Affiliations',
          oldAffiliations?.map((item: any) => item._id)
        );
        console.log('debug111->removeOldAffiliations', removeOldAffiliations);
      }

      if (personData.projectsParticipation?.length > 0) {
        const newAffiliationsObject = personData.projectsParticipation
          ?.map((item: any) => {
            return {
              data: {
                personTag: personData.personTag,
                projectTag: item,
                extraIdentifier: 'participation',
                title: `${personData.personTag.name} -to- ${item.name}`,
              },
            };
          })
          ?.filter((item: any) => item?.data?.projectTag?.name !== '');
        console.log('debug111->newAffiliationsObject', newAffiliationsObject);
        const updatedProjectsParticipation = await bulkInsertItems(
          'Affiliations',
          newAffiliationsObject
        );

        console.log(
          'debug111->updatedProjectsParticipation',
          updatedProjectsParticipation
        );
      }
    }
    // #endregion

    // #region Update Person Tag
    // Check if object personTag has changed
    if (!deepEqual(personData.personTag, defaultPersonData.personTag)) {
      console.log('personTag has not changed');
      const updatedPersonTag = await updateDataItem(
        'Tags',
        personData.personTag._id,
        {
          _id: personData.personTag._id,
          ...personData.personTag,
          tagPageLink: '/person/' + newPersonInfoSlug,
        }
      );
      console.log('updatedPersonTag', updatedPersonTag);
    }
    // #endregion

    // Revalidate the cache for the page
    await refetchTags();
    await refetchInfoPages();
    handleUserDataRefresh();
    await revalidateDataItem(`/person/${newPersonInfoSlug}`);
    router.push(`/person/${newPersonInfoSlug}`);

    setIsSaveInProgress(false);
  };

  const saveOrCreateHandler = isNewPage
    ? createNewPersonPage
    : updateDataToServer;

  // #endregion

  // #region handle for when the page is newly created by associatig the user as the owner and the personTag
  useEffect(() => {
    if (isLoggedIn && personData && isNewPage) {
      const personTag = tags.find((tag) => tag.name === userDetails?.userName);
      console.log('debug1->personTag', personTag);
      if (personTag) {
        updatePersonDataOnKeyValue('personTag', personTag);
      }
      const personInfoTag = tags.find((tag) => tag.name === 'person info');
      console.log('debug1->personInfoTag', personInfoTag);
      if (personInfoTag) {
        updatePersonDataOnKeyValue('pageType', personInfoTag);
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
              setDefaultPersonData(personData);
            }}
            disabled={isEditModeOn && checkValidationErrors()}
            className={classNames(
              'btn btn-save',
              isEditModeOn && checkValidationErrors() && 'bg-gray-400'
            )}
          >
            {!isEditModeOn
              ? 'Edit Page'
              : isNewPage
              ? 'Publish Page'
              : 'Save & publish'}
          </button>
          {isEditModeOn && (
            <button
              onClick={() => {
                setPersonData(defaultPersonData);
                setIsEditModeOn(!isEditModeOn);
                isNewPage && router.push(`/dashboard`);
              }}
              className="btn btn-edit"
            >
              Discard changes
            </button>
          )}
        </div>
      )}
      {/* Page Type Tag NON editable*/}
      <div className={classNames('py-3', style.preHeader)}>
        <Tag {...personData.pageType} />
        {/* Timestamp */}
        <section className="post-meta">
          <Typography tag="p" className="text-sm text-gray-400">
            Edited{' '}
            {new Date(personData?.updatedDate?.['$date']).toLocaleString()}
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
        placeholder={'Type or paste a short description of yourself'} // TODO: Placeholder @alex
        description={personData.description}
        isEditModeOn={isEditModeOn}
        handleUpdate={(value) =>
          updatePersonDataOnKeyValue('description', value)
        }
      />

      {/* Person Workplace/Current Affiliations*/}
      <AffiliationsComponent
        afiliations={personData.currentAfiliations}
        tagListTitle="Current Affiliations"
        current
        isEditModeOn={isEditModeOn}
        updatePersonDataAffiliations={(value) =>
          updatePersonDataOnKeyValue('currentAfiliations', value)
        }
        tags={tags.filter((tag) => tag?.tagType === 'organisation')}
        handleTagCreated={handleTagCreated}
        tagType="organisation"
      />
      {/* Former Affiliations */}
      <section className={classNames(style.affiliations)}>
        <AffiliationsComponent
          afiliations={personData.formerAfiliations}
          tagListTitle="Former Affiliations"
          isEditModeOn={isEditModeOn}
          updatePersonDataAffiliations={(value) =>
            updatePersonDataOnKeyValue('formerAfiliations', value)
          }
          tags={tags.filter((tag) => tag?.tagType === 'organisation')}
          handleTagCreated={handleTagCreated}
          tagType="organisation"
        />
      </section>
      {/* Foresight Methods */}
      <TagListComponent
        tagList={personData.methods}
        tagListTitle="Foresight Methods"
        placeholder="Add one or more foresight method tags"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'foresight method')}
        selectedValues={personData.methods?.map((method: any) => method?.name)}
        updatePostData={(value) => updatePersonDataOnKeyValue('methods', value)}
        tagType="foresight method"
        handleTagCreated={handleTagCreated}
      />
      {/* Domains */}
      <TagListComponent
        tagList={personData.domains}
        tagListTitle="Domains"
        placeholder="Add one or more domain tags relevant to you"
        isEditModeOn={isEditModeOn}
        tags={tags.filter((tag) => tag?.tagType === 'domain')}
        selectedValues={personData.domains?.map((domain: any) => domain?.name)}
        updatePostData={(value) => updatePersonDataOnKeyValue('domains', value)}
        tagType="domain"
        handleTagCreated={handleTagCreated}
      />
      {/* Projects Coordination */}
      <TagListComponent
        placeholder="Add one or more project tags"
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
        placeholder="Add one or more project tags"
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
      <FilesComponent
        // files={postData.files}
        isEditModeOn={isEditModeOn}
        mediaFiles={personData.mediaFiles}
        updatePostDataBasedOnKeyValue={updatePersonDataOnKeyValue}
      />
      {/* Files */}
      {/* <FilesComponent files={person.files} /> */}
      {/* External Links */}
      {/* <ExternalLinksComponent links={person.links} /> */}
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

export default PersonPageComponent;
