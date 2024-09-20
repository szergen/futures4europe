'use client';
import './globals.css';
import { WixProvider, OAuthStrategy, ApiKeyStrategy } from '@wix/sdk-react';
import Footer from '@app/shared-components/Layout/Footer';
import Header from '@app/shared-components/Layout/Header';
import { AuthProvider } from './custom-hooks/AuthContext/AuthContext';
import { channel } from 'diagnostics_channel';
import { useEffect, useState } from 'react';

/**
 * Using force dynamic so changes in business assets (e.g. services) are immediately reflected.
 * If you prefer having it reflected only after redeploy (not recommended) please remove it
 * **/
export const revalidate = 0;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tokens, setTokens] = useState(null);

  useEffect(() => {
    if (localStorage) {
      const tokens = JSON.parse(
        localStorage.getItem('f4e_wix_accessTokenAndRefreshToken') || null
      );
      setTokens(tokens);
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Futures4Europe dev</title>
        <meta
          name="description"
          content="Generated by create next app with Wix Education integration"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body className=" bg-white">
        {process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
          <>
            {/* <WixProvider
              auth={ApiKeyStrategy({
                // clientId: '3bca9b0d-398e-4c47-b2e2-263d4ccd7458',
                apiKey: process.env.NEXT_PUBLIC_WIX_API_KEY,
                siteId: process.env.NEXT_PUBLIC_WIX_SITE_ID,
                accountId: process.env.NEXT_PUBLIC_WIX_ACCOUNT_ID,
              })}
            > */}
            <WixProvider
              auth={OAuthStrategy({
                clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
                tokens: tokens,
              })}
            >
              <AuthProvider>
                <Header />
                <main className="bg-white min-h-[600px]">{children}</main>
              </AuthProvider>
            </WixProvider>
            <div className="mt-10 sm:mt-20">
              <Footer />
            </div>
          </>
        ) : (
          <div className="bg-white min-h-[600px] max-w-5xl mx-auto p-5">
            Page not available. Please add an environment variable called
            NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
            deployment provider.
          </div>
        )}
      </body>
    </html>
  );
}
