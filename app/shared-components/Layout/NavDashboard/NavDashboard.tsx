import React, { useEffect } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import style from './NavDashboard.module.css';
import { useState } from 'react';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import Loading from '@app/dashboard/loading';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';

interface IconProps {
  className?: string;
  size?: number;
  fill?: string;
  strokeWidth?: number;
  inline?: boolean;
}

interface NavItemProps {
  href: string;
  icon: React.ComponentType<IconProps>;
  text: string;
  strokeWidth?: number;
  className?: string;
  fill?: string;
  active?: boolean;
  onClick?: () => void;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon: Icon,
  text,
  fill = 'currentColor',
  strokeWidth = 0,
  className = '',
  active,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={classNames(
        className,
        style.navItem,
        'text-purple-site flex justify-center items-center',
        active && style.active
      )}
    >
      <button
        className={classNames(
          style.navButton,
          'font-semibold flex flex-col justify-center items-center'
        )}
        onClick={handleClick}
      >
        <Icon
          className="mb-2"
          size={38}
          fill={fill}
          strokeWidth={strokeWidth}
          inline={false}
        />
        <span>{text}</span>
      </button>
    </Link>
  );
};

interface UserDashboardProps {
  userInfoPage: boolean;
  handleCreateOrNavigateToPersonInfoPage: () => string;
  handleLogOut: () => void;
  customStyles?: {
    wrapper?: string;
    navItem?: string;
    // active?: string;
  };
  SubNav: React.ReactNode;
  activeItem?: string;
}

const UserDashboard: React.FC<UserDashboardProps> = ({
  userInfoPage,
  handleCreateOrNavigateToPersonInfoPage,
  handleLogOut,
  customStyles,
  SubNav,
  activeItem,
}) => {
  const [activeNavItem, setActiveNavItem] = useState(activeItem || '');

  // #region Check if user info page is ready
  const [isPersonInfoPageReady, setIsPersonInfoPageReady] = useState(false);
  const [personInfoPageLink, setPersonInfoPageLink] = useState('');
  const { userDetails } = useAuth();

  useEffect(() => {
    if (userDetails?.userTag?.name && !isPersonInfoPageReady) {
      setIsPersonInfoPageReady(true);
      setPersonInfoPageLink(userDetails?.userTag?.tagPageLink || '');
    }
  }, [userDetails]);
  // #endregion

  return (
    <>
      <div
        className={classNames(
          style.UserDashboardWrapper,
          style.UserDashboardNavItem,
          customStyles?.wrapper,
          'flex m-auto justify-center relative mb-4'
        )}
      >
        <NavItem
          href="/dashboard/posts"
          icon={SpriteSvg.AccountPostIcon}
          text="Posts"
          onClick={() => setActiveNavItem('/dashboard/posts')}
          active={activeNavItem === '/dashboard/posts'}
        />
        <NavItem
          href="/dashboard/projects"
          icon={SpriteSvg.AccountProjectIcon}
          text="Projects"
          strokeWidth={2.2}
          fill={'none'}
          onClick={() => setActiveNavItem('/dashboard/projects')}
          active={activeNavItem === '/dashboard/projects'}
        />
        <NavItem
          href="/dashboard/organisations"
          icon={SpriteSvg.AccountOrgIcon}
          text="Organisation"
          active={activeNavItem === '/dashboard/organisations'}
        />
        {!isPersonInfoPageReady ? (
          <LoadingSpinner />
        ) : (
          <NavItem
            href={
              !personInfoPageLink ? '/person/New_Info_Page' : personInfoPageLink
            }
            icon={SpriteSvg.AccountPersonIcon}
            text={userInfoPage ? 'View Info Page' : 'Person Page'}
          />
        )}

        <NavItem
          href="/dashboard"
          icon={SpriteSvg.AccountSettingsIcon}
          text="Profile settings"
          active={activeNavItem === '/dashboard'}
        />
        <NavItem
          href="#" // Or logout link if different
          icon={SpriteSvg.AccountLogoutIcon}
          text="Log Out"
          onClick={handleLogOut}
          fill="none"
          strokeWidth={2}
        />
      </div>
      {SubNav}
    </>
  );
};
export default UserDashboard;
