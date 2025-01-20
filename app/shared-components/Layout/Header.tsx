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
import 'vanilla-cookieconsent/dist/cookieconsent.css';
import * as CookieConsent from 'vanilla-cookieconsent';
import posthog from 'posthog-js';

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

  // Initialize cookie consent
  useEffect(() => {
    // Only initialize if it hasn't been initialized yet
    if (!window.cc) {
      CookieConsent.run({
        cookie: {
          name: 'cc_cookie',
        },
        guiOptions: {
          consentModal: {
            layout: 'cloud inline',
            position: 'bottom center',
            equalWeightButtons: true,
            flipButtons: false,
          },
          preferencesModal: {
            layout: 'box',
            equalWeightButtons: true,
            flipButtons: false,
          },
        },
        categories: {
          necessary: {
            enabled: true,
            readOnly: true,
          },
          analytics: {
            autoClear: {
              cookies: [
                {
                  name: /^_ga/,
                },
                {
                  name: '_gid',
                },
              ],
            },
            services: {
              ga: {
                label: 'Google Analytics',
                onAccept: () => {
                  // Initialize Google Analytics here if needed
                  console.log('Google Analytics accepted');
                },
                onReject: () => {
                  // Clean up Google Analytics here if needed
                  console.log('Google Analytics rejected');
                },
              },
              youtube: {
                label: 'Youtube Embed',
                onAccept: () => {
                  console.log('Youtube embeds accepted');
                },
                onReject: () => {
                  console.log('Youtube embeds rejected');
                },
              },
              posthog: {
                label: 'PostHog Analytics',
                onAccept: () => {
                  if (posthog?.initialized) {
                    posthog?.opt_in_capturing();
                    console.log('PostHog tracking enabled');
                  }
                },
                onReject: () => {
                  if (posthog?.initialized) {
                    posthog?.opt_out_capturing();
                    console.log('PostHog tracking disabled');
                  }
                },
              },
            },
          },
          ads: {},
        },
        language: {
          default: 'en',
          translations: {
            en: {
              consentModal: {
                title: 'We use cookies',
                description:
                  'We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience.',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                showPreferencesBtn: 'Manage preferences',
                footer: `
                    <a href="/static-pages/privacy-policy" target="_blank">Privacy Policy</a>
                    <a href="/static-pages/terms-of-use" target="_blank">Terms of Use</a>
                  `,
              },
              preferencesModal: {
                title: 'Privacy Preferences',
                acceptAllBtn: 'Accept all',
                acceptNecessaryBtn: 'Reject all',
                savePreferencesBtn: 'Save preferences',
                sections: [
                  {
                    title: 'Necessary cookies',
                    description:
                      'These cookies are essential for the proper functioning of the website.',
                    linkedCategory: 'necessary',
                  },
                  {
                    title: 'Analytics cookies',
                    description:
                      'These cookies help us understand how visitors interact with our website.',
                    linkedCategory: 'analytics',
                  },
                  {
                    title: 'Marketing cookies',
                    description:
                      'These cookies are used to deliver relevant advertisements.',
                    linkedCategory: 'ads',
                  },
                ],
              },
            },
          },
        },
        onFirstConsent: ({ cookie }) => {
          console.log('First consent:', cookie);
        },
        onConsent: ({ cookie }) => {
          console.log('Consent updated:', cookie);
        },
        onChange: ({ changedCategories, changedServices }) => {
          console.log('Settings changed:', changedCategories, changedServices);
          // Handle changes to specific categories
          if (changedCategories.includes('analytics')) {
            // Update analytics settings
          }
        },
      });
    }

    // Cleanup function
    return () => {
      if (window.cc) {
        window.cc.destroy();
      }
    };
  }, []);

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
  }, [infoPages, postPages, userDetails.userName, userDetails.userTag]);

  useEffect(() => {
    console.log('pageTypeCounts', pageTypeCounts);
  }, [pageTypeCounts]);

  // #region Check if user info page is ready
  const [isPersonInfoPageReady, setIsPersonInfoPageReady] = useState(false);
  const [personInfoPageLink, setPersonInfoPageLink] = useState('');

  useEffect(() => {
    if (userDetails?.userTag?.name && !isPersonInfoPageReady) {
      setIsPersonInfoPageReady(true);
      setPersonInfoPageLink(userDetails?.userTag?.tagPageLink || '');
    }
  }, [isLoggedIn, router, userDetails?.userTag?.tagPageLink]);

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
            <Dropdown.Item icon={HiPlusSm}>Add Post</Dropdown.Item>
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
  }, [
    isLoggedIn,
    userDetails,
    isDropdownOpen,
    isPersonInfoPageReady,
    userDetails?.userTag?.tagPageLink,
  ]);

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
        className={classNames('flex w-full my-6 px-2', style.header)}
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
          {/* TODO: Temporary Removal */}
          {/* Search */}
          {/* <div>
            <SearchProvider>
              <SearchComponentV1 />
            </SearchProvider>
          </div> */}
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
        <Modal show={isLoadingInProgress} size="md" popup dismissible={false}>
          <Modal.Header className="opacity-0" />
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
