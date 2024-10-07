import classNames from 'classnames';
import React from 'react';
import style from '../../Tag.module.css';
import { TagCategories } from '../../Tag.utils';
import TagThumbnail from '../TagThumbnail/TagThumbnail';
import TagCounter from '../TagCounterContainer/TagCounter';
import TagCloseButton from '../TagCloseButton/TagCloseButton';
import PopoverComponent from '@app/shared-components/PopoverComponent/PopoverComponent';

export type TagContainerProps = {
  name: string;
  className?: string;
  tagCategory?: TagCategories;
  picture?: string;
  pictureAlt?: string;
  popularity?: number;
  tagTrend?: number;
  tagPageLink?: string;
};

export const TagContainer: React.FC<TagContainerProps> = ({
  name,
  className,
  tagCategory,
  popularity,
  tagTrend,
  picture,
  pictureAlt,
  tagPageLink,
}) => {
  const showThumbnail = Boolean(picture || tagCategory === 'person');
  const thumbnailClass = showThumbnail ? style.hasThumbnail : '';

  return (
    <>
      {/* Tag Body */}
      {/* {name?.length > 12 ? ( */}
      <span className={classNames(style.tagBody, thumbnailClass, className)}>
        <span className={style.tagBodyText}>
          <PopoverComponent
            trigger="hover"
            popoverContent={name}
            popoverImage={picture}
          >
            {picture ? (
              <span className={style.name}>
                {showThumbnail && (
                  <TagThumbnail
                    picture={picture || undefined}
                    pictureAlt={pictureAlt}
                    tagCategory={tagCategory}
                  />
                )}
                {name}
              </span>
            ) : (
              <span className={style.name}>
                {showThumbnail && (
                  <TagThumbnail
                    picture={picture || undefined}
                    pictureAlt={pictureAlt}
                    tagCategory={tagCategory}
                  />
                )}
                {name}
              </span>
            )}
          </PopoverComponent>
          {/* Tag Counter and Trend */}
          {popularity && (
            <TagCounter popularity={popularity} tagTrend={tagTrend} />
          )}
        </span>
      </span>
      {/* )  */}
      {/* : */}
      {/* ( */}
      {/* <span className={classNames(style.tagBody, thumbnailClass, className)}> */}
      {/* <span className={style.tagBodyText}>
            {tagPageLink ? (
              <span className={style.name}>
                {showThumbnail && (
                  <TagThumbnail
                    picture={picture || undefined}
                    pictureAlt={pictureAlt}
                    tagCategory={tagCategory}
                  />
                )}
                {name}
              </span>
            ) : (
              <span className={style.name}>
                {showThumbnail && (
                  <TagThumbnail
                    picture={picture || undefined}
                    pictureAlt={pictureAlt}
                    tagCategory={tagCategory}
                  />
                )}
                {name}
              </span>
            )} */}
      {/* Tag Counter and Trend */}
      {/* {popularity && (
              <TagCounter popularity={popularity} tagTrend={tagTrend} />
            )} */}
      {/* </span> */}
      {/* </span> */}
      {/* )} */}
    </>
  );
};

export default TagContainer;
