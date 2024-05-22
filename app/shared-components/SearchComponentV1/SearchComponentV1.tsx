import React, { useEffect } from 'react';
import TagInput from './components/TagInput/TagInput';
import HelpDropdown from './components/HelpDropdown/HelpDropdown';
import Suggestions from './components/Suggestions/Suggestions';
import Results from './components/Results/Results';
import { useSearch } from '../../custom-hooks/SearchContext/SearchContext';
import {
  removeSearchedItem,
  updateFilteredDataBasedOnClickedTag,
} from './SearchComponentV1.utils';
import SearchedItems from './components/SearchedItems/SearchedItems';
// import { init } from 'next/dist/compiled/webpack/webpack';

const SearchComponentV1 = () => {
  // SearchContext
  const { searchState, setSearchState } = useSearch();
  const {
    initialData,
    filteredData,
    fieldSuggestions,
    tagSuggestions,
    pageSuggestions,
    results,
    showHelp,
    showSuggestions,
    showResults,
    searchedItems,
    clickedField,
    selectedSuggestionIndex,
    selectedSearchedItemIndex,
  } = searchState;

  // Searched Items - Selection Handlers
  // const handleClickedSuggestion = (e: any) => {
  //   e.preventDefault();
  //   console.log(
  //     'Clicked on tag of clickedSuggestion:',
  //     e.target.parentNode.innerText
  //   );
  //   setSearchState((prevState) => ({
  //     ...prevState,
  //     clickedSuggestion: e?.target?.parentNode.innerText,
  //     searchedItems: [...searchedItems, e?.target?.parentNode.innerText],
  //   }));
  // };

  const handleSelectedSuggestion = (selectedSuggestionTag: any) => {
    const {
      matchedPages,
      // matchedTagsBasedOnPages,
      // matchedAssignmentsBasedOnPages,
    } = updateFilteredDataBasedOnClickedTag(
      selectedSuggestionTag,
      filteredData
    );
    setSearchState((prevState) => ({
      ...prevState,
      selectedSuggestionTag: selectedSuggestionTag,
      pageSuggestions: matchedPages,
    }));
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
    console.log('siblingSpan', siblingSpan);

    if (
      siblingSpan &&
      siblingSpan.nodeType === Node.ELEMENT_NODE &&
      siblingSpan.tagName === 'SPAN'
    ) {
      const siblingSpanText = siblingSpan.textContent;
      console.log('siblingSpanText', siblingSpanText);

      const filteredSearchItems = searchedItems.filter(
        (item) => item.searchItem !== siblingSpanText
      );
      console.log('filteredSearchItems--', filteredSearchItems);

      setSearchState((prevState) => ({
        ...prevState,
        searchedItems: filteredSearchItems,
        filteredData: removeSearchedItem(initialData, filteredSearchItems),
        // results: updatedFilteredData.pages,
      }));
    }
  };

  useEffect(() => {
    console.log('searchedItems', searchedItems);
  }, [searchedItems]);

  useEffect(() => {
    setSearchState((prevState) => ({
      ...prevState,
      pageSuggestions: results,
    }));
  }, [results]);

  return (
    <div className="w-full">
      <div className="style.searchBox flex">
        <SearchedItems
          searchedItems={searchedItems}
          handleRemoveSearchedItem={handleRemoveSearchedItem}
          tags={filteredData.tags}
          selectedSearchedItemIndex={selectedSearchedItemIndex}
        />
        <TagInput initialData={initialData} filteredData={filteredData} />
      </div>
      {/* Help and Suggestions*/}
      {showHelp && <HelpDropdown handleFieldSelection={handleFieldSelection} />}
      {showSuggestions && (
        <Suggestions
          fieldSuggestions={fieldSuggestions}
          tagSuggestions={tagSuggestions}
          pageSuggestions={pageSuggestions}
          // handleClickedSuggestion={handleClickedSuggestion}
          handleTagSuggestion={handleTagSuggestion}
          handleFieldSelection={handleFieldSelection}
          clickedField={clickedField}
          handleSelectedSuggestion={handleSelectedSuggestion}
          selectedSuggestionIndex={selectedSuggestionIndex}
        />
      )}
      {/* Results */}
      {showResults && <Results results={results} />}
    </div>
  );
};

export default SearchComponentV1;
