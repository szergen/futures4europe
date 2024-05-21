import MiniPage from '@app/shared-components/MiniPage/MiniPage';
import React from 'react';

// export const PageTypes = [
//   'project result',
//   'post',
//   'event',
//   'project',
//   'person',
// ];

const Results = ({ results }: { results: any[] }) => {
  console.log('Results component -> results', results);
  return (
    <div className="style.suggestions w-1/2 ">
      <div className="style.pageSuggestions">
        <span className="text-pink-700 mt-6">
          <strong>Results:</strong>
        </span>
        <ul className="style.pages">
          {results?.map((resultItem: any, index: number) => (
            <MiniPage pageItem={resultItem} key={resultItem.title} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
