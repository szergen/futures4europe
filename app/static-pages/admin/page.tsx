'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';

interface Contact {
  _id: string;
  source?: {
    sourceType?: string;
  };
  primaryEmail?: {
    email: string;
    subscriptionStatus: string;
    deliverabilityStatus: string;
  };
  picture?: string;
  info: {
    name?: {
      first?: string;
      last?: string;
    };
    emails?: {
      items?: { email: string; tag?: string; _id?: string }[];
    };
    labelKeys?: {
      items?: string[];
    };
    extendedFields?: {
      items?: {
        [key: string]: string;
      };
    };
    picture?: {
      image: string;
      imageProvider: string;
    };
  };
}

const AdminContactsPanel = () => {
  const router = useRouter();
  const { isLoggedIn, userDetails, loading: authLoading } = useAuth();
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Filter toggles
  const [filterHasNoInfoPage, setFilterHasNoInfoPage] = useState(false);
  const [filterIsMember, setFilterIsMember] = useState(false);
  const [filterEmailSubscribed, setFilterEmailSubscribed] = useState(false);

  useEffect(() => {
    if (!authLoading) {
      if (!isLoggedIn) {
        router.push('/login');
      } else if (!userDetails.isAdmin) {
        router.push('/dashboard');
      } else {
        fetchContacts();
      }
    }
  }, [isLoggedIn, userDetails.isAdmin, authLoading, router]);

  const fetchContacts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/members');
      const data = await response.json();
      if (data.success) {
        setContacts(data.contacts);
      } else {
        throw new Error('Failed to fetch contacts');
      }
    } catch (error) {
      setStatusMessage('Error loading contacts');
      setMessageType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRemoveLabel = async (contactId: string) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/members', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ contactId }),
      });

      if (response.ok) {
        setStatusMessage('Label removed successfully');
        setMessageType('success');
        setContacts(contacts.filter((contact) => contact._id !== contactId));
      } else {
        throw new Error('Failed to remove label');
      }
    } catch (error) {
      setStatusMessage('Error removing label');
      setMessageType('error');
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatusMessage(''), 5000);
    }
  };

  // Function to filter contacts based on selected criteria
  const filterContacts = (contact: Contact) => {
    let passes = true;
    if (filterHasNoInfoPage) {
      // Now checking for the custom.hasnoinfopage label
      passes =
        passes &&
        contact.info.labelKeys?.items?.includes('custom.hasnoinfopage');
    }
    if (filterIsMember) {
      passes = passes && contact.source?.sourceType === 'WIX_SITE_MEMBERS';
    }
    if (filterEmailSubscribed) {
      const primaryStatus = contact.primaryEmail?.subscriptionStatus;
      const extendedStatus =
        contact.info.extendedFields?.items &&
        contact.info.extendedFields?.items[
          'emailSubscriptions.subscriptionStatus'
        ];
      passes =
        passes &&
        ((primaryStatus && primaryStatus === 'SUBSCRIBED') ||
          (extendedStatus && extendedStatus === 'SUBSCRIBED'));
    }
    return passes;
  };

  // Filtered contacts based on toggle state
  const filteredContacts = contacts.filter(filterContacts);

  if (authLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!isLoggedIn || !userDetails.isAdmin) return null;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-lg font-semibold text-gray-900">
              Contact Management
            </h1>
            <button
              onClick={() => router.push('/dashboard')}
              className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {statusMessage && (
            <div
              className={`mb-6 p-4 rounded-md ${
                messageType === 'success'
                  ? 'bg-green-50 border border-green-200'
                  : 'bg-red-50 border border-red-200'
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  messageType === 'success' ? 'text-green-800' : 'text-red-800'
                }`}
              >
                {statusMessage}
              </p>
            </div>
          )}

          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-4">
            <button
              onClick={() => setFilterHasNoInfoPage(!filterHasNoInfoPage)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filterHasNoInfoPage
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Has No Info Page
            </button>
            <button
              onClick={() => setFilterIsMember(!filterIsMember)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filterIsMember
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Is Member
            </button>
            <button
              onClick={() => setFilterEmailSubscribed(!filterEmailSubscribed)}
              className={`px-4 py-2 rounded-md text-sm font-medium ${
                filterEmailSubscribed
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              Email Subscribed
            </button>
          </div>

          <div className="bg-white shadow-sm rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">
                Contacts List
              </h3>
            </div>
            <div className="px-4 py-5 sm:p-6">
              {isLoading ? (
                <div className="flex justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : filteredContacts.length === 0 ? (
                <p className="text-gray-500 text-center">No contacts found</p>
              ) : (
                <ul className="divide-y divide-gray-200">
                  {filteredContacts.map((contact) => (
                    <li
                      key={contact._id}
                      className="py-4 flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-4">
                        {contact.picture || contact.info.picture?.image ? (
                          <img
                            src={contact.picture || contact.info.picture?.image}
                            alt="contact"
                            className="h-12 w-12 rounded-full object-cover"
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-full bg-gray-300" />
                        )}
                        <div>
                          <p className="text-sm font-medium text-gray-900">
                            {contact.info.name?.first} {contact.info.name?.last}
                          </p>
                          <p className="text-sm text-gray-500">
                            {contact.info.emails?.items?.[0]?.email ||
                              'No email'}
                          </p>
                          {contact.info.labelKeys &&
                            contact.info.labelKeys.items &&
                            contact.info.labelKeys.items.length > 0 && (
                              <p className="text-xs text-gray-600">
                                Labels:{' '}
                                {contact.info.labelKeys.items.join(', ')}
                              </p>
                            )}
                          {contact.primaryEmail && (
                            <p className="text-xs text-gray-600">
                              Subscription Status:{' '}
                              {contact.primaryEmail.subscriptionStatus}
                            </p>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleRemoveLabel(contact._id)}
                        disabled={isLoading}
                        className={`px-4 py-2 rounded-md text-sm font-medium text-white ${
                          isLoading
                            ? 'bg-blue-300 cursor-not-allowed'
                            : 'bg-blue-600 hover:bg-blue-700'
                        }`}
                      >
                        Remove Label
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminContactsPanel;
