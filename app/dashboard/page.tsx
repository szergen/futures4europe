'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import {
  getItemsForCurrentUser,
  getContactsItem,
} from '@app/wixUtils/client-side';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import { referencedItemOptions } from '@app/wixUtils/server-side';
import Link from 'next/link';
import { TagProps } from '@app/shared-components/Tag/Tag';
import { extractInfoPageTypeBasedOnTag } from '@app/utils/parse-utils';
// import TagInput from '@app/shared-components/SearchComponentV1/components/TagInput/TagInput';
import InputText from '@app/shared-components/InputText/InputText';

export default function Dashboard() {
  //   const [ownedPostPages, setOwnedPostPages] = useState<any[]>([]);
  //   const [ownedInfoPages, setOwnedInfoPages] = useState<any[]>([]);
  const [showInputForPost, setShowInputForPost] = useState(false);
  const [postTitle, setPostTitle] = useState('');

  const {
    login,
    isLoggedIn,
    loading,
    userDetails,
    logout,
    ownedInfoPages,
    ownedPostPages,
    ownedPostPagesFetched,
    ownedInfoPagesFetched,
  } = useAuth();
  console.log('Dashboard isLoggedIn', isLoggedIn);

  const router = useRouter();
  const { insertDataItem, queryDataItems } = useWixModules(items);

  const handleGetItemsForCurrentUser = async () => {
    const items = await getItemsForCurrentUser(
      'PostPages',
      userDetails.contactId.toString()
    );
    console.log('getItemsForCurrentUser->items', items);
  };

  const handleCreatePost = async (title: any) => {
    const post = await insertDataItem({
      dataCollectionId: 'PostPages',
      dataItem: {
        data: {
          title: title,
          subtitle: 'Post Body',
        },
      },
    }).then(() => {
      router.push(`/post/${title.replace(/ /g, '_')}`);
    });
    console.log('post', post);
  };

  const handleGetContactItem = async () => {
    const contactData = await getContactsItem(
      userDetails.contactId
      //   '144948d0-9596-4eda-8135-9a6fec9d1330'
      //   'c3b01bea-1097-44ea-9618-17c5dc7d1a67'
      //   'fb7f97b1-1b2c-4205-b06a-197fcaafd205'
    );

    console.log('contactData', contactData);
  };
  console.log('loading', loading);

  useEffect(() => {
    console.log('debug1 -> isLoggedIn:', isLoggedIn); // Debugging line
    if (!loading && !isLoggedIn) {
      router.push('/login');
    }
    if (isLoggedIn) {
    }
  }, [isLoggedIn, router, loading]);

  if (!isLoggedIn) {
    //Loading Spinner
    return <LoadingSpinner />;
  }
  const handleLogOut = async () => {
    logout();
    router.push('/login');
  };

  const handleOnChange = (event: any) => {
    setPostTitle(event.target.value);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>
        Welcome, {userDetails?.userName} ({userDetails.slug}) -{' '}
        {userDetails.contactId}
      </h2>
      {userDetails?.isAdmin && (
        <h3>
          Admin with <strong>AccountId:</strong>
          <span>{userDetails.accountId}</span>
        </h3>
      )}
      <h3></h3>
      <div className="mt-20 flex items-center justify-around">
        <button
          onClick={handleGetItemsForCurrentUser}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          Get Items for current User
        </button>
        <button
          onClick={handleGetContactItem}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          Get Member
        </button>
        <div>
          <button
            onClick={() => setShowInputForPost(!showInputForPost)}
            className="bg-green-600 text-neutral-50 p-4 rounded-md"
          >
            Create Post
          </button>
          {showInputForPost && (
            <div className="absolute mt-2 flex">
              <InputText
                placeholder="Enter Post Title"
                value={postTitle}
                onChange={handleOnChange}
              />
              <button
                className="bg-green-600 text-neutral-50 p-2 rounded-md"
                onClick={() => {
                  handleCreatePost(postTitle);
                }}
              >
                Create
              </button>
            </div>
          )}
        </div>
        <button
          onClick={handleLogOut}
          className="bg-red-600 text-neutral-50 p-4 rounded-md"
        >
          LogOut User
        </button>
      </div>
      {ownedPostPages.length || ownedInfoPages.length ? (
        <div className="mt-10">
          <h2>Owned Items</h2>
          {ownedPostPages.length > 0 ? (
            ownedPostPages.map((postPage) => (
              <div>
                <div className="my-4">
                  Post Page: <strong> {postPage?.data?.title}</strong>
                  <Link
                    href={`/post/${postPage?.data?.title?.replace(/ /g, '_')}`}
                    className="mx-4 px-4 py-1 bg-blue-500 text-white rounded-md"
                  >
                    View Post Page
                  </Link>
                </div>
                {/* <pre>{JSON.stringify(postPage.data, null, 2)}</pre> */}
              </div>
            ))
          ) : (
            <div>No Post Pages</div>
          )}
          {ownedInfoPages.length > 0 ? (
            ownedInfoPages.map((infoPage) => (
              <div>
                <div className="my-4">
                  Info Page: <strong> {infoPage.data.title}</strong>
                  <Link
                    href={`/${extractInfoPageTypeBasedOnTag(
                      infoPage?.data?.pageTypes[0]
                    )}/${infoPage.data.title.replace(/ /g, '_')}`}
                    className="mx-4 px-4 py-1 bg-blue-500 text-white rounded-md"
                  >
                    View Info Page
                  </Link>
                </div>
                {/* <pre>{JSON.stringify(infoPage.data, null, 2)}</pre> */}
              </div>
            ))
          ) : (
            <div>No Info Pages</div>
          )}
        </div>
      ) : (
        <>
          {ownedPostPagesFetched && ownedInfoPagesFetched ? (
            <div>No Owned Items</div>
          ) : (
            <LoadingSpinner />
          )}
        </>
      )}
    </div>
  );
}
