import React, { useEffect } from 'react';

export const FieldTypes = [
  'activity-domain',
  'author',
  'people',
  'participant',
  'speaker',
  'coordinator',
];

export type SuggestionsProps = {
  fieldSuggestions: any;
  tagSuggestions: any;
  pageSuggestions: any;
  handleClickedSuggestion: (e: any) => void;
};

const Suggestions: React.FC<SuggestionsProps> = ({
  fieldSuggestions,
  tagSuggestions,
  pageSuggestions,
  handleClickedSuggestion,
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
