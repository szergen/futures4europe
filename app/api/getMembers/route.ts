import { NextRequest, NextResponse } from 'next/server';
import { getWixClientServerData } from '@app/hooks/useWixClientServer';
import { members } from '@wix/members';
import { items } from '@wix/data';
import { currentMember, authentication } from '@wix/site-members';
import { contacts } from '@wix/crm';
import { site } from '@wix/site';

// GET endpoint to fetch all members
export const GET = async () => {
  try {
    // Get the Wix client
    const wixClientServer = await getWixClientServerData();

    if (!wixClientServer) {
      console.error('Failed to initialize Wix client');
      return NextResponse.json(
        { message: 'Failed to initialize Wix client' },
        { status: 500 }
      );
    }

    // Use the Wix client's queryMembers with chaining
    try {
      // Start with basic query using the FULL fieldset
      const queryResult = await wixClientServer.members
        .queryMembers({
          fieldsets: ['FULL'],
        })
        .limit(100)
        .find();

      return NextResponse.json(
        { members: queryResult.items || [] },
        { status: 200 }
      );
    } catch (queryError) {
      console.error('Error querying members with SDK:', queryError);
      throw queryError;
    }
  } catch (error) {
    console.error('Error fetching members:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: String(error) },
      { status: 500 }
    );
  }
};

// POST endpoint to search for a specific member or update member labels
export const POST = async (req: NextRequest) => {
  try {
    const {
      searchType,
      searchValue,
      hasNoInfoPage,
      action,
      memberId,
      newHasNoInfoPageValue,
    } = await req.json();

    // Get the Wix client for all operations
    const wixClientServer = await getWixClientServerData();

    if (!wixClientServer) {
      console.error('Failed to initialize Wix client');
      return NextResponse.json(
        { message: 'Failed to initialize Wix client' },
        { status: 500 }
      );
    }

    // Handle update action for user labels
    if (action === 'updateHasNoInfoPage' && memberId) {
      return handleUpdateLabels(
        wixClientServer,
        memberId,
        newHasNoInfoPageValue
      );
    }

    // Handle search action
    return handleSearchMembers(
      wixClientServer,
      searchType,
      searchValue,
      hasNoInfoPage
    );
  } catch (error) {
    console.error('Error in POST request:', error);
    return NextResponse.json(
      { message: 'Internal server error', error: String(error) },
      { status: 500 }
    );
  }
};

async function handleUpdateLabels(
  wixClientServer,
  memberId,
  newHasNoInfoPageValue
) {
  try {
    console.log('DEBUG: Starting label update process');
    console.log('DEBUG: Member ID:', memberId);
    console.log('DEBUG: New value:', newHasNoInfoPageValue);

    // Get the member
    let member;
    try {
      member = await wixClientServer.members.getMember(memberId);
      console.log('DEBUG: Member retrieved successfully');
      console.log('DEBUG: Member data:', {
        id: member.id,
        _id: member._id,
        email: member.loginEmail,
        contactId: member.contactId,
      });

      if (!member.contactId) {
        throw new Error('Member does not have an associated contactId');
      }
    } catch (err) {
      console.error('DEBUG: Error getting member:', err);
      throw new Error(`Could not retrieve member: ${err.message}`);
    }

    // Now try to update the contact's labels using the imported contacts module
    try {
      // First check if the label exists
      try {
        // Try to create the label first (this will fail if it already exists, which is fine)
        await contacts.createLabel({
          displayName: 'Has No Info Page',
          description: 'Members without an info page',
          key: 'hasNoInfoPage',
        });
        console.log('DEBUG: Label created successfully');
      } catch (labelErr) {
        // If the error is because the label already exists, that's fine
        console.log(
          'DEBUG: Label creation error (might already exist):',
          labelErr.message
        );
      }

      // Determine if we need to add or remove the label
      if (newHasNoInfoPageValue) {
        // Add the label to the contact
        console.log(
          'DEBUG: Adding hasNoInfoPage label to contact',
          member.contactId
        );
        await contacts.labelContact(member.contactId, ['hasNoInfoPage']);
        console.log('DEBUG: Label added successfully');
      } else {
        // Remove the label from the contact
        console.log(
          'DEBUG: Removing hasNoInfoPage label from contact',
          member.contactId
        );
        await contacts.unlabelContact(member.contactId, ['hasNoInfoPage']);
        console.log('DEBUG: Label removed successfully');
      }

      // Get the updated member to return
      const refreshedMember = await wixClientServer.members.getMember(memberId);

      return NextResponse.json(
        { success: true, member: refreshedMember },
        { status: 200 }
      );
    } catch (labelErr) {
      console.error('DEBUG: Label operation failed:', labelErr);

      // If we couldn't update the label, try updating a custom field instead
      try {
        console.log('DEBUG: Trying alternative approach with custom field');
        const updateData = {
          _id: member._id,
          custom: {
            hasNoInfoPage: newHasNoInfoPageValue,
          },
        };

        const updatedMember = await wixClientServer.members.updateMember(
          updateData
        );
        console.log('DEBUG: Custom field update successful');

        return NextResponse.json(
          { success: true, member: updatedMember, approach: 'custom-field' },
          { status: 200 }
        );
      } catch (customErr) {
        console.error('DEBUG: Custom field update failed:', customErr);
        throw labelErr; // Throw the original error
      }
    }
  } catch (error) {
    console.error('DEBUG: Overall error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to update member labels',
        error: String(error),
      },
      { status: 500 }
    );
  }
}

// Helper function to handle searching for members
async function handleSearchMembers(
  wixClientServer,
  searchType,
  searchValue,
  hasNoInfoPage
) {
  try {
    console.log(
      `Searching for member by ${searchType}: ${searchValue}, hasNoInfoPage: ${hasNoInfoPage}`
    );

    if (!searchValue && searchType !== 'hasNoInfoPage') {
      return NextResponse.json(
        { message: 'Search value is required' },
        { status: 400 }
      );
    }

    let results = [];

    // Handle different search types
    if (searchType === 'id') {
      results = await searchMembersById(
        wixClientServer,
        searchValue,
        hasNoInfoPage
      );
    } else if (searchType === 'email') {
      results = await searchMembersByEmail(
        wixClientServer,
        searchValue,
        hasNoInfoPage
      );
    } else if (searchType === 'name') {
      results = await searchMembersByName(
        wixClientServer,
        searchValue,
        hasNoInfoPage
      );
    } else if (searchType === 'hasNoInfoPage') {
      results = await searchMembersByHasNoInfoPage(
        wixClientServer,
        searchValue
      );
    } else {
      // Default search - get all and filter
      results = await getAllMembersFiltered(wixClientServer, hasNoInfoPage);
    }

    return NextResponse.json({ items: results }, { status: 200 });
  } catch (error) {
    console.error('Error in search operation:', error);
    return NextResponse.json(
      { message: 'Search operation failed', error: String(error) },
      { status: 500 }
    );
  }
}

// Search by ID
async function searchMembersById(wixClientServer, id, hasNoInfoPage) {
  try {
    // Try direct fetch first
    try {
      const member = await wixClientServer.members.getMember(id);

      // Apply hasNoInfoPage filter if specified
      if (hasNoInfoPage !== undefined) {
        const hasLabel = (member.labels || []).includes('hasNoInfoPage');
        if (hasNoInfoPage !== hasLabel) {
          return [];
        }
      }

      return [member];
    } catch (directError) {
      // If direct fetch fails, try query
      const queryResult = await wixClientServer.members
        .queryMembers({
          fieldsets: ['FULL'],
        })
        .eq('_id', id)
        .find();

      // Filter by hasNoInfoPage if needed
      let items = queryResult.items || [];
      if (hasNoInfoPage !== undefined) {
        items = items.filter((member) => {
          const hasLabel = (member.labels || []).includes('hasNoInfoPage');
          return hasNoInfoPage === hasLabel;
        });
      }

      return items;
    }
  } catch (error) {
    console.error('Error searching by ID:', error);
    return [];
  }
}

// Search by Email
async function searchMembersByEmail(wixClientServer, email, hasNoInfoPage) {
  try {
    // Try startsWith first
    const queryResult = await wixClientServer.members
      .queryMembers({
        fieldsets: ['FULL'],
      })
      .startsWith('loginEmail', email)
      .find();

    if (!queryResult.items || queryResult.items.length === 0) {
      // Try getting all and filtering
      const allMembers = await wixClientServer.members
        .queryMembers({
          fieldsets: ['FULL'],
        })
        .limit(100)
        .find();

      // Filter by email containing the search term
      let filteredMembers = (allMembers.items || []).filter(
        (member) =>
          member.loginEmail &&
          member.loginEmail.toLowerCase().includes(email.toLowerCase())
      );

      // Apply hasNoInfoPage filter if specified
      if (hasNoInfoPage !== undefined) {
        filteredMembers = filteredMembers.filter((member) => {
          const hasLabel = (member.labels || []).includes('hasNoInfoPage');
          return hasNoInfoPage === hasLabel;
        });
      }

      return filteredMembers;
    }

    // Apply hasNoInfoPage filter to the initial results
    let results = queryResult.items || [];
    if (hasNoInfoPage !== undefined) {
      results = results.filter((member) => {
        const hasLabel = (member.labels || []).includes('hasNoInfoPage');
        return hasNoInfoPage === hasLabel;
      });
    }

    return results;
  } catch (error) {
    console.error('Error searching by email:', error);
    return [];
  }
}

// Search by Name
async function searchMembersByName(wixClientServer, name, hasNoInfoPage) {
  try {
    // Try multiple field searches in parallel
    const [firstNameResult, lastNameResult, nicknameResult] = await Promise.all(
      [
        wixClientServer.members
          .queryMembers({ fieldsets: ['FULL'] })
          .startsWith('contact.firstName', name)
          .find(),
        wixClientServer.members
          .queryMembers({ fieldsets: ['FULL'] })
          .startsWith('contact.lastName', name)
          .find(),
        wixClientServer.members
          .queryMembers({ fieldsets: ['FULL'] })
          .startsWith('profile.nickname', name)
          .find(),
      ]
    );

    // Combine results and remove duplicates
    const allResults = [
      ...(firstNameResult.items || []),
      ...(lastNameResult.items || []),
      ...(nicknameResult.items || []),
    ];

    // Remove duplicates by ID
    let uniqueMembers = allResults.filter(
      (member, index, self) =>
        index === self.findIndex((m) => m.id === member.id)
    );

    // Apply hasNoInfoPage filter if specified
    if (hasNoInfoPage !== undefined) {
      uniqueMembers = uniqueMembers.filter((member) => {
        const hasLabel = (member.labels || []).includes('hasNoInfoPage');
        return hasNoInfoPage === hasLabel;
      });
    }

    // If no results, try broader search
    if (uniqueMembers.length === 0) {
      const allMembers = await wixClientServer.members
        .queryMembers({
          fieldsets: ['FULL'],
        })
        .limit(100)
        .find();

      // Manual substring matching
      const searchLower = name.toLowerCase();
      let filteredMembers = (allMembers.items || []).filter((member) => {
        const contact = member.contact || {};
        const profile = member.profile || {};
        const firstName = contact.firstName || '';
        const lastName = contact.lastName || '';
        const nickname = profile.nickname || '';

        return (
          firstName.toLowerCase().includes(searchLower) ||
          lastName.toLowerCase().includes(searchLower) ||
          nickname.toLowerCase().includes(searchLower)
        );
      });

      // Apply hasNoInfoPage filter if specified
      if (hasNoInfoPage !== undefined) {
        filteredMembers = filteredMembers.filter((member) => {
          const hasLabel = (member.labels || []).includes('hasNoInfoPage');
          return hasNoInfoPage === hasLabel;
        });
      }

      return filteredMembers;
    }

    return uniqueMembers;
  } catch (error) {
    console.error('Error searching by name:', error);

    // Fallback search
    try {
      const allMembers = await wixClientServer.members
        .queryMembers({
          fieldsets: ['FULL'],
        })
        .limit(100)
        .find();

      const searchLower = name.toLowerCase();
      let filteredMembers = (allMembers.items || []).filter((member) => {
        const contact = member.contact || {};
        const profile = member.profile || {};
        const firstName = contact.firstName || '';
        const lastName = contact.lastName || '';
        const nickname = profile.nickname || '';

        return (
          firstName.toLowerCase().includes(searchLower) ||
          lastName.toLowerCase().includes(searchLower) ||
          nickname.toLowerCase().includes(searchLower)
        );
      });

      // Apply hasNoInfoPage filter if specified
      if (hasNoInfoPage !== undefined) {
        filteredMembers = filteredMembers.filter((member) => {
          const hasLabel = (member.labels || []).includes('hasNoInfoPage');
          return hasNoInfoPage === hasLabel;
        });
      }

      return filteredMembers;
    } catch (fallbackError) {
      console.error('Error in fallback name search:', fallbackError);
      return [];
    }
  }
}

// Search specifically by hasNoInfoPage value
async function searchMembersByHasNoInfoPage(wixClientServer, valueStr) {
  try {
    const allMembers = await wixClientServer.members
      .queryMembers({
        fieldsets: ['FULL'],
      })
      .limit(100)
      .find();

    // Filter for members with matching hasNoInfoPage value
    const boolValue = valueStr === 'true';
    const filteredMembers = (allMembers.items || []).filter((member) => {
      const hasLabel = (member.labels || []).includes('hasNoInfoPage');
      return hasLabel === boolValue;
    });

    return filteredMembers;
  } catch (error) {
    console.error('Error searching by hasNoInfoPage:', error);
    return [];
  }
}

// Get all members with optional hasNoInfoPage filter
async function getAllMembersFiltered(wixClientServer, hasNoInfoPage) {
  try {
    const queryResult = await wixClientServer.members
      .queryMembers({
        fieldsets: ['FULL'],
      })
      .limit(100)
      .find();

    let resultItems = queryResult.items || [];

    // Apply hasNoInfoPage filter if specified
    if (hasNoInfoPage !== undefined) {
      resultItems = resultItems.filter((member) => {
        const hasLabel = (member.labels || []).includes('hasNoInfoPage');
        return hasNoInfoPage === hasLabel;
      });
    }

    return resultItems;
  } catch (error) {
    console.error('Error getting all members:', error);
    return [];
  }
}
