import { NextRequest, NextResponse } from 'next/server';
import { getWixClientMarketing } from '@app/hooks/useWixClientServer';

export const POST = async (req: NextRequest) => {
  const { email } = await req.json();

  try {
    const wixClient = await getWixClientMarketing();
    const marketingConsent =
      await wixClient.marketingConsent.upsertMarketingConsent({
        details: {
          email,
          type: 'EMAIL',
        },
      });

    return NextResponse.json(marketingConsent, { status: 200 });
  } catch (error) {
    console.error(`Error subscribing to newsletter for email ${email}:`, error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};

export const GET = () => {
  return NextResponse.json(
    { message: 'Method not allowed for getCollectionItemByTitle' },
    { status: 405 }
  );
};
