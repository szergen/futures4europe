import React, { createContext, useState, useContext } from 'react';
// import { mockedSearch } from './mockedSearch';
import { mockedAssignments } from './mockedAssignments';
import { mockedPages } from './mockedPages';
import { mockedTags } from './mockedTags';

// Mocked Data
const mockedInitialData = {
  tags: [
    {
      tagId: 2525,
      tagType: 'person card',
      name: 'Agripina Popescu',
      tagLine: null,
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/100/200/300',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2526,
      tagType: 'card',
      name: 'Agripina Popescu',
      tagLine: null,
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/100/200/300',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2626,
      tagType: 'organisation',
      name: 'Dorel Industries',
      tagLine: null,
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/100/200/300',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2727,
      tagType: 'project',
      name: 'Project X',
      tagLine: null,
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/100/200/300',
      pageLink: 'https://google.com',
    },
    {
      tagId: 2828,
      tagType: 'domain',
      name: 'Agriculture',
      tagLine: null,
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/100/200/300',
      pageLink: null,
    },
    {
      tagId: 2929,
      tagType: 'project result',
      name: 'Project Result X',
      tagLine: null,
      popularity: 87,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/100/200/300',
      pageLink: 'https://google.com',
    },
    {
      tagId: 3030,
      tagType: 'domain',
      name: 'Green Energy',
      tagLine: null,
      popularity: 70,
      trend: 'Rising',
      picture: 'https://picsum.photos/id/100/200/300',
      pageLink: 'https://google.com',
    },
    ...mockedTags,
  ],
  pages: [
    {
      pageId: 125,
      title: 'Agripina Popescu',
      subtitle: null,
      description: 'Agripina Popescu is a researcher at Aarhus Universitet',
      external_links: 'Horizon Scanning',
      logo: null,
      pageType: 'person',
      pictures: 'https://picsum.photos/id/200/300/200',
      files: null,
      domain: [],
    },
    {
      pageId: 126,
      title: 'Dorel Industries',
      subtitle: 'The Research and Innovation foresight community',
      description: null,
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: 'person',
      pictures: 'https://picsum.photos/id/201/300/200',
      files: null,
    },
    {
      pageId: 127,
      title: 'Project X',
      subtitle: 'The Research and Innovation foresight community',
      description: null,
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: 'project',
      pictures: 'https://picsum.photos/id/201/300/200',
      files: null,
    },
    {
      pageId: 129,
      title: 'Project Result X',
      subtitle: 'The Research and Innovation foresight community',
      description: null,
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: 'project result',
      pictures: 'https://picsum.photos/id/201/300/200',
      files: null,
    },
    ...mockedPages,
  ],
  assignments: [
    {
      pageId: 125,
      tagId: 2525,
      field: 'pageType',
      tagName: 'Agripina Popescu',
    },
    {
      pageId: 125,
      tagId: 2526,
      field: 'pageType',
      tagName: 'Agripina Popescu',
    },
    {
      pageId: 126,
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
      field: 'activity-domain',
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
      field: 'activity-domain',
      tagName: 'Agriculture',
    },
    {
      pageId: 125,
      tagId: 3030,
      field: 'domain',
      tagName: 'Green Energy',
      tagLine: 'Green Energy',
    },
    {
      pageId: 125,
      tagId: 3030,
      field: 'activity-domain',
      tagName: 'Green Energy',
    },
    ...mockedAssignments,
  ],
};

export interface SearchState {
  initalData: any;
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
  searchedItems: any[];
}

const initialState: SearchState = {
  initalData: mockedInitialData,
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
  searchedItems: [],
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
