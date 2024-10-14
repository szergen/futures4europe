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
import style from './pageDashboard.module.css';
import { Avatar, Button } from 'flowbite-react';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import Typography from '@app/shared-components/Typography/Typography';

export default function Dashboard() {
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

  const router = useRouter();
  const { listMembers } = useWixModules(members);
  const { bulkInsertDataItems } = useWixModules(items);

  // const handleCreateAccountTags = async () => {
  //   // let allMembers = [] as any[];
  //   let offset = 0;
  //   const limit = 1000;
  //   // let totalCount = 0;
  //   // do {
  //   const result = await listMembers({ paging: { limit, offset } });
  //   // allMembers = [...allMembers, ...result?.items];
  //   // totalCount = result?.totalCount;
  //   // offset = limit + offset;
  //   // } while(offset < totalCount);
  //   // const membersList = await listMembers();
  //   console.log('result', result);
  //   const tempResult = [...result.members];
  //   console.log('creating tags');
  //   const accountTags = tempResult?.map((account) => {
  //     return {
  //       data: {
  //         name: account?.profile?.nickname,
  //         tagType: 'person',
  //       },
  //     };
  //   });
  //   console.log('accountTags', accountTags);

  //   const insertedTags = await bulkInsertDataItems({
  //     dataCollectionId: 'Tags',
  //     dataItems: accountTags,
  //   });
  //   console.log('insertedTags', insertedTags);
  // };
  // const { updateMember } = useWixModules(members);

  // const handleCreatePost = async () => {
  //   router.push(`/post/New_Post`);
  // };

  // const handleListProjects = async () => {
  //   router.push(`/dashboard/projects`);
  // };

  // const handleCreatePersonInfoPage = async () => {
  //   if (userInfoPage) {
  //     router.push(`/person/${userInfoPage}`);
  //     return;
  //   }
  //   router.push(`/person/New_Info_Page`);
  // };

  // const handleListPosts = async () => {
  //   router.push(`/dashboard/posts`);
  // };

  // const handleCreateOrganisation = async () => {
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

  // const handleDeleteInfoPage = async (infoPageId: string) => {
  //   setIsLoadingDeletePostPage(infoPageId);
  //   try {
  //     // Replace with your actual delete logic
  //     await removeDataItem(infoPageId, {
  //       dataCollectionId: 'InfoPages',
  //     });
  //     handleUserDataRefresh();
  //   } catch (error) {
  //     console.error('Failed to delete info page:', error);
  //   } finally {
  //     setIsLoadingDeletePostPage('');
  //     handleUserDataRefresh();
  //   }
  // };

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

  const handleCreateOrNavigateToPersonInfoPage = () => {
    if (userInfoPage) {
      return `${userInfoPage}`;
    }
    return `/person/New_Info_Page`;
  };

  const handleLogOut = async () => {
    logout();
    router.push('/login');
  };

  const subNavItems = [
    { href: '/dashboard', text: 'Profile information', isActive: true },
    { href: '/dashboard/security', text: 'Security' },
    { href: '/dashboard/change-password', text: 'Password' },
  ];

  return (
    <div className={classNames(style.UserDashboard, 'flex flex-col')}>
      <NavDashboard
        userInfoPage={true}
        handleCreateOrNavigateToPersonInfoPage={
          handleCreateOrNavigateToPersonInfoPage
        }
        handleLogOut={handleLogOut}
        SubNav={<SubNavDashboard items={subNavItems} style={style} />}
        activeItem={'/dashboard'}
      />

      <div
        className={classNames(
          style.UserDashboardWrapper,
          'flex flex-col relative m-auto mt-10 mb-6'
        )}
      >
        <Typography
          tag="h1"
          className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}
        >
          Your profile information
        </Typography>
        <Typography tag="p" className="text-base text-[#606b85]">
          Info about you and your preferences across futures4europe services.
          Manage all your personal information and options. You can make some of
          this information, like your contact details, visible to others so they
          can reach you easily. You can also see a summary of your profiles.
        </Typography>
        {/* <button onClick={handleCreateAccountTags}>Create Tags</button> */}

        <div
          className={classNames(
            style.dashboardBox, // CSS Module class
            style.dashboardBoxAddWrap, // Another CSS Module class
            'mt-14', // Global utility classes (e.g., Tailwind, or other global CSS)
            'mb-10',
            'p-8',
            'bg-alertLight-site'
          )}
        >
          <div className={classNames(style.dashboardBoxAlert, 'flex flex-col')}>
            <SpriteSvg.AccountAlertIcon
              className="text-site-black mb-6 text-[var(--color-text-icon-error)]"
              sizeW={24}
              sizeH={24}
              viewBox={'0 0 32 32'}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            />

            <div className="flex flex-col justify-between">
              <Typography
                tag="h1"
                className={classNames(
                  style.headingDashboardh1,
                  'mt-0 mb-0 flex flex-row items-center'
                )}
              >
                Person Info
              </Typography>

              <Typography
                tag="p"
                className={classNames(
                  style.boxTextDashboard,
                  'text-black-site mb-8'
                )}
              >
                Your profile dose not have a Person Info page or you did not
                claim it. Create now a person page to be visible to all members
                of futures4europe platform.
              </Typography>
            </div>

            <div className={classNames(style.listDashboard, 'block')}>
              <Link href={handleCreateOrNavigateToPersonInfoPage() as any}>
                <Button
                  size={'md'}
                  color={'light'}
                  className={classNames(
                    style.buttonAddDashboard,
                    'block border-0'
                  )}
                  pill
                >
                  <SpriteSvg.AccountHumanIcon
                    sizeH={24}
                    sizeW={24}
                    viewBox={'0 -1 32 32'}
                    strokeWidth={1}
                  />
                  {/* // TODO: Must show claim Person Info Page if it allready exists */}
                  <span className="text-lg">
                    {userInfoPage
                      ? 'View Info Page'
                      : 'Create Person Info Page'}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className={classNames(style.dashboardBox, 'mt-14 mb-10 p-8')}>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3
                className={classNames(
                  style.headingDashboardh3,
                  'mr-4 flex flex-row items-center'
                )}
              >
                <SpriteSvg.AccountVerifyIcon
                  className="mb-0"
                  sizeW={38}
                  sizeH={38}
                  fill={'currentColor'}
                  strokeWidth={0}
                  inline={true}
                />
              </h3>

              <div className="flex items-center bg-gradient-to-br from-emerald-100 to-emerald-200 border-small border-white/50 shadow-black text-[#2F9461] py-2 px-4 rounded-full h-34 font-medium text-base">
                <SpriteSvg.AccountSmallKeyIcon
                  className="text-color-white"
                  sizeW={28}
                  sizeH={14}
                  viewBox={'0 -3 28 14'}
                  fill={'green'}
                  strokeWidth={0}
                  inline={false}
                />
                <span className="">Claimed person page</span>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <h2
                className={classNames(
                  style.headingDashboardh1,
                  'mt-8 mb-0 flex flex-row items-center'
                )}
              >
                Basic info
              </h2>
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Some info may be visible to other people on the platform.
              </p>
            </div>

            <div
              className={classNames(
                style.listDashboard,
                'flex flex-col text-base text-[#606b85]'
              )}
            >
              <div
                className={
                  'pt-2 pb-2 flex flex-row items-center justify-between'
                }
              >
                <span className="">Account registration date</span>
                <span className="ml-4">{userDetails?.createdDate}</span>
              </div>

              <div
                className={
                  'pt-2 pb-2 flex flex-row items-center justify-between'
                }
              >
                <span className="">Last profile update</span>
                <span className="ml-4">{userDetails?.updatedDate}</span>
              </div>

              <div
                className={
                  'pt-2 pb-2 flex flex-row items-center justify-between'
                }
              >
                <span className="">Member type</span>
                <span className="ml-4">Person</span>
              </div>
            </div>
          </div>
        </div>

        <div className={classNames(style.dashboardBox, 'mt-14 mb-10 p-8')}>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3
                className={classNames(
                  style.headingDashboardh3,
                  'mr-4 flex flex-row items-center'
                )}
              >
                <SpriteSvg.AccountCardIcon
                  className="mb-0"
                  sizeW={38}
                  sizeH={38}
                  fill={'currentColor'}
                  strokeWidth={0}
                  inline={true}
                />
              </h3>
            </div>

            <div className="flex flex-col justify-between">
              <h2
                className={classNames(
                  style.headingDashboardh1,
                  'mt-8 mb-0 flex flex-row items-center'
                )}
              >
                Profile picture
              </h2>
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Your profile card is visible to all members of this site.
              </p>
            </div>

            <div
              className={classNames(
                style.listDashboard,
                'flex flex-col text-base text-[#606b85]'
              )}
            >
              <div
                className={classNames(
                  style.listItemDashboard,
                  'pt-4 pb-4 flex flex-row items-center justify-between'
                )}
              >
                <span className="flex flex-row items-center">
                  <Avatar
                    alt="User settings"
                    img="https://framerusercontent.com/images/DSOrm9QuNc3pr6AeQanHcDmlc.png?scale-down-to=512"
                    rounded
                    className={classNames(
                      style.avatarUserHeader,
                      'mr-4 border-none'
                    )} // Conditionally add "active" class
                  />
                  <span>A profile picture helps personalize your account</span>
                </span>
                <span className="ml-4">Change </span>
              </div>

              <div className={'pt-2 pb-2 mt-10 flex flex-col'}>
                <span className="text-[#606b85]">
                  Who can see your profile photo?{' '}
                </span>{' '}
                <span>
                  Your visibility setting only applies to your profile photo.
                  Your header image is always visible to anyone.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
