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
  }[];
  tags: Tags;
  assignments: {
    pageId: number;
    tagId: number;
    field: string;
    tagName: string;
  }[];
};

// Map the results to include the highlighted text
export const highlightedResults = (results: Array<any>) => {
  const highlight = (text: string, indices: number[][]) => {
    for (let i = indices.length - 1; i >= 0; i--) {
      const [start, end] = indices[i];
      text =
        text.slice(0, start) +
        '<span class="bg-amber-300">' +
        text.slice(start, end + 1) +
        '</span>' +
        text.slice(end + 1);
    }
    return text;
  };

  return results.map((result) => {
    let highlightedField = result.item.field;
    let highlightedTagName = result.item.tagName;
    let highlightedTagType = result.item.tagType;
    let highlightedName = result.item.name;
    let highlightedTitle = result.item.title;

    for (const match of result.matches || []) {
      switch (match.key) {
        case 'name':
          highlightedName = highlight(highlightedName, match.indices);
          break;
        case 'tagName':
          highlightedTagName = highlight(highlightedTagName, match.indices);
          break;
        case 'field':
          highlightedField = highlight(highlightedField, match.indices);
          break;
        case 'title':
          highlightedTitle = highlight(highlightedTitle, match.indices);
          break;
        case 'tagType':
          highlightedTagType = highlight(highlightedTagType, match.indices);
          break;
      }
    }

    return {
      name: highlightedName,
      tagName: highlightedTagName,
      field: highlightedField,
      pageType: result.item.pageType,
      title: highlightedTitle,
      tagType: highlightedTagType,
      picture: result.item.picture,
      pageLink: result.item.pageLink,
      popularity: result.item.popularity,
      tagLine: result.item.tagLine,
      pictures: result.item.pictures,
      description: result.item.description,
      subtitle: result.item.subtitle,
    };
  });
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

  console.log('debug3->matchingTagIds', matchingTagIds);

  const matchedPages = filteredData.pages.filter((page) =>
    matchingTagIds.includes(page.pageId)
  );

  // const matchedAssignmentsBasedOnPages = filteredData.assignments.filter(
  //   (assignment) =>
  //     matchedPages.some((page) => page.pageId === assignment.pageId)
  // );

  // const matchedTagsBasedOnPages = filteredData.tags.filter((tag) =>
  //   matchedAssignmentsBasedOnPages.some(
  //     (assignment) => assignment.tagId === tag.tagId
  //   )
  // );

  return {
    matchedPages: matchedPages,
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
    searchItemType: 'text' | 'tag' | 'field-tag';
  }[]
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
          filteredSearchItems.length > 1 ? updatedFilteredData : initialData
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
          filteredSearchItems.length > 1 ? updatedFilteredData : initialData
        );
        matchedData = {
          pages: matchedPages as InitialData['pages'],
          tags: initialData.tags,
          assignments: initialData.assignments,
        };
      } else if (item.searchItemType === 'text') {
        const fusePagesOptions = {
          keys: ['title', 'subttile', 'description'],
          threshold: 0.4,
          minMatchCharLength: 2,
          includeMatches: true,
          findAllMatches: true,
        };
        const fusePages = new Fuse(updatedFilteredData.pages, fusePagesOptions);
        const matchedPages = fusePages.search(item.searchItem);
        console.log('debug3->matchedPages', matchedPages);
        matchedData.pages = matchedPages.map(
          (page) => page.item
        ) as InitialData['pages'];
      }

      updatedFilteredData.pages = matchedData.pages;
    });
  } else {
    updatedFilteredData.pages = initialData.pages;
  }
  return updatedFilteredData;
};
