import classNames from 'classnames';
import React from 'react';
import style from '../../Tag.module.css';
import { TagCategories } from '../../Tag.utils';
import TagThumbnail from '../TagThumbnail/TagThumbnail';
import TagCounter from '../TagCounterContainer/TagCounter';
import PopoverComponent from '@app/shared-components/PopoverComponent/PopoverComponent';

export type TagContainerProps = {
  name: string;
  className?: string;
  tagCategory?: TagCategories;
  picture?: string;
  pictureAlt?: string;
  popularity?: number;
  tagTrend?: number;
  disableTooltip?: boolean;
  tagLine?: string;
  disablePopularityHover?: boolean;
};

export const TagContainer: React.FC<TagContainerProps> = ({
  name,
  className,
  tagCategory,
  popularity,
  tagTrend,
  picture,
  pictureAlt,
  disableTooltip,
  tagLine,
  disablePopularityHover,
}) => {
  const showThumbnail = Boolean(picture || tagCategory === 'person');
  const thumbnailClass = showThumbnail ? style.hasThumbnail : '';

  const TagContent = (
    <span className={style.name}>
      {picture ? (
        <span className={style.name}>
          {showThumbnail && (
            <TagThumbnail
              picture={picture || undefined}
              pictureAlt={pictureAlt}
              tagCategory={tagCategory}
            />
          )}
          <span className={style.tagNameBody}>{name}</span>
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
          <span className={style.tagNameBody}>{name}</span>
        </span>
      )}
    </span>
  );

  return (
    <>
      {/* Tag Body */}
      {/* {name?.length > 12 ? ( */}
      <span className={classNames(style.tagBody, thumbnailClass, className)}>
        <span className={style.tagBodyText}>
          {disableTooltip ? (
            TagContent
          ) : (
            <PopoverComponent
              trigger="hover"
              popoverTitle={name}
              popoverSubtitle={tagLine}
              popoverImage={picture}
            >
              {TagContent}
            </PopoverComponent>
          )}
          {/* Tag Counter and Trend */}
          {popularity && (
            <TagCounter
              popularity={popularity}
              tagTrend={tagTrend}
              disablePopularityHover={disablePopularityHover}
            />
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
