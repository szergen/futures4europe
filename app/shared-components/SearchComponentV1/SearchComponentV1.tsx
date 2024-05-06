import React, { useEffect } from 'react';
import TagInput from './components/TagInput/TagInput';
import HelpDropdown from './components/HelpDropdown/HelpDropdown';
import Suggestions from './components/Suggestions/Suggestions';
import Results from './components/Results/Results';
import { useSearch } from '../../custom-hooks/SearchContext/SearchContext';
import {
  InitialData,
  updateFilteredDataBasedOnClickedSuggestion,
  updateFilteredDataBasedOnClickedTag,
} from './SearchComponentV1.utils';

const SearchComponentV1 = () => {
  // SearchContext
  const { searchState, setSearchState } = useSearch();
  const {
    initalData,
    filteredData,
    fieldSuggestions,
    tagSuggestions,
    pageSuggestions,
    results,
    showHelp,
    showSuggestions,
    showResults,
    searchedItems,
  } = searchState;

  // Other logic
  const handleClickedSuggestion = (e: any) => {
    e.preventDefault();
    console.log(
      'Clicked on tag of clickedSuggestion:',
      e.target.parentNode.innerText
    );
    setSearchState((prevState) => ({
      ...prevState,
      clickedSuggestion: e?.target?.parentNode.innerText,
      searchedItems: [...searchedItems, e?.target?.parentNode.innerText],
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

  // Other logic
  const handleFieldSelection = (e: any) => {
    e.preventDefault();
    console.log('Clicked on field:', e.target.innerText);
    setSearchState((prevState) => ({
      ...prevState,
      clickedField: e?.target?.innerText,
    }));
  };

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
        (item) => item !== siblingSpanText
      );
      //Filter the data based on the remaining search items
      let updatedFilteredData = {
        tags: [],
        pages: [],
        assignments: [],
      };

      if (filteredSearchItems.length !== 0) {
        filteredSearchItems.forEach((item) => {
          let matchedData = {
            pages: [] as InitialData['pages'],
            tags: [] as InitialData['tags'],
            assignments: [] as InitialData['assignments'],
          };

          if (item.includes(':')) {
            const {
              matchedPages,
              matchedTagsBasedOnPages,
              matchedAssignmentsBasedOnPages,
            } = updateFilteredDataBasedOnClickedSuggestion(item, initalData);
            matchedData = {
              pages: matchedPages as InitialData['pages'],
              tags: matchedTagsBasedOnPages,
              assignments: matchedAssignmentsBasedOnPages,
            };
          } else {
            const {
              matchedPages,
              matchedTagsBasedOnPages,
              matchedAssignmentsBasedOnPages,
            } = updateFilteredDataBasedOnClickedTag(item, initalData);
            matchedData = {
              pages: matchedPages as InitialData['pages'],
              tags: matchedTagsBasedOnPages,
              assignments: matchedAssignmentsBasedOnPages,
            };
          }

          updatedFilteredData = {
            pages: [...updatedFilteredData.pages, ...matchedData.pages] as any,
            tags: [...updatedFilteredData.tags, ...matchedData.tags] as any,
            assignments: [
              ...updatedFilteredData.assignments,
              ...matchedData.assignments,
            ] as any,
          };
        });
      } else {
        updatedFilteredData = initalData;
      }

      console.log('updatedFilteredData', updatedFilteredData);

      setSearchState((prevState) => ({
        ...prevState,
        searchedItems: filteredSearchItems,
        filteredData: updatedFilteredData,
      }));
    }
  };

  useEffect(() => {
    console.log('searchedItems', searchedItems);
  }, [searchedItems]);

  return (
    <div className="w-full">
      <div className="style.searchBox flex">
        <ul className="style.searchedItems flex">
          {searchedItems?.map((item, index) => (
            <li key={index} className="flex border shadow rounded-lg mx-1">
              <span className="" key={index}>
                {item}
              </span>
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
          ))}
        </ul>
        <TagInput initialData={initalData} filteredData={filteredData} />
      </div>
      {/* Help and Suggestions*/}
      {showHelp && <HelpDropdown handleFieldSelection={handleFieldSelection} />}
      {showSuggestions && (
        <Suggestions
          fieldSuggestions={fieldSuggestions}
          tagSuggestions={tagSuggestions}
          pageSuggestions={pageSuggestions}
          handleClickedSuggestion={handleClickedSuggestion}
          handleTagSuggestion={handleTagSuggestion}
          handleFieldSelection={handleFieldSelection}
        />
      )}
      {/* Results */}
      {showResults && <Results results={results} />}
    </div>
  );
};

export default SearchComponentV1;
