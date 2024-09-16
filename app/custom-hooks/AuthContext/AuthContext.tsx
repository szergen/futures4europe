// AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';
import { getContactsItem } from '@app/wixUtils/client-side';
import { IOAuthStrategy, useWixAuth, useWixModules } from '@wix/sdk-react';
import { members } from '@wix/members';
import useFetchUserData from '@app/custom-hooks/useFetchUserData';
import useFetchTags from '../useFetchTags';
import { TagProps } from '@app/shared-components/Tag/Tag';

interface AuthContextType {
  isLoggedIn: boolean;
  loading: boolean;
  login: () => void;
  logout: () => void;
  userDetails: {
    contactId: string;
    accountId: string;
    isAdmin: boolean;
    userName: string;
    slug: string;
    email: string;
    createdDate: string;
    updatedDate: string;
    privacyStatus: string;
    accountStatus: string;
    activityStatus: string;
  };
  updateUserDetails: (details: any) => void;
  ownedPostPagesFetched: boolean;
  ownedInfoPagesFetched: boolean;
  ownedPostPages: any[];
  ownedInfoPages: any[];
  tags: Array<TagProps>;
  tagsFetched: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const initialState = {
  contactId: '',
  accountId: '',
  isAdmin: false,
  userName: '',
  slug: '',
  email: '',
  createdDate: '',
  updatedDate: '',
  privacyStatus: '',
  accountStatus: '',
  activityStatus: '',
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(initialState);

  const { setTokens: wixSetTokens } = useWixAuth() as unknown as IOAuthStrategy;
  const { getCurrentMember: wixGetCurrentMember } = useWixModules(members);

  const updateUserDetails = (details: any) => {
    setUserDetails(details);
  };

  const { tags, tagsFetched } = useFetchTags();

  useEffect(() => {
    const checkAuth = async () => {
      const sessionToken = localStorage.getItem('f4e_wix_sessionToken');
      const accessTokenAndRefreshToken = localStorage.getItem(
        'f4e_wix_accessTokenAndRefreshToken'
      );
      if (sessionToken && accessTokenAndRefreshToken) {
        console.log('Auth token found. Logging in...');
        await wixSetTokens(JSON.parse(accessTokenAndRefreshToken));
        const currentMember = await wixGetCurrentMember({
          fieldsets: ['FULL'],
        });
        const contactData = await getContactsItem(
          currentMember?.member?.contactId
        );
        if (contactData) {
          console.log('contactData', contactData);
        }
        console.log('Logged in as:', currentMember?.member?.profile?.nickname);
        updateUserDetails({
          contactId: currentMember?.member?.contactId,
          accountId:
            contactData?.info?.extendedFields?.items?.['custom.accountid'],
          isAdmin: contactData?.info?.extendedFields?.items?.[
            'custom.accountid'
          ]
            ? true
            : false,
          userName: currentMember?.member?.profile?.nickname,
          slug: currentMember?.member?.profile?.slug,
          email: currentMember?.member?.loginEmail,
          createdDate: currentMember?.member?._createdDate,
          updatedDate: currentMember?.member?._updatedDate,
          privacyStatus: currentMember?.member?.privacyStatus,
          accountStatus: currentMember?.member?.status,
          activityStatus: currentMember?.member?.activityStatus,
        });
        setIsLoggedIn(true);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  const {
    ownedPostPages,
    ownedInfoPages,
    ownedPostPagesFetched,
    ownedInfoPagesFetched,
  } = useFetchUserData(isLoggedIn, userDetails);

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    localStorage.removeItem('f4e_wix_sessionToken');
    localStorage.removeItem('f4e_wix_accessTokenAndRefreshToken');
    setUserDetails(initialState);
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        loading,
        login,
        logout,
        userDetails,
        updateUserDetails,
        ownedPostPages,
        ownedInfoPages,
        ownedPostPagesFetched,
        ownedInfoPagesFetched,
        tags,
        tagsFetched,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
