import Link from 'next/link';
import classNames from 'classnames';
import React from 'react';
import style from './Tag.module.css';
import { TagCategories } from './Tag.utils';
import TagContainer from './components/TagContainer/TagContainer';
import PopoverComponent from '../PopoverComponent/PopoverComponent';

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
  const [isShown, setIsShown] = React.useState(true);

  const onClick = () => {
    setIsShown(false);
  };

  const showContainer = (tagText: string) => {
    return tagText.length > 25 ? (
      <PopoverComponent
        trigger="hover"
        popoverContent={tagText}
        popoverImage={thumbnail}
      >
        <div>
          <TagContainer
            tagText={tagText}
            editable={editable}
            className={className}
            tagCategory={tagCategory}
            tagCounter={tagCounter}
            tagTrend={tagTrend}
            thumbnail={thumbnail}
            thumbnailAlt={thumbnailAlt}
            onClick={onClick}
          />
        </div>
      </PopoverComponent>
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
        onClick={onClick}
      />
    );
  };

  return (
    <>
      {enableLabel && tagCategory && (
        <span className={style.tagLabel}>{TagCategories?.[tagCategory]}: </span>
      )}
      {isShown && (
        <div className={classNames('m-1', style.tagContainer)}>
          {href ? (
            // <PopoverComponent
            //   trigger="hover"
            //   // popoverTitle={tagCategory}
            //   popoverContent={tagText}
            //   popoverImage={thumbnail}
            // >
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
                onClick={onClick}
                href={href}
              />
            </Link>
          ) : (
            // </PopoverComponent>
            <TagContainer
              tagText={tagText}
              editable={editable}
              className={className}
              tagCategory={tagCategory}
              tagCounter={tagCounter}
              tagTrend={tagTrend}
              thumbnail={thumbnail}
              thumbnailAlt={thumbnailAlt}
              onClick={onClick}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Tag;
