import React, { use, useEffect, useState } from 'react';
import TagInput from './components/TagInput/TagInput';
import HelpDropdown from './components/HelpDropdown/HelpDropdown';
import Suggestions from './components/Suggestions/Suggestions';
import Results from './components/Results/Results';
import { mockedSearch } from './mockedSearch';

const initialTags = [
  { type: 'person', name: 'John Doe' },
  { type: 'person', name: 'Jane Smith' },
  { type: 'domain', name: 'Agriculture' },
  { type: 'domain', name: 'Technology' },
  { type: 'domain', name: 'Education' },
  { type: 'person', name: 'Alice Johnson' },
  { type: 'person', name: 'Bob Williams' },
  { type: 'domain', name: 'Healthcare' },
  { type: 'domain', name: 'Finance' },
  { type: 'domain', name: 'Art' },
  { type: 'org', name: 'Company A' },
  { type: 'org', name: 'Company B' },
  { type: 'org', name: 'Company C' },
  { type: 'project', name: 'Project A' },
  { type: 'project', name: 'Project B' },
  { type: 'project result', name: 'Project Result A' },
  { type: 'project result', name: 'Project Result B' },
  { type: 'post', name: 'Post A' },
  { type: 'post', name: 'Post B' },
  { type: 'post', name: 'Post C' },
  { type: 'event', name: 'Event A' },
  { type: 'post', name: 'Event B' },
  ...mockedSearch,
];

const SearchComponentV1 = () => {
  const tags = initialTags;
  const [filteredTags, setFilteredTags] = useState([]);
  const [showHelp, setShowHelp] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const [clickedSuggestions, setClickedSuggestions] = useState('');

  useEffect(() => {
    console.log('Filtered Tags', filteredTags);
  }, [filteredTags]);

  return (
    <div>
      <TagInput
        tags={tags}
        // onAddTag={addTag}
        setShowSuggestions={setShowSuggestions}
        setShowHelp={setShowHelp}
        setFilteredTags={setFilteredTags}
        setShowResults={setShowResults}
        setResults={setResults}
        clickedSuggestions={clickedSuggestions}
      />
      {/* Help and Suggestions*/}
      {showHelp && <HelpDropdown />}
      {showSuggestions && (
        <Suggestions
          tags={filteredTags}
          setClickedSuggestions={setClickedSuggestions}
        />
      )}
      {/* Results */}
      {showResults && <Results results={results} />}
    </div>
  );
};

export default SearchComponentV1;
