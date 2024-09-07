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
  href?: string;
};

export const TagContainer: React.FC<TagContainerProps> = ({
  name,
  className,
  tagCategory,
  popularity,
  tagTrend,
  picture,
  pictureAlt,
  href,
}) => {
  const showThumbnail = picture || tagCategory === 'person';

  return (
    <>
      {/* Tag Body */}
      {name.length > 10 ? (
        <span className={classNames('', style.tagBody, className)}>
          <PopoverComponent
            trigger="hover"
            popoverContent={name}
            popoverImage={picture}
          >
            <div className="inline-flex">
              {href ? (
                <span className={style.name}>
                  <strong>
                    {showThumbnail && (
                      <TagThumbnail
                        picture={picture || undefined}
                        pictureAlt={pictureAlt}
                        tagCategory={tagCategory}
                      />
                    )}
                    {name}
                  </strong>
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
            </div>
          </PopoverComponent>
          {/* Tag Counter and Trend */}
          {popularity && (
            <TagCounter popularity={popularity} tagTrend={tagTrend} />
          )}
        </span>
      ) : (
        <span className={classNames(style.tagBody, className)}>
          {href ? (
            <span className={style.name}>
              <strong>
                {showThumbnail && (
                  <TagThumbnail
                    picture={picture || undefined}
                    pictureAlt={pictureAlt}
                    tagCategory={tagCategory}
                  />
                )}
                {name}
              </strong>
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
          {/* Tag Counter and Trend */}
          {popularity && (
            <TagCounter popularity={popularity} tagTrend={tagTrend} />
          )}
        </span>
      )}
    </>
  );
};

export default TagContainer;
