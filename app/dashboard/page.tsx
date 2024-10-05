'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingSpinner from '@app/shared-components/LoadingSpinner/LoadingSpinner';
import Link from 'next/link';
import { extractInfoPageTypeBasedOnTag } from '@app/utils/parse-utils';
import classNames from 'classnames';
import { members } from '@wix/members';

export default function Dashboard() {
  //   const [ownedPostPages, setOwnedPostPages] = useState<any[]>([]);
  //   const [ownedInfoPages, setOwnedInfoPages] = useState<any[]>([]);
  // const [showLoadingCreatePost, setShowLoadingCreatePost] = useState(false);
  const [isLoadingDeletePostPage, setIsLoadingDeletePostPage] = useState('');
  const [userInfoPage, setUserInfoPage] = useState('');

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
    tags,
  } = useAuth();
  console.log('Dashboard isLoggedIn', isLoggedIn);

  const router = useRouter();
  const { removeDataItem } = useWixModules(items);
  // const { updateMember } = useWixModules(members);

  const handleCreatePost = async () => {
    router.push(`/post/New_Post`);
  };

  const handleCreateProject = async () => {
    router.push(`/project/New_Project`);
  };

  const handleCreatePersonInfoPage = async () => {
    if (userInfoPage) {
      router.push(`/person/${userInfoPage}`);
      return;
    }
    router.push(`/person/New_Info_Page`);
  };

  const handleCreateOrganisation = async () => {
    router.push(`/organisation/New_Organisation`);
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

  const handleDeleteInfoPage = async (infoPageId: string) => {
    setIsLoadingDeletePostPage(infoPageId);
    try {
      // Replace with your actual delete logic
      await removeDataItem(infoPageId, {
        dataCollectionId: 'InfoPages',
      });
      // TODO: Refresh Owned Pages
    } catch (error) {
      console.error('Failed to delete info page:', error);
    } finally {
      setIsLoadingDeletePostPage('');
      handleUserDataRefresh();
    }
  };

  console.log('loading', loading);

  useEffect(() => {
    // console.log('debug1 -> isLoggedIn:', isLoggedIn); // Debugging line
    if (!loading && !isLoggedIn) {
      router.push('/login');
    }
    // Get the user's tag page link
    if (isLoggedIn && tags) {
      const userTag = tags.find(
        (tag: any) => tag.name === userDetails.userName && tag.tagPageLink
      );
      console.log('userTag', userTag);
      if (userTag) {
        setUserInfoPage(userTag?.tagPageLink);
      }
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

  // const handleChangeNickname = async () => {
  //   const member = await updateMember(userDetails.contactId, {
  //     profile: {
  //       nickname: 'Alexandru-Sergiu Ciobanasu',
  //     },
  //   });
  //   console.log('gotMember', member);
  // };

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
        <div className="relative">
          <button
            onClick={handleCreatePost}
            className={classNames(
              'bg-green-600 text-neutral-50 p-4 rounded-md'
            )}
          >
            Create Post
          </button>
        </div>
        <div className="relative">
          <button
            onClick={handleCreateProject}
            className={classNames('bg-blue-800 text-neutral-50 p-4 rounded-md')}
          >
            Create Project
          </button>
        </div>
        <div className="relative">
          <button
            onClick={handleCreateOrganisation}
            className={classNames(
              'bg-green-800 text-neutral-50 p-4 rounded-md'
            )}
          >
            Create Organisation
          </button>
        </div>
        <button
          onClick={handleCreatePersonInfoPage}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          {userInfoPage ? 'View Info Page' : 'Create Person Info Page'}
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
                  <div className="relative">
                    <button
                      onClick={() => handleDeleteInfoPage(infoPage.data._id)}
                      className="mx-4 px-4 py-1 bg-red-500 text-white rounded-md"
                    >
                      Delete Info Page
                    </button>
                    {isLoadingDeletePostPage &&
                      isLoadingDeletePostPage === infoPage?.data?._id && (
                        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2">
                          <LoadingSpinner />
                        </div>
                      )}
                  </div>
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
