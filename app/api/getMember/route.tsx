import { NextRequest, NextResponse } from 'next/server';
import { getWixClientServerData } from '@app/hooks/useWixClientServer';

export const POST = async (req: NextRequest) => {
  const { memberId } = await req.json();
  console.log('memberId->', memberId);
  //   console.log('data->', data);

  try {
    const wixClientServer = await getWixClientServerData();
    const contactData = await wixClientServer.members.getMember(memberId, {
      fieldsets: ['FULL' as any],
    });
    return NextResponse.json(contactData, { status: 200 });
  } catch (error) {
    console.error(`Error getting memberId: ${memberId}`, error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
};

export const GET = () => {
  return NextResponse.json(
    { message: 'Method not allowed for GetMember' },
    { status: 405 }
  );
};
