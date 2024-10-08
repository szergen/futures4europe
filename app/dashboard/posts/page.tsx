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
import Icon from '@app/shared-components/Icon/Icon';
import style from '../pageDashboard.module.css';
import { Avatar, Button, Badge } from 'flowbite-react';
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

  const handleCreatePost = async () => {
    router.push(`/post/New_Post`);
  };

  const handleCreateProject = async () => {
    router.push(`/project/New_Project`);
  };

  const handleCreatePersonInfoPage = async () => {
    if (userInfoPage) {
      router.push(`/person/${userInfoPage}`);
      return;
    }
    router.push(`/person/New_Info_Page`);
  };

  const handleListProfileSettings = async () => {
    router.push(`/dashboard`);
  };

  const handleListPosts = async () => {
    router.push(`/dashboard/posts`);
  };

  const handleCreateOrganisation = async () => {
    router.push(`/organisation/New_Organisation`);
  };

  const handleDeletePostPage = async (infoPageId: string) => {
    setIsLoadingDeletePostPage(infoPageId);
    try {
      // Replace with your actual delete logic
      await removeDataItem(infoPageId, {
        dataCollectionId: 'PostPages',
      });
      // TODO: Refresh Owned Pages
    } catch (error) {
      console.error('Failed to delete info page:', error);
    } finally {
      setIsLoadingDeletePostPage('');
      handleUserDataRefresh();
    }
  };

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

  console.log('loading', loading);

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

  // const handleChangeNickname = async () => {
  //   const member = await updateMember(userDetails.contactId, {
  //     profile: {
  //       nickname: 'Alexandru-Sergiu Ciobanasu',
  //     },
  //   });
  //   console.log('gotMember', member);
  // };

  return (
    <div
      className={classNames(
        style.UserDashboard,
        style.UserDashboardProjects,
        'flex flex-col'
      )}
    >
      <div
        className={classNames(
          style.UserDashboardWrapper,
          'flex m-auto justify-center relative mb-4'
        )}
      >
        <div
          className={classNames(
            style.UserDashboardNavItem,
            style.active,
            'text-purple-site flex justify-center'
          )}
        >
          <button
            onClick={handleListPosts}
            className={classNames(
              'font-semibold flex flex-col justify-center items-center'
            )}
          >
            <SpriteSvg.AccountPostIcon
              className="mb-2"
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            />
            <span>Posts</span>
          </button>
        </div>

        <div
          className={classNames(
            style.UserDashboardNavItem,
            'text-purple-site flex justify-center'
          )}
        >
          <button
            onClick={handleCreateProject}
            className={classNames(
              'font-semibold flex flex-col justify-center items-center'
            )}
          >
            <SpriteSvg.AccountProjectIcon
              className="mb-2"
              size={38}
              fill={'none'}
              strokeWidth={2.2}
              strokeLinecap="round"
              strokeLinejoin="round"
              inline={false}
            />
            <span>Projects</span>
          </button>
        </div>

        <div
          className={classNames(
            style.UserDashboardNavItem,
            'text-purple-site flex justify-center'
          )}
        >
          <button
            onClick={handleCreateOrganisation}
            className={classNames(
              'font-semibold flex flex-col justify-center items-center'
            )}
          >
            <SpriteSvg.AccountOrgIcon
              className="mb-2"
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            />
            <span>Organisation</span>
          </button>
        </div>

        <div
          className={classNames(
            style.UserDashboardNavItem,
            'text-purple-site flex justify-center'
          )}
        >
          <button
            onClick={handleCreatePersonInfoPage}
            className="font-semibold flex flex-col justify-center items-center"
          >
            <SpriteSvg.AccountPersonIcon
              className="mb-2"
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            />
            {userInfoPage ? 'View Info Page' : 'Person Page'}
          </button>
        </div>

        <div
          className={classNames(
            style.UserDashboardNavItem,
            'text-purple-site flex justify-center'
          )}
        >
          <button
            onClick={handleListProfileSettings}
            className="font-semibold flex flex-col justify-center items-center"
          >
            <SpriteSvg.AccountSettingsIcon
              className="mb-2"
              size={38}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            />
            {userInfoPage ? 'Profile settings' : 'Profile settings'}
          </button>
        </div>

        <div
          className={classNames(
            style.UserDashboardNavItem,
            'text-purple-site flex justify-center'
          )}
        >
          <button
            onClick={handleLogOut}
            className="font-semibold flex flex-col justify-center items-center"
          >
            <SpriteSvg.AccountLogoutIcon
              className="mb-2"
              sizeW={28}
              sizeH={28}
              viewBox={'-3 0 28 28'}
              fill={'none'}
              strokeWidth={2}
              inline={false}
            />
            Log Out
          </button>
        </div>
      </div>
      <div className={style.subnavDashboard}>
        <ul
          className={classNames(
            style.UserDashboardWrapper,
            'flex flex-row m-auto align-center place-content-evenly'
          )}
        >
          <li>
            <Link
              href={`/dashboard/projects`}
              className={classNames(style.active, '')}
            >
              Posts list
            </Link>
          </li>
        </ul>
      </div>

      <div
        className={classNames(
          style.UserDashboardWrapper,
          'flex flex-col relative m-auto mt-10 mb-6'
        )}
      >
        <h1 className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}>
          My posts
        </h1>
        <p className="text-base text-[#606b85]">
          Would you like to showcase your foresight posts and share insights
          from your work? You can create your posts here and add various content
          raging from articles, blog posts, foresight methods, any outputs.
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
                Post
              </h2>
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Add a detailed overview of your post. Include text content or
                image. Add any significant outcomes or findings in the foresight
                community.
              </p>
            </div>

            <div className={classNames(style.listDashboard, 'block')}>
              <Button
                size={'md'}
                color={'light'}
                className={classNames(
                  style.buttonAddDashboard,
                  'block border-0'
                )}
                onClick={handleCreatePost}
                pill
              >
                <SpriteSvg.AccountAddIcon
                  sizeH={24}
                  sizeW={24}
                  viewBox={'0 -1 14 14'}
                  strokeWidth={1}
                />
                <span className="text-lg">Add new post</span>
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
              {ownedPostPages.length || ownedInfoPages.length ? (
                <>
                  {ownedPostPages.length > 0 ? (
                    ownedPostPages.map((infoPage, index) => (
                      <div
                        key={infoPage?.data?.title + index}
                        className="pt-2 pb-2 flex flex-row items-center justify-between"
                      >
                        <div className="flex flex-col flex-start text-left">
                          <Tag
                            name={infoPage?.data?.title}
                            tagPageLink={`/${extractInfoPageTypeBasedOnTag(
                              infoPage?.data?.pageTypes[0]
                            )}/${infoPage.data.slug}`}
                            popularity={
                              infoPage?.data?.pageTypes[0]?.popularity
                            }
                          ></Tag>
                          <Badge className="capitalize" color="purple">
                            {infoPage?.data?.pageTypes[0]?.name}
                          </Badge>
                        </div>
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

                          <Button
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
                          </Button>
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
                    <div>No Owned Items</div>
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
