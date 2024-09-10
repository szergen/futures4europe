import { getWixClientMember } from '@app/hooks/useWixClientServer';
import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AuthContextType {
  isLoggedIn: boolean;
  loading: boolean;
  login: () => void;
  logout: () => void;
  userDetails: {
    contactId: string;
    userName: string;
    slug: string;
  };
  updateUserDetails: (details: any) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState({
    contactId: '',
    userName: '',
    slug: '',
    createdDate: '',
    updatedDate: '',
  });

  useEffect(() => {
    const checkAuth = async () => {
      const sessionToken = localStorage.getItem('f4e_wix_sessionToken');
      const accessTokenAndRefreshToken = localStorage.getItem(
        'f4e_wix_accessTokenAndRefreshToken'
      );
      if (sessionToken && accessTokenAndRefreshToken) {
        console.log('Auth token found. Logging in...');
        const wixClient = await getWixClientMember();
        await wixClient.auth.setTokens(JSON.parse(accessTokenAndRefreshToken));
        const currentMember = await wixClient.members.getCurrentMember();
        updateUserDetails({
          contactId: currentMember?.member?.contactId,
          userName: currentMember?.member?.profile?.nickname,
          slug: currentMember?.member?.profile?.slug,
          createdDate: currentMember?.member?._createdDate,
          updatedDate: currentMember?.member?._updatedDate,
        });
        setIsLoggedIn(true);
        console.log('Logged in as:', currentMember?.member?.profile?.nickname);
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  //   Maybe these can be refactored so that everytime the user logs in, the user details are updated
  const login = () => setIsLoggedIn(true);
  const logout = () => {
    localStorage.removeItem('f4e_wix_sessionToken');
    localStorage.removeItem('f4e_wix_accessTokenAndRefreshToken');
    setUserDetails({
      contactId: '',
      userName: '',
      slug: '',
      createdDate: '',
      updatedDate: '',
    });
    setIsLoggedIn(false);
  };

  const updateUserDetails = (details: any) => {
    setUserDetails(details);
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
