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
import SearchedItems from './components/SearchedItems/SearchedItems';
import Fuse from 'fuse.js';
import { init } from 'next/dist/compiled/webpack/webpack';
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

      //Filter the data based on the remaining search items
      let updatedFilteredData = {
        tags: initialData.tags,
        pages: initialData.pages,
        assignments: initialData.assignments,
      };

      if (filteredSearchItems.length !== 0) {
        filteredSearchItems.forEach((item) => {
          let matchedData = {
            pages: [] as InitialData['pages'],
            tags: [] as InitialData['tags'],
            assignments: [] as InitialData['assignments'],
          };

          if (item.searchItemType === 'field-tag') {
            const {
              matchedPages,
              matchedTagsBasedOnPages,
              matchedAssignmentsBasedOnPages,
            } = updateFilteredDataBasedOnClickedSuggestion(
              item.searchItem,
              filteredSearchItems.length > 1 ? updatedFilteredData : initialData
            );
            matchedData = {
              pages: matchedPages as InitialData['pages'],
              tags: matchedTagsBasedOnPages,
              assignments: matchedAssignmentsBasedOnPages,
            };
          } else if (item.searchItemType === 'tag') {
            const {
              matchedPages,
              // matchedTagsBasedOnPages,
              // matchedAssignmentsBasedOnPages,
            } = updateFilteredDataBasedOnClickedTag(
              item.searchItem,
              filteredSearchItems.length > 1 ? updatedFilteredData : initialData
            );
            matchedData = {
              pages: matchedPages as InitialData['pages'],
              tags: initialData.tags,
              assignments: initialData.assignments,
            };
          } else if (item.searchItemType === 'text') {
            const fusePagesOptions = {
              keys: ['title', 'subttile', 'description'],
              threshold: 0.4,
              minMatchCharLength: 2,
              includeMatches: true,
              findAllMatches: true,
            };
            const fusePages = new Fuse(
              updatedFilteredData.pages,
              fusePagesOptions
            );
            const matchedPages = fusePages.search(item.searchItem);
            console.log('debug3->matchedPages', matchedPages);
            matchedData.pages = matchedPages.map(
              (page) => page.item
            ) as InitialData['pages'];
          }

          updatedFilteredData.pages = matchedData.pages;
        });
      } else {
        updatedFilteredData.pages = initialData.pages;
      }

      console.log('updatedFilteredData', updatedFilteredData);

      setSearchState((prevState) => ({
        ...prevState,
        searchedItems: filteredSearchItems,
        filteredData: {
          tags: updatedFilteredData.tags,
          pages: updatedFilteredData.pages,
          assignments: updatedFilteredData.assignments,
        },
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
        />
      )}
      {/* Results */}
      {showResults && <Results results={results} />}
    </div>
  );
};

export default SearchComponentV1;
