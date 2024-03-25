import classNames from 'classnames';
import React from 'react';
import style from '../../Tag.module.css';
import { TagCategories } from '../../Tag.utils';
import TagThumbnail from '../TagThumbnail/TagThumbnail';
import TagCounter from '../TagCounterContainer/TagCounter';
import TagCloseButton from '../TagCloseButton/TagCloseButton';

export type TagContainerProps = {
  tagText: string;
  editable?: boolean;
  className?: string;
  tagCategory?: TagCategories;
  thumbnail?: string;
  thumbnailAlt?: string;
  tagCounter?: number;
  tagTrend?: number;
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
}) => {
  const showThumbnail = thumbnail || tagCategory === 'person';

  return (
    <>
      {showThumbnail && (
        <TagThumbnail thumbnail={thumbnail} thumbnailAlt={thumbnailAlt} />
      )}
      {/* Tag Body */}
      <span
        className={classNames(
          'relative px-5 py-2 rounded-3xl shadow-md',
          style.tagBody,
          showThumbnail && 'pl-9',
          className
        )}
        contentEditable={editable ? 'true' : undefined}
      >
        {tagText}
        <TagCloseButton />
        {/* Tag Counter and Trend */}
        {tagCounter && (
          <TagCounter tagCounter={tagCounter} tagTrend={tagTrend} />
        )}
      </span>
    </>
  );
};

export default TagContainer;
