import classNames from 'classnames';
import React from 'react';
import style from '../../Tag.module.css';
import { TagCategories } from '../../Tag.utils';
import TagThumbnail from '../TagThumbnail/TagThumbnail';
import TagCounter from '../TagCounterContainer/TagCounter';
import TagCloseButton from '../TagCloseButton/TagCloseButton';
import PopoverComponent from '@app/shared-components/PopoverComponent/PopoverComponent';

export type TagContainerProps = {
  tagText: string;
  className?: string;
  tagCategory?: TagCategories;
  thumbnail?: string;
  thumbnailAlt?: string;
  tagCounter?: number;
  tagTrend?: number;
  href?: string;
};

export const TagContainer: React.FC<TagContainerProps> = ({
  tagText,
  className,
  tagCategory,
  tagCounter,
  tagTrend,
  thumbnail,
  thumbnailAlt,
  href,
}) => {
  const showThumbnail = thumbnail || tagCategory === 'person';

  return (
    <>
      {/* Tag Body */}
      {tagText.length > 10 ? (
        <span className={classNames('', style.tagBody, className)}>
          <PopoverComponent
            trigger="hover"
            popoverContent={tagText}
            popoverImage={thumbnail}
          >
            <div className="inline-flex">
              {href ? (
                <span className={style.tagText}>
                  <strong>
                    {showThumbnail && (
                      <TagThumbnail
                        thumbnail={thumbnail || undefined}
                        thumbnailAlt={thumbnailAlt}
                        tagCategory={tagCategory}
                      />
                    )}
                    {tagText}
                  </strong>
                </span>
              ) : (
                <span className={style.tagText}>{tagText}</span>
              )}
            </div>
          </PopoverComponent>
          {/* Tag Counter and Trend */}
          {tagCounter && (
            <TagCounter tagCounter={tagCounter} tagTrend={tagTrend} />
          )}
        </span>
      ) : (
        <span className={classNames(style.tagBody, className)}>
          {href ? (
            <span className={style.tagText}>
              <strong>{tagText}</strong>
            </span>
          ) : (
            <span className={style.tagText}>{tagText}</span>
          )}
          {/* Tag Counter and Trend */}
          {tagCounter && (
            <TagCounter tagCounter={tagCounter} tagTrend={tagTrend} />
          )}
        </span>
      )}
    </>
  );
};

export default TagContainer;
