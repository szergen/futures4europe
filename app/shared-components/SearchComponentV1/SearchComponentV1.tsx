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
import { Modal } from 'flowbite-react';
import SearchedItems from './components/SearchedItems/SearchedItems';
import Tag from '../Tag/Tag';
import classNames from 'classnames';

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
      pageSuggestions: results?.map((page) => ({ item: page })),
    }));
  }, [results]);

  useEffect(() => {
    console.log('deb1>.results', searchState.results);
  }, [results]);

  return (
    <div className="searchBoxWrapper relative">
      <div className="searchBox flex">
        <SearchedItems
          searchedItems={searchedItems}
          handleRemoveSearchedItem={handleRemoveSearchedItem}
          tags={filteredData?.tags}
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
        <Modal
          show={showResults}
          onClose={() =>
            setSearchState((prevState) => ({
              ...prevState,
              showResults: false,
            }))
          }
          // size="xlg"
          size="6xl"
          dismissible={true}
        >
          <Modal.Header>
            <h2>Results for pages having:</h2>
            <div className={classNames('flex items-center')}>
              {searchedItems?.map((searchedItem: any, index: number) => {
                console.log(
                  'deb1->searchedItem.searchItemType',
                  searchedItem.searchItemType
                );
                switch (searchedItem.searchItemType) {
                  case 'tag':
                    return (
                      <>
                        <div className="mr-2">
                          <Tag
                            {...initialData.tags?.find(
                              (item: any) =>
                                item.name === searchedItem.searchItem
                            )}
                          />
                        </div>
                        {index < searchedItems.length - 1 && (
                          <div className="mr-2">,</div>
                        )}
                      </>
                    );
                  case 'field-tag':
                    const fieldTag = searchedItem.searchItem.split(':');
                    return (
                      <>
                        <div>{fieldTag[0]}:</div>
                        <div className="mr-2">
                          <Tag
                            {...initialData.tags?.find(
                              (item: any) => item.name === fieldTag[1]
                            )}
                          />
                        </div>
                        {index < searchedItems.length - 1 && (
                          <div className="mr-2">,</div>
                        )}
                      </>
                    );
                  case 'text':
                    return (
                      <>
                        <div className="mr-2 text-2xl text-black">
                          "{searchedItem.searchItem}"
                        </div>
                        {index < searchedItems.length - 1 && (
                          <div className="mr-2">,</div>
                        )}
                      </>
                    );
                }
              })}
            </div>
          </Modal.Header>
          <Modal.Body>
            <Results
              results={searchState.filteredData.pages}
              searchedItems={searchedItems}
            />
          </Modal.Body>
        </Modal>
      )}
    </div>
  );
};

export default SearchComponentV1;
