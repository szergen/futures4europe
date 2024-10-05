import Tag from '@app/shared-components/Tag/Tag';
import classNames from 'classnames';
import React from 'react';

export type SearchedItemProps = {
  item: {
    searchItem: string;
    searchItemType: 'text' | 'tag' | 'field-tag' | 'sortby';
  };
  index: number;
  handleRemoveSearchedItem: (e: any) => void;
  tags: any[];
  isSelected: boolean;
};

const SearchedItem: React.FC<SearchedItemProps> = ({
  item,
  index,
  handleRemoveSearchedItem,
  tags,
  isSelected,
}) => {
  const itemIncludesField =
    item.searchItem.includes(':') && item.searchItem.split(':').length === 2;
  const tagName = itemIncludesField
    ? item.searchItem.split(':')[1]
    : item.searchItem;
  const tagData = tags.find((tag) => tag.name === tagName);
  console.log('debug2->', { tags, itemIncludesField, tagName, tagData });
  console.log('debug3->', { item });

  return (
    <li
      key={index}
      className={classNames(
        'flex mx-1 items-center',
        isSelected && 'bg-blue-200'
      )}
    >
      {/* Field with Tag */}
      {item.searchItemType === 'field-tag' && (
        <span className="flex items-center">
          <span className="" key={index}>
            {item.searchItem.split(':')[0]}
          </span>
          :
          <span className="" key={index}>
            {tagData && (
              <Tag
                name={tagData.name}
                popularity={tagData.popularity}
                tagPageLink={tagData.pageLink}
                picture={tagData.picture}
              />
            )}
          </span>
        </span>
      )}
      {/* Tag */}
      {item.searchItemType === 'tag' && (
        <span className="" key={index}>
          <Tag
            name={tagData.name}
            popularity={tagData.popularity}
            tagPageLink={tagData.pageLink}
            picture={tagData.picture}
          />
        </span>
      )}
      {/* Field without Tag */}
      {item.searchItemType !== 'tag' &&
        item.searchItemType !== 'sortby' &&
        item.searchItemType !== 'field-tag' &&
        item.searchItemType !== 'text' && (
          <span
            after={'"'}
            before={'"'}
            className="after:content-[attr(after)] before:content-[attr(before)] flex"
            key={index}
          >
            {item.searchItem}
          </span>
        )}
      {/* Simple Text */}
      {item.searchItemType === 'text' && (
        <span
          after={'"'}
          before={'"'}
          key={index}
          className="after:content-[attr(after)] before:content-[attr(before)] flex"
        >
          {item.searchItem}
        </span>
      )}
      {/* Sort Tag */}
      {item.searchItemType === 'sortby' && (
        <span className="" key={index}>
          <Tag
            name={item.searchItem}
            // popularity={tagData.popularity}
            // tagPageLink={tagData.pageLink}
            // picture={tagData.picture}
          />
        </span>
      )}
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
