'use client';
import { NavBar } from '@app/shared-components/Layout/NavBar/NavBar';
import { Logo } from '@app/shared-components/Logo/Logo';
import testIds from '@app/utils/test-ids';
import SearchComponentV1 from '../SearchComponentV1/SearchComponentV1';
import { SearchProvider } from '../../custom-hooks/SearchContext/SearchContext';

const Header = () => (
  <>
    <header
      className="w-full my-6 px-2 sm:px-8"
      data-testid={testIds.LAYOUT.HEADER}
    >
      <div className="flex justify-around sm:px-6 sm:px-14 h-header sm:items-center sm:gap-4 sm:gap-8">
        <div>
          <SearchProvider>
            <SearchComponentV1 />
          </SearchProvider>
        </div>
        {/* <h2 className="flex-1"> */}
        <a
          href="/"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6"
        >
          <Logo />
        </a>
        {/* </h2> */}
        {/* <div>
          <NavBar />
        </div> */}
      </div>
    </header>
  </>
);

export default Header;
