import React, { use, useEffect, useState } from 'react';
import { useSearch } from '../../../../custom-hooks/SearchContext/SearchContext';
import {
  InitialData,
  updateFilteredDataBasedOnClickedSuggestion,
  updateFilteredDataBasedOnClickedTag,
  uniqueResults,
  extractFilterBy,
  removeSearchedItem,
  wordByWordSearch,
  sortResultBySortTags,
} from '../../SearchComponentV1.utils';
import style from './TagInput.module.css';
import classNames from 'classnames';
// import SearchedItems from '../SearchedItems/SearchedItems';

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
  const { clickedField, clickedTag } = searchState;

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
        const resultsBasedOnSortTag = searchState.selectedSortTag
          ? sortResultBySortTags(resultsToShow, searchState.selectedSortTag)
          : resultsToShow;
        console.log(
          'resultsBasedOnSortTag -> resultsBasedOnSortTag',
          resultsBasedOnSortTag
        );
        console.log(
          'resultsBasedOnSortTag -> searchState.selectedSortTag',
          searchState.selectedSortTag
        );

        setSearchState((prevState) => ({
          ...prevState,
          showSuggestions: false,
          showHelp: false,
          showResults: true,
          results: searchState.searchedItems.length
            ? resultsBasedOnSortTag
            : [],
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
            sortTags: initialData.sortTags,
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
          searchedItems:
            searchState.activeSelection === 'sortby'
              ? [
                  ...searchState.searchedItems,
                  {
                    searchItem: searchState.selectedSuggestionTag,
                    searchItemType: 'sortby',
                  },
                ]
              : prevState.searchedItems,
          selectedSortTag:
            searchState.activeSelection === 'sortby'
              ? searchState.selectedSuggestionTag
              : '',
          // activeSelection: 'tag',
        }));
        setInput('');
      }
    } else if (event.key === 'Escape') {
      event.preventDefault();
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
        const { searchedItems, selectedSortTag: initialSelectedSortTag } =
          searchState;
        const isLastItemSortBy =
          searchedItems[searchedItems.length - 1]?.searchItemType === 'sortby';
        const updatedSearchedItems = searchedItems.slice(0, -1);

        setSearchState((prevState) => ({
          ...prevState,
          selectedSearchedItemIndex: -1,
          searchedItems: updatedSearchedItems,
          filteredData: removeSearchedItem(
            initialData,
            updatedSearchedItems,
            input
          ),
          selectedSortTag: isLastItemSortBy ? '' : initialSelectedSortTag,
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
          sortTags: initialData.sortTags,
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
        selectedSuggestionIndex: 0,
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

  // Input effect
  useEffect(() => {
    console.log('Input:', input);
    if (input) {
      // Hide help dropdown and show suggestions
      const searchInput = input;
      let sortTagsSuggestionsSearch: any[] = [];
      setTagWasFocused(true);

      // Word by word search
      const pageSuggestionsSearch = wordByWordSearch(
        input,
        filteredData.pages,
        ['title', 'subtitle', 'description']
      );

      const fieldSuggestionsSearch = wordByWordSearch(
        input,
        filteredData.tags.filter((tag) => tag.tagType === 'field'),
        ['name', 'tagLine']
      );

      const tagSuggestionsSearch = wordByWordSearch(
        input,
        filteredData.tags.filter(
          (tag) => tag.tagType !== 'field' && tag.tagType !== 'sort'
        ),
        ['name', 'tagLine']
      );

      // if (searchState.searchedItems.length) {
      sortTagsSuggestionsSearch = wordByWordSearch(
        input,
        filteredData.sortTags,
        ['name']
      );
      console.log(
        'debug1->sortTagsSuggestionsSearch',
        sortTagsSuggestionsSearch
      );
      // }

      if (clickedField) {
        setFilterByField(extractFilterBy(initialData.tags, clickedField) || '');
      }
      // Update results local state with unique results
      setResultsToShow(
        uniqueResults(pageSuggestionsSearch)?.map((result) => result?.item)
      );

      console.log('debug2->tagSuggestions', tagSuggestionsSearch);
      console.log('debug2->pageSuggestions', pageSuggestionsSearch);

      setSearchState((prevState) => ({
        ...prevState,
        fieldSuggestions: fieldSuggestionsSearch,
        tagSuggestions: filterByField
          ? tagSuggestionsSearch?.filter(
              (tag) =>
                tag?.item.tagType !== 'field' &&
                tag?.item.tagType !== 'sort' &&
                tag?.item.tagType === filterByField
            )
          : tagSuggestionsSearch?.sort(
              (a, b) => b?.item?.popularity - a?.item?.popularity
            ),
        pageSuggestions: pageSuggestionsSearch,
        sortTagsSuggestions: sortTagsSuggestionsSearch,
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

      const tagSuggestionsSearch = wordByWordSearch(
        ' ',
        filteredData.tags.filter(
          (tag) =>
            tag.tagType !== 'field' &&
            tag.tagType !== 'sort' &&
            tag.tagType === extractFilterBy(initialData.tags, clickedField)
        ),
        ['name', 'tagLine']
      ).sort((a, b) => b?.item?.popularity - a?.item?.popularity);
      console.log(
        'debug100->tagSuggestionsSearch',
        tagSuggestionsSearch,
        extractFilterBy(initialData.tags, clickedField)
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
          sortTags: initialData.sortTags,
        },
        fieldSuggestions: [],
        // fieldSuggestions: initialData.tags.filter(
        //   (tag) => tag.tagType === 'field'
        // ),
        tagSuggestions: tagSuggestionsSearch,
        pageSuggestions: filteredPages,
        // sortTagsSuggestions: initialData.sortTags,
        sortTagsSuggestions: [],
        inputText: '',
        selectedSuggestionIndex: 0,
        activeSelection: 'tag',
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
          sortTags: initialData.sortTags,
        },
        fieldSuggestions: initialData.tags.filter(
          (tag) => tag.tagType === 'field'
        ),
        tagSuggestions: initialData.tags.filter(
          (tag) => tag.tagType !== 'field' && tag.tagType !== 'sort'
        ),
        pageSuggestions: matchedPages,
        sortTagsSuggestions: initialData.sortTags,
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
          sortTags: initialData.sortTags,
        },
        fieldSuggestions: initialData.tags.filter(
          (tag) => tag.tagType === 'field'
        ),
        tagSuggestions: initialData.tags.filter(
          (tag) => tag.tagType !== 'field' && tag.tagType !== 'sort'
        ),
        pageSuggestions: matchedPages,
        sortTagsSuggestions: initialData.sortTags,
        inputText: '',
      }));
      setInput('');
      setFilterByField('');
      setResultsToShow(
        uniqueResults(matchedPages).map((result) => result.item)
      );
    }
  }, [clickedTag]);

  // searchState.searchedItems effect
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
    if (searchState.selectedSortTag) {
      setInput('');
    }
  }, [searchState.searchedItems]);

  // useEffect(() => {
  //   console.log(
  //     'TAG INPUT -> debug4->selectedSuggestionIndex->',
  //     searchState.selectedSuggestionIndex
  //   );
  //   console.log(
  //     'TAG INPUT -> debug4->selectedSuggestionTag->',
  //     searchState.selectedSuggestionTag
  //   );
  // }, [searchState.selectedSuggestionIndex]);

  return (
    <div className={classNames(style.inputContainer)}>
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
          strokeWidth={2}
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
