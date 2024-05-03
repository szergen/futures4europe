import React, { useEffect } from 'react';
import { FieldTypes } from '../../SearchComponentV1.utils';

export type SuggestionsProps = {
  fieldSuggestions: any;
  tagSuggestions: any;
  pageSuggestions: any;
  handleClickedSuggestion: (e: any) => void;
  handleTagSuggestion: (e: any) => void;
};

const Suggestions: React.FC<SuggestionsProps> = ({
  fieldSuggestions,
  tagSuggestions,
  pageSuggestions,
  handleClickedSuggestion,
  handleTagSuggestion,
}) => {
  useEffect(() => {
    console.log('fieldSuggestions', fieldSuggestions);
    console.log('tagSuggestions', tagSuggestions);
    console.log('pageSuggestions', pageSuggestions);
  }, [fieldSuggestions, tagSuggestions, pageSuggestions]);

  return (
    <div className="style.suggestions w-1/2 border-dashed border-2">
      <div className="border" />
      <div className="style.fieldSuggestions">
        <span className="text-purple-700">Field Suggestions:</span>
        <ul className="style.tags">
          {fieldSuggestions?.map(
            (fieldSuggestion: any, index: number) =>
              index < 10 &&
              FieldTypes.includes(fieldSuggestion.field) && (
                <li key={index}>
                  <span
                    dangerouslySetInnerHTML={{ __html: fieldSuggestion.field }}
                    onMouseDown={handleClickedSuggestion}
                  ></span>
                  :
                  <span
                    dangerouslySetInnerHTML={{
                      __html: fieldSuggestion.tagName,
                    }}
                    onMouseDown={handleTagSuggestion}
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
                <li key={index}>
                  <span
                    dangerouslySetInnerHTML={{ __html: tagSuggestion.tagType }}
                    onMouseDown={handleClickedSuggestion}
                  ></span>
                  :
                  <span
                    dangerouslySetInnerHTML={{ __html: tagSuggestion.name }}
                    onMouseDown={handleTagSuggestion}
                  ></span>
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
                <li key={index}>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: pageSuggestion.pageType,
                    }}
                    onMouseDown={handleClickedSuggestion}
                  ></span>
                  :
                  <span
                    dangerouslySetInnerHTML={{ __html: pageSuggestion.title }}
                    onMouseDown={handleTagSuggestion}
                  ></span>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;
