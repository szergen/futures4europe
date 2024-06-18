import React, { useEffect } from 'react';
import SearchedItem from './SearchedItem/SearchedItem';

export type SearchedItemsProps = {
  searchedItems: any[];
  handleRemoveSearchedItem: (e: any) => void;
  tags: any[];
  selectedSearchedItemIndex: number;
  selectedSortTag: string;
};

const SearchedItems: React.FC<SearchedItemsProps> = ({
  searchedItems,
  handleRemoveSearchedItem,
  tags,
  selectedSearchedItemIndex,
  selectedSortTag,
}) => {
  useEffect(() => {
    console.log('searchedItems', searchedItems);
  }, [selectedSortTag]);

  return (
    <ul className="style.searchedItems flex">
      {searchedItems?.map((item, index) => (
        <SearchedItem
          key={index}
          item={item}
          index={index}
          handleRemoveSearchedItem={handleRemoveSearchedItem}
          tags={tags}
          isSelected={
            selectedSearchedItemIndex === 0 &&
            index === searchedItems.length - 1
          }
        />
      ))}
    </ul>
  );
};

export default SearchedItems;
