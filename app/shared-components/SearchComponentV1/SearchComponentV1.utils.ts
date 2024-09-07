import Fuse from 'fuse.js';

export const FieldTypes = [
  'activity-domain',
  'author',
  'people',
  'participant',
  'speaker',
  'coordinator',
];

export type Tags = {
  tagId: number;
  tagType: string;
  name: string;
  tagLine: string;
  popularity: number;
  trend: string;
  picture: string;
  pageLink: string;
  filter?: string;
}[];

export type InitialData = {
  pages: {
    pageId: number;
    title: string;
    pageType: string;
    pictures: string;
    subtitle: string;
    description: string;
    external_links: string;
    files: null;
    beginDate?: string;
    endDate?: string;
    publicationDate?: string;
    establishedDate?: string;
    eventDate?: string;
  }[];
  tags: Tags;
  sortTags: {
    tagType: string;
    name: string;
    sortAvailableFor: string;
  }[];
  assignments: {
    pageId: number;
    tagId: number;
    field: string;
    tagName: string;
  }[];
};

export const sortResultBySortTags = (
  results: InitialData['pages'],
  selectedSortTag: string
) => {
  switch (selectedSortTag) {
    case 'by begin date':
      return results.sort(
        (a, b) => new Date(a?.beginDate) - new Date(b?.beginDate)
      );
    case 'by end date':
      return results.sort(
        (a, b) => new Date(a?.endDate) - new Date(b?.endDate)
      );
    case 'by publication date':
      return results.sort(
        (a, b) => new Date(a?.publicationDate) - new Date(b?.publicationDate)
      );
    case 'by established date':
      return results.sort(
        (a, b) => new Date(a?.establishedDate) - new Date(b?.establishedDate)
      );
    case 'by date':
      return results.sort(
        (a, b) => new Date(a?.eventDate) - new Date(b?.eventDate)
      );
    default:
      return results;
  }
};
// Map the results to include the highlighted text with Fuzzy Search
// export const highlightedResults = (results: Array<any>) => {
//   const highlight = (text: string, indices: number[][]) => {
//     for (let i = indices.length - 1; i >= 0; i--) {
//       const [start, end] = indices[i];
//       text =
//         text.slice(0, start) +
//         '<span class="bg-amber-300">' +
//         text.slice(start, end + 1) +
//         '</span>' +
//         text.slice(end + 1);
//     }
//     return text;
//   };

//   return results.map((result) => {
//     let highlightedField = result.item.field;
//     let highlightedTagName = result.item.tagName;
//     let highlightedTagType = result.item.tagType;
//     let highlightedName = result.item.name;
//     let highlightedTitle = result.item.title;
//     let highlightedTagLine = result.item.tagLine;
//     let highlightedDescription = result.item.description;

//     // if (result.matches.length > 0) {
//     for (const match of result.matches || []) {
//       switch (match.key) {
//         case 'name':
//           highlightedName = highlight(highlightedName, match.indices);
//           break;
//         case 'tagName':
//           highlightedTagName = highlight(highlightedTagName, match.indices);
//           break;
//         case 'field':
//           highlightedField = highlight(highlightedField, match.indices);
//           break;
//         case 'title':
//           highlightedTitle = highlight(highlightedTitle, match.indices);
//           break;
//         case 'tagType':
//           highlightedTagType = highlight(highlightedTagType, match.indices);
//           break;
//         case 'tagLine':
//           highlightedTagLine = highlight(highlightedTagLine, match.indices);
//           break;
//         case 'description':
//           highlightedDescription = highlight(
//             highlightedDescription,
//             match.indices
//           );
//           break;
//       }
//     }
//     // }

//     return {
//       name: highlightedName,
//       tagName: highlightedTagName,
//       field: highlightedField,
//       pageType: result.item.pageType,
//       title: highlightedTitle,
//       tagType: highlightedTagType,
//       picture: result.item.picture,
//       pageLink: result.item.pageLink,
//       popularity: result.item.popularity,
//       tagLine: highlightedTagLine,
//       pictures: result.item.pictures,
//       description: highlightedDescription,
//       subtitle: result.item.subtitle,
//     };
//   });
// };

// Map the results to include the highlighted text with word by word search
export const highlightMatches = (text: string, matches: any[]) => {
  let highlightedText = text;
  let offset = 0;
  if (matches?.length === 0) return highlightedText;

  if (highlightedText) {
    matches?.forEach((match) => {
      if (
        match &&
        match?.indices !== null &&
        match?.value?.toLowerCase() ===
          highlightedText?.toLowerCase().replace(/<mark>|<\/mark>/g, '')
      ) {
        // console.log('debug7->match', match);
        const start = match?.indices[0] + offset;
        const end = match?.indices[1] + offset + 1;
        // console.log('debug2->start', start);
        // console.log('debug2->end', end);
        // console.log('debug2->highlightedText before', highlightedText);
        highlightedText =
          highlightedText.slice(0, start) +
          '<mark>' +
          highlightedText.slice(start, end) +
          '</mark>' +
          highlightedText.slice(end);
        // console.log('debug7->highlightedText after', highlightedText);
        // offset = offset + '<mark></mark>'.length; // Length of '<mark></mark>'
      }
    });
  }

  return highlightedText;
};

export const updateFilteredDataBasedOnClickedSuggestion = (
  clickedSuggestion: string,
  filteredData: InitialData
) => {
  if (clickedSuggestion && clickedSuggestion.includes(':')) {
    const [field, tagName] = clickedSuggestion
      ?.split(':')
      .map((str) => str.trim());

    const matchedPages = filteredData.assignments
      .filter(
        (assignment) =>
          assignment.field === field && assignment.tagName === tagName
      )
      .map((assignment) => {
        const matchingPage = filteredData.pages.find(
          (page) => page.pageId === assignment.pageId
        );
        return matchingPage ? matchingPage : assignment;
      });

    const matchedAssignmentsBasedOnPages = filteredData.assignments.filter(
      (assignment) =>
        matchedPages.some((page) => page.pageId === assignment.pageId)
    );

    const matchedTagsBasedOnPages = filteredData.tags.filter((tag) =>
      matchedAssignmentsBasedOnPages.some(
        (assignment) => assignment.tagId === tag.tagId
      )
    );

    return {
      matchedPages: matchedPages,
      matchedTagsBasedOnPages: matchedTagsBasedOnPages,
      matchedAssignmentsBasedOnPages: matchedAssignmentsBasedOnPages,
    };
  }
  return {
    matchedPages: [],
    matchedTagsBasedOnPages: [],
    matchedAssignmentsBasedOnPages: [],
  };
};

export const updateFilteredDataBasedOnClickedTag = (
  clickedTag: string,
  filteredData: InitialData
) => {
  // const matchedPages = filteredData.assignments
  //   .filter((assignment) => assignment.tagName === clickedTag)
  //   .map((assignment) => {
  //     const matchingPage = filteredData.pages.find(
  //       (page) => page.pageId === assignment.pageId
  //     );
  //     return matchingPage || assignment;
  //   });
  const matchingTagIds = filteredData.assignments
    .filter((assignment) => assignment.tagName === clickedTag)
    .map((assignment) => assignment.pageId);

  // console.log('debug3->matchingTagIds', matchingTagIds);

  const matchedPages = filteredData.pages.filter((page) =>
    matchingTagIds.includes(page.pageId)
  );
  // .sort((a, b) => a.id - b.id);

  return {
    matchedPages: matchedPages.map((page) => ({ item: page })),
    // matchedTagsBasedOnPages: matchedTagsBasedOnPages,
    // matchedAssignmentsBasedOnPages: matchedAssignmentsBasedOnPages,
  };
};

export const uniqueResults = (results: Array<any>) =>
  results.filter(
    (result, index, self) =>
      index === self.findIndex((t) => t.item.pageId === result.item.pageId)
  );

export const extractFilterBy = (tags: Tags, clickedField: string) =>
  tags?.find((tag) => tag.name === clickedField)?.filter;

export const removeSearchedItem = (
  initialData: InitialData,
  filteredSearchItems: {
    searchItem: string;
    searchItemType: 'text' | 'tag' | 'field-tag' | 'sortby';
  }[],
  inputText: string
) => {
  let updatedFilteredData = {
    tags: initialData.tags,
    pages: initialData.pages,
    assignments: initialData.assignments,
  };

  if (filteredSearchItems.length !== 0) {
    filteredSearchItems.forEach((item) => {
      let matchedData = {
        pages: [] as InitialData['pages'],
        tags: [] as InitialData['tags'],
        assignments: [] as InitialData['assignments'],
      };

      if (item.searchItemType === 'field-tag') {
        const {
          matchedPages,
          matchedTagsBasedOnPages,
          matchedAssignmentsBasedOnPages,
        } = updateFilteredDataBasedOnClickedSuggestion(
          item.searchItem,
          filteredSearchItems?.length > 1 ? updatedFilteredData : initialData
        );
        matchedData = {
          pages: matchedPages as InitialData['pages'],
          tags: matchedTagsBasedOnPages,
          assignments: matchedAssignmentsBasedOnPages,
        };
      } else if (item.searchItemType === 'tag') {
        const {
          matchedPages,
          // matchedTagsBasedOnPages,
          // matchedAssignmentsBasedOnPages,
        } = updateFilteredDataBasedOnClickedTag(
          item.searchItem,
          filteredSearchItems?.length > 1 ? updatedFilteredData : initialData
        );
        matchedData = {
          pages: matchedPages.map((page) => page.item) as InitialData['pages'],
          tags: initialData.tags,
          assignments: initialData.assignments,
        };
      } else if (item.searchItemType === 'text') {
        const fusePagesOptions = {
          keys: ['title', 'subttile', 'description'],
          threshold: 0.1,
          minMatchCharLength: Math.min(
            ...inputText?.split(' ')?.map((word) => word.length)
          ),
          includeMatches: true,
          ignoreLocation: true,
          useExtendedSearch: true,
        };
        const fusePages = new Fuse(updatedFilteredData.pages, fusePagesOptions);
        const matchedPages = fusePages.search(item.searchItem);
        // console.log('debug3->matchedPages', matchedPages);
        matchedData.pages = matchedPages.map(
          (page) => page.item
        ) as InitialData['pages'];
      } else if (item.searchItemType === 'sortby') {
        matchedData.pages = sortResultBySortTags(
          updatedFilteredData.pages,
          item.searchItem
        );
      }

      updatedFilteredData.pages = matchedData.pages;
    });
  } else {
    updatedFilteredData.pages = initialData.pages;
  }
  return updatedFilteredData;
};

export const wordByWordSearch = (
  input: string,
  data: any[],
  keys: string[]
) => {
  if (!input || !data || !keys) return [];

  const words = input.split(' ');
  // console.log('debug3->words Length', words.length);

  return data
    .map((item) => {
      if (!item) return null;

      const matches = keys
        .flatMap((key) => {
          if (!item.hasOwnProperty(key)) return null;

          return words
            .map((word) => {
              const lowerCasedItemKey = item[key]?.toLowerCase();
              const lowerCasedWord = word.toLowerCase();
              let start = lowerCasedItemKey?.indexOf(lowerCasedWord);

              if (start === -1 || !item[key]) return null;

              return {
                indices: [start, start + lowerCasedWord.length - 1],
                key,
                value: item[key],
              };
            })
            .filter(Boolean); // Filter out null values here
        })
        .filter(Boolean);

      if (matches.length === 0 || (!matches[0] && !matches[1])) return null;
      if (words.length > 1) {
        let occurencesOfSameKey = 0;
        matches.forEach((match) => {
          if (match?.key === matches[0]?.key) {
            occurencesOfSameKey++;
          }
        });
        if (occurencesOfSameKey !== words.length) return null;
      }

      return {
        item,
        matches,
      };
    })
    .filter(Boolean); // Filter out null values here
};