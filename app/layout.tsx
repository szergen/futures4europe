'use client';
import './globals.css';
import { WixProvider, OAuthStrategy, ApiKeyStrategy } from '@wix/sdk-react';
import Footer from '@app/shared-components/Layout/Footer';
import Header from '@app/shared-components/Layout/Header';
import classNames from 'classnames';
import style from './layout.module.css';
import { AuthProvider } from './custom-hooks/AuthContext/AuthContext';
// import { channel } from 'diagnostics_channel';
import { useEffect, useState } from 'react';
import { inter } from '@app/ui/fonts';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { SearchProvider } from './custom-hooks/SearchContext/SearchContext';
import GA from './3rd-parties/GA/GA';

// Initialize PostHog
function CustomPostHogProvider({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: 'https://eu.i.posthog.com',
        debug: process.env.NODE_ENV === 'development', // Debug only in development
      });
    }
  }, []);

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>;
}

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
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if we're on the home page
      const path = window.location.pathname;
      setIsHomePage(path === '/' || path === '/home');

      if (localStorage) {
        const tokens = JSON.parse(
          localStorage.getItem('f4e_wix_accessTokenAndRefreshToken') || 'null'
        );
        setTokens(tokens);
      }
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>
          Futures4Europe - The online home of the European foresight community
        </title>
        <meta
          name="description"
          content="Explore a rich collection of foresight projects, showcase your own work, and participate in upcoming events."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/favicon.ico" />
      </head>
      <body
        className={classNames('antialiased bg-white body', { [style.homePage]: isHomePage })}>
        <CustomPostHogProvider>
          {process.env.NEXT_PUBLIC_WIX_CLIENT_ID ? (
            <>
              <WixProvider
                auth={OAuthStrategy({
                  clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
                  tokens: tokens || undefined,
                })}
              >
              <div className={classNames(style.mainBody)} >
                <AuthProvider>
                  <SearchProvider>
                    <Header />
                    <main className="min-h-[600px]">
                      {children}
                    </main>
                    <div className="mt-10 sm:mt-20">
                      <Footer />
                    </div>
                  </SearchProvider>
                </AuthProvider>
              </div>
              </WixProvider>

              <SpeedInsights />
              <Analytics />
            </>
          ) : (
            <div className="min-h-[600px] max-w-5xl mx-auto p-5">
              Page not available. Please add an environment variable called
              NEXT_PUBLIC_WIX_CLIENT_ID, containing the client ID, to your
              deployment provider.
            </div>
          )}
        </CustomPostHogProvider>
      </body>
      <GA />
    </html>
  );
}
