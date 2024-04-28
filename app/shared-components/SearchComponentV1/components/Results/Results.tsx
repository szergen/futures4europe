import React from 'react';

export const PageTypes = [
  'project result',
  'post',
  'event',
  'project',
  'person',
];

const Results = ({ results }: { results: any[] }) => {
  return (
    <div className="style.suggestions w-1/2 border-4">
      <div className="border-4" />
      <div className="border-4" />
      <div className="style.pageSuggestions">
        <span className="text-pink-700">
          <strong>Results:</strong>
        </span>
        <ul className="style.pages">
          {results?.map(
            (tag: any, index: number) =>
              PageTypes.find(
                (pageType) =>
                  pageType ===
                  tag.type.replace('<strong>', '').replace('</strong>', '')
              ) && (
                <li key={index}>
                  <span>
                    {tag.type.replace('<strong>', '').replace('</strong>', '')}
                  </span>
                  :
                  <span>
                    {tag.name.replace('<strong>', '').replace('</strong>', '')}
                  </span>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Results;
