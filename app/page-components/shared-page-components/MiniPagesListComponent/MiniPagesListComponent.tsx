import style from './MiniPagesListComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import { useState } from 'react';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
import MiniPageEvents from '@app/shared-components/MiniPageEvents/MiniPageEvents';
import MiniPagesListItem from './components/MiniPagesListItem/MiniPagesListItem';

export type MiniPagesListComponentProps = {
  posts?: any[];
  projectResults?: any[];
  events?: any[];
};

const MiniPagesListComponent: React.FC<MiniPagesListComponentProps> = ({
  posts,
  projectResults,
  events,
}) => {
  return (
    <>
      {/* Posts */}
      {posts && posts.length > 0 && (
        <MiniPagesListItem
          items={posts}
          itemType="post"
          itemTypeTitle="Posts"
        />
      )}
      {/* Project Results */}
      {projectResults && projectResults.length > 0 && (
        <MiniPagesListItem
          items={projectResults}
          itemType="projectResults"
          itemTypeTitle="Project Results"
        />
      )}
      {/* Events */}
      {events && events.length > 0 && (
        <MiniPagesListItem
          items={events}
          itemType="events"
          itemTypeTitle="Events"
        />
      )}
    </>
  );
};

export default MiniPagesListComponent;
