'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import gsap from 'gsap';
// import InertiaPlugin from 'gsap/InertiaPlugin';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import Draggable from 'gsap/Draggable';
import MiniPagesListItemPost from './page-components/shared-page-components/MiniPagesListComponentPost/components/MiniPagesListItemPost/MiniPagesListItemPost';
import { getCollectionItemByTitle } from './wixUtils/client-side';
import TagLisInlineComponent from './page-components/shared-page-components/TagListInlineComponent/TagLisInlineComponent';
import ErrorBoundary from './page-components/shared-page-components/TagListInlineComponent/ErrorBoundary';

// Helper function to get motion path length and spacing
function getPathProperties(pathSelector: any, itemCount: any) {
  const pathLength = MotionPathPlugin.getLength(pathSelector);
  const spacing = pathLength / (itemCount + 1); // Spacing between items
  return { pathLength, spacing };
}

// Function to animate items in along the path with a fade-in effect
function animateListIn(
  listSelector: any,
  pathSelector: any,
  delayStart = 0,
  itemSpacing = 0.2,
  alignOriginX = 1.9
) {
  const items = gsap.utils.toArray(`${listSelector} li`);
  const { pathLength, spacing } = getPathProperties(pathSelector, items.length);

  // Loop through each item and set initial animation state
  items.forEach((item, index) => {
    gsap.set(item, { opacity: 0, x: -item.offsetWidth / 2 }); // Set initial hidden state

    gsap.to(item, {
      duration: 2.5,
      delay: delayStart + index * itemSpacing,
      motionPath: {
        path: pathSelector,
        align: pathSelector,
        autoRotate: false,
        alignOrigin: [alignOriginX, 0.5], // Control positioning along the path
        start: (spacing * index) / pathLength,
        end: (spacing * (index + 1)) / pathLength,
      },
      opacity: 1, // Fade the item in
      ease: 'power2.inOut',
    });
  });
}

// Function to place items along the path and make them draggable
function makeListDraggable(listSelector: any, pathSelector: any) {
  const items = gsap.utils.toArray(`${listSelector} li`);
  const { pathLength, spacing } = getPathProperties(pathSelector, items.length);
  let currentOffset = 0;
  let dragMultiplier = 0.01; // Adjust to control drag speed

  // Initialize each item on the motion path
  items.forEach((item, index) => {
    gsap.set(item, {
      motionPath: {
        path: pathSelector,
        align: pathSelector,
        alignOrigin: [0.5, 0.5],
        start: (spacing * index) / pathLength,
        end: (spacing * (index + 1)) / pathLength,
      },
    });
  });

  // Draggable functionality along the path
  Draggable.create(items, {
    type: 'x', // Drag along the x direction
    onDrag: function () {
      const delta = this.deltaX * dragMultiplier;
      currentOffset += delta;

      // Update each item's position based on drag movement
      items.forEach((item, index) => {
        let newStart = (spacing * index + currentOffset) / pathLength;
        let newEnd = (spacing * (index + 1) + currentOffset) / pathLength;

        if (newStart >= 1) newStart -= 1; // Loop around
        if (newEnd >= 1) newEnd -= 1;

        gsap.to(item, {
          motionPath: {
            path: pathSelector,
            align: pathSelector,
            autoRotate: false,
            start: newStart,
            end: newEnd,
          },
          duration: 0, // Instantly update position
        });
      });
    },
    inertia: true, // Smooth continued motion after release
    onThrowUpdate: function () {
      items.forEach((item, index) => {
        let newStart = (spacing * index + currentOffset) / pathLength;
        let newEnd = (spacing * (index + 1) + currentOffset) / pathLength;

        if (newStart >= 1) newStart -= 1; // Loop around
        if (newEnd >= 1) newEnd -= 1;

        gsap.to(item, {
          motionPath: {
            path: pathSelector,
            align: pathSelector,
            autoRotate: false,
            start: newStart,
            end: newEnd,
          },
          duration: 0, // Instant update during inertia
        });
      });
    },
  });
}

export const Home = () => {
  const [homepageConfig, setHomepageConfig] = useState(null);
  const [featuredPages, setFeaturedPages] = useState({
    featuredPosts: [],
    featuredProjects: [],
    featuredProjectResults: [],
    featuredEvents: [],
    featuredOrganisations: [],
    featuredPeople: [],
  });
  // const [userInfoPage, setUserInfoPage] = useState('');

  const {
    // login,
    // isLoggedIn,
    // loading,
    // userDetails,
    // logout,
    infoPages,
    postPages,
    // ownedInfoPages,
    // ownedPostPages,
    // ownedPostPagesFetched,
    // ownedInfoPagesFetched,
    // handleUserDataRefresh,
    tags,
  } = useAuth();
  console.log('ownedpostPages', postPages);

  // const router = useRouter();
  // const { removeDataItem } = useWixModules(items);
  // const { updateMember } = useWixModules(members);

  // useEffect(() => {
  //   // console.log('debug1 -> isLoggedIn:', isLoggedIn); // Debugging line
  //   // if (!loading && !isLoggedIn) {
  //   //   router.push('/login');
  //   // }
  //   // Get the user's tag page link
  //   if (isLoggedIn && tags) {
  //     const userTag = tags.find(
  //       (tag: any) => tag.name === userDetails.userName && tag.tagPageLink
  //     );
  //     console.log('userTag', userTag);
  //     if (userTag) {
  //       setUserInfoPage(userTag?.tagPageLink);
  //     }
  //   }
  // }, [isLoggedIn, router, loading]);

  // useEffect(() => {
  //   // Example usage with outer and inner paths
  //   // First animate them onto the path, then make them draggable
  //   // gsap.registerPlugin(MotionPathPlugin, Draggable, InertiaPlugin);
  //   // animateListIn('#tagsList', '#hidden_outer', 5, 0.1, -1.1); // Animate tags list in along the outer path
  //   // animateListIn('#textList', '#hidden_inner', 2, 0.1, -1.8); // Animate text list in along the inner path
  //   // // After the animation completes, make them draggable
  //   // setTimeout(() => {
  //   //   makeListDraggable('#tagsList', '#hidden_outer');
  //   //   makeListDraggable('#textList', '#hidden_inner');
  //   // }, 3000); // Delay to ensure animation finishes before enabling dragging
  // }, []);

  const getFeaturedPages = (
    homepageConfig: any,
    pages: any,
    featuredKey: string
  ) => {
    const featuredIds = homepageConfig.data?.[featuredKey]?.map(
      (project: any) => project._id
    );
    console.log('featuredIds', featuredIds);
    return pages.filter((page: any) => featuredIds.includes(page.data._id));
  };

  useEffect(() => {
    // #region get homepage config
    const fetchHomepageConfig = async () => {
      const config = await getCollectionItemByTitle(
        'HomePageConfig',
        'Homepage Config'
      );

      setHomepageConfig(config);
    };

    fetchHomepageConfig();
    // #endregion
  }, []);

  useEffect(() => {
    if (
      homepageConfig &&
      postPages &&
      infoPages &&
      infoPages.length > 0 &&
      postPages.length
    ) {
      setFeaturedPages({
        featuredPosts: getFeaturedPages(
          homepageConfig,
          postPages,
          'featuredPosts'
        ),
        featuredProjects: getFeaturedPages(
          homepageConfig,
          infoPages,
          'featuredProjects'
        ),
        featuredProjectResults: getFeaturedPages(
          homepageConfig,
          postPages,
          'featuredProjectResults'
        ),
        featuredEvents: getFeaturedPages(
          homepageConfig,
          postPages,
          'featuredEvents'
        ),
        featuredOrganisations: getFeaturedPages(
          homepageConfig,
          infoPages,
          'featuredOrganisations'
        ),
        featuredPeople: getFeaturedPages(
          homepageConfig,
          infoPages,
          'featuredPeople'
        ),
      });
    }
  }, [homepageConfig, postPages, infoPages]);

  useEffect(() => {
    console.log('homepageConfig', homepageConfig);
    console.log('featuredPages', featuredPages);
  }, [homepageConfig, featuredPages]);

  return (
    <div className="homeHero">
      {/* <pre>{JSON.stringify(infoPages.data, null, 2)}</pre>  */}

      <div className="flex mx-auto relative sm:px-20 py-5 homeHero">
        <div className="flex flex-col min-w-[420px] items-center justify-center homeTitleContainer">
          <h2 className="homeTitle">
            The online home of the European foresight community
          </h2>
          <p className="homeSubtitle">
            Join our community to share, discover, and stay up-to-date on all
            the latest foresight activities in and about Europe. We bring
            together futurists and foresight community members with EU
            policy-makers and citizens.
          </p>
        </div>

        <div className="w-full w-fit Container_wrapper index_customers">
          <div className="index_customerGroups">

            <div className="index_customerGroupWrapper index_reverse">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <ErrorBoundary>
                    <TagLisInlineComponent
                      infoPages={infoPages}
                      infoPageType="person info" // Pass the desired info page type
                    />
                  </ErrorBoundary>
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="person info" // Pass the desired info page type
                  />
                </div>
              </div>

              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="person info" // Pass the desired info page type
                  />
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="person info" // Pass the desired info page type
                  />
                </div>
              </div>
            </div>

            <div className="index_customerGroupWrapper">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <ErrorBoundary>
                    <TagLisInlineComponent
                      infoPages={infoPages}
                      infoPageType="organisation info" // Pass the desired info page type
                    />
                  </ErrorBoundary>
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="organisation info" // Pass the desired info page type
                  />
                </div>
              </div>

              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="organisation info" // Pass the desired info page type
                  />
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="organisation info" // Pass the desired info page type
                  />
                </div>
              </div>
            </div>


            <div className="index_customerGroupWrapper index_reverse">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <ErrorBoundary>
                    <TagLisInlineComponent
                      infoPages={infoPages}
                      infoPageType="project info" // Pass the desired info page type
                    />
                  </ErrorBoundary>
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="project info" // Pass the desired info page type
                  />
                </div>
              </div>

              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="project info" // Pass the desired info page type
                  />
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    infoPages={infoPages}
                    infoPageType="project info" // Pass the desired info page type
                  />
                </div>
              </div>
            </div>

            <div className="index_customerGroupWrapper">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <ErrorBoundary>
                    <TagLisInlineComponent
                      postPages={postPages}
                      postPageTypes="project result" // Pass the desired info page type
                    />
                  </ErrorBoundary>
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    postPages={postPages}
                    postPageTypes="project result" // Pass the desired info page type
                  />
                </div>
              </div>

              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    postPages={postPages}
                    postPageTypes="project result" // Pass the desired info page type
                  />
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    postPages={postPages}
                    postPageTypes="project result" // Pass the desired info page type
                  />
                </div>
              </div>
            </div>
            
            <div className="index_customerGroupWrapper index_reverse">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <ErrorBoundary>
                    <TagLisInlineComponent
                      postPages={postPages}
                      postPageTypes="event" // Pass the desired info page type
                    />
                  </ErrorBoundary>
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    postPages={postPages}
                    postPageTypes="event" // Pass the desired info page type
                  />
                </div>
              </div>

              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    postPages={postPages}
                    postPageTypes="event" // Pass the desired info page type
                  />
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagLisInlineComponent
                    postPages={postPages}
                    postPageTypes="event" // Pass the desired info page type
                  />
                </div>
              </div>
            </div>
                                  
          </div>
        </div>
      </div>

      <div className="homeFeatured">
        {/* <h2 className="homeFeaturedTitle text-gray-800 w-full my-4 tagListTitle">
          Featured Organisations
        </h2> */}

        {featuredPages.featuredProjects.length > 0 && (
          <MiniPagesListItemPost
            items={featuredPages.featuredProjects.map(
              (infoPage: any) => infoPage.data
            )}
            title="Featured Projects"
            pageTypePath="project"
          />
        )}
        {featuredPages.featuredProjectResults.length > 0 && (
          <MiniPagesListItemPost
            items={featuredPages.featuredProjectResults.map(
              (infoPage: any) => infoPage.data
            )}
            title="Featured Project Results"
          />
        )}

        {featuredPages.featuredEvents.length > 0 && (
          <MiniPagesListItemPost
            items={featuredPages.featuredEvents.map(
              (infoPage: any) => infoPage.data
            )}
            title="Featured Events"
          />
        )}

        {featuredPages.featuredPosts.length > 0 && (
          <MiniPagesListItemPost
            items={featuredPages.featuredPosts.map(
              (infoPage: any) => infoPage.data
            )}
            title="Featured Posts"
          />
        )}

        {featuredPages.featuredOrganisations.length > 0 && (
          <MiniPagesListItemPost
            items={featuredPages.featuredOrganisations.map(
              (infoPage: any) => infoPage.data
            )}
            title="Featured Organisations"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
