import MiniPage from '@app/shared-components/MiniPage/MiniPage';
import React from 'react';

// export const PageTypes = [
//   'project result',
//   'post',
//   'event',
//   'project',
//   'person',
// ];

export type ResultsProps = {
  results: any[];
  searchedItems: any[];
  assignments: any[];
};

const Results: React.FC<ResultsProps> = ({
  results,
  searchedItems,
  assignments,
}) => {
  console.log('Results component -> results', results);
  const filteredAssignements = assignments.filter((assignment) =>
    results.some((result) => result.pageId === assignment.pageId)
  );
  console.log(
    'Results component -> filteredAssignements',
    filteredAssignements
  );

  return (
    <div className="style.suggestions w-1/2 ">
      <div className="style.pageSuggestions">
        <span className="text-pink-700 mt-6">
          <strong>Results:</strong>
          {JSON.stringify(searchedItems)}
        </span>
        <ul className="style.pages">
          {results?.map((resultItem: any, index: number) => (
            <>
              {searchedItems?.map((searchedItem: any) => {
                let allFoundInItems = [];
                if (searchedItem.searchItemType === 'tag') {
                  let foundIn = [];
                  foundIn = filteredAssignements.filter(
                    (assignment) =>
                      assignment.tagName === searchedItem.searchItem &&
                      assignment.pageId === resultItem.pageId
                  );
                  allFoundInItems.push(
                    <p key={searchedItem.searchItem}>
                      Item {searchedItem.searchItem} found in the following
                      fields:{' '}
                      {JSON.stringify(foundIn.map((item) => item.field))}
                    </p>
                  );
                }
                if (searchedItem.searchItemType === 'field-tag') {
                  let foundIn = [];
                  foundIn = searchedItem.searchItem.split(':')[0];
                  allFoundInItems.push(
                    <p key={searchedItem.searchItem}>
                      Item {searchedItem.searchItem} found in the following
                      fields: {foundIn}
                    </p>
                  );
                }
                if (searchedItem.searchItemType === 'text') {
                  let foundIn = [];
                  Object.entries(resultItem).forEach(([key, value]) => {
                    if (
                      typeof value === 'string' &&
                      value
                        .toLocaleLowerCase()
                        .includes(searchedItem.searchItem)
                    ) {
                      foundIn.push(key);
                    }
                  });
                  allFoundInItems.push(
                    <p key={searchedItem.searchItem}>
                      Item {searchedItem.searchItem} found in the following
                      fields: {JSON.stringify(foundIn)}
                    </p>
                  );
                }
                return allFoundInItems.map((item) => item);
              })}
              <MiniPage pageItem={resultItem} key={resultItem.title} />
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Results;
