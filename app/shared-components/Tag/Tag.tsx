'use client';
import Link from 'next/link';
import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import style from './Tag.module.css';
import { TagCategories } from './Tag.utils';
import TagContainer from './components/TagContainer/TagContainer';
import PopoverComponent from '../PopoverComponent/PopoverComponent';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';

export type TagProps = {
  name: string;
  className?: string;
  tagCategory?: TagCategories;
  tagPageLink?: string;
  picture?: string;
  pictureAlt?: string;
  // popularity?: number;
  tagTrend?: number;
  enableLabel?: boolean;
  // New changes
  tagType?: string;
  tagLine?: string;
  disableTooltip?: boolean;
  disableLink?: boolean;
  disablePopularityHover?: boolean;
  _id?: string;
  mentions?: number;
  hardcodedMentions?: number;
};

export const Tag: React.FC<TagProps> = ({
  name,
  className,
  tagCategory,
  tagPageLink,
  mentions: popularity,
  tagTrend,
  picture,
  pictureAlt,
  enableLabel,
  disableTooltip,
  disableLink,
  tagLine,
  disablePopularityHover = false,
  hardcodedMentions,
  _id,
}) => {
  if (!name) return null;

  const { tags, tagsFetched } = useAuth();
  const [currentPopularity, setCurrentPopularity] = useState(popularity);

  useEffect(() => {
    if (!tagsFetched || currentPopularity) return;
    const tag = tags?.find((tag) => tag?.name === name);
    if (tag) {
      setCurrentPopularity(tag.mentions);
    }
    // console.log(`tag ${tag} has been referenced ${popularity} times`);
  }, [tags, tagsFetched]);

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
              popularity={
                hardcodedMentions ? hardcodedMentions : currentPopularity
              }
              tagTrend={tagTrend}
              picture={picture}
              pictureAlt={pictureAlt}
              disableTooltip={disableTooltip}
              disablePopularityHover={disablePopularityHover}
              tagLine={tagLine}
              _id={_id}
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
            popularity={
              hardcodedMentions ? hardcodedMentions : currentPopularity
            }
            tagTrend={tagTrend}
            picture={picture}
            pictureAlt={pictureAlt}
            disableTooltip={disableTooltip}
            disablePopularityHover={disablePopularityHover}
            tagLine={tagLine}
            _id={_id}
          />
        )}
      </div>
    </>
  );
};

export default Tag;
