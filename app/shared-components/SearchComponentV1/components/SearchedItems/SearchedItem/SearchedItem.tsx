import Tag from '@app/shared-components/Tag/Tag';
import React from 'react';

export type SearchedItemProps = {
  item: string;
  index: number;
  handleRemoveSearchedItem: (e: any) => void;
  tags: any[];
};

const SearchedItem: React.FC<SearchedItemProps> = ({
  item,
  index,
  handleRemoveSearchedItem,
  tags,
}) => {
  const itemIncludesField = item.includes(':') && item.split(':').length === 2;
  const tagName = itemIncludesField ? item.split(':')[1] : item;
  const tagData = tags.find((tag) => tag.name === tagName);

  return (
    <li key={index} className="flex mx-1 items-center">
      {/* Field with Tag */}
      {itemIncludesField && tagData && (
        <span className="flex items-center">
          <span className="" key={index}>
            {item.split(':')[0]}
          </span>
          :
          <span className="" key={index}>
            {tagData && (
              <Tag
                tagText={tagData.name}
                tagCounter={tagData.popularity}
                href={tagData.pageLink}
                thumbnail={tagData.picture}
              />
            )}
          </span>
        </span>
      )}
      {/* Tag */}
      {!itemIncludesField && tagData && (
        <span className="" key={index}>
          <Tag
            tagText={tagData.name}
            tagCounter={tagData.popularity}
            href={tagData.pageLink}
            thumbnail={tagData.picture}
          />
        </span>
      )}
      {/* Field without Tag */}
      {!tagData && !itemIncludesField && (
        <span
          after={'"'}
          before={'"'}
          className="after:content-[attr(after)] before:content-[attr(before)] flex"
          key={index}
        >
          {item}
        </span>
      )}
      {/* Simple Text */}
      {!tagData && itemIncludesField && <span key={index}>{item}</span>}
      {/* Remove Item */}
      <span onClick={handleRemoveSearchedItem}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </li>
  );
};

export default SearchedItem;
