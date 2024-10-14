'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import Link from 'next/link';
import { extractInfoPageTypeBasedOnTag } from '@app/utils/parse-utils';
import classNames from 'classnames';
import { members } from '@wix/members';
import NavDashboard from '@app/shared-components/Layout/NavDashboard/NavDashboard';
import SubNavDashboard from '@app/shared-components/Layout/NavDashboard/SubNavDashboard';
import style from '../pageDashboard.module.css';
import { Button } from 'flowbite-react';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import Tag from '../../shared-components/Tag/Tag';

export default function DashboardProjects() {
  //   const [ownedPostPages, setOwnedPostPages] = useState<any[]>([]);
  //   const [ownedInfoPages, setOwnedInfoPages] = useState<any[]>([]);
  // const [showLoadingCreatePost, setShowLoadingCreatePost] = useState(false);
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
  } = useAuth();
  console.log('ownedInfoPages', ownedInfoPages);

  const router = useRouter();
  const { removeDataItem } = useWixModules(items);
  // const { updateMember } = useWixModules(members);

  // const handleCreatePersonInfoPage = async () => {
  //   if (userInfoPage) {
  //     router.push(`/person/${userInfoPage}`);
  //     return;
  //   }
  //   router.push(`/person/New_Info_Page`);
  // };

  // const handleListProfileSettings = async () => {
  //   router.push(`/dashboard`);
  // };

  // const handleListPosts = async () => {
  //   router.push(`/dashboard/posts`);
  // };

  // const handleCreateOrganisation = () => {
  //   router.push(`/organisation/New_Organisation`);
  // };

  // const handleDeletePostPage = async (infoPageId: string) => {
  //   setIsLoadingDeletePostPage(infoPageId);
  //   try {
  //     // Replace with your actual delete logic
  //     await removeDataItem(infoPageId, {
  //       dataCollectionId: 'PostPages',
  //     });
  //     // TODO: Refresh Owned Pages
  //   } catch (error) {
  //     console.error('Failed to delete info page:', error);
  //   } finally {
  //     setIsLoadingDeletePostPage('');
  //     handleUserDataRefresh();
  //   }
  // };

  const handleDeleteInfoPage = async (infoPageId: string) => {
    setIsLoadingDeletePostPage(infoPageId);
    try {
      // Replace with your actual delete logic
      await removeDataItem(infoPageId, {
        dataCollectionId: 'InfoPages',
      });
      // TODO: Refresh Owned Pages
    } catch (error) {
      console.error('Failed to delete info page:', error);
    } finally {
      setIsLoadingDeletePostPage('');
      handleUserDataRefresh();
    }
  };

  useEffect(() => {
    // console.log('debug1 -> isLoggedIn:', isLoggedIn); // Debugging line
    if (!loading && !isLoggedIn) {
      router.push('/login');
    }
    // Get the user's tag page link
    if (isLoggedIn && tags) {
      const userTag = tags.find(
        (tag: any) => tag.name === userDetails.userName && tag.tagPageLink
      );
      console.log('userTag', userTag);
      if (userTag) {
        setUserInfoPage(userTag?.tagPageLink);
      }
    }
  }, [isLoggedIn, router, loading]);

  if (!isLoggedIn) {
    //Loading Spinner
    return <LoadingSpinner />;
  }

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
    { href: '/dashboard/projects', text: 'Projects', isActive: true },
  ];

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
        <h1 className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}>
          My projects
        </h1>
        <p className="text-base text-[#606b85]">
          Would you like to showcase your foresight project and share insights
          from your work? You can upload your project here and add outputs and
          team members.
        </p>

        <div
          className={classNames(
            style.dashboardBox, // CSS Module class
            style.dashboardBoxAddWrap, // Another CSS Module class
            'mt-14', // Global utility classes (e.g., Tailwind, or other global CSS)
            'mb-10',
            'p-8',
            'bg-purple-site'
          )}
        >
          <div className={classNames(style.dashboardBoxAdd, 'flex flex-col')}>
            <SpriteSvg.AccountProjectIcon
              className="text-color-white mb-6"
              sizeW={24}
              sizeH={24}
              viewBox={'0 0 32 32'}
              fill={'none'}
              stroke={'#fff'}
              strokeWidth={2}
              inline={false}
            />

            <div className="flex flex-col justify-between">
              <h2
                className={classNames(
                  style.headingDashboardh1,
                  'mt-0 mb-0 flex flex-row items-center'
                )}
              >
                Project
              </h2>
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
              {ownedPostPages.length || ownedInfoPages.length ? (
                <>
                  {ownedInfoPages.length > 0 ? (
                    ownedInfoPages
                      .filter(
                        (infoPage) =>
                          infoPage?.data?.pageTypes[0]?.name === 'project info'
                      )
                      .map((infoPage, index) => (
                        <div
                          key={infoPage.data.title + index}
                          className="pt-2 pb-2 flex flex-row items-center justify-between"
                        >
                          <span>{infoPage.data.title}</span>
                          <div className={'flex flex-row'}>
                            <Link
                              href={`/${extractInfoPageTypeBasedOnTag(
                                infoPage?.data?.pageTypes[0]
                              )}/${infoPage.data.slug}`}
                            >
                              <Button
                                size={'sm'}
                                color={'gray'}
                                className={classNames(
                                  style.buttonAddDashboard,
                                  'block mr-2'
                                )}
                                pill
                              >
                                <span className="text-md">View</span>
                              </Button>
                            </Link>
                          </div>

                          {isLoadingDeletePostPage &&
                            isLoadingDeletePostPage === infoPage?.data?._id && (
                              <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                                <LoadingSpinner />
                              </div>
                            )}
                          {/* <pre>{JSON.stringify(infoPage.data, null, 2)}</pre> */}
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
