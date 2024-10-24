import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import style from './Tag.module.css';
import { TagCategories } from './Tag.utils';
import TagContainer from './components/TagContainer/TagContainer';
import PopoverComponent from '../PopoverComponent/PopoverComponent';

export type TagProps = {
  name: string;
  className?: string;
  tagCategory?: TagCategories;
  tagPageLink?: string;
  picture?: string;
  pictureAlt?: string;
  popularity?: number;
  tagTrend?: number;
  enableLabel?: boolean;
  // New changes
  tagType?: string;
  tagLine?: string;
  disableTooltip?: boolean;
  disableLink?: boolean;
};

export const Tag: React.FC<TagProps> = ({
  name,
  className,
  tagCategory,
  tagPageLink,
  popularity,
  tagTrend,
  picture,
  pictureAlt,
  enableLabel,
  tagType,
  disableTooltip,
  disableLink,
}) => {
  if (!name) return null;
  return (
    <>
      {enableLabel && tagCategory && (
        <span className={style.tagLabel}>{TagCategories?.[tagCategory]}: </span>
      )}
      <div className={classNames('my-1', style.tagContainer, className)}>
        {tagPageLink && !disableLink ? (
          <Link href={tagPageLink} className={style.tagLink}>
            <TagContainer
              name={name}
              className={className}
              tagCategory={tagCategory}
              popularity={popularity}
              tagTrend={tagTrend}
              picture={picture}
              pictureAlt={pictureAlt}
              tagPageLink={tagPageLink}
              disableTooltip={disableTooltip}
            />
          </Link>
        ) : (
          <TagContainer
            name={name}
            className={classNames(
              disableLink && tagPageLink && style.tagLink,
              className
            )}
            tagCategory={tagCategory}
            popularity={popularity}
            tagTrend={tagTrend}
            picture={picture}
            pictureAlt={pictureAlt}
            disableTooltip={disableTooltip}
          />
        )}
      </div>
    </>
  );
};

export default Tag;
