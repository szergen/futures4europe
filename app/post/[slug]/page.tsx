import React from 'react';
// import SearchComponentV1 from '@app/shared-components/SearchComponentV1/SearchComponentV1';

export default async function PostPage({ params }: any) {
  return (
    <div className="post-layout">
      <header className="post-header">
        <h1>Post Title: {params?.slug}</h1>
      </header>
      {/* <SearchComponentV1 /> */}
      <main className="post-content">
        <p>This is where the post content will go.</p>
        {/* You can dynamically load post content based on params.slug */}
      </main>
      <aside className="post-sidebar">
        {/* Sidebar content or links can go here */}
      </aside>
      <footer className="post-footer">
        <p>Posted on [Post Date]</p>
        {/* Additional footer content */}
      </footer>
    </div>
  );
}
