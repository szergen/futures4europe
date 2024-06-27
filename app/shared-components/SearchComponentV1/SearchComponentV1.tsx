import React, { useEffect } from 'react';
import TagInput from './components/TagInput/TagInput';
import HelpDropdown from './components/HelpDropdown/HelpDropdown';
import Suggestions from './components/Suggestions/Suggestions';
import Results from './components/Results/Results';
import { useSearch } from '../../custom-hooks/SearchContext/SearchContext';
import {
  removeSearchedItem,
  sortResultBySortTags,
  updateFilteredDataBasedOnClickedTag,
} from './SearchComponentV1.utils';
import SearchedItems from './components/SearchedItems/SearchedItems';

const SearchComponentV1 = () => {
  // SearchContext
  const { searchState, setSearchState } = useSearch();
  const {
    initialData,
    filteredData,
    fieldSuggestions,
    tagSuggestions,
    pageSuggestions,
    sortTagsSuggestions,
    results,
    showHelp,
    showSuggestions,
    showResults,
    searchedItems,
    clickedField,
    selectedSuggestionIndex,
    selectedSearchedItemIndex,
    activeSelection,
    inputText,
    sortTags,
    selectedSortTag,
  } = searchState;

  const handleSelectedSortTag = (e: any) => {
    e.preventDefault();
    console.log('Clicked on sortTag:', e.target.innerText);
    setSearchState((prevState) => ({
      ...prevState,
      selectedSortTag: e?.target?.innerText,
      showHelp: false,
      showSuggestions: false,
      searchedItems: [
        ...prevState.searchedItems,
        { searchItem: e.target.innerText, searchItemType: 'sortby' },
      ],
      // filteredData: {
      //   ...prevState.filteredData,
      //   pages: sortResultBySortTags(results, e.target.innerText),
      // },
      // pageSuggestions: sortResultBySortTags(results, e.target.innerText).map(
      //   (page) => ({ item: page })
      // ),
      // results: sortResultBySortTags(results, e.target.innerText),
    }));
  };

  const handleSelectedSuggestion = (
    selectedSuggestionTag: any,
    selectedSuggestionType: 'tag' | 'field' | 'field-tag' | 'sortby'
  ) => {
    if (selectedSuggestionType === 'tag') {
      const { matchedPages } = updateFilteredDataBasedOnClickedTag(
        selectedSuggestionTag,
        filteredData
      );
      console.log('matchedPages', matchedPages);
      setSearchState((prevState) => ({
        ...prevState,
        selectedSuggestionTag: selectedSuggestionTag,
        pageSuggestions: matchedPages,
        activeSelection: 'tag',
      }));
    } else if (selectedSuggestionType === 'field') {
      setSearchState((prevState) => ({
        ...prevState,
        // clickedField: selectedSuggestionTag,
        selectedSuggestionTag: selectedSuggestionTag,
        activeSelection: 'field',
      }));
    } else if (selectedSuggestionType === 'sortby') {
      setSearchState((prevState) => ({
        ...prevState,
        selectedSuggestionTag: selectedSuggestionTag,
        activeSelection: 'sortby',
      }));
    }
  };

  const handleTagSuggestion = (e: any) => {
    e.preventDefault();
    console.log('Clicked on tag:', e.target.innerText);
    setSearchState((prevState) => ({
      ...prevState,
      clickedTag: e?.target?.innerText,
    }));
  };

  const handleFieldSelection = (e: any) => {
    e.preventDefault();
    console.log('Clicked on field:', e.target.innerText);
    setSearchState((prevState) => ({
      ...prevState,
      clickedField: e?.target?.innerText,
    }));
  };
  // Searched Items - Remove items

  const handleRemoveSearchedItem = (event: any) => {
    const target = event.currentTarget;
    const siblingSpan = target.previousSibling;
    // console.log('siblingSpan', siblingSpan);

    if (
      siblingSpan &&
      siblingSpan.nodeType === Node.ELEMENT_NODE &&
      siblingSpan.tagName === 'SPAN'
    ) {
      const siblingSpanText = siblingSpan.textContent;
      // console.log('siblingSpanText', siblingSpanText);

      const filteredSearchItems = searchedItems.filter(
        (item) => item.searchItem !== siblingSpanText
      );

      const removedSearchItem = searchedItems.find(
        (item) => item.searchItem === siblingSpanText
      );
      // console.log('filteredSearchItems--', filteredSearchItems);
      // console.log('removedSearchItem--', removedSearchItem);

      setSearchState((prevState) => ({
        ...prevState,
        searchedItems: filteredSearchItems,
        filteredData: removeSearchedItem(
          initialData,
          filteredSearchItems,
          inputText
        ),
        selectedSortTag:
          removedSearchItem?.searchItemType === 'sortby' ? '' : selectedSortTag,
        // results: updatedFilteredData.pages,
      }));
    }
  };

  const handleArrouwUp = () => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedSuggestionIndex: Math.max(
        prevState.selectedSuggestionIndex - 1,
        0
      ),
    }));
  };

  const handleArrowDown = () => {
    setSearchState((prevState) => ({
      ...prevState,
      selectedSuggestionIndex: Math.min(
        prevState.selectedSuggestionIndex + 1,
        filteredData.tags.length - 1
      ),
    }));
  };
  const handleScrollForSuggestions = (e: any) => {
    if (e.deltaY < 0) {
      handleArrouwUp();
    } else {
      handleArrowDown();
    }
  };

  useEffect(() => {
    console.log('searchedItems', searchedItems);
  }, [searchedItems]);

  useEffect(() => {
    setSearchState((prevState) => ({
      ...prevState,
      pageSuggestions: results.map((page) => ({ item: page })),
    }));
  }, [results]);

  return (
    <div>
      <div className="style.searchBox flex">
        <SearchedItems
          searchedItems={searchedItems}
          handleRemoveSearchedItem={handleRemoveSearchedItem}
          tags={filteredData.tags}
          selectedSearchedItemIndex={selectedSearchedItemIndex}
          selectedSortTag={selectedSortTag}
        />
        <TagInput initialData={initialData} filteredData={filteredData} />
        {/* {selectedSortTag && <div>Sorted By: {selectedSortTag}</div>} */}
      </div>
      {/* Help and Suggestions*/}
      {showHelp && <HelpDropdown handleFieldSelection={handleFieldSelection} />}
      {showSuggestions && (
        <Suggestions
          fieldSuggestions={fieldSuggestions}
          tagSuggestions={tagSuggestions}
          pageSuggestions={pageSuggestions}
          sortTagsSuggestions={sortTagsSuggestions}
          // handleClickedSuggestion={handleClickedSuggestion}
          handleTagSuggestion={handleTagSuggestion}
          handleFieldSelection={handleFieldSelection}
          clickedField={clickedField}
          handleSelectedSuggestion={handleSelectedSuggestion}
          selectedSuggestionIndex={selectedSuggestionIndex}
          activeSelection={activeSelection}
          searchedItems={searchedItems}
          // sortTags={sortTags}
          handleSelectedSortTag={handleSelectedSortTag}
          // inputText={inputText}
          handleScrollForSuggestions={handleScrollForSuggestions}
        />
      )}
      {/* Results */}
      {showResults && (
        <Results
          results={results}
          searchedItems={searchedItems}
          assignments={initialData.assignments}
        />
      )}
    </div>
  );
};

export default SearchComponentV1;
