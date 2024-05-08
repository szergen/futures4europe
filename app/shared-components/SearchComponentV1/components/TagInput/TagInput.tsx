import React, { ReactEventHandler, use, useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useSearch } from '../../../../custom-hooks/SearchContext/SearchContext';
import {
  InitialData,
  updateFilteredDataBasedOnClickedSuggestion,
  highlightedResults,
  updateFilteredDataBasedOnClickedTag,
} from '../../SearchComponentV1.utils';

export type TagInputProps = {
  initialData: InitialData;
  filteredData: InitialData;
};

const TagInput: React.FC<TagInputProps> = ({ initialData, filteredData }) => {
  const [input, setInput] = useState('');
  // Needed for showing help dropdown
  const [tagWasFocused, setTagWasFocused] = useState(false);
  const [resultsToShow, setResultsToShow] = useState([] as any[]);
  // Subscribe to the SearchContext
  const { searchState, setSearchState } = useSearch();
  const { clickedSuggestion, clickedField, clickedTag } = searchState;

  // Fuzzy search initialization
  const fusePagesOptions = {
    keys: ['title', 'subtitle', 'description'],
    threshold: 0.2,
    minMatchCharLength: 2,
    includeMatches: true,
    // findAllMatches: true,
  };
  const fusePages = new Fuse(filteredData.pages, fusePagesOptions);

  const fuseFieldSuggestionsOptions = {
    keys: ['field'],
    threshold: 0.2,
    minMatchCharLength: 2,
    includeMatches: true,
    // findAllMatches: true,
  };

  const fuseFieldSuggestions = new Fuse(
    filteredData.assignments,
    fuseFieldSuggestionsOptions
  );

  const fuseTagSuggestionsOptions = {
    keys: ['name'],
    threshold: 0.2,
    minMatchCharLength: 2,
    includeMatches: true,
    // findAllMatches: true,
  };

  const fuseTagSuggestions = new Fuse(
    filteredData.tags,
    fuseTagSuggestionsOptions
  );

  const handleOnBlur = () => {
    setSearchState((prevState) => ({
      ...prevState,
      showHelp: false,
      showSuggestions: false,
    }));
    // setShowSuggestions(false);
    // setShowHelp(false);
  };

  const handleOnFocus = () => {
    setSearchState((prevState) => ({
      ...prevState,
      showSuggestions: !!input,
      showHelp: true,
    }));
    // if (!input) {
    //   setInput('"');
    // }
    setTagWasFocused(true);
    // setShowHelp(true);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && input) {
      // onAddTag(input);
      // setInput('');
      // console.log('debug1->', input[input.length - 1])

      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: false,
        showHelp: false,
        showResults: true,
        results: resultsToShow,
        searchedItems: [...searchState.searchedItems, input],
      }));
      input[input.length - 1] !== '"' && setInput(input + '"');
      setInput('');
      // setShowSuggestions(false);
      // setShowHelp(false);
      // setShowResults(true);
      // setResults(resultsToShow);
    }
  };

  useEffect(() => {
    input !== '"' &&
      setSearchState((prevState) => ({
        ...prevState,
        showHelp: false,
      }));
    setSearchState((prevState) => ({
      ...prevState,
      showSuggestions: false,
    }));
    // setShowSuggestions(false);
    console.log('Input:', input);
    if (input) {
      // Hide help dropdown and show suggestions
      const searchInput = input.replace('"', '');
      // input !== '"' &&
      //   setSearchState((prevState) => ({
      //     ...prevState,
      //     showHelp: false,
      //   }));
      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: true,
      }));
      setTagWasFocused(true);
      // Fuzzy search
      // if (searchInput.includes(':')) {
      //   console.log('Input has field inside');
      //   // Split the input into the key and the search term
      //   const [key, searchTerm] = searchInput
      //     ?.split(':')
      //     .map((str) => str.trim());

      //   // Filter the tags that have the specified key
      //   const filteredResults = filteredData.pages.filter(
      //     (item) =>
      //       item.type?.replace('<strong>', '').replace('</strong>', '') === key
      //   );

      //   // Create a new Fuse object with the filtered tags
      //   const fuseResults = new Fuse(filteredData.pages, {
      //     ...fusePagesOptions,
      //     minMatchCharLength: 1,
      //   });

      //   // Perform a fuzzy search on the specified key
      //   const results = fuseResults.search(searchTerm);
      //   const highlightedData = highlightedResults(results);
      //   setResultsToShow(results?.map((result) => result?.item));
      //   setSearchState((prevState) => ({
      //     ...prevState,
      //     highlightedData: highlightedData,
      //   }));
      //   // setFilteredTags(highlightedResults(results));
      //   console.log('Fuzzy search results after ":" found:', results);
      //   console.log('searchTerm:', searchTerm);
      // } else {
      // Perform a fuzzy search on all keys
      const results = fusePages.search(searchInput);
      const fieldsSuggestions = fuseFieldSuggestions.search(searchInput);
      const tagsSuggestions = fuseTagSuggestions.search(searchInput);

      const matchedFields = fieldsSuggestions.map((fieldSuggestion) => {
        const matchingPage = filteredData.pages.find(
          (page) => page.pageId === fieldSuggestion.item.pageId
        );
        return matchingPage ? { item: matchingPage } : fieldSuggestion;
      });

      const mergedResults = [
        ...results,
        ...matchedFields,
        // ...fieldsSuggestions,
        // ...tagsSuggestions,
      ];
      console.log('mergedResults:', matchedFields);

      const uniqueResults = mergedResults.filter(
        (result, index, self) =>
          index === self.findIndex((t) => t.item.pageId === result.item.pageId)
      );

      console.log('uniqueResults:', uniqueResults);

      setResultsToShow(uniqueResults?.map((result) => result?.item));
      // const highlightedData = highlightedResults(results);
      setSearchState((prevState) => ({
        ...prevState,
        fieldSuggestions: highlightedResults(fieldsSuggestions),
        tagSuggestions: highlightedResults(tagsSuggestions),
        pageSuggestions: highlightedResults(uniqueResults),
      }));
      console.log('Fuzzy search results:', results);
      // }
    } else {
      // tagWasFocused && setShowHelp(true);
      tagWasFocused &&
        setSearchState((prevState) => ({
          ...prevState,
          showHelp: true,
          showSuggestions: false,
        }));
      // setShowSuggestions(false);
    }
  }, [input]);

  useEffect(() => {
    if (clickedSuggestion && clickedSuggestion.includes(':')) {
      const {
        matchedPages,
        matchedTagsBasedOnPages,
        matchedAssignmentsBasedOnPages,
      } = updateFilteredDataBasedOnClickedSuggestion(
        clickedSuggestion,
        filteredData
      );
      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: false,
        showHelp: false,
        showResults: true,
        results: matchedPages,
        clickedSuggestions: '',
        filteredData: {
          pages: matchedPages,
          tags: matchedTagsBasedOnPages,
          assignments: matchedAssignmentsBasedOnPages,
        },
      }));
      // input[input.length - 1] !== '"' && setInput(input + '"');
      setInput('');
    }
  }, [clickedSuggestion]);

  useEffect(() => {
    if (clickedField) {
      const filteredAssignments = filteredData.assignments.filter(
        (item) => item.field === clickedField
      );

      console.log('debug1->filteredAssignments:', filteredAssignments);

      const filteredPages = filteredData.pages.filter((page) =>
        filteredAssignments.some(
          (assignment) => assignment.pageId === page.pageId
        )
      );

      // TODO: Remove assignemnets from filtering
      const filteredTags = filteredData.tags.filter((tag) =>
        filteredAssignments.some(
          (assignment) =>
            assignment.tagId === tag.tagId && assignment.field === clickedField
        )
      );

      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: true,
        showHelp: false,
        showResults: false,
        searchedItems: [...searchState.searchedItems, `${clickedField}:`],
        filteredData: {
          pages: filteredPages,
          tags: filteredTags,
          assignments: filteredAssignments,
        },
      }));
      setInput('');
    } else {
      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: false,
        showHelp: true,
        showResults: false,
      }));
    }
  }, [clickedField]);

  useEffect(() => {
    if (clickedTag && clickedField) {
      const composedTag = `${clickedField}:${clickedTag}`;
      console.log('debug1->composedTag:', composedTag);

      // console.log('debug1->searchedItemsNewArray:', searchedItemsNewArray);
      const {
        matchedPages,
        matchedTagsBasedOnPages,
        matchedAssignmentsBasedOnPages,
      } = updateFilteredDataBasedOnClickedSuggestion(composedTag, filteredData);

      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: true,
        showHelp: false,
        showResults: false,
        clickedField: '',
        clickedTag: '',
        searchedItems: [...searchState.searchedItems.slice(0, -1), composedTag],
        filteredData: {
          pages: matchedPages,
          tags: matchedTagsBasedOnPages,
          assignments: matchedAssignmentsBasedOnPages,
        },
      }));
      setInput('');
    } else if (clickedTag && !clickedField) {
      const {
        matchedPages,
        matchedTagsBasedOnPages,
        matchedAssignmentsBasedOnPages,
      } = updateFilteredDataBasedOnClickedTag(clickedTag, filteredData);

      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: true,
        showHelp: false,
        showResults: false,
        clickedTag: '',
        searchedItems: [...searchState.searchedItems, clickedTag],
        filteredData: {
          pages: matchedPages,
          tags: matchedTagsBasedOnPages,
          assignments: matchedAssignmentsBasedOnPages,
        },
      }));
      setInput('');
    }
  }, [clickedTag]);

  return (
    <div className="style.tagInput min-w-max">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for tags, pages, or people..."
        // className="w-1/2"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

export default TagInput;
