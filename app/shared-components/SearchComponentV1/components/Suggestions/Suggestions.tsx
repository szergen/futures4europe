import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

import style from './Suggestions.module.css';
import Link from 'next/link';
import { highlightMatches } from '../../SearchComponentV1.utils';
import { motion } from 'framer-motion';
import { automaticallyDecidePathPrefixBasedOnPageType } from '@app/utils/parse-utils';
import Tag from '@app/shared-components/Tag/Tag';

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

  const handleTagSuggestion2 = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    console.log('deb1->Clicked on tag:', e.target.innerText);
    // handleTagSuggestion(e);
  };

  // const resolvePageType = (pageSuggestion: { [key: string]: string }) =>
  //   Array.isArray(pageSuggestion?.item?.pageType)
  //     ? pageSuggestion?.item?.pageType?.filter(
  //         (pageTypeItem: string) =>
  //           pageTypeItem !== 'info' && pageTypeItem !== 'post'
  //       ) || 'post'
  //     : pageSuggestion?.item?.pageType;

  // Sort by tags logic
  useEffect(() => {
    if (searchedItems && searchedItems?.length > 0) {
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

  console.log('pageSuggestions->', pageSuggestions);

  return (
    <motion.div
      className={classNames('relative z-10', style.suggestionsContainerWrap)}
      initial={{ opacity: 0, scaleY: 0, translateY: '-10px' }}
      animate={{ opacity: 1, scaleY: 1, translateY: '0px' }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
        opacity: { delay: 0.3, duration: 0.5 },
        translateY: { delay: 0.3, duration: 0.4 },
      }}
      style={{
        transformOrigin: 'top',
      }}
    >
      <div
        className={style.suggestionsContainer}
        onWheel={handleScrollForSuggestions}
      >
        {/* Sort Tags */}
        {availableSortTags?.length > 0 && (
          <div className={classNames(style.tagSuggestionsLabel)}>
            <span
              className={classNames(
                'ml-2 pb-4 block text-[14px]',
                style.tagSuggestionsLabel
              )}
            >
              Sort by
            </span>
            <ul className={style.lists}>
              {availableSortTags?.map((sortTag: any, index: number) => (
                <li
                  key={index}
                  className={classNames(
                    'flex items-center',
                    index === selectedSuggestionIndex &&
                      activeSelection === 'sortby' &&
                      'bg-gray-100'
                  )}
                >
                  <span className="w-32 shrink-0">tag:</span>
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
        {!clickedField && uniqueFields?.length > 0 && (
          <div className={style.tagSuggestionsWrapper}>
            <span
              className={classNames(
                'ml-2 pb-4 block text-[14px]',
                style.tagSuggestionsLabel
              )}
            >
              Field Suggestions
            </span>
            <ul className={style.lists}>
              {uniqueFields?.map(
                (fieldSuggestion: any, index: number) =>
                  index < 10 && (
                    <li
                      key={index}
                      className={classNames(
                        'flex items-center',
                        index === highlightedIndexWithType.index &&
                          highlightedIndexWithType.type === 'field' &&
                          'bg-gray-200',
                        index ===
                          selectedSuggestionIndex - availableSortTags.length &&
                          activeSelection === 'field' &&
                          'bg-gray-100'
                      )}
                      onMouseOver={() =>
                        setHighlightedIndexWithType({ index, type: 'field' })
                      }
                    >
                      <span className="w-32 shrink-0">field:</span>
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
        {tagSuggestions?.length > 0 ? (
          <div className={style.tagSuggestionsWrapper}>
            <span
              className={classNames(
                'ml-2 pb-4 block text-[14px]',
                style.tagSuggestionsLabel
              )}
            >
              Tag Suggestions
            </span>
            <ul className={style.lists}>
              {tagSuggestions
                ?.slice(
                  selectedSuggestionIndex >= 5
                    ? selectedSuggestionIndex - 1
                    : 0,
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
                        'flex items-center',
                        actualIndex === highlightedIndexWithType.index &&
                          highlightedIndexWithType.type === 'tag' &&
                          'bg-gray-200',
                        actualIndex ===
                          selectedSuggestionIndex -
                            fieldSuggestions.length -
                            availableSortTags.length &&
                          activeSelection === 'tag' &&
                          'bg-gray-100'
                      )}
                      onMouseOver={() =>
                        setHighlightedIndexWithType({ index, type: 'tag' })
                      }
                    >
                      <span
                        className="w-32 shrink-0"
                        // onMouseDown={handleClickedSuggestion}
                      >
                        {tagSuggestion.item?.tagType}:
                      </span>
                      <div
                        onMouseDown={handleTagSuggestion}
                        className={style.tagContainerForSuggestions}
                      >
                        <Tag
                          {...tagSuggestion.item}
                          disableLink
                          disablePopularityHover
                          disableTooltip
                        />
                      </div>
                      {/* #region Old tag suggestions */}
                      {
                        // <div className="flex searchTagImage items-start">
                        //   <Image
                        //     alt={'Tag Image'}
                        //     src={
                        //       tagSuggestion.item?.picture ||
                        //       'https://placehold.co/600x400?text=placeholder'
                        //     }
                        //     width={40}
                        //     height={40}
                        //   />
                        //   <div className="flex flex-wrap items-center ml-2 mb-0 searchTagText">
                        //     <div
                        //       // dangerouslySetInnerHTML={{
                        //       //   __html: tagSuggestion.name,
                        //       // }}
                        //       dangerouslySetInnerHTML={{
                        //         __html:
                        //           highlightMatches(
                        //             tagSuggestion?.item?.name,
                        //             tagSuggestion?.matches
                        //           ) || tagSuggestion?.item?.name,
                        //       }}
                        //       onMouseDown={handleTagSuggestion}
                        //       className={classNames(
                        //         'cursor-pointer',
                        //         tagSuggestion.item?.pageLink && 'font-bold'
                        //       )}
                        //     />
                        //     <div
                        //       data-after={tagSuggestion.item?.popularity}
                        //       className="after:content-[attr(data-after)] text-12 relative top-[-16px] ml-1 text-gray-500 dark:text-gray-400"
                        //     ></div>
                        //     <div
                        //       className="w-full text-12"
                        //       dangerouslySetInnerHTML={{
                        //         __html: highlightMatches(
                        //           tagSuggestion?.item?.tagLine,
                        //           tagSuggestion?.matches
                        //         ),
                        //       }}
                        //       // dangerouslySetInnerHTML={{
                        //       //   __html: tagSuggestion.tagLine,
                        //       // }}
                        //     />
                        //     {/* {tagSuggestion.tagLine} */}
                        //     {/* </span> */}
                        //   </div>
                        // </div>
                      }
                      {/* #endregion */}
                    </li>
                  );
                })}
            </ul>
          </div>
        ) : (
          ''
        )}

        {/* Pages */}
        {pageSuggestions?.length > 0 && (
          <div className={style.quickResultsWrapper}>
            <span
              className={classNames(
                'ml-2 pb-4 block text-[14px]',
                style.tagSuggestionsLabel
              )}
            >
              Quick Results
            </span>
            <ul className={style.lists}>
              {pageSuggestions?.map(
                (pageSuggestion: any, index: number) =>
                  index < 5 && (
                    <li
                      key={index}
                      className={classNames(
                        index === highlightedIndexWithType.index &&
                          highlightedIndexWithType.type === 'page' &&
                          'bg-gray-200',
                        'flex items-center',
                        style.quickResults
                      )}
                      onMouseOver={() =>
                        setHighlightedIndexWithType({ index, type: 'page' })
                      }
                      // Prevent exiting the input field on click
                      onMouseDown={(e) => e.preventDefault()}
                    >
                      <Link
                        className={classNames(
                          index === highlightedIndexWithType.index &&
                            highlightedIndexWithType.type === 'page' &&
                            'bg-gray-200',
                          'flex items-center w-full'
                        )}
                        href={`${automaticallyDecidePathPrefixBasedOnPageType(
                          pageSuggestion.item?.pageTypes?.[0]
                        )}${pageSuggestion.item?.slug}`}
                        target="_blank"
                      >
                        <div className="flex items-start w-full">
                          <div className={style.pageImageContainer}>
                            <Image
                              alt={'Tag Image'}
                              className={
                                (classNames('inline-block mr-1 ml-4 w-10 h-10'),
                                style.searchTagImage)
                              }
                              src={
                                pageSuggestion?.item?.organisation?.[0]
                                  ?.picture ||
                                pageSuggestion?.item?.Project?.[0]?.picture ||
                                pageSuggestion?.item?.person?.[0]?.picture ||
                                pageSuggestion?.item?.postImage1?.url ||
                                'https://placehold.co/600x400?text=placeholder'
                              }
                              width={80}
                              height={80}
                              objectFit="cover"
                            />
                          </div>

                          <div className="flex flex-wrap items-center ml-2 w-full">
                            {/* Page Title */}
                            <div className={style.titleAndTag}>
                              <div
                                // dangerouslySetInnerHTML={{
                                //   __html: pageSuggestion.title,
                                // }}
                                dangerouslySetInnerHTML={{
                                  __html: highlightMatches(
                                    pageSuggestion?.item?.title,
                                    pageSuggestion?.matches
                                  ),
                                }}
                                className={style.pageTitle}
                              ></div>
                              <Tag {...pageSuggestion?.item?.pageTypes?.[0]} />
                            </div>
                            {/* Page Content */}
                            <div
                              className={classNames(
                                'w-full text-12 cursor-text',
                                style.quickResultsContent
                              )}
                              // dangerouslySetInnerHTML={{
                              //   __html: pageSuggestion.description,
                              // }}
                              dangerouslySetInnerHTML={{
                                __html: highlightMatches(
                                  pageSuggestion?.item?.postContentRIch1 +
                                    pageSuggestion?.item?.postContentRIch2 ||
                                    pageSuggestion?.item?.description,
                                  pageSuggestion?.matches
                                ),
                              }}
                            >
                              {/* {pageSuggestion.description} */}
                            </div>
                          </div>
                        </div>
                      </Link>
                    </li>
                  )
              )}
            </ul>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Suggestions;
