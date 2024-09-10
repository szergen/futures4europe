'use client';

import { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@wix/sdk'; // Import initialized WixClient
import {
  getWixClientForAuthetication,
  getWixClientMember,
} from '@app/hooks/useWixClientServer';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';

export default function LoginPage() {
  const [error, setError] = useState('');
  const router = useRouter();
  const { login, isLoggedIn, updateUserDetails } = useAuth();
  console.log('Login isLoggedIn', isLoggedIn);

  const handleLogin = async (event: SubmitEvent) => {
    event.preventDefault();
    try {
      const email = event?.target?.email?.value || '';
      const password = event.target?.password?.value || '';

      const wixClient = await getWixClientMember();
      // Login with email and password
      const response = await wixClient.auth.login({
        email,
        password,
      });
      console.log('response', response);

      // const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
      //   response.data.sessionToken
      // );
      // console.log('tokens', tokens);
      // let member;

      if (response?.loginState === 'SUCCESS') {
        // try {
        //   member = await wixClient.members.getCurrentMember();
        //   console.log('member', member);
        //   // member = await wixClient.members.getCurrentMember();
        // } catch (error) {
        //   console.error('Error getting member:', error);
        //   throw error;
        // }
        const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
          response.data.sessionToken
        );
        console.log('tokens', tokens);

        await wixClient.auth.setTokens(tokens);
        const isUserLoggedIn = await wixClient.auth.loggedIn();

        console.log('isUserLoggedIn from API?', isUserLoggedIn);
        const currentMember = await wixClient.members.getCurrentMember();
        console.log('currentMember', currentMember);

        // const memberById = await wixClient.members.getMember(
        //   '144948d0-9596-4eda-8135-9a6fec9d1330'
        // );

        // console.log('memberById', memberById);
        if (currentMember) {
          updateUserDetails({
            contactId: currentMember?.member?.contactId,
            userName: currentMember?.member?.profile?.nickname,
            slug: currentMember?.member?.profile?.slug,
            createdDate: currentMember?.member?._createdDate,
            updatedDate: currentMember?.member?._updatedDate,
          });
        }

        console.log('User is logged in');

        // get the logged-in member's access and refresh tokens
        // const tokens = await wixClient.auth.getMemberTokensForDirectLogin(
        //   response.data.sessionToken
        // );
        // console.log('tokens', tokens);
        // Set the site member's access and refresh tokens as the active tokens for the client:
        // wixClient.auth.setTokens(tokens);

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
        // router.push('/dashboard');
      } else if (response?.loginState === 'FAILURE') {
        setError(
          'Login failed. Please check your credentials. ' + response.errorCode
        );
      }
      // console.log('wixClient', wixClient.auth.loggedIn());
      // console.log('wixClient', wixClient);

      // Call Wix SDK's login method
      // getWixClientForAuthetication(email, password);

      // if (response && response.accessToken) {
      //   // Save token to localStorage or cookie (depending on your authentication flow)
      //   localStorage.setItem('accessToken', response.accessToken);
      //   router.push('/dashboard'); // Redirect to dashboard after login
      // }
    } catch (err) {
      setError('Login failed. Please check your credentials.');
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
    </div>
  );
}
