'use client';
import { NavBar } from '@app/shared-components/Layout/NavBar/NavBar';
import { Logo } from '@app/shared-components/Logo/Logo';
import testIds from '@app/utils/test-ids';
import SearchComponentV1 from '../SearchComponentV1/SearchComponentV1';
import { SearchProvider } from '../../custom-hooks/SearchContext/SearchContext';
import style from './Header.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { useEffect, useState, useMemo, memo, useRef } from 'react';
import { Avatar, Dropdown, Modal, Badge } from 'flowbite-react';
import { useRouter } from 'next/navigation';
import {
  HiUserCircle,
  HiPlusSm,
  HiShieldExclamation,
  HiUser,
} from 'react-icons/hi';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Tag from '../Tag/Tag';
import { decidePageTypeItems } from '@app/utils/parse-utils';
import GlowButton from './NavBar/GlowButton';

const Header = () => {
  const {
    isLoggedIn,
    userDetails,
    logout,
    isLoadingInProgress,
    infoPages,
    postPages,
  } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  console.log(userDetails);
  const router = useRouter();
  const handleLogOut = async () => {
    logout();
    router.push('/login');
  };

  // Handle dropdown open/close state
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev); // Toggle dropdown state
  };
  console.log('debug2->userDetails', userDetails);

  // Handle add posts and infopages
  //
  // const handleCreateProject = async () => {
  //   router.push(`/project/New_Project`);
  // };

  // const handleCreatePost = async () => {
  //   router.push(`/post/New_Post`);
  // };

  // const handleCreateOrganisation = async () => {
  //   router.push(`/organisation/New_Organisation`);
  // };

  // SVGs Icons
  // TODO: move to global SVG import
  // const DashboardIcon = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     fill="none"
  //     viewBox="0 0 24 24"
  //     strokeWidth={1.5}
  //     stroke="currentColor"
  //     className="w-5 h-5"
  //   >
  //     <path
  //       d="M17.5003 14.9999C17.5003 14.9999 16.3887 16.2869 15.1387 16.2869C13.8887 16.2869 12.8831 15.0957 11.6558 15.0957C10.4285 15.0957 9.71686 15.6549 8.95866 16.4582M14.7562 2.8808L16.2861 4.41062C16.6115 4.73605 16.6115 5.26369 16.2861 5.58913L5.2444 16.6308C5.08812 16.7871 4.87616 16.8749 4.65515 16.8749H2.29199V14.5117C2.29199 14.2907 2.37979 14.0787 2.53607 13.9225L13.5777 2.8808C13.9032 2.55536 14.4308 2.55536 14.7562 2.8808Z"
  //       stroke="currentColor"
  //       strokeWidth="1.5"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //     />
  //   </svg>
  // );
  // const AddPostIcon = () => (
  //   <svg
  //     xmlns="http://www.w3.org/2000/svg"
  //     viewBox="0 0 24 24"
  //     className="w-5 h-5"
  //   >
  //     <path d="M12.5 3a.75.75 0 0 1 .75.75v1.25a.75.75 0 0 1-1.5 0v-1.25a.75.75 0 0 1 .75-.75Z" />
  //     <path d="M16.03 5.03a.75.75 0 0 0-1.06-1.06l-1 1a.75.75 0 0 0 1.06 1.06l1-1Z" />
  //     <path d="M5.5 7c0-.69.56-1.25 1.25-1.25h3.25a.75.75 0 0 0 0-1.5h-3.25a2.75 2.75 0 0 0-2.75 2.75v7.25a2.75 2.75 0 0 0 2.75 2.75h6.5a2.75 2.75 0 0 0 2.75-2.75v-3.625a.75.75 0 0 0-1.5 0v3.625c0 .69-.56 1.25-1.25 1.25h-6.5c-.69 0-1.25-.56-1.25-1.25v-7.25Z" />
  //     <path d="M7.25 12.5a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5h-5.5Z" />
  //     <path
  //       fillRule="evenodd"
  //       d="M6.25 7.25a.75.75 0 0 1 .75-.75h6a.75.75 0 0 1 .75.75v3a.75.75 0 0 1-.75.75h-6a.75.75 0 0 1-.75-.75v-3Zm1.5.75v1.5h4.5v-1.5h-4.5Z"
  //     />
  //     <path d="M16.5 8.25a.75.75 0 0 0 0-1.5h-1.25a.75.75 0 0 0 0 1.5h1.25Z" />
  //   </svg>
  // );
  const SignOutUser = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-5 h-5"
    >
      <path d="M9.75 3c-1.243 0-2.25 1.007-2.25 2.25 0 .414.336.75.75.75s.75-.336.75-.75.336-.75.75-.75h3.5c.69 0 1.25.56 1.25 1.25v8.5c0 .69-.56 1.25-1.25 1.25h-3.5c-.414 0-.75-.336-.75-.75s-.336-.75-.75-.75-.75.336-.75.75c0 1.243 1.007 2.25 2.25 2.25h3.5c1.519 0 2.75-1.231 2.75-2.75v-8.5c0-1.519-1.231-2.75-2.75-2.75h-3.5Z" />
      <path d="M4.75 9.25c-.414 0-.75.336-.75.75s.336.75.75.75h5.69l-.97.97c-.293.293-.293.767 0 1.06.293.293.767.293 1.06 0l2.25-2.25c.141-.14.22-.331.22-.53s-.079-.39-.22-.53l-2.25-2.25c-.293-.293-.767-.293-1.06 0-.293.293-.293.767 0 1.06l.97.97h-5.69Z" />
    </svg>
  );

  const handleClickOutside = (event) => {
    console.log('handleClickOutside', event, dropdownRef);
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log('handleClickOutside -> inside the if', event);
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // #region pageTypeCounts
  const [pageTypeCounts, setPageTypeCounts] = useState({
    post: 0,
    project: 0,
    person: 0,
    organisation: 0,
    event: 0,
    projectResult: 0,
  });

  useEffect(() => {
    if (infoPages && postPages) {
      setPageTypeCounts((prev) => ({
        ...prev,
        post:
          decidePageTypeItems(
            'post',
            postPages.map((item) => item.data),
            infoPages.map((item) => item.data)
          )?.length || 0,
        project:
          decidePageTypeItems(
            'project',
            postPages.map((item) => item.data),
            infoPages.map((item) => item.data)
          )?.length || 0,
        person:
          decidePageTypeItems(
            'person',
            postPages.map((item) => item.data),
            infoPages.map((item) => item.data)
          )?.length || 0,
        organisation:
          decidePageTypeItems(
            'organisation',
            postPages.map((item) => item.data),
            infoPages.map((item) => item.data)
          )?.length || 0,
        event:
          decidePageTypeItems(
            'event',
            postPages.map((item) => item.data),
            infoPages.map((item) => item.data)
          )?.length || 0,
        projectResult:
          decidePageTypeItems(
            'project-result',
            postPages.map((item) => item.data),
            infoPages.map((item) => item.data)
          )?.length || 0,
      }));
    }
  }, [infoPages, postPages]);

  useEffect(() => {
    console.log('pageTypeCounts', pageTypeCounts);
  }, [pageTypeCounts]);

  // #region Check if user info page is ready
  const [isPersonInfoPageReady, setIsPersonInfoPageReady] = useState(false);
  const [personInfoPageLink, setPersonInfoPageLink] = useState('');

  {
    /*TODO: @Alex de verificat implementarea*/
  }
  useEffect(() => {
    if (userDetails?.userTag?.name && !isPersonInfoPageReady) {
      setIsPersonInfoPageReady(true);
      setPersonInfoPageLink(userDetails?.userTag?.tagPageLink || '');
    }
  }, [isLoggedIn, router, userDetails]);

  const accountSection = useMemo(() => {
    return isLoggedIn ? (
      <div className={classNames(style.avatarImageHeader)} ref={dropdownRef}>
        <Dropdown
          className="rounded-lg shadow-sm"
          label={
            <Avatar
              alt="User settings"
              img={
                userDetails?.userTag?.picture
                  ? userDetails?.userTag?.picture
                  : 'https://framerusercontent.com/images/NVeaM8VrCezyFEd2iOUwfmMuGCI.svg'
              }
              rounded
              className={classNames(style.avatarImage, 'avatarUserHeader', {
                active: isDropdownOpen,
              })}
              onClick={toggleDropdown}
            />
          }
          arrowIcon={false}
          inline
        >
          <Dropdown.Header>
            <span className="block text-sm font-semibold">
              {userDetails?.userName}
            </span>
            <span className="block text-sm">{userDetails?.email}</span>

            {/*TODO: @Alex de verificat implementarea*/}
            {personInfoPageLink ? (
              <Link href={personInfoPageLink}>
                <Dropdown.Item icon={HiUser}>My info page</Dropdown.Item>
              </Link>
            ) : (
              <Dropdown.Item icon={HiUser}>
                <Link href="/person/New_Info_Page">Dashboard</Link>
              </Dropdown.Item>
            )}
          </Dropdown.Header>

          <Link href="/dashboard">
            <Dropdown.Item icon={HiUserCircle}>Dashboard</Dropdown.Item>
          </Link>

          <Link href="/project/New_Project">
            <Dropdown.Item icon={HiPlusSm}>Add Project</Dropdown.Item>
          </Link>

          <Link href="/post/New_Post?pageType=projectResult">
            <Dropdown.Item icon={HiPlusSm}>Add Project result</Dropdown.Item>
          </Link>

          <Link href="/organisation/New_Organisation">
            <Dropdown.Item icon={HiPlusSm}>Add Organisation</Dropdown.Item>
          </Link>

          <Link href="/post/New_Post">
            <Dropdown.Item icon={HiPlusSm}>Add Article</Dropdown.Item>
          </Link>

          <Link href="/post/New_Post?pageType=event">
            <Dropdown.Item icon={HiPlusSm}>Add Event</Dropdown.Item>
          </Link>

          {/* <Dropdown.Item
            icon={HiPlusSm}
            //  onClick={handleCreatePost}
          >
            <Link href=''> Add Foresight method</Link>
          </Dropdown.Item> */}
          <Dropdown.Divider />

          <Link href="/dashboard/change-password">
            <Dropdown.Item icon={HiShieldExclamation}>
              Account security
            </Dropdown.Item>
          </Link>

          <Dropdown.Divider />

          <Dropdown.Item onClick={handleLogOut} icon={SignOutUser}>
            Log out
          </Dropdown.Item>
        </Dropdown>
      </div>
    ) : (
      <>
        <div
          className={classNames(style.topbarLogin, 'flex items-center gap-4')}
        >
          <Link href="/dashboard">
            <p className="font-bold text-base">Login</p>
          </Link>

          <Link href="/register">
            <div>
              <GlowButton>Register</GlowButton>
            </div>
          </Link>
        </div>
      </>
    );
  }, [isLoggedIn, userDetails, isDropdownOpen]);

  return (
    <>
      <div
        className={classNames(
          style.topbarlink,
          'top-info-bar bg-[#75c] text-[#2674af] text-xs py-2 px-5'
        )}
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-between">
            <div className="flex flex-row font-medium text-lg lg:flex hidden lg:text-base text-white">
              <Badge className="rounded-lg mr-4" color="purple" size="sm">
                BETA
              </Badge>
              Welcome to the new version of futures4europe
            </div>
            <div className="font-medium text-lg lg:text-base lg:block text-white">
              If you see any problems please report them to us at{' '}
              <a
                className={classNames(style.topbarlink)}
                target="_blank"
                href="mailto:info@futures4europe.eu"
              >
                info@futures4europe.eu
              </a>
            </div>
          </div>
        </div>
      </div>
      <header
        className={classNames('flex w-full my-6 px-2 flex-col', style.header)}
        data-testid={testIds.LAYOUT.HEADER}
      >
        <div
          className={classNames(
            'flex justify-between sm:px-6 sm:px-14 h-header sm:items-center sm:gap-4 sm:gap-8',
            style.headerContainer
          )}
        >
          {/* Logo */}
          <Link
            href="/"
            className={classNames(
              'flex flex-col sm:flex-row items-center gap-2 sm:gap-6',
              style.headerLogo
            )}
          >
            <Logo />
          </Link>

          {/* TODO: Temporary Pages */}
          {/* Page Buttons */}
          <div
            className={classNames('relative', style.headerTagContainerOuter)}
          >
            <div
              className={classNames(
                'flex items-center gap-4',
                style.headerTagContainer
              )}
            >
              <Tag
                name="Posts"
                hardcodedMentions={
                  pageTypeCounts.post !== 0 ? pageTypeCounts.post : undefined
                }
                tagLine="List of Post Pages"
                tagPageLink="/pages/post"
                disableTooltip
                disableUnderline
              />
              <Tag
                name="Projects"
                hardcodedMentions={
                  pageTypeCounts.project !== 0
                    ? pageTypeCounts.project
                    : undefined
                }
                tagLine="List of Project Info Pages"
                tagPageLink="/pages/project"
                disableTooltip
                disableUnderline
              />
              <Tag
                name="Project Results"
                hardcodedMentions={
                  pageTypeCounts.projectResult !== 0
                    ? pageTypeCounts.projectResult
                    : undefined
                }
                tagLine="List of Project Result Pages"
                tagPageLink="/pages/project-result"
                disableTooltip
                disableUnderline
              />
              <Tag
                name="Events"
                hardcodedMentions={
                  pageTypeCounts.event !== 0 ? pageTypeCounts.event : undefined
                }
                tagLine="List of Event Pages"
                tagPageLink="/pages/event"
                disableTooltip
                disableUnderline
              />
              <Tag
                name="Organisations"
                hardcodedMentions={
                  pageTypeCounts.organisation !== 0
                    ? pageTypeCounts.organisation
                    : undefined
                }
                tagLine="List of Organisation Info Pages"
                tagPageLink="/pages/organisation"
                disableTooltip
                disableUnderline
              />
              <Tag
                name="People"
                hardcodedMentions={
                  pageTypeCounts.person !== 0
                    ? pageTypeCounts.person
                    : undefined
                }
                tagLine="List of Person Info Pages"
                tagPageLink="/pages/person"
                disableTooltip
                disableUnderline
              />
            </div>
          </div>

          {/* Account */}
          {accountSection}

          {/* </h2> */}
          {/* <div>
          <NavBar />
        </div> */}
        </div>
        {/* Search */}
        <div
          className={classNames('relative', style.headerWithSearchContainer)}
        >
          <SearchProvider>
            <SearchComponentV1 />
          </SearchProvider>
        </div>
        <Modal show={isLoadingInProgress} size="md" popup>
          <Modal.Header />
          <Modal.Body>
            <div className="text-center">
              Loading...
              <LoadingSpinner />
            </div>
          </Modal.Body>
        </Modal>
      </header>
    </>
  );
};

export default memo(Header);
