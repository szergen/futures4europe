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
  // const [isLoadingDeletePostPage, setIsLoadingDeletePostPage] = useState('');
  const [userInfoPage, setUserInfoPage] = useState('');

  const {
    // login,
    isLoggedIn,
    loading,
    userDetails,
    logout,
    // ownedInfoPages,
    // ownedPostPages,
    // ownedPostPagesFetched,
    // ownedInfoPagesFetched,
    // handleUserDataRefresh,
    // tags,
  } = useAuth();

  const router = useRouter();
  const { removeDataItem } = useWixModules(items);

  // #region Check if user info page is ready
  const [isPersonInfoPageReady, setIsPersonInfoPageReady] = useState(false);
  const [personInfoPageLink, setPersonInfoPageLink] = useState('');

  useEffect(() => {
    if (!loading && !isLoggedIn) {
      router.push('/login');
    }
    if (userDetails?.userTag?.name && !isPersonInfoPageReady) {
      setIsPersonInfoPageReady(true);
      setPersonInfoPageLink(userDetails?.userTag?.tagPageLink || '');
    }
  }, [isLoggedIn, router, loading, userDetails]);

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
    { href: '/dashboard', text: 'Account', isActive: true },
    // { href: '/dashboard/security', text: 'Security' },
    // { href: '/dashboard/change-password', text: 'Password' },
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
        activeItem="/dashboard"
      />

      <div
        className={classNames(
          style.UserDashboardWrapper,
          'w-full flex flex-col relative m-auto mt-10 mb-6'
        )}
      >
        {/* // TODO: To make component for dashbaordBoxe's */}
        <div
          className={classNames(
            style.dashboardBox,
            style.dashboardBoxAddWrap,
            'mt-14',
            'mb-10',
            'p-8',
            'bg-alertLight-site',
            personInfoPageLink && 'bg-gray-100'
          )}
        >
          <div className={classNames(style.dashboardBoxAlert, 'flex flex-col')}>
            <div className="flex items-center mb-4">
              {!personInfoPageLink ? (
                <SpriteSvg.AccountAlertIcon
                  className="text-site-black text-[var(--color-text-icon-error)]"
                  sizeW={24}
                  sizeH={24}
                  viewBox={'0 0 32 32'}
                  fill={'currentColor'}
                  strokeWidth={0}
                  inline={false}
                />
              ) : (
                <SpriteSvg.AccountAiIcon
                  className="text-site-black text-[var(--color-text-icon-error)]"
                  sizeW={24}
                  sizeH={24}
                  viewBox={'0 0 32 32'}
                  fill={'var(--p-border-radius-800)'}
                  strokeWidth={0}
                  inline={false}
                />
              )}
              <Typography
                tag="h2"
                className={classNames(style.headingDashboardh1, 'ml-2')}
              >
                Person Info
              </Typography>
            </div>

            <div className="flex flex-col justify-between">
              <Typography
                tag="p"
                className={classNames(
                  style.boxTextDashboard,
                  'text-black-site mb-8'
                )}
              >
                {!personInfoPageLink
                  ? 'You dont have a Person Info page or you did not claim it. Create now a Person Info page to be visible to all members of futures4europe platform.'
                  : 'Edit your Person Info page to be visible to all members of futures4europe platform.'}
              </Typography>
            </div>

            <div className={classNames(style.listDashboard, 'block')}>
              <Link
                href={
                  !personInfoPageLink
                    ? '/person/New_Info_Page'
                    : personInfoPageLink
                }
              >
                <Button
                  size={'md'}
                  color={'light'}
                  className={classNames(
                    style.buttonAddDashboard,
                    'block border-0 mr-4 hover:bg-gray-300 focus:ring-purple-300'
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
                    {personInfoPageLink
                      ? 'Edit My Person Info page'
                      : 'Create My Person Info page'}
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
