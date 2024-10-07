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
    // console.log('debug9->filteredData', filteredData.pages);
    // console.log(
    //   'debug9->unique',
    //   uniqueResults(filteredData.pages.map((page) => ({ item: page }))).map(
    //     (result) => result.item
    //   )
    // );
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
    <div className={classNames(style.SearchInputContainer, 'flex rounded-md')}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for tags, pages, or people..."
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
      <button
        className={classNames(style.SearchInputButton, 'rounded-md')}
        onMouseDown={handleSearchButton}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <g>
            <path d="M 0 24 L 0 0 L 24 0 L 24 24 Z" fill="transparent"></path>
            <g transform="translate(4.75 3.6)">
              <g>
                <path
                  d="M 5.56 1.19 C 2.43 1.53 0 4.18 0 7.4 C 0 10.85 2.8 13.65 6.25 13.65 C 9.53 13.65 12.22 11.12 12.48 7.9 M 14.5 15.65 L 10.75 11.9"
                  fill="transparent"
                  strokeWidth="1.49996"
                  stroke="rgb(64,112,244)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M 12.39 4.74 C 12.294 5.124 11.946 5.4 11.55 5.4 C 11.154 5.4 10.806 5.124 10.71 4.74 L 10.602 4.308 C 10.518 3.984 10.266 3.732 9.942 3.648 L 9.51 3.54 C 9.126 3.444 8.85 3.096 8.85 2.7 C 8.85 2.304 9.126 1.956 9.51 1.86 L 9.942 1.752 C 10.266 1.668 10.518 1.416 10.602 1.092 L 10.71 0.66 C 10.806 0.276 11.154 0 11.55 0 C 11.946 0 12.294 0.276 12.39 0.66 L 12.498 1.092 C 12.582 1.416 12.834 1.668 13.158 1.752 L 13.59 1.86 C 13.974 1.956 14.25 2.304 14.25 2.7 C 14.25 3.096 13.974 3.444 13.59 3.54 L 13.158 3.648 C 12.834 3.732 12.582 3.984 12.498 4.308 Z"
                  fill="rgb(64,112,244)"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </button>
    </div>
  );
};

export default TagInput;
