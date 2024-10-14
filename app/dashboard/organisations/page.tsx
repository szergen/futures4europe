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
import { Avatar, Button } from 'flowbite-react';
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

  const handleCreateOrganisation = () => {
    router.push(`/organisation/New_Organisation`);
  };

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
    { href: '/dashboard/projects', text: 'Organisations', isActive: true },
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
        activeItem={'/dashboard/organisations'}
      />

      <div
        className={classNames(
          style.UserDashboardWrapper,
          'flex flex-col relative m-auto mt-10 mb-6'
        )}
      >
        <h1 className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}>
          My organisations
        </h1>
        <p className="text-base text-[#606b85]">
          This is your dashboard for managing all the organisations youre
          connected. You can showcase your foresight project and share insights.
          Access your organizations to manage members and much more.
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
            <SpriteSvg.AccountOrg2Icon
              className="text-color-white mb-6"
              sizeW={24}
              sizeH={24}
              viewBox={'0 0 18 18'}
              fill={'#fff'}
              stroke={'0'}
              inline={false}
            />

            <div className="flex flex-col justify-between">
              <h2
                className={classNames(
                  style.headingDashboardh1,
                  'mt-0 mb-0 flex flex-row items-center'
                )}
              >
                Organisation
              </h2>
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Add a detailed overview of your organisation. Include its
                afilliates, projects, key members, and any significant outcomes
                or findings.
              </p>
            </div>

            <div className={classNames(style.listDashboard, 'flex')}>
              <Button
                size={'md'}
                color={'light'}
                className={classNames(
                  style.buttonAddDashboard,
                  'block border-0 focus:ring-purple-300'
                )}
                onClick={handleCreateOrganisation}
                pill
              >
                <SpriteSvg.AccountAddIcon
                  sizeH={24}
                  sizeW={24}
                  viewBox={'0 -1 14 14'}
                  strokeWidth={1}
                />
                <span className="text-lg">Add organisation</span>
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
                Organisations list
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
                          infoPage?.data?.pageTypes[0]?.name ===
                          'organisation info'
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
                                  'block mr-2 focus:ring-purple-300'
                                )}
                                pill
                              >
                                {/* <SpriteSvg.AccountTrashIcon 
                              className={'mr-2'}
                              sizeH={16}
                              sizeW={16}
                              viewBox={'0 0 16 16'}
                              strokeWidth={0}
                              fill={'currentColor'}
                            /> */}
                                <span className="text-md">View</span>
                              </Button>
                            </Link>

                            {/* TODO: Show delete if user is admin */}
                            {/* <Button
                              onClick={() =>
                                handleDeleteInfoPage(infoPage.data._id)
                              }
                              size={'sm'}
                              color={''}
                              className={classNames(
                                style.buttonAddDashboard,
                                'block border-0'
                              )}
                              pill
                            >
                              <SpriteSvg.AccountTrashIcon
                                className={'mr-2'}
                                sizeH={16}
                                sizeW={16}
                                viewBox={'0 0 16 16'}
                                strokeWidth={0}
                                fill={'currentColor'}
                              />
                              <span className="text-md">Delete</span>
                            </Button> */}
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