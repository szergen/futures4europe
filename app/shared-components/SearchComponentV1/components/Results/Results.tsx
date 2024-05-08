import React from 'react';

// export const PageTypes = [
//   'project result',
//   'post',
//   'event',
//   'project',
//   'person',
// ];

const Results = ({ results }: { results: any[] }) => {
  console.log('results', results);
  return (
    <div className="style.suggestions w-1/2 border-4">
      <div className="border-4" />
      <div className="border-4" />
      <div className="style.pageSuggestions">
        <span className="text-pink-700">
          <strong>Results:</strong>
        </span>
        <ul className="style.pages">
          {results?.map((resultItem: any, index: number) => (
            <li key={index}>
              <span>{resultItem.pageType}</span>:
              <span>
                {resultItem.title
                  ?.replace('<strong>', '')
                  ?.replace('</strong>', '')}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
