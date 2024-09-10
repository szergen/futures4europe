'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { getWixClientMember } from '@app/hooks/useWixClientServer';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const router = useRouter();
  const { login, isLoggedIn, loading, userDetails, logout } = useAuth();
  const [userData, setUserData] = useState({});
  console.log('Dashboard isLoggedIn', isLoggedIn);

  const handleCreatePost = () => {
    router.push('/create-post');
  };

  const handleCreateProfile = () => {
    router.push('/create-profile');
  };

  const handleCreateProject = () => {
    router.push('/create-project');
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
    return null; // or a loading spinner
  }
  const handleLogOut = async () => {
    logout();
    router.push('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>
        Welcome, {userDetails?.userName} ({userDetails.slug})
      </h2>
      <div className="mt-20 flex items-center justify-around">
        <button
          onClick={handleCreatePost}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          Create a Post
        </button>
        <button
          onClick={handleCreateProfile}
          className="bg-blue-600 text-neutral-50 p-4 rounded-md"
        >
          Create Person Info Profile
        </button>
        <button
          onClick={handleLogOut}
          className="bg-red-600 text-neutral-50 p-4 rounded-md"
        >
          LogOut User
        </button>
      </div>
    </div>
  );
}
