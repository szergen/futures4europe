import React, { createContext, useState, useContext, useEffect } from 'react';
// import { mockedSearch } from './mockedSearch';
import { mockedAssignments } from './mockedAssignments';
import { mockedPages } from './mockedPages';
// import { mockedTags } from './mockedTags';
import { mockedTags, sortTags } from './SearchContext.utils';
import { useAuth } from '../AuthContext/AuthContext';
import { init } from 'next/dist/compiled/@vercel/og/satori';

// Mocked Data
const mockedInitialData = {
  tags: [
    // Field Tags
    { tagType: 'field', name: 'author', filter: 'person' }, // done
    { tagType: 'field', name: 'people', filter: 'person' }, // done
    { tagType: 'field', name: 'participant', filter: 'person' }, // done
    { tagType: 'field', name: 'speaker', filter: 'person' }, // done
    { tagType: 'field', name: 'coordinator', filter: 'person' }, // done
    { tagType: 'field', name: 'activity', filter: 'domain' }, // done
    // Sort Tags
    // Page Type Tags
    { tagId: 252524, tagType: 'page type', name: 'info', popularity: 184 },
    {
      tagId: 252525,
      tagType: 'page type',
      name: 'organisation info',
      popularity: 58,
    },
    {
      tagId: 252526,
      tagType: 'page type',
      name: 'person info',
      popularity: 91,
    },
    {
      tagId: 252527,
      tagType: 'page type',
      name: 'project info',
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
      id: 1,
      pageId: 111,
      title: 'Eva Pericolini',
      subtitle: 'Eva Pericolini is a researcher at University of Perugia',
      description: 'Eva Pericolini is a researcher at University of Perugia',
      external_links: 'Test',
      logo: null,
      pageType: ['person info', 'info'],
      pictures: 'https://picsum.photos/id/102/140/200',
      files: null,
      // domain: [],
    },
    {
      id: 2,
      pageId: 125,
      title: 'Agripina Popescu',
      subtitle: 'Agripina Popescu is a researcher at Aarhus Universitet',
      description: 'Agripina Popescu is a researcher at Aarhus Universitet',
      external_links: 'Horizon Scanning',
      logo: null,
      pageType: ['person info', 'info'],
      pictures: 'https://picsum.photos/id/101/140/200',
      files: null,
      // domain: [],
    },
    {
      id: 3,
      pageId: 126,
      title: 'Dorel Industries',
      subtitle: 'The Research and Innovation foresight community',
      description:
        'Dorel Industries is a research and innovation foresight community',
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['organisation info', 'info'],
      pictures: 'https://picsum.photos/id/102/300/200',
      files: null,
      establishedDate: '2000-01-01',
    },
    {
      id: 4,
      pageId: 127,
      title: 'Project X',
      subtitle: 'The Research and Innovation foresight community',
      description: 'The Research and Innovation foresight community',
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['project info', 'info'],
      pictures: 'https://picsum.photos/id/104/300/200',
      files: null,
      beginDate: '2021-01-01',
      endDate: '2023-12-31',
      activity: ['Agriculture', 'Green Energy'],
    },
    {
      id: 5,
      pageId: 172,
      title: 'NEWer but shorter Project X',
      subtitle: 'The Research and Innovation foresight community',
      description: 'The Research and Innovation foresight community',
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['project info', 'info'],
      pictures: 'https://picsum.photos/id/109/300/200',
      files: null,
      beginDate: '2022-01-01',
      endDate: '2022-12-31',
    },
    {
      id: 6,
      pageId: 128,
      title: 'Project Result X',
      subtitle: 'The Research and Innovation foresight community',
      description: null,
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['project result', 'post'],
      pictures: 'https://picsum.photos/id/201/300/200',
      files: null,
      publicationDate: '2023-12-31',
    },
    {
      id: 7,
      pageId: 129,
      title: 'Project Result Y',
      subtitle: 'The Research and Innovation foresight community',
      description: null,
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['project result', 'post'],
      pictures:
        'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      files: null,
      publicationDate: '2022-12-31',
    },
    {
      id: 8,
      pageId: 130,
      title: 'UEFISCDI',
      subtitle: 'The Research and Innovation foresight community',
      description: 'UEFISCDI is a research and innovation foresight community',
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['organisation info', 'info'],
      pictures: 'https://picsum.photos/id/104/300/200',
      files: null,
      establishedDate: '2001-01-01',
    },
    {
      id: 9,
      pageId: 131,
      title: 'Project Z LLM',
      subtitle: 'large language models project',
      description: 'Large language models project',
      external_links: 'Mutual Learning Exercise, Futures literacy',
      logo: 'https://static.wixstatic.com/media/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png/v1/fill/w_1000,h_1000,al_c,q_90,enc_auto/85700c_052535d1ee184b389d8aaa13cde8598e~mv2.png',
      pageType: ['project info', 'info'],
      pictures: 'https://picsum.photos/id/107/300/200',
      files: null,
      beginDate: '2021-01-01',
      endDate: '2023-12-31',
      activity: ['Agriculture', 'Green Energy'],
    },
    ...mockedPages,
  ],
  assignments: [
    {
      pageId: 125,
      tagId: 252526,
      field: 'pageType',
      tagName: 'person info',
    },
    {
      pageId: 125,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
    },
    {
      pageId: 130,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
    },
    {
      pageId: 126,
      tagId: 252525,
      field: 'pageType',
      tagName: 'organisation info',
    },
    {
      pageId: 130,
      tagId: 252525,
      field: 'pageType',
      tagName: 'organisation info',
    },
    {
      pageId: 126,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
    },
    {
      pageId: 131,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
    },
    {
      pageId: 127,
      tagId: 252529,
      field: 'pageType',
      tagName: 'project info',
    },
    {
      pageId: 131,
      tagId: 252529,
      field: 'pageType',
      tagName: 'project info',
    },
    {
      pageId: 127,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
    },
    {
      pageId: 172,
      tagId: 252529,
      field: 'pageType',
      tagName: 'project info',
    },
    {
      pageId: 172,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
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
    {
      pageId: 125,
      tagId: 1111,
      field: 'activity',
      tagName: 'regenerative economy',
    },
    {
      pageId: 111,
      tagId: 1111,
      field: 'activity',
      tagName: 'regenerative economy',
    },
    {
      pageId: 111,
      tagId: 252526,
      field: 'pageType',
      tagName: 'person info',
    },
    {
      pageId: 111,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
    },
    {
      pageId: 127,
      tagId: 2222,
      field: 'others',
      tagName: 'policy stress-testing',
    },
    {
      pageId: 129,
      tagId: 252529,
      field: 'pageType',
      tagName: 'project result',
    },
    {
      pageId: 129,
      tagId: 252524,
      field: 'pageType',
      tagName: 'info',
    },
    ...mockedAssignments,
  ],
  sortTags: sortTags,
};

export interface SearchState {
  initialData: any;
  filteredData: any;
  fieldSuggestions: any[];
  tagSuggestions: any[];
  pageSuggestions: any[];
  sortTagsSuggestions: any[];
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
    searchItemType: 'text' | 'tag' | 'field-tag' | 'sortby' | '';
  }[];
  selectedSuggestionIndex: number;
  selectedSuggestionTag: string;
  selectedSearchedItemIndex: number;
  activeSelection: 'field' | 'tag' | 'field-tag' | '' | 'sortby';
  sortBy: 'relevance' | 'byBeginDate' | 'byEstablishedDate';
  inputText: string;
  sortTags: typeof sortTags;
  selectedSortTag: string;
}

const initialState: SearchState = {
  initialData: {},
  fieldSuggestions: [],
  tagSuggestions: [],
  pageSuggestions: [],
  filteredData: {},
  // highlightedData: [],
  results: [],
  showHelp: false,
  showSuggestions: false,
  showResults: false,
  clickedSuggestion: '',
  clickedField: '',
  clickedTag: '',
  searchedItems: [],
  selectedSuggestionIndex: 0,
  selectedSuggestionTag: '',
  selectedSearchedItemIndex: -1,
  activeSelection: '',
  sortBy: 'relevance',
  inputText: '',
  sortTags: sortTags,
  selectedSortTag: '',
  sortTagsSuggestions: [],
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
  const { tags, infoPages, postPages, tagsFetched } = useAuth();
  const [affiliations, setAffiliations] = useState<any[]>([]);
  const [searchState, setSearchState] = useState({
    ...initialState,
    initialData: {},
    tags: [],
    pages: [],
    assignments: [],
    sortTags: [],
    filteredData: {},
  } as any);

  // First useEffect to fetch affiliations
  useEffect(() => {
    const fetchAffiliations = async () => {
      try {
        const response = await fetch('/api/affiliations');
        const data = await response.json();
        const affiliationsData = data.map(
          (affiliation: any) => affiliation.data
        );
        setAffiliations(affiliationsData);
      } catch (error) {
        console.error('Error fetching affiliations:', error);
      }
    };

    fetchAffiliations();
  }, []);

  useEffect(() => {
    if (tagsFetched && affiliations.length > 0) {
      const initialData = {
        ...searchState,
        tags: tags,
        pages: [...infoPages, ...postPages].map((page) => page.data),
        assignments: initialState.initialData.assignments,
        sortTags: sortTags,
        affiliations: affiliations, // Add affiliations to the state
        filteredData: {},
        initialData: {},
      };
      initialData.filteredData = { ...initialData };
      initialData.initialData = { ...initialData };
      // console.log('deb1->initialData', initialData);
      setSearchState(initialData);
    }
  }, [tagsFetched, affiliations]);

  return (
    <SearchContext.Provider value={{ searchState, setSearchState }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
