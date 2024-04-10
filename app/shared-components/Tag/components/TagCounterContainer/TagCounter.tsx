import classNames from 'classnames';
import React from 'react';
import style from '../../Tag.module.css';
import Tooltip3 from '@app/shared-components/Tooltip3/Tooltip3';

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
        <Tooltip3
          trigger="hover"
          popoverContent={`This Tag has been referenced ${tagCounter} times`}
        >
          <span className={classNames('text-gray-500 ', style.tagCounter)}>
            {tagCounter}
          </span>
        </Tooltip3>
      )}
      {tagTrend && (
        <Tooltip3
          trigger="hover"
          popoverContent={`Trending +${tagTrend} references in the last month`}
        >
          <span className={classNames('text-green-500', style.tagTrend)}>
            {tagTrend > 0 ? '+' : ''}
            {tagTrend}
          </span>
        </Tooltip3>
      )}
    </span>
  );
};

export default TagCounter;
