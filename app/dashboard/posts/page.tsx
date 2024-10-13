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
import { Button, Badge } from 'flowbite-react';
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
  console.log('ownedPostPages', ownedPostPages);
  const router = useRouter();
  const { removeDataItem } = useWixModules(items);
  // const { updateMember } = useWixModules(members);

  const handleCreatePost = async () => {
    router.push(`/post/New_Post`);
  };

  // const handleListProjects = async () => {
  //   router.push(`/dashboard/projects`);
  // };

  // const handleListProfileSettings = async () => {
  //   router.push(`/dashboard`);
  // };

  // const handleListPosts = async () => {
  //   router.push(`/dashboard/posts`);
  // };

  // const handleCreateOrganisation = async () => {
  //   router.push(`/organisation/New_Organisation`);
  // };

  // const handleDeleteInfoPage = async (infoPageId: string) => {
  //   setIsLoadingDeletePostPage(infoPageId);
  //   try {
  //     // Replace with your actual delete logic
  //     await removeDataItem(infoPageId, {
  //       dataCollectionId: 'InfoPages',
  //     });
  //     // TODO: Refresh Owned Pages
  //   } catch (error) {
  //     console.error('Failed to delete info page:', error);
  //   } finally {
  //     setIsLoadingDeletePostPage('');
  //     handleUserDataRefresh();
  //   }
  // };

  const handleDeletePostPage = async (infoPageId: string) => {
    setIsLoadingDeletePostPage(infoPageId);
    try {
      // Replace with your actual delete logic
      await removeDataItem(infoPageId, {
        dataCollectionId: 'PostPages',
      });
      handleUserDataRefresh();
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
    { href: '/dashboard/posts', text: 'Posts', isActive: true }
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
        handleCreateOrNavigateToPersonInfoPage={handleCreateOrNavigateToPersonInfoPage}
        handleLogOut={handleLogOut}
        SubNav={<SubNavDashboard items={subNavItems} style={style} />}
      />

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
            <SpriteSvg.AccountPostIcon
              className="text-color-white mb-6"
              sizeW={24}
              sizeH={24}
              viewBox={'0 0 32 32'}
              fill={'#fff'}
              stroke={'#fff'}
              strokeWidth={0}
              inline={false}
            />

            <div className="flex flex-col justify-between">
              <h2
                className={classNames(
                  style.headingDashboardh1,
                  'mt-0 mb-0 flex flex-row items-center'
                )}
              >
                Posts
              </h2>
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Add a detailed overview of your post. Include text content or
                image. Add any significant outcomes or findings in the foresight
                community. 
              </p>
            </div>

            <div className={classNames(style.listDashboard, 'flex')}>
              <Button
                size={'md'}
                color={'light'}
                className={classNames(
                  style.buttonAddDashboard,
                  'block border-0 mr-4 focus:ring-purple-300'
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
                <span className="text-lg">Add post</span>
              </Button>

              <Button
                size={'md'}
                color={'light'}
                className={classNames(
                  style.buttonAddDashboard,
                  'block border-0 mr-4 focus:ring-purple-300'
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
                <span className="text-lg">Add event</span>
              </Button>

              <Button
                size={'md'}
                color={'light'}
                className={classNames(
                  style.buttonAddDashboard,
                  'block border-0 focus:ring-purple-300'
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
                <span className="text-lg">Add foresight methond</span>
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
                My Posts
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
                    ownedPostPages.map((postPage, index) => (
                      <div
                        key={postPage?.data?.title + index}
                        className="pt-2 pb-2 flex flex-row items-center justify-between"
                      >
                        <div className="flex flex-wrap flex-start text-left">
                          <Tag
                            className="flex-grow basis-full"
                            name={postPage?.data?.title}
                            tagPageLink={`/post/${postPage.data.slug}`}
                            popularity={
                              postPage?.data?.pageTypes[0]?.popularity
                            }
                          ></Tag>
                          <Badge className="basis-auto mt-2 capitalize rounded-full" color="gray">
                            {postPage?.data?.pageTypes[0]?.name}
                          </Badge>
                        </div>
                        <div className={'flex flex-row'}>
                         
                          <Link href={`/post/${postPage.data.slug}`}>
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

                          {/* // TODO- Visible if admin user WIX */}
                          {/* <Button
                            onClick={() =>
                              handleDeletePostPage(postPage.data._id)
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
                          isLoadingDeletePostPage === postPage?.data?._id && (
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
