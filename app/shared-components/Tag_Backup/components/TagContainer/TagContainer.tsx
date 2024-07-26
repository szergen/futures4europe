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
  editable?: boolean;
  className?: string;
  tagCategory?: TagCategories;
  thumbnail?: string;
  thumbnailAlt?: string;
  tagCounter?: number;
  tagTrend?: number;
  href?: string;
  onClick?: () => void;
};

export const TagContainer: React.FC<TagContainerProps> = ({
  tagText,
  editable,
  className,
  tagCategory,
  tagCounter,
  tagTrend,
  thumbnail,
  thumbnailAlt,
  onClick,
  href,
}) => {
  const showThumbnail = thumbnail || tagCategory === 'person';

  return (
    <>
      {showThumbnail && (
        <TagThumbnail
          thumbnail={thumbnail || undefined}
          thumbnailAlt={thumbnailAlt}
          tagCategory={tagCategory}
        />
      )}
      {/* Tag Body */}
      {tagText.length > 10 ? (
        <span
          className={classNames(
            //   'relative px-5 py-2 rounded-3xl shadow-md text-ellipsis max-w-64 overflow-hidden inline-block text-nowrap', // wrapping
            'relative px-5 py-2 rounded-3xl shadow-md text-ellipsis',
            style.tagBody,
            showThumbnail && 'pl-9',
            className
          )}
        >
          <PopoverComponent
            trigger="hover"
            popoverContent={tagText}
            popoverImage={thumbnail}
          >
            <div className="inline-flex">
              {href ? (
                <span className={style.tagText}>
                  <strong>{tagText}</strong>
                </span>
              ) : (
                <span className={style.tagText}>{tagText}</span>
              )}
              {editable && <TagCloseButton onClick={onClick || undefined} />}
            </div>
          </PopoverComponent>
          {/* Tag Counter and Trend */}
          {tagCounter && (
            <TagCounter tagCounter={tagCounter} tagTrend={tagTrend} />
          )}
        </span>
      ) : (
        <span
          className={classNames(
            //   'relative px-5 py-2 rounded-3xl shadow-md text-ellipsis max-w-64 overflow-hidden inline-block text-nowrap', // wrapping
            'relative px-5 py-2 rounded-3xl shadow-md text-ellipsis',
            style.tagBody,
            showThumbnail && 'pl-9',
            className
          )}
        >
          {href ? (
            <span className={style.tagText}>
              <strong>{tagText}</strong>
            </span>
          ) : (
            <span className={style.tagText}>{tagText}</span>
          )}
          {editable && <TagCloseButton onClick={onClick || undefined} />}
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
