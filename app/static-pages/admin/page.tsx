'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';

// Define the Member interface
interface Member {
  id?: string;
  _id?: string;
  name?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  loginEmail?: string;
  status?: string;
  _createdDate?: string;
  labels?: string[];
  profile?: {
    firstName?: string;
    lastName?: string;
    email?: string;
    nickname?: string;
  };
}

// Define the API response interface
interface ApiResponse {
  success: boolean;
  message?: string;
  member?: Member;
  error?: string;
  noChange?: boolean;
}

export default function MembersList() {
  const router = useRouter();
  const { isLoggedIn, userDetails, loading: authLoading } = useAuth();
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('email');
  const [hasNoInfoPageFilter, setHasNoInfoPageFilter] = useState<boolean | undefined>(undefined);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [updateLoading, setUpdateLoading] = useState(false);
  const [updateMessage, setUpdateMessage] = useState<{type: 'success' | 'error', text: string} | null>(null);

  // Check if user is logged in and is an admin
  useEffect(() => {
    if (!authLoading) {
      if (!isLoggedIn) {
        // Redirect to login page if not logged in
        router.push('/login');
      } else if (!userDetails.isAdmin) {
        // Redirect to dashboard if logged in but not an admin
        router.push('/dashboard');
      } else {
        // If user is an admin, fetch members data
        fetchAllMembers();
      }
    }
  }, [isLoggedIn, userDetails.isAdmin, authLoading, router]);

  // Function to fetch all members
  const fetchAllMembers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/getMembers');  
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Error: ${response.status} ${errorData.message || ''}`);
      }
      
      const data = await response.json();
      console.log('All members response:', data);
      
      // Handle both possible response formats
      const membersList = data.members || [];
      setMembers(membersList);
    } catch (err: any) {
      console.error('Error fetching members:', err);
      setError(err.message || 'An error occurred while fetching members');
    } finally {
      setLoading(false);
    }
  };

  // Function to search for members
  const searchMembers = async () => {
    if (!searchTerm.trim() && hasNoInfoPageFilter === undefined) {
      fetchAllMembers();
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/getMembers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          searchType: hasNoInfoPageFilter !== undefined && !searchTerm.trim() ? 'hasNoInfoPage' : searchType,
          searchValue: hasNoInfoPageFilter !== undefined && !searchTerm.trim() ? 
            String(hasNoInfoPageFilter) : searchTerm,
          hasNoInfoPage: hasNoInfoPageFilter
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Error: ${response.status} ${errorData.message || ''}`);
      }
      
      const data = await response.json();
      console.log('Search response:', data);
      
      // Handle both possible response formats
      const membersList = data.items || data.members || [];
      setMembers(membersList);
    } catch (err: any) {
      console.error('Error searching members:', err);
      setError(err.message || 'An error occurred while searching members');
    } finally {
      setLoading(false);
    }
  };

  // Helper function for formatting status
  function formatMemberStatus(status?: string) {
    if (!status) return 'Unknown';
    
    const statusMap: Record<string, string> = {
      ACTIVE: 'Active',
      PENDING: 'Pending',
      BLOCKED: 'Blocked',
      INACTIVE: 'Inactive',
      UNKNOWN: 'Unknown'
    };
    
    return statusMap[status] || status;
  }

  // Helper to get member name from various possible sources
  function getMemberName(member: Member): string {
    if (member.name) return member.name;
    
    // Try to get from profile
    if (member.profile) {
      const firstName = member.profile.firstName || '';
      const lastName = member.profile.lastName || '';
      const nickname = member.profile.nickname;
      
      if (nickname) return nickname;
      if (firstName || lastName) return `${firstName} ${lastName}`.trim();
    }
    
    // Fallback to direct properties
    const firstName = member.firstName || '';
    const lastName = member.lastName || '';
    
    return `${firstName} ${lastName}`.trim() || 'Unknown';
  }

  // Helper to get member email from various possible sources
  function getMemberEmail(member: Member): string {
    return member.email || 
           (member.profile ? member.profile.email : '') || 
           member.loginEmail || 
           'N/A';
  }

  // Helper to check if a member has the hasNoInfoPage label
  function hasNoInfoPageLabel(member: Member): boolean {
    return Array.isArray(member.labels) && member.labels.includes('hasNoInfoPage');
  }

  // Reset all filters
  const resetFilters = () => {
    setSearchTerm('');
    setSearchType('email');
    setHasNoInfoPageFilter(undefined);
    setSelectedMember(null);
    setUpdateMessage(null);
    fetchAllMembers();
  };
  
  // Select a member for editing
  const selectMember = (member: Member) => {
    setSelectedMember(member);
    setUpdateMessage(null);
  };
  
  // Update the hasNoInfoPage label for a member
  const updateMemberHasNoInfoPage = async (newValue: boolean) => {
    if (!selectedMember) {
      setUpdateMessage({
        type: 'error',
        text: 'No member selected'
      });
      return;
    }

    // Use either _id or id, whichever is available
    const memberId = selectedMember._id || selectedMember.id;

    if (!memberId) {
      setUpdateMessage({
        type: 'error',
        text: 'Member has no valid ID'
      });
      return;
    }

    setUpdateLoading(true);
    setUpdateMessage(null);

    try {
      console.log('Updating member with ID:', memberId);

      const response = await fetch('/api/getMembers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          action: 'updateHasNoInfoPage',
          memberId: memberId,
          newHasNoInfoPageValue: newValue
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(`Error: ${response.status} ${errorData.message || ''}`);
      }

      const data: ApiResponse = await response.json();

      if (data.success && data.member) {
        // Update the selected member
        setSelectedMember(data.member);

        // Update the member in the list
        setMembers(members.map(m => 
          m.id === data.member?.id || m._id === data.member?._id ? data.member : m
        ));

        if (data.noChange) {
          setUpdateMessage({
            type: 'success',
            text: `Member ${getMemberName(data.member)} already has the correct label setting`
          });
        } else {
          setUpdateMessage({
            type: 'success',
            text: `Successfully updated ${getMemberName(data.member)} to ${newValue ? 'No Info Page' : 'Has Info Page'}`
          });
        }
      } else {
        throw new Error(data.message || 'Update failed');
      }
    } catch (err: any) {
      console.error('Error updating member:', err);
      setUpdateMessage({
        type: 'error',
        text: err.message || 'An error occurred while updating member'
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  // Loading state while checking auth
  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Not logged in or not admin - render nothing as redirect will happen
  if (!isLoggedIn || !userDetails.isAdmin) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">Members List</h1>
        <button 
          onClick={() => router.push('/dashboard')}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        >
          Back to Dashboard
        </button>
      </div>
      
      {/* Search Section */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search members..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="email">Email</option>
              <option value="id">ID</option>
              <option value="name">Name</option>
            </select>
          </div>
          <div>
            <button
              onClick={searchMembers}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Search
            </button>
          </div>
          <div>
            <button
              onClick={resetFilters}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
            >
              Reset
            </button>
          </div>
        </div>
        
        {/* Info Page Filter */}
        <div className="mt-4">
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Info Page Filter:</span>
            <button
              onClick={() => {
                setHasNoInfoPageFilter(false);
                searchMembers();
              }}
              className={`px-3 py-1 rounded ${
                hasNoInfoPageFilter === false 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              Has Info Page
            </button>
            <button
              onClick={() => {
                setHasNoInfoPageFilter(true);
                searchMembers();
              }}
              className={`px-3 py-1 rounded ${
                hasNoInfoPageFilter === true 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              No Info Page
            </button>
            <button
              onClick={() => {
                setHasNoInfoPageFilter(undefined);
                searchMembers();
              }}
              className={`px-3 py-1 rounded ${
                hasNoInfoPageFilter === undefined 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-gray-200 hover:bg-gray-300'
              }`}
            >
              All
            </button>
          </div>
        </div>
      </div>

      {/* Selected Member Edit Panel */}
      {selectedMember && (
        <div className="bg-white shadow rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Edit Member: {getMemberName(selectedMember)}</h2>
            <button
              onClick={() => setSelectedMember(null)}
              className="text-gray-500 hover:text-gray-700"
            >
              <span className="text-2xl">&times;</span>
            </button>
          </div>
          
          {updateMessage && (
            <div className={`p-4 mb-4 rounded ${updateMessage.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {updateMessage.text}
            </div>
          )}
          
          <div className="mb-4">
            <p className="text-gray-700 mb-2">Member ID: {selectedMember.id || selectedMember._id}</p>
            <p className="text-gray-700 mb-2">Email: {getMemberEmail(selectedMember)}</p>
            <p className="text-gray-700 mb-4">
              Current Status: 
              <span className={`ml-2 px-2 py-1 rounded text-xs ${
                hasNoInfoPageLabel(selectedMember)
                  ? 'bg-yellow-100 text-yellow-800' 
                  : 'bg-blue-100 text-blue-800'
              }`}>
                {hasNoInfoPageLabel(selectedMember) ? 'No Info Page' : 'Has Info Page'}
              </span>
            </p>
            
            <div className="flex space-x-4">
              <button
                onClick={() => updateMemberHasNoInfoPage(true)}
                disabled={updateLoading || hasNoInfoPageLabel(selectedMember)}
                className={`px-4 py-2 rounded ${
                  updateLoading ? 'bg-gray-300 cursor-not-allowed' :
                  hasNoInfoPageLabel(selectedMember) 
                    ? 'bg-yellow-300 cursor-not-allowed' 
                    : 'bg-yellow-500 hover:bg-yellow-600 text-white'
                }`}
              >
                {updateLoading ? 'Updating...' : 'Mark as No Info Page'}
              </button>
              
              <button
                onClick={() => updateMemberHasNoInfoPage(false)}
                disabled={updateLoading || !hasNoInfoPageLabel(selectedMember)}
                className={`px-4 py-2 rounded ${
                  updateLoading ? 'bg-gray-300 cursor-not-allowed' :
                  !hasNoInfoPageLabel(selectedMember) 
                    ? 'bg-gray-300 cursor-not-allowed' 
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {updateLoading ? 'Updating...' : 'Mark as Has Info Page'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Members List */}
      {loading ? (
        <div className="flex justify-center p-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
          <div className="flex flex-col">
            <p className="text-red-700 font-bold">Error:</p>
            <p className="text-red-700">{error}</p>
            <div className="mt-4">
              <button 
                onClick={fetchAllMembers}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          {members.length === 0 ? (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <p className="text-gray-600">
                No members found.
              </p>
            </div>
          ) : (
            <div className="bg-white shadow rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">Site Members ({members.length})</h2>
              
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Name
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Email
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Created Date
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Info Page Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {members.map((member) => (
                      <tr 
                        key={member.id || member._id || Math.random().toString()}
                        className={selectedMember && (selectedMember.id === member.id || selectedMember._id === member._id) ? 'bg-blue-50' : ''}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {getMemberName(member)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {getMemberEmail(member)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatMemberStatus(member.status)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {member._createdDate ? new Date(member._createdDate).toLocaleDateString() : 'N/A'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`px-2 py-1 rounded text-xs ${
                            hasNoInfoPageLabel(member)
                              ? 'bg-yellow-100 text-yellow-800' 
                              : 'bg-blue-100 text-blue-800'
                          }`}>
                            {hasNoInfoPageLabel(member) ? 'No Info Page' : 'Has Info Page'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button
                            onClick={() => selectMember(member)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}