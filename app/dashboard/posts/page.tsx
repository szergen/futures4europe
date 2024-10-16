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
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';

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
    { href: '/dashboard/posts', text: 'Posts', isActive: true },
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
        activeItem={'/dashboard/posts'}
      />

      <div
        className={classNames(
          style.UserDashboardWrapper,
          'flex flex-col relative m-auto mt-10 mb-6'
        )}
      >
        {/* NOTE: Removed afeter 15.11 discussion */}

        {/* <h1 className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}>
          My posts
        </h1> */}
        {/* <p className="text-base text-[#606b85]">
          Would you like to showcase your foresight posts and share insights
          from your work? You can create your posts here and add various content
          raging from articles, blog posts, news, any type of editorial posts.
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
            {/* <SpriteSvg.AccountPostIcon
              className="text-color-white mb-6"
              sizeW={24}
              sizeH={24}
              viewBox={'0 0 32 32'}
              fill={'#fff'}
              stroke={'#fff'}
              strokeWidth={0}
              inline={false}
            /> */}

            <div className="flex flex-col justify-between">
              {/* <h2
                className={classNames(
                  style.headingDashboardh1,
                  'mt-0 mb-0 flex flex-row items-center'
                )}
              >
                Posts
              </h2> */}
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Create Posts section. Include text content or image. Add any
                significant outcomes or findings in the foresight community.
                Here is an example of a post:
                <Link
                  href="/post/Webinar_Platform_driven_horizon_scanning_in_practice_6n0a2"
                  className="ml-4 underline"
                >
                  View Example Post
                </Link>
              </p>
            </div>

            <div className={classNames(style.listDashboard, 'flex')}>
              <Link href="/post/New_Post?pageType=post">
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
                  <span className="text-lg">Add post</span>
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
                    ownedPostPages
                      .filter(
                        (postPage) =>
                          postPage?.data?.pageTypes[0]?.name !==
                            'project result' &&
                          postPage?.data?.pageTypes[0]?.name !== 'event'
                      )
                      .map((postPage, index) => (
                        <div
                          key={postPage?.data?.title + index}
                          className="pt-2 pb-2 flex flex-row items-center justify-between"
                        >
                          <div className="flex flex-wrap flex-start text-left">
                            {/* <Tag
                              className="flex-grow basis-full"
                              name={postPage?.data?.title}
                              tagPageLink={`/post/${postPage.data.slug}`}
                              popularity={
                                postPage?.data?.pageTypes[0]?.popularity
                              }
                            ></Tag> */}
                            <Link href={`/post/${postPage.data.slug}`}>
                              <Badge
                                className="w-fit mt-2 capitalize rounded-full"
                                color="gray"
                              >
                                {postPage?.data?.pageTypes[0]?.name}
                              </Badge>
                              <MiniPagePost
                                key={index}
                                title={postPage?.data?.title}
                                date={postPage?.data?._updatedDate?.$date}
                                image={
                                  postPage?.data?.projectResultMedia
                                    ?.thumbnail ||
                                  postPage?.data?.postImage1?.url ||
                                  'https://placehold.co/600x400?text=placeholder'
                                }
                                text={postPage?.data?.postContentRIch1}
                                tags={[
                                  ...(postPage?.data?.domains ?? []),
                                  ...(postPage?.data?.methods ?? []),
                                ]}
                              />
                            </Link>
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
