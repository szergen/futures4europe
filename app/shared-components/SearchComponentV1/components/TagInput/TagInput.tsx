import React, { ReactEventHandler, use, useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useSearch } from '../../../../custom-hooks/SearchContext/SearchContext';
import {
  InitialData,
  updateFilteredDataBasedOnClickedSuggestion,
  highlightedResults,
  updateFilteredDataBasedOnClickedTag,
  uniqueResults,
  extractFilterBy,
} from '../../SearchComponentV1.utils';
import { init } from 'next/dist/compiled/webpack/webpack';

export type TagInputProps = {
  initialData: InitialData;
  filteredData: InitialData;
};

const TagInput: React.FC<TagInputProps> = ({ initialData, filteredData }) => {
  const [input, setInput] = useState('');
  // Needed for showing help dropdown
  const [tagWasFocused, setTagWasFocused] = useState(false);
  const [filterByField, setFilterByField] = useState('');
  const [resultsToShow, setResultsToShow] = useState([] as any[]);
  // Subscribe to the SearchContext
  const { searchState, setSearchState } = useSearch();
  const { clickedSuggestion, clickedField, clickedTag } = searchState;

  // Fuzzy search initialization
  const fusePagesOptions = {
    keys: ['title', 'subttile', 'description'],
    threshold: 0.4,
    minMatchCharLength: 2,
    includeMatches: true,
    findAllMatches: true,
  };
  const fusePages = new Fuse(filteredData.pages, fusePagesOptions);

  const fuseFieldSuggestionsOptions = {
    keys: ['name'],
    threshold: 0.6,
    minMatchCharLength: 2,
    includeMatches: true,
    // findAllMatches: true,
  };

  const fuseFieldSuggestions = new Fuse(
    filteredData.tags.filter((tag) => tag.tagType === 'field'),
    fuseFieldSuggestionsOptions
  );

  const fuseTagSuggestionsOptions = {
    keys: ['name'],
    threshold: 0.6,
    minMatchCharLength: 2,
    includeMatches: true,
    // findAllMatches: true,
  };

  const fuseTagSuggestions = new Fuse(
    filteredData.tags.filter(
      (tag) => tag.tagType !== 'field' && tag.tagType !== 'sort'
    ),
    fuseTagSuggestionsOptions
  );

  const handleOnBlur = () => {
    setSearchState((prevState) => ({
      ...prevState,
      // showSuggestions: !!input || !!clickedField || !!clickedTag,
      // showHelp: !input && !clickedField && !clickedTag,
      showSuggestions: false,
      showHelp: false,
    }));
  };

  const handleOnFocus = () => {
    setSearchState((prevState) => ({
      ...prevState,
      showSuggestions: !!input || !!clickedField || !!clickedTag,
      showHelp: !input && !clickedField && !clickedTag,
    }));
    setTagWasFocused(true);
    // setInput('');
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && tagWasFocused) {
      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: false,
        showHelp: false,
        showResults: true,
        results: resultsToShow,
        searchedItems: input
          ? [
              ...searchState.searchedItems,
              { searchItem: input, searchItemType: 'text' },
            ]
          : [...searchState.searchedItems],
        filteredData: {
          pages: resultsToShow,
          tags: initialData.tags,
          assignments: initialData.assignments,
        },
      }));
      // input[input.length - 1] !== '"' && setInput(input + '"');
      setInput('');
    }
  };

  // Input effect
  useEffect(() => {
    console.log('Input:', input);
    if (input) {
      // Hide help dropdown and show suggestions
      const searchInput = input;
      // setSearchState((prevState) => ({
      //   ...prevState,
      //   showSuggestions: true,
      //   showHelp: false,
      // }));
      setTagWasFocused(true);

      const results = fusePages.search(searchInput);
      const fieldsSuggestions = fuseFieldSuggestions.search(searchInput);
      const tagsSuggestions = fuseTagSuggestions.search(searchInput);

      // const matchedFields = fieldsSuggestions.map((fieldSuggestion) => {
      //   const matchingPage = filteredData.pages.find(
      //     (page) => page.pageId === fieldSuggestion.item.pageId
      //   );
      //   return matchingPage ? { item: matchingPage } : fieldSuggestion;
      // });

      const mergedResults =
        searchState.searchedItems.length > 0
          ? [
              ...results,
              // ...matchedFields,
              // ...fieldsSuggestions,
              // ...tagsSuggestions,
            ]
          : [...results];
      console.log('debug2->mergedResults:', mergedResults);
      console.log('debug2->filteredData:', filteredData);
      if (clickedField) {
        setFilterByField(extractFilterBy(initialData.tags, clickedField) || '');

        console.log('filterByField:', filterByField);
      }

      // const uniqueResults = mergedResults.filter(
      //   (result, index, self) =>
      //     index === self.findIndex((t) => t.item.pageId === result.item.pageId)
      // );

      // console.log('uniqueResults:', uniqueResults);

      setResultsToShow(
        uniqueResults(mergedResults)?.map((result) => result?.item)
      );
      // const highlightedData = highlightedResults(results);
      setSearchState((prevState) => ({
        ...prevState,
        fieldSuggestions: highlightedResults(fieldsSuggestions),
        tagSuggestions: filterByField
          ? highlightedResults(
              tagsSuggestions.filter(
                (tag) =>
                  tag?.item.tagType !== 'field' &&
                  tag?.item.tagType !== 'sort' &&
                  tag?.item.tagType === filterByField
              )
            )
          : highlightedResults(tagsSuggestions),
        pageSuggestions: uniqueResults(mergedResults).map(
          (result) => result.item
        ),
        showSuggestions: true,
        showHelp: false,
        // filteredData: {
        //   pages: uniqueResults(mergedResults).map((result) => result.item),
        //   tags: initialData.tags,
        //   assignments: initialData.assignments,
        // },
      }));
      console.log('Fuzzy search results:', results);
      // }
    } else {
      tagWasFocused &&
        setSearchState((prevState) => ({
          ...prevState,
          showSuggestions: !!input || !!clickedField || !!clickedTag,
          showHelp: !input && !clickedField && !clickedTag,
        }));
    }
  }, [input, filterByField]);

  // Clicked Field effect
  useEffect(() => {
    if (clickedField) {
      const filteredAssignments = filteredData.assignments.filter(
        (item) => item.field === clickedField
      );

      // console.log('debug1->filteredAssignments:', filteredAssignments);

      const filteredPages = filteredData.pages.filter((page) =>
        filteredAssignments.some(
          (assignment) => assignment.pageId === page.pageId
        )
      );

      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: true,
        showHelp: false,
        searchedItems: [
          ...searchState.searchedItems,
          {
            searchItem: `${clickedField}:`,
            searchItemType: 'field-tag',
          },
        ],
        filteredData: {
          pages: filteredPages,
          tags: initialData.tags,
          assignments: filteredAssignments,
        },
        fieldSuggestions: initialData.tags.filter(
          (tag) => tag.tagType === 'field'
        ),
        tagSuggestions: initialData.tags.filter(
          (tag) =>
            tag.tagType !== 'field' &&
            tag.tagType !== 'sort' &&
            tag.tagType === filterByField
        ),
        pageSuggestions: filteredPages,
      }));
      setInput('');
    } else {
      setSearchState((prevState) => ({
        ...prevState,
      }));
      setFilterByField('');
    }
  }, [clickedField]);

  // Clicked Tag effect
  useEffect(() => {
    if (clickedTag && clickedField) {
      const composedTag = `${clickedField}:${clickedTag}`;
      // console.log('debug1->composedTag:', composedTag);

      // console.log('debug1->searchedItemsNewArray:', searchedItemsNewArray);
      const {
        matchedPages,
        matchedTagsBasedOnPages,
        matchedAssignmentsBasedOnPages,
      } = updateFilteredDataBasedOnClickedSuggestion(composedTag, filteredData);

      setSearchState((prevState) => ({
        ...prevState,
        clickedField: '',
        clickedTag: '',
        searchedItems: [
          ...searchState.searchedItems.slice(0, -1),
          {
            searchItem: composedTag,
            searchItemType: 'field-tag',
          },
        ],
        // results: matchedPages,
        filteredData: {
          pages: matchedPages,
          tags: initialData.tags,
          assignments: initialData.assignments,
        },
        fieldSuggestions: initialData.tags.filter(
          (tag) => tag.tagType === 'field'
        ),
        tagSuggestions: initialData.tags.filter(
          (tag) => tag.tagType !== 'field' && tag.tagType !== 'sort'
        ),
        pageSuggestions: matchedPages,
      }));
      setInput('');
      setResultsToShow(
        uniqueResults(matchedPages.map((page) => ({ item: page }))).map(
          (result) => result.item
        )
      );
    } else if (clickedTag && !clickedField) {
      const {
        matchedPages,
        // matchedTagsBasedOnPages,
        // matchedAssignmentsBasedOnPages,
      } = updateFilteredDataBasedOnClickedTag(clickedTag, filteredData);

      console.log('debug1->matchedPages:', matchedPages);

      setSearchState((prevState) => ({
        ...prevState,
        clickedTag: '',
        searchedItems: [
          ...searchState.searchedItems,
          {
            searchItem: clickedTag,
            searchItemType: 'tag',
          },
        ],
        // results: matchedPages,
        filteredData: {
          pages: matchedPages,
          tags: initialData.tags,
          assignments: initialData.assignments,
        },
        fieldSuggestions: initialData.tags.filter(
          (tag) => tag.tagType === 'field'
        ),
        tagSuggestions: initialData.tags.filter(
          (tag) => tag.tagType !== 'field' && tag.tagType !== 'sort'
        ),
        pageSuggestions: matchedPages,
      }));
      setInput('');
      setFilterByField('');
      setResultsToShow(
        uniqueResults(matchedPages.map((page) => ({ item: page }))).map(
          (result) => result.item
        )
      );
    }
  }, [clickedTag]);

  useEffect(() => {
    setResultsToShow(
      uniqueResults(filteredData.pages.map((page) => ({ item: page }))).map(
        (result) => result.item
      )
    );
  }, [searchState.searchedItems]);

  return (
    <div className="style.tagInput min-w-max">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for tags, pages, or people..."
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

export default TagInput;
