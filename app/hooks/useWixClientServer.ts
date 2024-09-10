import { createClient, OAuthStrategy, ApiKeyStrategy } from '@wix/sdk';
import { members } from '@wix/members';
import { items } from '@wix/data';
import { authentication, currentMember } from '@wix/site-members';
import { site } from '@wix/site';

export const getWixClientData = async () => {
  const { NEXT_PUBLIC_WIX_CLIENT_ID } = process.env;

  if (!NEXT_PUBLIC_WIX_CLIENT_ID) {
    throw new Error(
      'Missing required environment variable: NEXT_PUBLIC_WIX_CLIENT_ID'
    );
  }

  const wixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({ clientId: NEXT_PUBLIC_WIX_CLIENT_ID }),
  });

  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);

  return wixClient;
};

export const getWixClientMember = async () => {
  const NEXT_PUBLIC_WIX_CLIENT_ID = process.env.NEXT_PUBLIC_WIX_CLIENT_ID;
  // console.log('NEXT_PUBLIC_WIX_CLIENT_ID', NEXT_PUBLIC_WIX_CLIENT_ID);

  if (!NEXT_PUBLIC_WIX_CLIENT_ID) {
    throw new Error(
      'Missing required environment variable: NEXT_PUBLIC_WIX_CLIENT_ID'
    );
  }

  const wixClient = createClient({
    modules: { members },
    auth: OAuthStrategy({ clientId: NEXT_PUBLIC_WIX_CLIENT_ID }),
    // host: site.host(),
  });

  return wixClient;
};

export const getWixClientServerData = async () => {
  const { NEXT_PUBLIC_WIX_API_KEY, NEXT_PUBLIC_WIX_SITE_ID, WIX_ACCOUNT_ID } =
    process.env;

  // if (!NEXT_PUBLIC_WIX_API_KEY || !NEXT_PUBLIC_WIX_SITE_ID) {
  //   throw new Error('Missing required environment variables for Wix client.');
  // }

  const wixClientServer = createClient({
    modules: { items },
    auth: ApiKeyStrategy({
      apiKey: NEXT_PUBLIC_WIX_API_KEY,
      siteId: NEXT_PUBLIC_WIX_SITE_ID,
      // accountId: WIX_ACCOUNT_ID,
    }),
  });

  return wixClientServer;
};

export const getWixClientForAuthetication = async (
  email: string,
  password: string
) => {
  // const { NEXT_PUBLIC_WIX_API_KEY, NEXT_PUBLIC_WIX_SITE_ID, WIX_ACCOUNT_ID } = process.env;

  const wixClient = createClient({
    host: site.host(),
    modules: { authentication },
  });

  try {
    await wixClient.authentication.login(email, password);
    console.log('Member is logged in');
  } catch (error) {
    console.error(error);
  }

  // const { NEXT_PUBLIC_WIX_CLIENT_ID } = process.env;

  // if (!NEXT_PUBLIC_WIX_CLIENT_ID) {
  //   throw new Error('Missing required environment variable: NEXT_PUBLIC_WIX_CLIENT_ID');
  // }

  // const wixClient = createClient({
  //   modules: { authentication },
  //   auth: OAuthStrategy({ clientId: NEXT_PUBLIC_WIX_CLIENT_ID }),
  // });

  return wixClient;
};

export const getWixClient = async (email: string, password: string) => {
  // const { NEXT_PUBLIC_WIX_API_KEY, NEXT_PUBLIC_WIX_SITE_ID, WIX_ACCOUNT_ID } = process.env;

  // const wixClient = createClient({
  //   host: site.host(),
  //   modules: { authentication },
  // });

  // try {
  //   await wixClient.authentication.login(email, password);
  //   console.log('Member is logged in');
  // } catch (error) {
  //   console.error(error);
  // }

  const { NEXT_PUBLIC_WIX_CLIENT_ID } = process.env;

  if (!NEXT_PUBLIC_WIX_CLIENT_ID) {
    throw new Error(
      'Missing required environment variable: NEXT_PUBLIC_WIX_CLIENT_ID'
    );
  }

  const wixClient = createClient({
    // modules: { authentication },
    auth: OAuthStrategy({ clientId: NEXT_PUBLIC_WIX_CLIENT_ID }),
  });

  return wixClient;
};
