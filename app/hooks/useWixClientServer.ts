import { createClient, OAuthStrategy, ApiKeyStrategy } from '@wix/sdk';
import { members } from '@wix/members';
import { items } from '@wix/data';

export const getWixClientData = async () => {
  const { WIX_CLIENT_ID } = process.env;

  if (!WIX_CLIENT_ID) {
    throw new Error('Missing required environment variable: WIX_CLIENT_ID');
  }

  const wixClient = createClient({
    modules: { items },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID }),
  });

  const tokens = await wixClient.auth.generateVisitorTokens();
  wixClient.auth.setTokens(tokens);

  return wixClient;
};

export const getWixClientMember = async () => {
  const { WIX_CLIENT_ID } = process.env;

  if (!WIX_CLIENT_ID) {
    throw new Error('Missing required environment variable: WIX_CLIENT_ID');
  }

  const wixClient = createClient({
    modules: { members },
    auth: OAuthStrategy({ clientId: WIX_CLIENT_ID }),
  });

  return wixClient;
};

export const getWixClientServerData = async () => {
  const { WIX_API_KEY, WIX_SITE_ID, WIX_ACCOUNT_ID } = process.env;

  // if (!WIX_API_KEY || !WIX_SITE_ID) {
  //   throw new Error('Missing required environment variables for Wix client.');
  // }

  const wixClientServer = createClient({
    modules: { items },
    auth: ApiKeyStrategy({
      apiKey: WIX_API_KEY,
      siteId: WIX_SITE_ID,
      // accountId: WIX_ACCOUNT_ID,
    }),
  });

  return wixClientServer;
};
