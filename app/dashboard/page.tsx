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
// import { referencedItemOptions } from '@app/wixUtils/server-side';
import Link from 'next/link';
// import { TagProps } from '@app/shared-components/Tag/Tag';
import { extractInfoPageTypeBasedOnTag } from '@app/utils/parse-utils';
// import TagInput from '@app/shared-components/SearchComponentV1/components/TagInput/TagInput';
import InputText from '@app/shared-components/InputText/InputText';
import classNames from 'classnames';

export default function Dashboard() {
  //   const [ownedPostPages, setOwnedPostPages] = useState<any[]>([]);
  //   const [ownedInfoPages, setOwnedInfoPages] = useState<any[]>([]);
  const [showLoadingCreatePost, setShowLoadingCreatePost] = useState(false);
  const [postTitle, setPostTitle] = useState('');
  const [isLoadingDeletePostPage, setIsLoadingDeletePostPage] = useState('');

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
    handleUserDataRefresh,
  } = useAuth();
  console.log('Dashboard isLoggedIn', isLoggedIn);

  const router = useRouter();
  const { removeDataItem } = useWixModules(items);

  const handleGetItemsForCurrentUser = async () => {
    const items = await getItemsForCurrentUser(
      'PostPages',
      userDetails.contactId.toString()
    );
    console.log('getItemsForCurrentUser->items', items);
  };

  const handleCreatePost = async () => {
    // setShowLoadingCreatePost(true);
    // const post = await insertDataItem({
    //   dataCollectionId: 'PostPages',
    //   dataItem: {
    //     data: {
    //       title: 'New Post',
    //       subtitle: 'Article Subtitle',
    //     },
    //   },
    // })
    //   .then(() => {
    router.push(`/post/New_Post`);
    // })
    // .finally(() => {
    //   handleUserDataRefresh();
    // });
    // console.log('post', post);
  };

  const handleCreatePersonInfoPage = async () => {
    router.push(`/person/New_Info_Page`);
  };

  const handleDeletePostPage = async (infoPageId: string) => {
    setIsLoadingDeletePostPage(infoPageId);
    try {
      // Replace with your actual delete logic
      await removeDataItem(infoPageId, {
        dataCollectionId: 'PostPages',
      });
      // TODO: Refresh Owned Pages
    } catch (error) {
      console.error('Failed to delete info page:', error);
    } finally {
      setIsLoadingDeletePostPage('');
      handleUserDataRefresh();
    }
  };

  const handleGetContactItem = async () => {
    const contactData = await getContactsItem(
      // 'a26a590e-e08c-4a24-a642-9909fa8719ba'
      userDetails.contactId
      //   '144948d0-9596-4eda-8135-9a6fec9d1330'
      //   'c3b01bea-1097-44ea-9618-17c5dc7d1a67'
      //   'fb7f97b1-1b2c-4205-b06a-197fcaafd205'
    );

    console.log('contactData', contactData);
  };
  console.log('loading', loading);

  useEffect(() => {
    // console.log('debug1 -> isLoggedIn:', isLoggedIn); // Debugging line
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

  // const handleOnChange = (event: any) => {
  //   setPostTitle(event.target.value);
  // };
  console.log('ownedPostPages', ownedPostPages);

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
        {/* <button
          onClick={handleGetItemsForCurrentUser}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          Get Items for current User
        </button> */}
        {/* <button
          onClick={handleGetContactItem}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          Get Member
        </button> */}
        <div className="relative">
          <button
            onClick={handleCreatePost}
            className={classNames(
              'bg-green-600 text-neutral-50 p-4 rounded-md',
              showLoadingCreatePost && 'opacity-50 cursor-not-allowed'
            )}
          >
            Create Post
          </button>
          {showLoadingCreatePost && (
            <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
              <LoadingSpinner />
            </div>
          )}
          {/* <LoadingSpinner /> */}
          {/* {showInputForPost && (
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
          )} */}
        </div>
        <button
          onClick={handleCreatePersonInfoPage}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          Create Person Info Page
        </button>
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
              <div key={postPage?.data?.title}>
                <div className="my-4 flex">
                  Post Page: <strong> {postPage?.data?.title}</strong>
                  <Link
                    href={`/post/${postPage?.data?.slug}`}
                    className="mx-4 px-4 py-1 bg-blue-500 text-white rounded-md"
                  >
                    View Post Page
                  </Link>
                  <div className="relative">
                    <button
                      onClick={() => handleDeletePostPage(postPage.data._id)}
                      className="mx-4 px-4 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete Post Page
                    </button>
                    {isLoadingDeletePostPage &&
                      isLoadingDeletePostPage === postPage?.data?._id && (
                        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                          <LoadingSpinner />
                        </div>
                      )}
                  </div>
                </div>

                {/* <pre>{JSON.stringify(postPage.data, null, 2)}</pre> */}
              </div>
            ))
          ) : (
            <div>No Post Pages</div>
          )}
          {ownedInfoPages.length > 0 ? (
            ownedInfoPages.map((infoPage) => (
              <div key={infoPage.data.title}>
                <div className="my-4">
                  Info Page: <strong> {infoPage.data.title}</strong>
                  <Link
                    href={`/${extractInfoPageTypeBasedOnTag(
                      infoPage?.data?.pageTypes[0]
                    )}/${infoPage.data.slug}`}
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
