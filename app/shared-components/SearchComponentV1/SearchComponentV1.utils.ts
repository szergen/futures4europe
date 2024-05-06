export const FieldTypes = [
  'activity-domain',
  'author',
  'people',
  'participant',
  'speaker',
  'coordinator',
];

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
  tags: {
    tagId: number;
    tagType: string;
    name: string;
    tagLine: string;
    popularity: number;
    trend: string;
    picture: string;
    pageLink: string;
  }[];
  assignments: {
    pageId: number;
    tagId: number;
    field: string;
    tagName: string;
  }[];
};

// Map the results to include the highlighted text
export const highlightedResults = (results: Array<any>) =>
  results.map((result) => {
    let highlightedField = result.item.field;
    let highlightedTagName = result.item.tagName;

    let highlightedTagType = result.item.tagType;
    let highlightedName = result.item.name;

    let highlightedPageType = result.item.pageType;
    let highlightedTitle = result.item.title;

    // Loop over the matches
    for (const match of result.matches || []) {
      // Check if the match is in the 'name' key
      if (match.key === 'name') {
        // Loop over the matched indices in reverse order
        for (let i = match.indices.length - 1; i >= 0; i--) {
          const [start, end] = match.indices[i];
          // Insert the highlight tags around the matched text
          highlightedName =
            highlightedName.slice(0, start) +
            '<strong>' +
            highlightedName.slice(start, end + 1) +
            '</strong>' +
            highlightedName.slice(end + 1);
        }
      }
      if (match.key === 'tagName') {
        // Loop over the matched indices in reverse order
        for (let i = match.indices.length - 1; i >= 0; i--) {
          const [start, end] = match.indices[i];
          // Insert the highlight tags around the matched text
          highlightedTagName =
            highlightedTagName.slice(0, start) +
            '<strong>' +
            highlightedTagName.slice(start, end + 1) +
            '</strong>' +
            highlightedTagName.slice(end + 1);
        }
      }
      if (match.key === 'field') {
        // Loop over the matched indices in reverse order
        for (let i = match.indices.length - 1; i >= 0; i--) {
          const [start, end] = match.indices[i];
          // Insert the highlight tags around the matched text
          highlightedField =
            highlightedField.slice(0, start) +
            '<strong>' +
            highlightedField.slice(start, end + 1) +
            '</strong>' +
            highlightedField.slice(end + 1);
        }
      }
      if (match.key === 'pageType') {
        // Loop over the matched indices in reverse order
        for (let i = match.indices.length - 1; i >= 0; i--) {
          const [start, end] = match.indices[i];
          // Insert the highlight tags around the matched text
          highlightedPageType =
            highlightedPageType.slice(0, start) +
            '<strong>' +
            highlightedPageType.slice(start, end + 1) +
            '</strong>' +
            highlightedPageType.slice(end + 1);
        }
      }
      if (match.key === 'title') {
        // Loop over the matched indices in reverse order
        for (let i = match.indices.length - 1; i >= 0; i--) {
          const [start, end] = match.indices[i];
          // Insert the highlight tags around the matched text
          highlightedTitle =
            highlightedTitle.slice(0, start) +
            '<strong>' +
            highlightedTitle.slice(start, end + 1) +
            '</strong>' +
            highlightedTitle.slice(end + 1);
        }
      }
      if (match.key === 'tagType') {
        // Loop over the matched indices in reverse order
        for (let i = match.indices.length - 1; i >= 0; i--) {
          const [start, end] = match.indices[i];
          // Insert the highlight tags around the matched text
          highlightedTagType =
            highlightedTagType.slice(0, start) +
            '<strong>' +
            highlightedTagType.slice(start, end + 1) +
            '</strong>' +
            highlightedTagType.slice(end + 1);
        }
      }
    }

    return {
      name: highlightedName,
      tagName: highlightedTagName,
      field: highlightedField,
      pageType: highlightedPageType,
      title: highlightedTitle,
      tagType: highlightedTagType,
    };
  });

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
  const matchedPages = filteredData.assignments
    .filter((assignment) => assignment.tagName === clickedTag)
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
};
