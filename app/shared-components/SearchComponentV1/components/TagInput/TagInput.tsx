import React, { useEffect, useState } from 'react';
import Fuse from 'fuse.js';
import { useSearch } from '../../../../custom-hooks/SearchContext/SearchContext';
import {
  InitialData,
  updateFilteredDataBasedOnClickedSuggestion,
  highlightedResults,
  updateFilteredDataBasedOnClickedTag,
  uniqueResults,
  extractFilterBy,
  removeSearchedItem,
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

  // KeyEvents for the input
  // const [selectedTag, setSelectedTag] = useState(null);
  // const [highlightedIndex, setHighlightedIndex] = useState(-1);

  // Fuzzy search initialization
  const fusePagesOptions = {
    keys: ['title', 'description'],
    threshold: 0.1,
    minMatchCharLength: Math.min(
      ...input.split(' ').map((word) => word.length)
    ),
    includeMatches: true,
    ignoreLocation: true,
    // findAllMatches: true,
    useExtendedSearch: true,
  };
  const fusePages = new Fuse(filteredData.pages, fusePagesOptions);

  const fuseFieldSuggestionsOptions = {
    keys: ['name'],
    threshold: 0.1,
    minMatchCharLength: Math.min(
      ...input.split(' ').map((word) => word.length)
    ),
    includeMatches: true,
    // findAllMatches: true,
    ignoreLocation: true,
    useExtendedSearch: true,
  };

  const fuseFieldSuggestions = new Fuse(
    filteredData.tags.filter((tag) => tag.tagType === 'field'),
    fuseFieldSuggestionsOptions
  );

  const fuseTagSuggestionsOptions = {
    keys: ['name', 'tagLine'],
    threshold: 0,
    minMatchCharLength: Math.min(
      ...input.split(' ').map((word) => word.length)
    ),
    includeMatches: true,
    ignoreLocation: true,
    //
    useExtendedSearch: true,
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
    if (event.key === 'ArrowDown') {
      // setHighlightedIndex((prevIndex) =>
      //   Math.min(prevIndex + 1, filteredData.tags.length - 1)
      // );
      setSearchState((prevState) => ({
        ...prevState,
        // selectedSuggestionIndex: Math.min(
        //   prevState.selectedSuggestionIndex + 1,
        //   9
        // ),
        selectedSuggestionIndex: prevState.selectedSuggestionIndex + 1,
      }));
    } else if (event.key === 'ArrowUp') {
      // setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setSearchState((prevState) => ({
        ...prevState,
        selectedSuggestionIndex: Math.max(
          prevState.selectedSuggestionIndex - 1,
          0
        ),
      }));
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

  // Input effect
  useEffect(() => {
    console.log('Input:', input);
    if (input) {
      // Hide help dropdown and show suggestions
      const searchInput = input;
      setTagWasFocused(true);

      const results = fusePages.search(searchInput);
      const fieldsSuggestions = fuseFieldSuggestions.search(searchInput);
      const tagsSuggestions = fuseTagSuggestions.search(searchInput);
      // const trimmedTagSuggestons = tagsSuggestions?.map((tag) => {
      //   return {
      //     ...tag,
      //     matches: [
      //       {
      //         indices: tag?.matches?.[0]?.indices?.filter(
      //           (indice) =>
      //             indice?.[1] - indice?.[0] > input.length - 2 ||
      //             indice?.[1] - indice?.[0] > input.split(' ').length - 1
      //         ),
      //         key: tag?.matches?.[0]?.key,
      //       },
      //     ],
      //   };
      // });
      console.log('debug6->tagsSuggestions->', tagsSuggestions);
      // console.log('debug6->trimmedTagSuggestons->', trimmedTagSuggestons);

      const mergedResults =
        searchState.searchedItems.length > 0
          ? [
              ...results,
              // ...matchedFields,
              // ...fieldsSuggestions,
              // ...tagsSuggestions,
            ]
          : [...results];
      // console.log('debug2->mergedResults:', mergedResults);
      // console.log('debug2->filteredData:', filteredData);
      if (clickedField) {
        setFilterByField(extractFilterBy(initialData.tags, clickedField) || '');

        // console.log('filterByField:', filterByField);
      }

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
              tagsSuggestions?.filter(
                (tag) =>
                  tag?.item.tagType !== 'field' &&
                  tag?.item.tagType !== 'sort' &&
                  tag?.item.tagType === filterByField
              )
            )
          : highlightedResults(tagsSuggestions)?.sort(
              (a, b) => b?.popularity - a?.popularity
            ),
        // pageSuggestions: uniqueResults(mergedResults).map(
        //   (result) => result.item
        // ),
        pageSuggestions: highlightedResults(mergedResults),
        showSuggestions: true,
        showHelp: false,
        // filteredData: {
        //   pages: uniqueResults(mergedResults).map((result) => result.item),
        //   tags: initialData.tags,
        //   assignments: initialData.assignments,
        // },
        inputText: input,
      }));
      // console.log('Fuzzy search results:', results);
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
        inputText: '',
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

      // console.log('debug1->matchedPages:', matchedPages);

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
        inputText: '',
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
    </div>
  );
};

export default TagInput;
