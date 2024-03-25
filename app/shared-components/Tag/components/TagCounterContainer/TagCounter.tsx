import classNames from 'classnames';
import React from 'react';
import style from '../../Tag.module.css';

export type TagCounterProps = {
  tagCounter?: number;
  tagTrend?: number;
};

export const TagCounter: React.FC<TagCounterProps> = ({
  tagCounter,
  tagTrend,
}) => {
  return (
    <span className={classNames(style.tagCounterBody)}>
      {tagCounter && (
        <span className={classNames('text-gray-500', style.tagCounter)}>
          {tagCounter}
        </span>
      )}
      {tagTrend && (
        <span
          className={classNames(
            tagTrend > 0 ? 'text-green-500' : 'text-red-500',
            style.tagTrend
          )}
        >
          {tagTrend > 0 ? '+' : ''}
          {tagTrend}
        </span>
      )}
    </span>
  );
};

export default TagCounter;
