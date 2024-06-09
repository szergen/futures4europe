import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import style from './Suggestions.module.css';
import Link from 'next/link';

export type SuggestionsProps = {
  fieldSuggestions: any;
  tagSuggestions: any;
  pageSuggestions: any;
  handleTagSuggestion: (e: any) => void;
  handleFieldSelection: (e: any) => void;
  clickedField: string;
  handleSelectedSuggestion: (
    selectedSuggestionTag: any,
    selectedSuggestionType: 'tag' | 'field' | 'field-tag'
  ) => void;
  selectedSuggestionIndex: number;
  activeSelection: 'field' | 'tag' | 'field-tag' | '';
  searchedItems: any[];
  sortTags: any[];
  handleSelectedSortTag: (e: any) => void;
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
  sortTags,
  handleSelectedSortTag,
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  // const [areSortTagsVisible, setAreSortTagsVisible] = useState(false);
  const [availableSortTags, setAvailableSortTags] = useState(
    [] as (typeof sortTags)[]
  );

  const uniqueFields = fieldSuggestions.filter(
    (assignment: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t.field === assignment.field)
  );

  const resolvePageType = (pageSuggestion: { [key: string]: string }) =>
    Array.isArray(pageSuggestion?.pageType)
      ? pageSuggestion?.pageType?.filter(
          (pageTypeItem: string) =>
            pageTypeItem !== 'card' && pageTypeItem !== 'post'
        ) || 'post'
      : pageSuggestion?.pageType;

  // Sort by tags logic
  useEffect(() => {
    if (searchedItems.length > 0) {
      searchedItems.forEach((searchedItem: any) => {
        if (searchedItem.searchItemType === 'tag') {
          setAvailableSortTags(
            sortTags?.filter(
              (tag) => tag?.sortAvailableFor === searchedItem?.searchItem
            ) || []
          );
        }
      });
    }
  }, [searchedItems, sortTags]);

  useEffect(() => {
    console.log('availableSortTags', availableSortTags);
  }, [availableSortTags]);

  useEffect(() => {
    if (
      fieldSuggestions.length > 0 &&
      !clickedField &&
      selectedSuggestionIndex < fieldSuggestions.length
    ) {
      handleSelectedSuggestion(
        fieldSuggestions?.[selectedSuggestionIndex]?.name.replace(
          /<[^>]*>?/gm,
          ''
        ),
        'field'
      );
    } else {
      handleSelectedSuggestion(
        tagSuggestions?.[
          selectedSuggestionIndex - fieldSuggestions.length
        ]?.name.replace(/<[^>]*>?/gm, ''),
        'tag'
      );
    }
    // Switch between field and tag suggestions indexes

    console.log(
      'SUGGESTIONS -> debug4->selectedSuggestionIndex->',
      selectedSuggestionIndex
    );
  }, [selectedSuggestionIndex, clickedField]);

  return (
    <div
      className={classNames(
        'w-1/2 border-dashed border-2',
        style.suggestionsContainer
      )}
    >
      {availableSortTags.length > 0 && (
        <div className="border">
          Sort by:
          <ul className="style.tags">
            {availableSortTags?.map((sortTag: any, index: number) => (
              <li key={index} className="flex items-center">
                <span className="w-20">tag:</span>
                <span
                  dangerouslySetInnerHTML={{ __html: sortTag.name }}
                  onMouseDown={handleSelectedSortTag}
                  className="ml-4"
                ></span>
              </li>
            ))}
          </ul>
        </div>
      )}
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
                      index === selectedSuggestionIndex &&
                        activeSelection === 'field' &&
                        'bg-blue-200'
                    )}
                    onMouseOver={() => setHighlightedIndex(index)}
                  >
                    <span className="w-20">field:</span>
                    <span
                      dangerouslySetInnerHTML={{ __html: fieldSuggestion.name }}
                      onMouseDown={handleFieldSelection}
                      className="ml-4"
                    ></span>
                  </li>
                )
            )}
          </ul>
        </div>
      )}
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
                  key={tagSuggestion.name}
                  className={classNames(
                    'flex items-center mb-2',
                    actualIndex === highlightedIndex && 'bg-blue-100',
                    actualIndex ===
                      selectedSuggestionIndex - fieldSuggestions.length &&
                      activeSelection === 'tag' &&
                      'bg-blue-200'
                  )}
                  onMouseOver={() => setHighlightedIndex(index)}
                >
                  <span
                    className="w-20"
                    // onMouseDown={handleClickedSuggestion}
                  >
                    {tagSuggestion.tagType}:
                  </span>
                  <div className="flex">
                    <Image
                      alt={'Tag Image'}
                      className={classNames('inline-block mr-1 ml-4 w-10 h-10')}
                      src={
                        tagSuggestion.picture ||
                        'https://placehold.co/600x400?text=placeholder'
                      }
                      width={40}
                      height={40}
                    />
                    <div className="flex flex-wrap items-center">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: tagSuggestion.name,
                        }}
                        onMouseDown={handleTagSuggestion}
                        className={classNames(
                          tagSuggestion.pageLink && 'font-bold'
                        )}
                      ></span>
                      <span
                        data-after={tagSuggestion.popularity}
                        className="after:content-[attr(data-after)] text-12 relative top-[-16px] ml-1 text-gray-500 dark:text-gray-400"
                      ></span>
                      <span
                        className="w-full text-12"
                        dangerouslySetInnerHTML={{
                          __html: tagSuggestion.tagLine,
                        }}
                      >
                        {/* {tagSuggestion.tagLine} */}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
        </ul>
      </div>
      <div className="border" />
      <div className="style.pageSuggestions">
        <span className="text-pink-700">Quick Results(Page Suggestions:)</span>
        <ul className="style.pages">
          {pageSuggestions?.map(
            (pageSuggestion: any, index: number) =>
              index < 5 && (
                <li key={index} className="flex items-center mb-2">
                  <span className="w-20">
                    {resolvePageType(pageSuggestion)}:
                  </span>
                  <div className="flex">
                    <Image
                      alt={'Tag Image'}
                      className={classNames('inline-block mr-1 ml-4 w-10 h-10')}
                      src={
                        pageSuggestion.pictures ||
                        'https://placehold.co/600x400?text=placeholder'
                      }
                      width={40}
                      height={40}
                    />
                    <Link
                      className="flex flex-wrap items-center"
                      href={pageSuggestion.pageLink || 'https://google.com'}
                    >
                      <span
                        dangerouslySetInnerHTML={{
                          __html: pageSuggestion.title,
                        }}
                      ></span>
                      <span
                        className="w-full text-12"
                        dangerouslySetInnerHTML={{
                          __html: pageSuggestion.description,
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
