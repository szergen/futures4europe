'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { items } from '@wix/data';
import * as sanitizeHtml from 'sanitize-html';
import { useWixModules } from '@wix/sdk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import Link from 'next/link';
import {
  extractInfoPageTypeBasedOnTag,
  filterDuplicateAffiliations,
} from '@app/utils/parse-utils';
import classNames from 'classnames';
import { members } from '@wix/members';
import NavDashboard from '@app/shared-components/Layout/NavDashboard/NavDashboard';
import SubNavDashboard from '@app/shared-components/Layout/NavDashboard/SubNavDashboard';
import style from '../pageDashboard.module.css';
import { Button } from 'flowbite-react';
import Typography from '@app/shared-components/Typography/Typography';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import Tag from '../../shared-components/Tag/Tag';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import { PLACEHOLDER_IMAGE } from '../../constants'; // Adjust the path as needed
import {
  bulkInsertItems,
  getAllContacts,
  getCollectionItems,
  getContactsItem,
  replaceDataItemReferences,
  updateDataItem,
} from '@app/wixUtils/client-side';
import {
  getImageUrlForMedia,
  sanitizeTitleForSlug,
} from '@app/page-components/PageComponents.utils';
import { generateUniqueHash } from '@app/page-components/PostPageComponent/PostPageComponent.utils';
import { to } from '@react-spring/web';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import {
  createElementFromNode,
  generateHtmlFromRichContent,
} from '@app/wixUtils/client.utils';

export default function DashboardProjects() {
  const [isLoadingDeletePostPage, setIsLoadingDeletePostPage] = useState('');
  const [userInfoPage, setUserInfoPage] = useState('');

  const {
    login,
    isLoggedIn,
    loading,
    userDetails,
    logout,
    ownedInfoPages,
    ownedPostPages,
    ownedPostPagesFetched,
    ownedInfoPagesFetched,
    handleUserDataRefresh,
    tags,
    allOwnedPages,
    infoPages,
  } = useAuth();

  const wixModules = useWixModules(items);
  const router = useRouter();

  interface UserDetails {
    contactId: string;
    isAdmin: boolean;
  }

  interface InfoPage {
    _id: string;
    _owner: string;
  }

  async function handleDeleteInfoPage(infoPageId: InfoPage['_id']) {
    setIsLoadingDeletePostPage(infoPageId);

    try {
      const userId = userDetails?.contactId;

      if (userDetails?.isAdmin !== true && infoPageId?._owner !== userId) {
        console.error('debug2->Unauthorized to delete info page');
        return;
      }

      console.log(
        'debug2->Proceeding with info page delete for ID:',
        infoPageId
      );
      await wixModules.removeDataItem(infoPageId, {
        dataCollectionId: 'InfoPages',
      });
      console.log('debug2->Delete info page successful');
    } catch (error) {
      console.error('debug2->Failed to delete info page:', error);
    } finally {
      setIsLoadingDeletePostPage('');
      handleUserDataRefresh();
    }
  }

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push('/login');
    }
    // Get the user's tag page link
    if (isLoggedIn && tags) {
      const userTag = tags.find(
        (tag: any) => tag.name === userDetails.userName && tag.tagPageLink
      );
      if (userTag) {
        setUserInfoPage(userTag?.tagPageLink || '');
      }
    }
  }, [isLoggedIn, router, loading]);

  const handleLogOut = async () => {
    logout();
    router.push('/login');
  };

  const handleCreateOrNavigateToPersonInfoPage = () => {
    if (userInfoPage) {
      return `${userInfoPage}`;
    }
    return `/person/New_Info_Page`;
  };

  const subNavItems = [
    { href: '/dashboard/projects', text: 'All Projects', isActive: true },
  ];

  const handleCreateAffiliations = async () => {
    console.log('debug222->infoPages', infoPages);
    const projectInfoPages = infoPages
      .filter(
        (infoPage) =>
          infoPage?.data?.pageTypes[0]?.name === 'project info' &&
          infoPage?.data?.Project?.[0]?.name === 'CROSSEU'
      )
      .map((infoPage) => infoPage.data);
    console.log('debug222->projectInfoPages', projectInfoPages);

    let allProjectOrganisationRolesAffiliations: any[] = [];

    for (let i = 0; i < projectInfoPages.length; i++) {
      const projectOrganisationRolesAffiliations = projectInfoPages[
        i
      ]?.projectOrganisationRoles
        ?.map((role: any, index: number) => {
          return {
            data: {
              projectTag: projectInfoPages[i]?.Project?.[0],
              organisationTag:
                projectInfoPages[i]?.projectOrganisation?.[index],
              role: role.role,
              extraIdentifier: 'projectOrganisationRole',
              title: `${projectInfoPages[i]?.Project?.[0]?.name} -to- ${projectInfoPages[i]?.projectOrganisation?.[index]?.name}`,
            },
          };
        })
        ?.filter((item: any) => item?.data?.organisationTag?.name);
      allProjectOrganisationRolesAffiliations = [
        ...allProjectOrganisationRolesAffiliations,
        ...projectOrganisationRolesAffiliations,
      ];
    }

    // console.log(
    //   'debug222->allProjectOrganisationRolesAffiliations',
    //   allProjectOrganisationRolesAffiliations
    // );

    let allProjectCoordinators: any[] = [];

    for (let i = 0; i < projectInfoPages.length; i++) {
      const projectCoordinators = projectInfoPages[i]?.projectCoordinator
        ?.map((coordinator: any) => {
          return {
            data: {
              projectTag: projectInfoPages[i]?.Project?.[0],
              personTag: coordinator,
              extraIdentifier: 'coordination',
              title: `${projectInfoPages[i]?.Project?.[0]?.name} -to- ${coordinator?.name}`,
            },
          };
        })
        ?.filter((item: any) => item?.data?.personTag?.name);
      allProjectCoordinators = [
        ...allProjectCoordinators,
        ...projectCoordinators,
      ];
    }

    console.log('debug222->allProjectCoordinators', allProjectCoordinators);

    let allProjectParticipantTeam: any[] = [];

    for (let i = 0; i < projectInfoPages.length; i++) {
      const projectParticipantTeam = projectInfoPages[i]?.projectParticipantTeam
        ?.map((participant: any) => {
          return {
            data: {
              projectTag: projectInfoPages[i]?.Project?.[0],
              personTag: participant,
              extraIdentifier: 'participation',
              title: `${projectInfoPages[i]?.Project?.[0]?.name} -to- ${participant?.name}`,
            },
          };
        })
        ?.filter((item: any) => item?.data?.personTag?.name);
      allProjectParticipantTeam = [
        ...allProjectParticipantTeam,
        ...projectParticipantTeam,
      ];
    }
    console.log(
      'debug222->allProjectParticipantTeam',
      allProjectParticipantTeam
    );

    const allProjectAffiliations = [
      ...allProjectOrganisationRolesAffiliations,
      ...allProjectCoordinators,
      ...allProjectParticipantTeam,
    ];
    //console.log('debug222->allProjectAffiliations', allProjectAffiliations);

    const allAffiliations = [
      ...allProjectAffiliations,
      // ...allPersonAffiliations,
      // ...allOrganisationAffiliations,
    ];

    //  console.log('debug222->allAffiliations', allAffiliations);

    // const filteredDuplicateAffiliations =
    //   filterDuplicateAffiliations(allAffiliations);
    // console.log(
    //   'debug222->filteredDuplicateAffiliations',
    //   filteredDuplicateAffiliations
    // );

    // #region bulk create affiliations
    const allAffiliationsUpload = await bulkInsertItems(
      'Affiliations',
      allAffiliations
    );

    console.log('debug222->allAffiliationsUpload', allAffiliationsUpload);

    // #endregion

    // const projectOrganisationRolesAffiliations =
    //   projectInfoPages[0]?.projectOrganisationRoles
    //     ?.map((role: any, index: number) => {
    //       return {
    //         data: {
    //           projectTag: projectInfoPages[0]?.Project?.[0],
    //           organisationTag:
    //             projectInfoPages[0]?.projectOrganisation?.[index],
    //           role: role.role,
    //           extraIdentifier: 'projectOrganisationRole',
    //           title: `${projectInfoPages[0]?.Project?.[0]?.name} -to- ${projectInfoPages[0]?.projectOrganisation?.[index]?.name}`,
    //         },
    //       };
    //     })
    //     .filter((item: any) => item?.data?.organisationTag?.name);
    // console.log(
    //   'debug222->projectOrganisationRolesAffiliations',
    //   projectOrganisationRolesAffiliations
    // );
  };

  const handleCreateAccounts = async () => {
    const allMembers = await getAllContacts();
    console.log('debug222->allMembers', allMembers);

    const filteredMembers = allMembers.filter(
      (member: any) =>
        member?.profile?.nickname &&
        member?.privacyStatus === 'PUBLIC' &&
        (member?.profile?.photo?.url ||
          member?.contact?.customFields?.['custom.linkedin']?.value ||
          member?.contact?.customFields?.['custom.website-link']?.value ||
          member?.contact?.customFields?.['custom.your-country']?.value ||
          member?.contact?.customFields?.['custom.expertise']?.value ||
          member?.contact?.customFields?.['custom.organisation']?.value ||
          member?.contact?.jobTitle) &&
        ![
          'Bianca Dragomir',
          'Radu Gheorghiu',
          'Ioana Spanache',
          'Mikkel Knudsen',
        ].find((item) => item === member?.profile?.nickname)
    );
    console.log('debug222->filteredMembers', filteredMembers);

    const membersWithTags = filteredMembers?.filter((member: any) =>
      tags.find((tag) => tag.name === member?.profile?.nickname)
    );

    console.log('debug222->membersWithTags', membersWithTags);
    let infoPagesToCreate = [];

    for (let i = 2; i < membersWithTags.length; i++) {
      console.log('debug222->Migrating Item', i);
      console.log('debug222->membersWithTags[i]', membersWithTags[i]);
      const member = membersWithTags[i];
      const memberTag = tags.find(
        (tag) => tag.name === member?.profile?.nickname
      );
      const memberTagId = memberTag?._id;
      const cristinaMemberTagId = 'd5357589-65fd-456f-a506-7a4d1275451c';
      const raduMemberTagId = '79e69062-1f22-4acd-bd5c-b4b0f17a3dad';
      const personInfoTagId = 'ff988067-2fee-41f2-9b33-7eb14d282b17';
      console.log('debug222->memberTag', memberTag);

      const countryTag = tags.find(
        (tag) =>
          tag.name ===
          member?.contact?.customFields?.['custom.your-country']?.value
      );
      const countryTagId = countryTag?._id;

      console.log('debug222->countryTag', countryTag);

      const slug =
        sanitizeTitleForSlug(member?.profile?.nickname) +
        '-' +
        generateUniqueHash();
      const memberInfoPage = {
        data: {
          title: member?.profile?.nickname,
          websiteLink:
            member?.contact?.customFields?.['custom.website-link']?.value || '',
          linkedinLink:
            member?.contact?.customFields?.['custom.linkedin']?.value || '',
          slug: slug,
        },
      };
      // #region upload member info page
      const uploadedMemberInfoPage = await bulkInsertItems('InfoPages', [
        memberInfoPage,
      ]);

      console.log('debug222->uploadedMemberInfoPage', uploadedMemberInfoPage);
      const infoPageId =
        uploadedMemberInfoPage?.results?.[0]?.itemMetadata?._id;
      console.log('debug222->infoPageId', infoPageId);
      // #endregion

      // #region updateAuthor
      if (memberTagId && infoPageId) {
        const updatedAuthor = await replaceDataItemReferences(
          'InfoPages',
          [memberTagId],
          'Author',
          infoPageId
        );
        console.log('debug222->updatedAuthor', updatedAuthor);
      }
      // #endregion

      // #region update Person tag
      if (memberTagId && infoPageId) {
        const updatedPersonTag = await replaceDataItemReferences(
          'InfoPages',
          [memberTagId],
          'person',
          infoPageId
        );
        console.log('updatedPersonTag', updatedPersonTag);
      }
      // #endregion

      // #region update pageOwners user and Cristina and Radu
      if (memberTagId && infoPageId && cristinaMemberTagId && raduMemberTagId) {
        const updatedPageOwner = await replaceDataItemReferences(
          'InfoPages',
          [memberTagId, cristinaMemberTagId, raduMemberTagId],
          'pageOwner',
          infoPageId
        );
        console.log('updatedPageOwner', updatedPageOwner);
      }
      // #endregion

      // #region update pageType
      if (personInfoTagId && infoPageId) {
        const updatedPageType = await replaceDataItemReferences(
          'InfoPages',
          [personInfoTagId],
          'pageTypes',
          infoPageId
        );
        console.log('updatedPageType', updatedPageType);
      }

      // #endregion

      // #region update Country tag
      if (countryTagId && infoPageId) {
        const updatedCountryTag = await replaceDataItemReferences(
          'InfoPages',
          [countryTagId],
          'countryTag',
          infoPageId
        );
        console.log('updatedCountryTag', updatedCountryTag);
      }
      // #endregion

      // #region update slug and picture in tag
      if (infoPageId && memberTagId) {
        const updatedPersonTag = await updateDataItem('Tags', memberTagId, {
          // _id: memberTagId,
          ...memberTag,
          tagPageLink: '/person/' + slug,
          picture: member?.profile?.photo?.url || '',
        });
        console.log('updatedPersonTag', updatedPersonTag);
      }
      // #endregion

      infoPagesToCreate.push(memberInfoPage);
      console.log('debug222->Finished Item', i);
    }

    console.log('debug222->infoPagesToCreate', infoPagesToCreate);
  };

  const handleCreatePosts = async () => {
    const allPosts = await getCollectionItems('contact117');
    console.log('debug222->allPosts', allPosts);

    const publishedPosts = await allPosts.filter(
      (post: any) => post?.data?.publish === true
    );

    console.log('debug222->publishedPosts', publishedPosts);
    let extractedRedirects = [];

    for (let i = 0; i < publishedPosts.length; i++) {
      console.log('debug222->Migrating Item', i);
      console.log('debug222->item=', publishedPosts[i]);

      const authorId = publishedPosts?.[i]?.data?.author;

      const authorContactItem = await getContactsItem(authorId);
      console.log('debug222->authorContactItem', authorContactItem);

      const authorTag = tags.find(
        (tag) =>
          tag.name ===
          authorContactItem?.info?.name?.first +
            ' ' +
            authorContactItem?.info?.name?.last
      );
      console.log('debug222->authorTag', authorTag);

      const authorTagId = authorTag?._id;
      console.log('debug222->authorTagId', authorTagId);
      const cristinaMemberTagId = 'd5357589-65fd-456f-a506-7a4d1275451c';
      const raduMemberTagId = '79e69062-1f22-4acd-bd5c-b4b0f17a3dad';
      const postPageTypeTagId = 'cc31afc1-a304-465a-be3e-a887b68884f3';

      const slug =
        sanitizeTitleForSlug(publishedPosts?.[i]?.data.lastName2) +
        '-' +
        generateUniqueHash();

      console.log(' ->slug', slug);

      // #region upload post page

      const html = publishedPosts?.[i]?.data?.['feldFurLangeAntwort']
        ? sanitizeHtml(
            publishedPosts?.[i]?.data?.['feldFurLangeAntwort']
          )?.replace(/<p>\s*<br\s*\/?>\s*<\/p>/g, '')
        : '';

      const html2 = publishedPosts?.[i]?.data?.['blogTextRichContent2']
        ? sanitizeHtml(
            generateHtmlFromRichContent(
              publishedPosts?.[i]?.data?.['blogTextRichContent2']
            )?.toString()
          )?.replace(/<p[^>]*>\s*<\/p>/g, '')
        : '';
      // console.log(
      //   'html2 before',
      //   publishedPosts?.[i]?.data?.['blogTextRichContent2']
      // );

      // console.log('html2', html2);

      const postPageToMigrate = {
        data: {
          title: publishedPosts?.[i]?.data?.lastName2,
          postPublicationDate: publishedPosts?.[
            i
          ]?.data?._createdDate?.$date?.slice(0, 10),
          slug: slug,
          postContentRIch1: publishedPosts?.[i]?.data?.['copyOfProjectTitle']
            ? '<p>' + publishedPosts?.[i]?.data?.['copyOfProjectTitle'] + '</p>'
            : '<p></p>\n',
          postImage1: getImageUrlForMedia(
            publishedPosts?.[i]?.data?.['fileUploadField']
          ),
          // postContentRIch2: publishedPosts?.[i]?.data?.['feldFurLangeAntwort']
          //   ?.replace(`<p class=\"font_8\"><br></p>\n`, '')
          //   ?.replace(`<p class=\"font_8\"><br></p>`, '')
          //   ?.replace('<p class="font_8"><br></p>', ''),
          postContentRIch2: html + html2,
        },
      };

      console.log('debug222->postPageToMigrate', postPageToMigrate);

      const uploadedPostPage = await bulkInsertItems('PostPages', [
        postPageToMigrate,
      ]);

      console.log('debug222->uploadedPostPage', uploadedPostPage);
      const postPageId = uploadedPostPage?.results?.[0]?.itemMetadata?._id;
      console.log('debug222->infoPageId', postPageId);

      // // #endregion

      // // #region extract redirect for the page
      extractedRedirects.push({
        source: publishedPosts?.[i]?.data?.['link-blogs-1-lastName2'],
        destination: '/post/' + slug,
        permanent: true,
      });
      // // #endregion

      // // #region page type tag - Post
      if (postPageId && postPageTypeTagId) {
        const updatedPageType = await replaceDataItemReferences(
          'PostPages',
          [postPageTypeTagId],
          'pageTypes',
          postPageId
        );
        console.log('updatedPageType', updatedPageType);
      }
      // // #endregion

      // // #region author tag - authorTagId
      if (postPageId && authorTagId) {
        const updatedPageType = await replaceDataItemReferences(
          'PostPages',
          [authorTagId],
          'author',
          postPageId
        );
        console.log('updatedPageType', updatedPageType);
      }

      // // #endregion

      // // #region page owner - authorTagId, Cristina, Radu TODO: add Cristina and Radu fallback
      if (postPageId && authorTagId) {
        const updatedPageType = await replaceDataItemReferences(
          'PostPages',
          [authorTagId, cristinaMemberTagId, raduMemberTagId],
          'pageOwner',
          postPageId
        );
        console.log('updatedPageType', updatedPageType);
      } else {
        const updatedPageType = await replaceDataItemReferences(
          'PostPages',
          [cristinaMemberTagId, raduMemberTagId],
          'pageOwner',
          postPageId
        );
        console.log('updatedPageType', updatedPageType);
      }

      // // #endregion

      // console.log('debug222->postPageToMigrate', postPageToMigrate);
    }

    // console.log('debug222->extractedRedirects', extractedRedirects);

    // let infoPagesToCreate = [];

    // console.log('debug222->infoPagesToCreate', infoPagesToCreate);
  };

  return (
    <div
      className={classNames(
        style.UserDashboard,
        style.UserDashboardProjects,
        'flex flex-col'
      )}
    >
      <NavDashboard
        userInfoPage={true}
        handleCreateOrNavigateToPersonInfoPage={
          handleCreateOrNavigateToPersonInfoPage
        }
        handleLogOut={handleLogOut}
        SubNav={<SubNavDashboard items={subNavItems} style={style} />}
        activeItem="/dashboard/projects"
      />

      <div
        className={classNames(
          style.UserDashboardWrapper,
          'flex flex-col relative m-auto mt-10 mb-6'
        )}
      >
        {/* NOTE: Removed afer 15.10 discussions*/}
        {/* <h1 className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}>
          My projects
        </h1> */}
        {/* <p className="text-base text-[#606b85]">
          Would you like to showcase your foresight project and share insights
          from your work? You can upload your project here and add outputs and
          team members.
        </p> */}

        <div
          className={classNames(
            style.dashboardBox,
            style.dashboardBoxAddWrap,
            'mt-14',
            'mb-10',
            'p-8',
            'bg-purple-site'
          )}
        >
          <div className={classNames(style.dashboardBoxAdd, 'flex flex-col')}>
            <div className="flex items-center mb-4">
              <SpriteSvg.AccountProjectIcon
                className="text-color-white"
                sizeW={24}
                sizeH={24}
                viewBox={'0 0 32 32'}
                fill={'none'}
                stroke={'#fff'}
                strokeWidth={2}
                inline={false}
              />
              <Typography
                tag="h2"
                className={classNames(style.headingDashboardh1, 'ml-2')}
              >
                Project section
              </Typography>
            </div>
            {/*  */}

            <div className="flex flex-col justify-between">
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Add a detailed overview of your project. Include its objectives,
                scope, key activities, and any significant outcomes or findings.
              </p>
            </div>

            <div className={classNames(style.listDashboard, 'flex')}>
              <Link href="/project/New_Project">
                <Button
                  size={'md'}
                  color={'light'}
                  className={classNames(
                    style.buttonAddDashboard,
                    'block border-0 mr-4 focus:ring-purple-300'
                  )}
                  pill
                >
                  <SpriteSvg.AccountAddIcon
                    sizeH={24}
                    sizeW={24}
                    viewBox={'0 -1 14 14'}
                    strokeWidth={1}
                  />
                  <span className="text-lg">Add project</span>
                </Button>
              </Link>
              <Button
                size={'md'}
                color={'light'}
                className={classNames(
                  style.buttonAddDashboard,
                  'block border-0 mr-4 focus:ring-purple-300'
                )}
                pill
                onClick={handleCreatePosts}
              >
                Create Posts
              </Button>
            </div>
          </div>
        </div>

        <div className={classNames(style.dashboardBox, 'mt-14 mb-10 p-8')}>
          <div className="flex flex-col">
            <div className="flex flex-col justify-between">
              <h2
                className={classNames(
                  style.headingDashboardh1,
                  'mt-0 mb-0 flex flex-row items-center'
                )}
              >
                Project list
              </h2>
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                In this section of your account you can manage your list.
              </p>
            </div>

            <div
              className={classNames(
                style.listDashboard,
                'flex flex-col text-base text-[#606b85]'
              )}
            >
              {allOwnedPages.length ? (
                <>
                  {allOwnedPages.length > 0 ? (
                    allOwnedPages
                      .filter(
                        (infoPage) =>
                          infoPage?.data?.pageTypes[0]?.name === 'project info'
                      )
                      .map((infoPage, index) => (
                        <div
                          key={infoPage.data.title + index}
                          className="pt-2 pb-2 flex flex-row items-center justify-between"
                        >
                          <div className={'w-full flex flex-row'}>
                            <Link
                              className={'w-full'}
                              href={`/${extractInfoPageTypeBasedOnTag(
                                infoPage?.data?.pageTypes[0]
                              )}/${infoPage.data.slug}`}
                            >
                              <MiniPagePost
                                pageTypeTag={infoPage.data.pageTypes?.[0]}
                                key={index}
                                title={infoPage?.data?.title}
                                tagLine={infoPage?.data.Project?.[0]?.tagLine}
                                popularity={
                                  infoPage?.data?.pageTypes[0]?.popularity
                                }
                                subtitle={infoPage?.data?.subtitle}
                                countryTags={infoPage?.data?.countryTag ?? []}
                                projectFunded={
                                  infoPage?.data?.projectFunded ?? []
                                }
                                organisationAffiliations={
                                  infoPage?.data?.projectOrganisationRoles?.slice(
                                    0,
                                    3
                                  ) ?? []
                                }
                                date={infoPage.data._createdDate?.$date}
                                editDate={infoPage?.data?._updatedDate?.$date}
                                image={
                                  infoPage.data.Project?.[0]?.picture ||
                                  PLACEHOLDER_IMAGE
                                }
                                text={infoPage.data.postContentRIch1}
                                domains={[
                                  ...(infoPage.data.domains ?? []),
                                  ...(infoPage.data.methods ?? []),
                                ]?.slice(0, 3)}
                                projectStartDate={''}
                                projectEndDate={''}
                              />
                            </Link>
                            {/* Only show delete button for admins */}
                            {(userDetails?.isAdmin === true ||
                              infoPage?.data?._owner ===
                                userDetails?.contactId) && (
                              <Button
                                size="sm"
                                color="danger"
                                onClick={() =>
                                  handleDeleteInfoPage(infoPage?.data?._id)
                                }
                                disabled={
                                  isLoadingDeletePostPage ===
                                  infoPage?.data?._id
                                }
                              >
                                Delete
                              </Button>
                            )}

                            {isLoadingDeletePostPage &&
                              isLoadingDeletePostPage ===
                                infoPage?.data?._id && (
                                <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                                  <LoadingSpinner />
                                </div>
                              )}
                          </div>
                        </div>
                      ))
                  ) : (
                    <div>No Info Pages</div>
                  )}
                </>
              ) : (
                <>
                  {ownedPostPagesFetched && ownedInfoPagesFetched ? (
                    <div>No Items</div>
                  ) : (
                    <LoadingSpinner />
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
