import style from './MiniPagesListComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import { useState } from 'react';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import MiniPageProjectResults from '@app/shared-components/MiniPageProjectResults/MiniPageProjectResults';
import MiniPageEvents from '@app/shared-components/MiniPageEvents/MiniPageEvents';

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
  const [displayCountPosts, setDisplayCountPosts] = useState(3);
  const [displayCountProjectResults, setDisplayCountProjectResults] =
    useState(3);
  const [displayCountEvents, setDisplayCountEvents] = useState(3);

  const showMorePosts = () => {
    setDisplayCountPosts(posts?.length);
  };
  const showFewerPosts = () => {
    setDisplayCountPosts(3);
  };
  const showMoreProjectResults = () => {
    setDisplayCountProjectResults(projectResults?.length);
  };
  const showFewerProjectResults = () => {
    setDisplayCountProjectResults(3);
  };
  const showMoreEvents = () => {
    setDisplayCountEvents(events?.length);
  };
  const showFewerEvents = () => {
    setDisplayCountEvents(3);
  };
  return (
    <>
      {/* Posts */}
      {posts && posts.length > 0 && (
        <section className={classNames(style.posts)}>
          <Typography
            tag="h2"
            className={classNames(
              'text-gray-800 w-full my-4',
              style.foresightTitle
            )}
          >
            Posts
          </Typography>
          {posts.slice(0, displayCountPosts).map((post, index) => (
            <MiniPagePost key={index} {...post} />
          ))}
          {displayCountPosts < posts.length && (
            <button onClick={showMorePosts} className="w-full my-4">
              Show All Posts({posts.length})
            </button>
          )}
          {displayCountPosts >= posts.length && (
            <button onClick={showFewerPosts} className="w-full my-4">
              Show fewer Posts
            </button>
          )}
        </section>
      )}
      {/* Project Results */}
      {projectResults && projectResults.length > 0 && (
        <section className={classNames(style.projectResults)}>
          <Typography
            tag="h2"
            className={classNames(
              'text-gray-800 w-full my-4',
              style.foresightTitle
            )}
          >
            Project Results
          </Typography>
          {projectResults
            .slice(0, displayCountProjectResults)
            .map((post, index) => (
              <MiniPageProjectResults key={index} {...post} />
            ))}
          {displayCountProjectResults < projectResults.length && (
            <button onClick={showMoreProjectResults} className="w-full my-4">
              Show All Project Results({projectResults.length})
            </button>
          )}
          {displayCountProjectResults >= projectResults.length && (
            <button onClick={showFewerProjectResults} className="w-full my-4">
              Show fewer Project Results
            </button>
          )}
        </section>
      )}
      {/* Events */}
      {events && events.length > 0 && (
        <section className={classNames(style.events)}>
          <Typography
            tag="h2"
            className={classNames(
              'text-gray-800 w-full my-4',
              style.foresightTitle
            )}
          >
            Events
          </Typography>
          {events.slice(0, displayCountEvents).map((post, index) => (
            <MiniPageEvents key={index} {...post} />
          ))}
          {displayCountEvents < events.length && (
            <button onClick={showMoreEvents} className="w-full my-4">
              Show All Events({events.length})
            </button>
          )}
          {displayCountEvents >= events.length && (
            <button onClick={showFewerEvents} className="w-full my-4">
              Show fewer Events
            </button>
          )}
        </section>
      )}
    </>
  );
};

export default MiniPagesListComponent;
