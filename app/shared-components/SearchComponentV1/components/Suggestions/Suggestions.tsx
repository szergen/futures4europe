import React, { useEffect } from 'react';
import Image from 'next/image';

import { FieldTypes } from '../../SearchComponentV1.utils';
import classNames from 'classnames';

export type SuggestionsProps = {
  fieldSuggestions: any;
  tagSuggestions: any;
  pageSuggestions: any;
  handleClickedSuggestion: (e: any) => void;
  handleTagSuggestion: (e: any) => void;
  handleFieldSelection: (e: any) => void;
};

const Suggestions: React.FC<SuggestionsProps> = ({
  fieldSuggestions,
  tagSuggestions,
  pageSuggestions,
  handleClickedSuggestion,
  handleTagSuggestion,
  handleFieldSelection,
}) => {
  useEffect(() => {
    console.log('fieldSuggestions', fieldSuggestions);
    console.log('tagSuggestions', tagSuggestions);
    console.log('pageSuggestions', pageSuggestions);
  }, [fieldSuggestions, tagSuggestions, pageSuggestions]);

  const uniqueAssignments = fieldSuggestions.filter(
    (assignment: any, index: any, self: any) =>
      index === self.findIndex((t: any) => t.field === assignment.field)
  );

  return (
    <div className="style.suggestions w-1/2 border-dashed border-2">
      <div className="border" />
      <div className="style.fieldSuggestions">
        <span className="text-purple-700">Field Suggestions:</span>
        <ul className="style.tags">
          {uniqueAssignments?.map(
            (fieldSuggestion: any, index: number) =>
              index < 10 &&
              FieldTypes.includes(
                fieldSuggestion.field
                  .replace('<strong>', '')
                  .replace('</strong>', '')
              ) && (
                <li key={index} className="flex items-center">
                  <span className="w-20">field:</span>
                  <span
                    dangerouslySetInnerHTML={{ __html: fieldSuggestion.field }}
                    onMouseDown={handleFieldSelection}
                    className="ml-4"
                  ></span>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="style.tagSuggestions">
        <span className="text-purple-700">Tag Suggestions:</span>
        <ul className="style.tags">
          {tagSuggestions?.map(
            (tagSuggestion: any, index: number) =>
              index < 10 && (
                <li key={index} className="flex items-center mb-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: tagSuggestion.tagType + ': ',
                    }}
                    className="w-20"
                    // onMouseDown={handleClickedSuggestion}
                  ></span>
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
                        dangerouslySetInnerHTML={{ __html: tagSuggestion.name }}
                        onMouseDown={handleTagSuggestion}
                      ></span>
                      <span
                        after={tagSuggestion.popularity}
                        className="after:content-[attr(after)] text-12 relative top-[-16px] ml-1 text-gray-500 dark:text-gray-400"
                      ></span>
                      <span className="w-full text-12">
                        {tagSuggestion.tagLine}
                      </span>
                    </div>
                  </div>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="border" />
      <div className="style.pageSuggestions">
        <span className="text-pink-700">Quick Results(Page Suggestions:)</span>
        <ul className="style.pages">
          {pageSuggestions?.map(
            (pageSuggestion: any, index: number) =>
              index < 10 && (
                <li key={index} className="flex items-center mb-2">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: pageSuggestion.pageType + ': ',
                    }}
                    className="w-20"
                    // onMouseDown={handleClickedSuggestion}
                  ></span>
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
                    <div className="flex flex-wrap items-center">
                      <span
                        dangerouslySetInnerHTML={{
                          __html: pageSuggestion.title,
                        }}
                        onMouseDown={handleTagSuggestion}
                      ></span>
                      <span className="w-full text-12">
                        {pageSuggestion.description}
                      </span>
                    </div>
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
