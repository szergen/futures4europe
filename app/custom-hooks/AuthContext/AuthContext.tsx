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
import useFetchPostPages from '../useFetchPostPages';
import useFetchInfoPages from '../useFetchInfoPages';

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
    avatarUrl: string; // TODO need to pass src avatar
    userTag: TagProps;
  };
  updateUserDetails: (details: any) => void;
  ownedPostPagesFetched: boolean;
  ownedInfoPagesFetched: boolean;
  ownedPostPages: any[];
  ownedInfoPages: any[];
  handleUserDataRefresh: () => void;
  tags: Array<TagProps>;
  tagsFetched: boolean;
  handleTagCreated: () => void;
  postPages: any[];
  postPagesFetched: boolean;
  handlePostPageCreated: () => void;
  infoPages: any[];
  infoPagesFetched: boolean;
  handleInfoPageCreated: () => void;
  // existingPostPagesTitles: string[];
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
  avatarUrl: '',
  userTag: {} as TagProps,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState(initialState);

  const { setTokens: wixSetTokens, loggedIn: wixLoggedIn } =
    useWixAuth() as unknown as IOAuthStrategy;
  const { getCurrentMember: wixGetCurrentMember } = useWixModules(members);

  const updateUserDetails = (details: any) => {
    setUserDetails(details);
  };

  // #region Fetch tags and refresh based on tag creation
  const [refreshTags, setRefreshTags] = useState(false);
  const { tags, tagsFetched } = useFetchTags(refreshTags);

  // console.log('Context -> userTag', getUserTag());

  const getUserTag = (userName: string) => {
    const userTag = tags.find((tag) => tag.name === userName);
    return userTag;
  };

  const handleTagCreated = () => {
    setRefreshTags((prev) => !prev); // Toggle the refresh state to trigger re-fetch
  };
  useEffect(() => {
    if (tags.length > 0 && userDetails.userName && !userDetails.userTag) {
      updateUserDetails((prev: any) => ({
        ...prev,
        userTag: getUserTag(userDetails.userName),
      }));
    }
  }, [tags, userDetails.userName]);
  // #endregion

  useEffect(() => {
    const checkAuth = async () => {
      const sessionToken = localStorage.getItem('f4e_wix_sessionToken');
      const accessTokenAndRefreshToken = localStorage.getItem(
        'f4e_wix_accessTokenAndRefreshToken'
      );
      if (sessionToken && accessTokenAndRefreshToken) {
        console.log('Auth token found. Logging in...');
        await wixSetTokens(JSON.parse(accessTokenAndRefreshToken));
        const isUserLoggedIn = await wixLoggedIn();

        console.log(
          'isUserLoggedIn from WixProvider AUTH CONTEXT',
          isUserLoggedIn
        );
        const currentMember = await wixGetCurrentMember({
          fieldsets: ['FULL' as any],
        });
        const contactData = await getContactsItem(
          currentMember?.member?.contactId || ''
        );
        if (contactData) {
          console.log('contactData', contactData);
        }
        console.log('Logged in as:', currentMember?.member?.profile?.nickname);
        console.log('currentMember', currentMember);

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
          // userName: 'Eva Pericolini',
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

  // #region Fetch user data
  const [refreshUserData, setRefreshUserData] = useState(false);
  const {
    ownedPostPages,
    ownedInfoPages,
    ownedPostPagesFetched,
    ownedInfoPagesFetched,
  } = useFetchUserData(isLoggedIn, userDetails, refreshUserData);
  const handleUserDataRefresh = () => {
    setRefreshUserData((prev) => !prev); // Toggle the refresh state to trigger re-fetch
  };

  const login = () => setIsLoggedIn(true);
  const logout = () => {
    localStorage.removeItem('f4e_wix_sessionToken');
    localStorage.removeItem('f4e_wix_accessTokenAndRefreshToken');
    setUserDetails(initialState);
    setIsLoggedIn(false);
  };
  // #endregion

  // #region Fetch post pages
  const [refreshPostPages, setRefreshPostPages] = useState(false);
  const { postPages, postPagesFetched } = useFetchPostPages(refreshPostPages);

  const handlePostPageCreated = () => {
    setRefreshPostPages((prev) => !prev); // Toggle the refresh state to trigger re-fetch
  };

  // const existingPostPagesTitles = postPages?.map((link) => link.data.title);
  // #endregion

  // #region Fetch info pages
  const [refreshInfoPages, setRefreshInfoPages] = useState(false);
  const { infoPages, infoPagesFetched } = useFetchInfoPages(refreshInfoPages);

  const handleInfoPageCreated = () => {
    setRefreshInfoPages((prev) => !prev); // Toggle the refresh state to trigger re-fetch
  };

  useEffect(() => {
    console.log('debug1->userDetails', userDetails);
  }, [userDetails]);
  // #endregion

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
        handleUserDataRefresh,
        tags,
        tagsFetched,
        handleTagCreated,
        postPages,
        postPagesFetched,
        handlePostPageCreated,
        infoPages,
        infoPagesFetched,
        handleInfoPageCreated,
        // existingPostPagesTitles,
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
