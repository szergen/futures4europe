'use client';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
// import { items } from '@wix/data';
// import { useWixModules } from '@wix/sdk-react';
// import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
// import gsap from 'gsap';
// import InertiaPlugin from 'gsap/InertiaPlugin';
// import MotionPathPlugin from 'gsap/MotionPathPlugin';
// import Draggable from 'gsap/Draggable';
import MiniPagesListItemPost from './page-components/shared-page-components/MiniPagesListComponentPost/components/MiniPagesListItemPost/MiniPagesListItemPost';
import { getCollectionItemByTitle } from './wixUtils/client-side';
// import TagLisInlineComponent from './page-components/shared-page-components/TagListInlineComponent/TagLisInlineComponent';
import TagsList from './page-components/shared-page-components/TagList/TagsList';
// import ErrorBoundary from './page-components/shared-page-components/TagListInlineComponent/ErrorBoundary';

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
    // tags,
    tagsFetched,
  } = useAuth();

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

  // Loading states for different sections
  const [loadingStates, setLoadingStates] = useState({
    projects: true,
    organisations: true,
    persons: true,
    domains: true,
    methods: true,
  });

  // Modified useEffect to handle loading states
  useEffect(() => {
    console.log('debug8->Data status:', {
      hasInfoPages: !!infoPages,
      infoPagesLength: infoPages?.length,
      isTagsFetched: tagsFetched,
    });

    if (infoPages && Array.isArray(infoPages)) {
      // Update all info page related loading states
      setLoadingStates((prev) => ({
        ...prev,
        projects: false,
        organisations: false,
        persons: false,
      }));
    }

    if (tagsFetched) {
      // Update tag-related loading states
      setLoadingStates((prev) => ({
        ...prev,
        domains: false,
        methods: false,
      }));
    }
  }, [infoPages, tagsFetched]); // Dependencies that trigger loading state updates

  // Modified useEffect to handle loading states
  useEffect(() => {
    console.log('debug8->Data status:', {
      hasInfoPages: !!infoPages,
      infoPagesLength: infoPages?.length,
      isTagsFetched: tagsFetched,
    });

    if (infoPages && Array.isArray(infoPages)) {
      // Update all info page related loading states
      setLoadingStates((prev) => ({
        ...prev,
        projects: false,
        organisations: false,
        persons: false,
      }));
    }

    if (tagsFetched) {
      // Update tag-related loading states
      setLoadingStates((prev) => ({
        ...prev,
        domains: false,
        methods: false,
      }));
    }
  }, [infoPages, tagsFetched]); // Dependencies that trigger loading state updates

  return (
    <div className="homeHero">
      {/* <pre>{JSON.stringify(infoPages.data, null, 2)}</pre>  */}

      <div className="flex mx-auto relative sm:px-20 py-5 homeHero">
        <div className="flex flex-col min-w-[420px] items-center justify-center homeTitleContainer">
          <h2 className="homeTitle">
            The online home of the European foresight community
          </h2>
          <p className="homeSubtitle">
            Explore a rich collection of foresight projects, showcase your own
            work, and participate in upcoming events.
          </p>
        </div>

        <div className="w-full w-fit Container_wrapper index_customers">
          <div className="index_customerGroups">
            {/* Projects Section */}
            <div className="index_customerGroupWrapper index_reverse">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagsList
                    infoPageType="project info"
                    limit={25}
                    offset={0}
                    disableTooltip={true}
                    disablePopularityHover={true}
                  />
                </div>
              </div>
            </div>

            {/* Organizations Section */}
            <div className="index_customerGroupWrapper">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagsList
                    infoPageType="organisation info"
                    limit={25}
                    offset={0}
                    disableTooltip={true}
                    disablePopularityHover={true}
                  />
                </div>
              </div>
            </div>

            {/* Persons Section */}
            <div className="index_customerGroupWrapper index_reverse">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagsList
                    infoPageType="person info"
                    limit={25}
                    offset={0}
                    disableTooltip={true}
                    disablePopularityHover={true}
                  />
                </div>
              </div>
            </div>

            {/* Domains Section */}
            <div className="index_customerGroupWrapper">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagsList
                    tagType="domains"
                    limit={25}
                    offset={0}
                    disableTooltip={true}
                    disablePopularityHover={true}
                  />
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagsList
                    tagType="domains"
                    limit={25}
                    offset={25}
                    disableTooltip={true}
                    disablePopularityHover={true}
                  />
                </div>
              </div>
            </div>

            {/* Foresight Methods Section */}
            <div className="index_customerGroupWrapper index_reverse">
              <div className="index_customerGroup">
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagsList
                    tagType="foresight methods"
                    limit={25}
                    offset={0}
                    disableTooltip={true}
                    disablePopularityHover={true}
                  />
                </div>
                <div className="index_customerItem__rvamt my-1 Tag_tagContainer__to97L">
                  <TagsList
                    tagType="foresight methods"
                    limit={25}
                    offset={25}
                    disableTooltip={true}
                    disablePopularityHover={true}
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
