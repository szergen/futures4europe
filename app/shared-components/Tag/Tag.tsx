import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import style from './Tag.module.css';
import { TagCategories } from './Tag.utils';
import TagContainer from './components/TagContainer/TagContainer';
import PopoverComponent from '../PopoverComponent/PopoverComponent';

export type TagProps = {
  name: string;
  editable?: boolean;
  className?: string;
  tagCategory?: TagCategories;
  href?: string;
  picture?: string;
  pictureAlt?: string;
  popularity?: number;
  tagTrend?: number;
  enableLabel?: boolean;
  // New changes
  tagType?: string;
};

export const Tag: React.FC<TagProps> = ({
  name,
  editable,
  className,
  tagCategory,
  href,
  popularity,
  tagTrend,
  picture,
  pictureAlt,
  enableLabel,
  tagType,
}) => {
  // const [isShown, setIsShown] = React.useState(true);

  // const onClick = () => {
  //   setIsShown(false);
  // };

  return (
    <>
      {enableLabel && tagCategory && (
        <span className={style.tagLabel}>{TagCategories?.[tagCategory]}: </span>
      )}
      <div className={classNames('my-1', style.tagContainer)}>
        {href ? (
          <Link href={href} className={style.tagLink}>
            <TagContainer
              name={name}
              editable={editable}
              className={className}
              tagCategory={tagCategory}
              popularity={popularity}
              tagTrend={tagTrend}
              picture={picture}
              pictureAlt={pictureAlt}
              // onClick={onClick}
              href={href}
            />
          </Link>
        ) : (
          <TagContainer
            name={name}
            editable={editable}
            className={className}
            tagCategory={tagCategory}
            popularity={popularity}
            tagTrend={tagTrend}
            picture={picture}
            pictureAlt={pictureAlt}
            // onClick={onClick}
          />
        )}
      </div>
    </>
  );
};

export default Tag;
