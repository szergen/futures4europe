// TagLisInlineComponent.jsx

import React from 'react';
import style from './TagLisInlineComponent.module.css';
import Tag from '@app/shared-components/Tag/Tag';
import PropTypes from 'prop-types'; // For prop type validation

const TagLisInlineComponent = ({
  infoPages,
  postPages,
  infoPageType,
  postPageTypes, // Accept multiple types
}) => {
  /**
   * Extracts relevant tags based on the post's type.
   */
  const getTagsByType = (postPage) => {
    const firstPageType = postPage.data.pageTypes?.[0];
    console.log(`Processing PostPage ID: ${postPage._id}`);
    console.log('First Page Type:', firstPageType);

    if (firstPageType && postPage.data.title) {
      const tag = {
        name: postPage.data.title,
        popularity: firstPageType.popularity,
        _id: postPage._id,
        picture: '/images/default.png', // Ensure this path is correct
      };
      console.log('Extracted Tag:', tag);
      return [tag];
    }
    return [];
  };

  /**
   * Filters postPages based on the provided postPageTypes.
   * If postPageTypes is empty or not provided, includes all postPages.
   */
  const filteredPostPages = postPages
    ? postPages.filter((postPage) => {
        const pageTypeName = postPage.data.pageTypes?.[0]?.name;
        if (postPageTypes && postPageTypes.length > 0) {
          return postPageTypes.includes(pageTypeName);
        }
        return true; // Include all if no filter is applied
      })
    : [];

  console.log('Filtered Post Pages:', filteredPostPages);

  return (
    <section className={style.tagListContainer}>
      {/* Info Pages Rendering Logic */}
      {infoPages && infoPageType && (
        <>
          {infoPages
            .filter(
              (infoPage) =>
                infoPage?.data?.pageTypes?.[0]?.name === infoPageType
            )
            .map((infoPage, index) => {
              const tagTypeMap = {
                'person info': infoPage.data.person || [],
                'organisation info': infoPage.data.organisation || [],
                'project info': infoPage.data.Project || [],
                // Add more mappings as needed
              };

              const tagsToRender = tagTypeMap[infoPageType] || [];

              console.log(
                `Tags for InfoPage "${infoPage.data.title}":`,
                tagsToRender
              );

              return (
                <div key={`${infoPage.data.title}-${index}`} className="flex">
                  {tagsToRender.map((item, idx) =>
                    item && item.name && item.picture ? (
                      <Tag
                        key={`${infoPage.data.title}-${item._id || idx}`}
                        name={item.name}
                        picture={item.picture}
                        disableTooltip={item.disableTooltip}
                        disablePopularityHover={item.disablePopularityHover}
                        mentions={item.popularity} // Pass 'popularity' as 'mentions'
                      />
                    ) : null
                  )}
                </div>
              );
            })}
        </>
      )}

      {/* Post Pages Rendering Logic */}
      {filteredPostPages && (
        <>
          {filteredPostPages.length > 0 ? (
            filteredPostPages.map((postPage, index) => {
              const tags = getTagsByType(postPage);

              console.log(`Tags for PostPage "${postPage.data.title}":`, tags);

              return (
                <div
                  key={`${postPage.data.title}-${postPage._id || index}`}
                  className="flex flex-wrap gap-2"
                >
                  {tags.length > 0 ? (
                    tags.map((item, idx) => {
                      console.log('Rendering Tag:', item);
                      return item && item.name ? (
                        <Tag
                          key={`${postPage.data.title}-${item._id || idx}`}
                          name={item.name}
                          mentions={item.popularity} // Pass 'popularity' as 'mentions'
                          disableTooltip
                          disablePopularityHover
                        />
                      ) : null;
                    })
                  ) : (
                    <p>No tags found for this post.</p>
                  )}
                </div>
              );
            })
          ) : (
            <p>No post pages found for the specified postPageTypes.</p>
          )}
        </>
      )}
    </section>
  );
};

// Define prop types for better validation and developer experience
TagLisInlineComponent.propTypes = {
  infoPages: PropTypes.array,
  postPages: PropTypes.array,
  infoPageType: PropTypes.string,
  postPageTypes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default TagLisInlineComponent;
