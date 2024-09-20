'use client';

import { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { members } from '@wix/members';
import { useWixModules, useWixAuth, IOAuthStrategy } from '@wix/sdk-react';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { getContactsItem } from '@app/wixUtils/client-side';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';

export default function LoginPage() {
  const [error, setError] = useState('');
  const [isLoginProcessing, setIsLoginProcessing] = useState(false);
  const router = useRouter();
  const { login, isLoggedIn, updateUserDetails } = useAuth();
  console.log('Login isLoggedIn', isLoggedIn);

  // #region React SDK Hooks
  const {
    login: wixLogin,
    loggedIn: wixLoggedIn,
    setTokens: wixSetTokens,
    getMemberTokensForDirectLogin: wixGetMemberTokensForDirectLogin,
    getMemberTokens
  } = useWixAuth() as unknown as IOAuthStrategy;

  const { getCurrentMember: wixGetCurrentMember } = useWixModules(members);
  // #endregion

  const handleLogin = async (event: SubmitEvent) => {
    event.preventDefault();
    try {
      const email = event?.target?.email?.value || '';
      const password = event.target?.password?.value || '';

      // console.log('wixLogin', await wixLoggedIn());

      const response = await wixLogin({ email, password });
      console.log('response', response);

      if (response?.loginState === 'SUCCESS') {
        setIsLoginProcessing(true);

        const tokens = await wixGetMemberTokensForDirectLogin(
          response.data.sessionToken
        );
        console.log('tokens', tokens);

        await wixSetTokens(tokens);
        const isUserLoggedIn = await wixLoggedIn();

        console.log('isUserLoggedIn from WixProvider?', isUserLoggedIn);
        const currentMember = await wixGetCurrentMember({
          fieldsets: ['FULL'],
        });
        console.log('currentMember', currentMember);

        if (currentMember) {
          const contactData = await getContactsItem(
            currentMember?.member?.contactId
          );
          if (contactData) {
            console.log('contactData', contactData);
          }

          updateUserDetails({
            contactId: currentMember?.member?.contactId,
            accountId:
              contactData?.info?.extendedFields?.items?.['custom.accountid'] ||
              '',
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
        }

        console.log('User is logged in');

        // Save session token to localStorage
        localStorage.setItem(
          'f4e_wix_sessionToken',
          response.data.sessionToken
        );

        // Set accessToken and refreshToken to localStorage
        localStorage.setItem(
          'f4e_wix_accessTokenAndRefreshToken',
          JSON.stringify(tokens)
        );

        login();
        router.push('/dashboard');
      } else if (response?.loginState === 'FAILURE') {
        setError(
          'Login failed. Please check your credentials. ' + response.errorCode
        );
      }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
      console.error('Login failed', err);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      router.push('/dashboard');
    }
  }, [isLoggedIn, router]);

  // const wixClient = await getWixClientMember();
  // console.log('wixClient', wixClient);

  return (
    <div>
      {!isLoginProcessing ? (
        <>
          <h1>Login</h1>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <form onSubmit={handleLogin}>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Login</button>
          </form>
        </>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
