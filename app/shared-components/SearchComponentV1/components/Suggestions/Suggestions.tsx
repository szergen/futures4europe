import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import style from './Suggestions.module.css';
import Link from 'next/link';
import { highlightMatches } from '../../SearchComponentV1.utils';

export type SuggestionsProps = {
  fieldSuggestions: any[];
  tagSuggestions: any[];
  pageSuggestions: any[];
  sortTagsSuggestions: any[];
  handleTagSuggestion: (e: any) => void;
  handleFieldSelection: (e: any) => void;
  clickedField: string;
  handleSelectedSuggestion: (
    selectedSuggestionTag: any,
    selectedSuggestionType: 'tag' | 'field' | 'field-tag'
  ) => void;
  selectedSuggestionIndex: number;
  activeSelection: 'field' | 'tag' | 'field-tag' | 'sortby';
  searchedItems: any[];
  // sortTags: any[];
  handleSelectedSortTag: (e: any) => void;
  // inputText: string;
  handleScrollForSuggestions: (e: any) => void;
};

const Suggestions: React.FC<SuggestionsProps> = ({
  fieldSuggestions,
  tagSuggestions,
  pageSuggestions,
  handleTagSuggestion,
  handleFieldSelection,
  clickedField,
  handleSelectedSuggestion,
  selectedSuggestionIndex,
  activeSelection,
  searchedItems,
  // sortTags,
  handleSelectedSortTag,
  // inputText,
  handleScrollForSuggestions,
  sortTagsSuggestions,
}) => {
  const [highlightedIndexWithType, setHighlightedIndexWithType] = useState({
    index: -1,
    type: '',
  });
  const [availableSortTags, setAvailableSortTags] = useState([]);
  const [suggestedIndex, setSuggestedIndex] = useState({
    type: '',
    index: selectedSuggestionIndex,
  });

  const allSugestionsArray = [
    // ...availableSortTags,
    // ...fieldSuggestions,
    ...tagSuggestions,
  ];
  // console.log('debug1->allSugestionsArray', allSugestionsArray);
  // console.log('debug1->pageSuggestions', pageSuggestions);

  const uniqueFields = fieldSuggestions.filter(
    (assignment: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t.field === assignment.field)
  );

  const resolvePageType = (pageSuggestion: { [key: string]: string }) =>
    Array.isArray(pageSuggestion?.item?.pageType)
      ? pageSuggestion?.item?.pageType?.filter(
          (pageTypeItem: string) =>
            pageTypeItem !== 'info' && pageTypeItem !== 'post'
        ) || 'post'
      : pageSuggestion?.item?.pageType;

  // Sort by tags logic
  useEffect(() => {
    if (searchedItems.length > 0) {
      searchedItems.forEach((searchedItem: any) => {
        if (searchedItem.searchItemType === 'tag') {
          setAvailableSortTags(
            sortTagsSuggestions?.filter(
              (tag: {
                item: { sortAvailableFor: string; name: string };
                matches: any;
              }) => tag?.item?.sortAvailableFor === searchedItem?.searchItem
            ) || []
          );
        }
      });
    }
  }, [searchedItems, sortTagsSuggestions]);

  // useEffect(() => {
  //   console.log('debug1->availableSortTags', availableSortTags);
  //   console.log(
  //     'debug1->sortTagsSuggestions from Suggestions',
  //     sortTagsSuggestions
  //   );
  // }, [availableSortTags]);

  useEffect(() => {
    if (
      availableSortTags.length > 0 &&
      !clickedField &&
      selectedSuggestionIndex < availableSortTags.length
    ) {
      handleSelectedSuggestion(
        availableSortTags?.[selectedSuggestionIndex]?.item?.name,
        'sortby'
      );
    } else if (
      fieldSuggestions.length > 0 &&
      !clickedField &&
      selectedSuggestionIndex <
        fieldSuggestions.length - availableSortTags.length
      // highlightedIndexWithType.type === 'field'
    ) {
      handleSelectedSuggestion(
        fieldSuggestions?.[selectedSuggestionIndex]?.item?.name,
        'field'
      );
    } else if (clickedField) {
      handleSelectedSuggestion(
        tagSuggestions?.[selectedSuggestionIndex]?.item?.name,
        'tag'
      );
    } else {
      handleSelectedSuggestion(
        tagSuggestions?.[
          selectedSuggestionIndex -
            fieldSuggestions.length -
            availableSortTags.length
        ]?.item?.name,
        'tag'
      );
    }
    // Switch between field and tag suggestions indexes
  }, [selectedSuggestionIndex, clickedField]);

  return (
    <div
      className={classNames(
        'w-1/2 border-dashed border-2',
        style.suggestionsContainer
      )}
      onWheel={handleScrollForSuggestions}
    >
      {/* Sort Tags */}
      {availableSortTags.length > 0 && (
        <div className="border">
          Sort by:
          <ul className="style.tags">
            {availableSortTags?.map((sortTag: any, index: number) => (
              <li
                key={index}
                className={classNames(
                  'flex items-center',
                  index === selectedSuggestionIndex &&
                    activeSelection === 'sortby' &&
                    'bg-blue-200'
                )}
              >
                <span className="w-20">tag:</span>
                <span
                  // dangerouslySetInnerHTML={{ __html: sortTag?.item.name }}
                  dangerouslySetInnerHTML={{
                    __html: highlightMatches(
                      sortTag?.item?.name,
                      sortTag?.matches
                    ),
                  }}
                  onMouseDown={handleSelectedSortTag}
                  className="ml-4"
                ></span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {/* Field Tags */}
      <div className="border" />
      {!clickedField && (
        <div className="style.fieldSuggestions">
          <span className="text-purple-700">Field Suggestions:</span>
          <ul className="style.tags">
            {uniqueFields?.map(
              (fieldSuggestion: any, index: number) =>
                index < 10 && (
                  <li
                    key={index}
                    className={classNames(
                      'flex items-center',
                      index === highlightedIndexWithType.index &&
                        highlightedIndexWithType.type === 'field' &&
                        'bg-blue-100',
                      index ===
                        selectedSuggestionIndex - availableSortTags.length &&
                        activeSelection === 'field' &&
                        'bg-blue-200'
                    )}
                    onMouseOver={() =>
                      setHighlightedIndexWithType({ index, type: 'field' })
                    }
                  >
                    <span className="w-20">field:</span>
                    <span
                      // dangerouslySetInnerHTML={{ __html: fieldSuggestion.name }}
                      dangerouslySetInnerHTML={{
                        __html: highlightMatches(
                          fieldSuggestion?.item?.name,
                          fieldSuggestion?.matches
                        ),
                      }}
                      onMouseDown={handleFieldSelection}
                      className="ml-4"
                    ></span>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
      {/* Tags */}
      <div className="style.tagSuggestions">
        <span className="text-purple-700">Tag Suggestions:</span>
        <ul className="style.tags">
          {tagSuggestions
            ?.slice(
              selectedSuggestionIndex >= 5 ? selectedSuggestionIndex - 1 : 0,
              selectedSuggestionIndex >= 5 ? selectedSuggestionIndex + 4 : 5
            )
            .map((tagSuggestion: any, index: number) => {
              const actualIndex =
                selectedSuggestionIndex >= 5
                  ? selectedSuggestionIndex - 1 + index
                  : index;
              return (
                <li
                  key={tagSuggestion.item?.name}
                  className={classNames(
                    'flex items-center mb-2',
                    actualIndex === highlightedIndexWithType.index &&
                      highlightedIndexWithType.type === 'tag' &&
                      'bg-blue-100',
                    actualIndex ===
                      selectedSuggestionIndex -
                        fieldSuggestions.length -
                        availableSortTags.length &&
                      activeSelection === 'tag' &&
                      'bg-blue-200'
                  )}
                  onMouseOver={() =>
                    setHighlightedIndexWithType({ index, type: 'tag' })
                  }
                >
                  <span
                    className="w-20"
                    // onMouseDown={handleClickedSuggestion}
                  >
                    {tagSuggestion.item?.tagType}:
                  </span>
                  <div className="flex">
                    <Image
                      alt={'Tag Image'}
                      className={classNames('inline-block mr-1 ml-4 w-10 h-10')}
                      src={
                        tagSuggestion.item?.picture ||
                        'https://placehold.co/600x400?text=placeholder'
                      }
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-wrap items-center">
                      <span
                        // dangerouslySetInnerHTML={{
                        //   __html: tagSuggestion.name,
                        // }}
                        dangerouslySetInnerHTML={{
                          __html:
                            highlightMatches(
                              tagSuggestion?.item?.name,
                              tagSuggestion?.matches
                            ) || tagSuggestion?.item?.name,
                        }}
                        onMouseDown={handleTagSuggestion}
                        className={classNames(
                          tagSuggestion.item?.pageLink && 'font-bold'
                        )}
                      />
                      <span
                        data-after={tagSuggestion.item?.popularity}
                        className="after:content-[attr(data-after)] text-12 relative top-[-16px] ml-1 text-gray-500 dark:text-gray-400"
                      ></span>
                      <span
                        className="w-full text-12"
                        dangerouslySetInnerHTML={{
                          __html: highlightMatches(
                            tagSuggestion?.item?.tagLine,
                            tagSuggestion?.matches
                          ),
                        }}
                        // dangerouslySetInnerHTML={{
                        //   __html: tagSuggestion.tagLine,
                        // }}
                      />
                      {/* {tagSuggestion.tagLine} */}
                      {/* </span> */}
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      {/* Pages */}
      <div className="border" />
      <div className="style.pageSuggestions">
        <span className="text-pink-700">Quick Results(Page Suggestions:)</span>
        <ul className="style.pages">
          {pageSuggestions?.map(
            (pageSuggestion: any, index: number) =>
              index < 5 && (
                <li
                  key={index}
                  className={classNames(
                    index === highlightedIndexWithType.index &&
                      highlightedIndexWithType.type === 'page' &&
                      'bg-blue-100',
                    'flex items-center mb-2'
                  )}
                  onMouseOver={() =>
                    setHighlightedIndexWithType({ index, type: 'page' })
                  }
                  // Prevent exiting the input field on click
                  onMouseDown={(e) => e.preventDefault()}
                >
                  <span className="w-20">
                    {resolvePageType(pageSuggestion)}:
                  </span>
                  <div className="flex">
                    <Image
                      alt={'Tag Image'}
                      className={classNames('inline-block mr-1 ml-4 w-10 h-10')}
                      src={
                        pageSuggestion.item?.pictures ||
                        'https://placehold.co/600x400?text=placeholder'
                      }
                      width={40}
                      height={40}
                    />
                    <Link
                      className="flex flex-wrap items-center"
                      href={
                        pageSuggestion.item?.pageLink || 'https://google.com'
                      }
                    >
                      <span
                        // dangerouslySetInnerHTML={{
                        //   __html: pageSuggestion.title,
                        // }}
                        dangerouslySetInnerHTML={{
                          __html: highlightMatches(
                            pageSuggestion?.item?.title,
                            pageSuggestion?.matches
                          ),
                        }}
                      ></span>
                      <span
                        className="w-full text-12"
                        // dangerouslySetInnerHTML={{
                        //   __html: pageSuggestion.description,
                        // }}
                        dangerouslySetInnerHTML={{
                          __html: highlightMatches(
                            pageSuggestion?.item?.description,
                            pageSuggestion?.matches
                          ),
                        }}
                      >
                        {/* {pageSuggestion.description} */}
                      </span>
                    </Link>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;