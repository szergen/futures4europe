import { InitialData } from './components/TagInput/TagInput';

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
