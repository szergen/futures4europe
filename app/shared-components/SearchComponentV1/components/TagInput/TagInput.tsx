import React, { useEffect, useState } from 'react';
import { useSearch } from '../../../../custom-hooks/SearchContext/SearchContext';
import {
  InitialData,
  updateFilteredDataBasedOnClickedSuggestion,
  // highlightedResults,
  updateFilteredDataBasedOnClickedTag,
  uniqueResults,
  extractFilterBy,
  removeSearchedItem,
  wordByWordSearch,
  // highlightMatches,
} from '../../SearchComponentV1.utils';

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

  const handleOnBlur = () => {
    setSearchState((prevState) => ({
      ...prevState,
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
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'ArrowDown') {
      handleArrowDown();
    } else if (event.key === 'ArrowUp') {
      handleArrouwUp();
    } else if (event.key === 'Enter' && tagWasFocused) {
      if (searchState.selectedSuggestionIndex < 0) {
        setSearchState((prevState) => ({
          ...prevState,
          showSuggestions: false,
          showHelp: false,
          showResults: true,
          results: searchState.searchedItems.length ? resultsToShow : [],
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
          selectedSuggestionIndex: -1,
          // selectedSuggestionTag: '',
        }));
        // input[input.length - 1] !== '"' && setInput(input + '"');
        setInput('');
      } else {
        setSearchState((prevState) => ({
          ...prevState,
          showSuggestions: false,
          showHelp: true,
          // showResults: true,
          clickedTag:
            searchState.activeSelection === 'tag'
              ? searchState.selectedSuggestionTag
              : '',
          selectedSuggestionIndex: -1,
          selectedSuggestionTag: '',
          clickedField:
            searchState.activeSelection === 'field'
              ? searchState.selectedSuggestionTag
              : prevState.clickedField,

          activeSelection: 'tag',
        }));
        setInput('');
      }
    } else if (event.key === 'Escape') {
      setSearchState((prevState) => ({
        ...prevState,
        selectedSuggestionIndex: -1,
        selectedSuggestionTag: '',
      }));
    } else if (
      (event.key === 'Delete' || event.key === 'Backspace') &&
      searchState.searchedItems.length > 0 &&
      !input
    ) {
      if (searchState.selectedSearchedItemIndex === -1) {
        setSearchState((prevState) => ({
          ...prevState,
          selectedSearchedItemIndex: 0,
        }));
      } else {
        setSearchState((prevState) => ({
          ...prevState,
          selectedSearchedItemIndex: -1,
          searchedItems: searchState.searchedItems.slice(0, -1),
          filteredData: removeSearchedItem(
            initialData,
            searchState.searchedItems.slice(0, -1),
            input
          ),
        }));
      }
    }
  };

  // SearchButton handler function the same as Enter key
  const handleSearchButton = () => {
    if (searchState.selectedSuggestionIndex < 0) {
      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: false,
        showHelp: false,
        showResults: true,
        results: searchState.searchedItems.length ? resultsToShow : [],
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
        selectedSuggestionIndex: -1,
        // selectedSuggestionTag: '',
      }));
      // input[input.length - 1] !== '"' && setInput(input + '"');
      setInput('');
    } else {
      setSearchState((prevState) => ({
        ...prevState,
        showSuggestions: false,
        showHelp: true,
        // showResults: true,
        clickedTag:
          searchState.activeSelection === 'tag'
            ? searchState.selectedSuggestionTag
            : '',
        selectedSuggestionIndex: -1,
        selectedSuggestionTag: '',
        clickedField:
          searchState.activeSelection === 'field'
            ? searchState.selectedSuggestionTag
            : prevState.clickedField,

        activeSelection: 'tag',
      }));
      setInput('');
    }
  };

  const handleScrollForSuggestions = (e: any) => {
    if (e.deltaY < 0) {
      handleArrouwUp();
    } else {
      handleArrowDown();
    }
  };

  // Input effect
  useEffect(() => {
    console.log('Input:', input);
    if (input) {
      // Hide help dropdown and show suggestions
      const searchInput = input;
      setTagWasFocused(true);

      // Word by word search
      const pageSuggestions = wordByWordSearch(input, filteredData.pages, [
        'title',
        'subtitle',
        'description',
      ]);

      const fieldSuggestions = wordByWordSearch(
        input,
        filteredData.tags.filter((tag) => tag.tagType === 'field'),
        ['name', 'tagLine']
      );

      const tagSuggestions = wordByWordSearch(
        input,
        filteredData.tags.filter(
          (tag) => tag.tagType !== 'field' && tag.tagType !== 'sort'
        ),
        ['name', 'tagLine']
      );

      if (clickedField) {
        setFilterByField(extractFilterBy(initialData.tags, clickedField) || '');
      }
      // Update results local state with unique results
      setResultsToShow(
        uniqueResults(pageSuggestions)?.map((result) => result?.item)
      );

      console.log('debug2->tagSuggestions', tagSuggestions);
      console.log('debug2->pageSuggestions', pageSuggestions);

      setSearchState((prevState) => ({
        ...prevState,
        fieldSuggestions: fieldSuggestions,
        tagSuggestions: filterByField
          ? tagSuggestions?.filter(
              (tag) =>
                tag?.item.tagType !== 'field' &&
                tag?.item.tagType !== 'sort' &&
                tag?.item.tagType === filterByField
            )
          : tagSuggestions?.sort(
              (a, b) => b?.item?.popularity - a?.item?.popularity
            ),
        pageSuggestions: pageSuggestions,
        showSuggestions: true,
        showHelp: false,
        inputText: input,
      }));
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
        inputText: '',
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
      const {
        matchedPages,
        // matchedTagsBasedOnPages,
        // matchedAssignmentsBasedOnPages,
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
        inputText: '',
      }));
      setInput('');
      setResultsToShow(
        uniqueResults(matchedPages.map((page) => ({ item: page }))).map(
          (result) => result.item
        )
      );
    } else if (clickedTag && !clickedField) {
      const { matchedPages } = updateFilteredDataBasedOnClickedTag(
        clickedTag,
        filteredData
      );

      setSearchState((prevState) => ({
        ...prevState,
        showHelp: true,
        showSuggestions: false,
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
          pages: matchedPages.map((page) => page.item),
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
        inputText: '',
      }));
      setInput('');
      setFilterByField('');
      setResultsToShow(
        uniqueResults(matchedPages).map((result) => result.item)
      );
    }
  }, [clickedTag]);

  useEffect(() => {
    // setResultsToShow(
    //   uniqueResults(filteredData.pages.map((page) => ({ item: page }))).map(
    //     (result) => result.item
    //   )
    // );
    console.log('debug9->filteredData', filteredData.pages);
    console.log(
      'debug9->unique',
      uniqueResults(filteredData.pages.map((page) => ({ item: page }))).map(
        (result) => result.item
      )
    );
    setResultsToShow(
      uniqueResults(filteredData.pages.map((page) => ({ item: page }))).map(
        (result) => result.item
      )
    );
  }, [searchState.searchedItems]);

  useEffect(() => {
    console.log(
      'TAG INPUT -> debug4->selectedSuggestionIndex->',
      searchState.selectedSuggestionIndex
    );
    console.log(
      'TAG INPUT -> debug4->selectedSuggestionTag->',
      searchState.selectedSuggestionTag
    );
  }, [searchState.selectedSuggestionIndex]);

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
      <button onMouseDown={handleSearchButton}>
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
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </button>
    </div>
  );
};

export default TagInput;
