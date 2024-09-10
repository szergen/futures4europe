'use client';
import { NavBar } from '@app/shared-components/Layout/NavBar/NavBar';
import { Logo } from '@app/shared-components/Logo/Logo';
import testIds from '@app/utils/test-ids';
import SearchComponentV1 from '../SearchComponentV1/SearchComponentV1';
import { SearchProvider } from '../../custom-hooks/SearchContext/SearchContext';
import style from './Header.module.css';
import Link from 'next/link';
import classNames from 'classnames';
import Image from 'next/image';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';

const Header = () => {
  const { login, isLoggedIn, loading, userDetails, logout } = useAuth();
  return (
    <>
      <header
        className="w-full my-6 px-2 sm:px-8"
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
            className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6"
          >
            <Logo />
          </Link>
          {/* Search */}
          <div>
            <SearchProvider>
              <SearchComponentV1 />
            </SearchProvider>
          </div>
          {/* Account */}
          {isLoggedIn ? (
            <div className="flex items-center">
              <Link
                href="/dashboard"
                className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-2"
              >
                <Image
                  width={60}
                  height={60}
                  src="https://picsum.photos/id/195/60/60"
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </Link>
              {userDetails?.userName}
            </div>
          ) : (
            <Link href="/dashboard" className="">
              {' '}
              Login
            </Link>
          )}

          {/* <h2 className="flex-1"> */}

          {/* </h2> */}
          {/* <div>
          <NavBar />
        </div> */}
        </div>
      </header>
    </>
  );
};

export default Header;
