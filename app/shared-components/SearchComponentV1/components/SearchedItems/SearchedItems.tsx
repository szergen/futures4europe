import React from 'react';
import SearchedItem from './SearchedItem/SearchedItem';

export type SearchedItemsProps = {
  searchedItems: any[];
  handleRemoveSearchedItem: (e: any) => void;
  tags: any[];
};

const SearchedItems: React.FC<SearchedItemsProps> = ({
  searchedItems,
  handleRemoveSearchedItem,
  tags,
}) => {
  return (
    <ul className="style.searchedItems flex">
      {searchedItems?.map((item, index) => (
        <SearchedItem
          key={index}
          item={item}
          index={index}
          handleRemoveSearchedItem={handleRemoveSearchedItem}
          tags={tags}
        />
      ))}
    </ul>
  );
};

export default SearchedItems;
