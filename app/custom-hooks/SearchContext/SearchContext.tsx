import React, { createContext, useState, useContext } from 'react';
// import { mockedSearch } from './mockedSearch';
import { mockedAssignments } from './mockedAssignments';
import { mockedPages } from './mockedPages';
// import { mockedTags } from './mockedTags';
import { mockedTags } from './SearchContext.utils';

// Mocked Data
const mockedInitialData = {
  tags: [
    // Field Tags
    { tagType: 'field', name: 'author', filter: 'person' },
    { tagType: 'field', name: 'people', filter: 'person' },
    { tagType: 'field', name: 'participant', filter: 'person' },
    { tagType: 'field', name: 'speaker', filter: 'person' },
    { tagType: 'field', name: 'coordinator', filter: 'person' },
    { tagType: 'field', name: 'activity', filter: 'domain' },
    // Sort Tags
    { tagType: 'sort', name: 'by begin date' }, // project card doar!
    { tagType: 'sort', name: 'by end date' }, // project card doar!
    { tagType: 'sort', name: 'by publication date' }, // project result doar!
    { tagType: 'sort', name: 'by established date' }, // organisation card doar!
    { tagType: 'sort', name: 'by date' }, // event doar!
    // Page Type Tags
    { tagId: 252524, tagType: 'page type', name: 'card', popularity: 184 },
    {
      tagId: 252525,
      tagType: 'page type',
      name: 'organisation card',
      popularity: 58,
    },
    {
      tagId: 252526,
      tagType: 'page type',
      name: 'person card',
      popularity: 91,
    },
    {
      tagId: 252527,
      tagType: 'page type',
      name: 'project card',
      popularity: 35,
    },
    { tagId: 252528, tagType: 'page type', name: 'post', popularity: 253 },
    {
      tagId: 252529,
      tagType: 'page type',
      name: 'project result',
      popularity: 126,
    },
    { tagId: 252530, tagType: 'page type', name: 'event', popularity: 46 },
    {
      tagId: 252531,
      tagType: 'page type',
      name: 'foresight method',
      popularity: 8,
    },
    // Rest of Tags
    {
      tagId: 2525,
      tagType: 'person',
      name: 'Agripina Popescu',
      tagLine: 'Researcher at Aarhus Universitet',
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/101/140/140',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2626,
      tagType: 'organisation',
      name: 'Dorel Industries',
      tagLine: 'The Research and Innovation foresight community',
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/102/140/140',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2727,
      tagType: 'project',
      name: 'Project X',
      tagLine: 'The Research and Innovation foresight community',
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/103/140/140',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2828,
      tagType: 'domain',
      name: 'Agriculture',
      tagLine: 'Agriculture and best practices',
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/104/140/140',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2929,
      tagType: 'project result',
      name: 'Project Result X',
      tagLine: 'The Research and Innovation foresight community',
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/105/140/140',
      pageLink: 'https://google.com',
    },
    {
      tagId: 3030,
      tagType: 'domain',
      name: 'Green Energy',
      tagLine: 'Green Energy and best practices',
      popularity: 70,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/106/140/140',
      pageLink: 'https://google.com',
    },
    ...mockedTags,
  ],
  pages: [
    {
      pageId: 125,
      title: 'Agripina Popescu',
      subtitle: 'Agripina Popescu is a researcher at Aarhus Universitet',
      description: 'Agripina Popescu is a researcher at Aarhus Universitet',
      external_links: 'Horizon Scanning',
      logo: null,
      pageType: ['person card', 'card'],
      pictures: 'https://picsum.photos/id/101/140/200',
      files: null,
      // domain: [],
    },
    {
      pageId: 126,
      title: 'Dorel Industries',
      subtitle: 'The Research and Innovation foresight community',
      description:
        'Dorel Industries is a research and innovation foresight community',
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['organisation card', 'card'],
      pictures: 'https://picsum.photos/id/102/300/200',
      files: null,
    },
    {
      pageId: 127,
      title: 'Project X',
      subtitle: 'The Research and Innovation foresight community',
      description: 'The Research and Innovation foresight community',
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['project card', 'card'],
      pictures: 'https://picsum.photos/id/103/300/200',
      files: null,
    },
    {
      pageId: 128,
      title: 'Project Result X',
      subtitle: 'The Research and Innovation foresight community',
      description: null,
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['project result', 'post'],
      pictures: 'https://picsum.photos/id/201/300/200',
      files: null,
    },
    ...mockedPages,
  ],
  assignments: [
    {
      pageId: 125,
      tagId: 252526,
      field: 'pageType',
      tagName: 'person card',
    },
    {
      pageId: 125,
      tagId: 252524,
      field: 'pageType',
      tagName: 'card',
    },
    {
      pageId: 126,
      tagId: 252525,
      field: 'pageType',
      tagName: 'organisation card',
    },
    {
      pageId: 126,
      tagId: 252524,
      field: 'pageType',
      tagName: 'card',
    },
    {
      pageId: 127,
      tagId: 252529,
      field: 'pageType',
      tagName: 'project card',
    },
    {
      pageId: 127,
      tagId: 252524,
      field: 'pageType',
      tagName: 'card',
    },
    {
      pageId: 128,
      tagId: 252529,
      field: 'pageType',
      tagName: 'project result',
    },
    {
      pageId: 128,
      tagId: 252524,
      field: 'pageType',
      tagName: 'post',
    },
    {
      pageId: 128,
      tagId: 2626,
      field: 'pageType',
      tagName: 'Dorel Industries',
    },
    {
      pageId: 127,
      tagId: 2727,
      field: 'pageType',
      tagName: 'Project X',
    },
    {
      pageId: 127,
      tagId: 2828,
      field: 'domain',
      tagName: 'Agriculture',
    },
    {
      pageId: 127,
      tagId: 2828,
      field: 'activity',
      tagName: 'Agriculture',
    },
    {
      pageId: 125,
      tagId: 2828,
      field: 'domain',
      tagName: 'Agriculture',
    },
    {
      pageId: 125,
      tagId: 2828,
      field: 'activity',
      tagName: 'Agriculture',
    },
    {
      pageId: 125,
      tagId: 3030,
      field: 'domain',
      tagName: 'Green Energy',
    },
    {
      pageId: 125,
      tagId: 3030,
      field: 'activity',
      tagName: 'Green Energy',
    },
    ...mockedAssignments,
  ],
};

export interface SearchState {
  initialData: any;
  filteredData: any;
  fieldSuggestions: any[];
  tagSuggestions: any[];
  pageSuggestions: any[];
  // highlightedData: any[];
  showHelp: boolean;
  showSuggestions: boolean;
  showResults: boolean;
  results: any[];
  clickedSuggestion: string;
  clickedField: string;
  clickedTag: string;
  searchedItems: {
    searchItem: string;
    searchItemType: 'text' | 'tag' | 'field-tag';
  }[];
  selectedSuggestionIndex: number;
  selectedSuggestionTag: string;
  selectedSearchedItemIndex: number;
}

const initialState: SearchState = {
  initialData: mockedInitialData,
  fieldSuggestions: [],
  tagSuggestions: [],
  pageSuggestions: [],
  filteredData: mockedInitialData,
  // highlightedData: [],
  results: [],
  showHelp: false,
  showSuggestions: false,
  showResults: false,
  clickedSuggestion: '',
  clickedField: '',
  clickedTag: '',
  searchedItems: [],
  selectedSuggestionIndex: -1,
  selectedSuggestionTag: '',
  selectedSearchedItemIndex: -1,
};

export type SearchProviderProps = {
  children: React.ReactNode;
};

const SearchContext = createContext<{
  searchState: SearchState;
  setSearchState: React.Dispatch<React.SetStateAction<SearchState>>;
}>({
  searchState: initialState,
  setSearchState: () => {},
});

export const SearchProvider: React.FC<SearchProviderProps> = ({ children }) => {
  const [searchState, setSearchState] = useState(initialState);

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
