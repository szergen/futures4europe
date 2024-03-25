import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import style from './Tag.module.css';
import { TagCategories } from './Tag.utils';
import TagContainer from './components/TagContainer/TagContainer';

export type TagProps = {
  tagText: string;
  editable?: boolean;
  className?: string;
  tagCategory?: TagCategories;
  href?: string;
  thumbnail?: string;
  thumbnailAlt?: string;
  tagCounter?: number;
  tagTrend?: number;
  enableLabel?: boolean;
};

export const Tag: React.FC<TagProps> = ({
  tagText,
  editable,
  className,
  tagCategory,
  href,
  tagCounter,
  tagTrend,
  thumbnail,
  thumbnailAlt,
  enableLabel,
}) => {
  return (
    <>
      {enableLabel && tagCategory && (
        <span className={style.tagLabel}>{TagCategories?.[tagCategory]}: </span>
      )}
      <div className={classNames('m-1', style.tagContainer)}>
        {href ? (
          <Link href={href} className={style.tagLink}>
            <TagContainer
              tagText={tagText}
              editable={editable}
              className={className}
              tagCategory={tagCategory}
              tagCounter={tagCounter}
              tagTrend={tagTrend}
              thumbnail={thumbnail}
              thumbnailAlt={thumbnailAlt}
            />
          </Link>
        ) : (
          <TagContainer
            tagText={tagText}
            editable={editable}
            className={className}
            tagCategory={tagCategory}
            tagCounter={tagCounter}
            tagTrend={tagTrend}
            thumbnail={thumbnail}
            thumbnailAlt={thumbnailAlt}
          />
        )}
      </div>
    </>
  );
};

export default Tag;
