'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { extractInfoPageTypeBasedOnTag } from '@app/utils/parse-utils';
import classNames from 'classnames';
import { members } from '@wix/members';
import NavDashboard from '@app/shared-components/Layout/NavDashboard/NavDashboard';
import SubNavDashboard from '@app/shared-components/Layout/NavDashboard/SubNavDashboard';
import Icon from '@app/shared-components/Icon/Icon';
import style from '../pageDashboard.module.css';
import stylefile from './pageDashboardChangePassword.module.css';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';

import {
  Button,
  Card,
  Checkbox,
  Label,
  TextInput,
  Alert,
  Avatar,
} from 'flowbite-react';
import { HiFingerPrint, HiLockOpen } from 'react-icons/hi';

export default function DashboardChangePassword() {
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
  const { removeDataItem } = useWixModules(items);
  // const { updateMember } = useWixModules(members);

  const handleCreatePost = async () => {
    router.push(`/post/New_Post`);
  };

  const handleListProjects = async () => {
    router.push(`/dashboard/projects`);
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
        <h1 className={classNames(style.headingDashboardh1, 'mt-2 mb-4 p-0')}>
          Change Password
        </h1>
        <p className="text-base text-[#606b85]">
          Choose a strong password and dont reuse it for other accounts. You may
          be signed out of your account on some devices. You will be signed out
          of all devices.
        </p>

        <div className={classNames(style.dashboardBox, 'mt-14 mb-10 p-8')}>
          <div className="flex flex-col">
            <div className="flex justify-between">
              <h3
                className={classNames(
                  style.headingDashboardh3,
                  'mr-4 flex flex-row items-center'
                )}
              >
                <SpriteSvg.AccountLockIcon
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
                Password strength
              </h2>
              <p className={classNames(style.boxTextDashboard, 'mb-8')}>
                Use at least 8 characters. Don’t use a password from another
                site, or something too obvious like your pet’s name.
              </p>
            </div>

            <form
              // onSubmit={handleReset}
              className="flex flex-col w-full h-full pb-6 text-center bg-white rounded-3xl"
            >
              <Label
                className="mb-2 text-sm text-start text-grey-900"
                htmlFor="passwordNew"
                value="Your new password"
              />

              <TextInput
                className="block relative"
                id="passwordNew"
                type="password"
                sizing="lg"
                shadow
                placeholder="enter new password"
                icon={HiLockOpen}
                required
              />

              <Label
                className="mb-2 text-sm text-start text-grey-900"
                htmlFor="passwordNewRepeat"
                value="Repeat Password*"
              />
              <TextInput
                id="passwordNewRepeat"
                className="block relative"
                sizing="lg"
                shadow
                placeholder="Repeat password"
                icon={HiLockOpen}
                type="password"
                required
              />

              <Button
                color="primary"
                className="w-full btn-main px-2 py-2 mb-6 text-sm font-bold leading-none text-white transition duration-300 rounded-10 hover:bg-purple-600 focus:ring-4 bg-purple-500"
                type="submit"
              >
                Reset account
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
