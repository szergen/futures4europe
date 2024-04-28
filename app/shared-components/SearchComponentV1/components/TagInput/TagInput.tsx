import React, { ReactEventHandler, useEffect, useState } from 'react';
import Fuse from 'fuse.js';

export type TagInputProps = {
  tags: {
    type: string;
    name: string;
  }[];
  onAddTag?: (tag: string) => void;
  setShowSuggestions: React.Dispatch<React.SetStateAction<boolean>>;
  setShowHelp: React.Dispatch<React.SetStateAction<boolean>>;
  setShowResults: React.Dispatch<React.SetStateAction<boolean>>;
  setFilteredTags: React.Dispatch<React.SetStateAction<any>>;
  setResults: React.Dispatch<React.SetStateAction<any>>;
  clickedSuggestions?: string;
};

// Map the results to include the highlighted text
const highlightedResults = (results: Array<any>) =>
  results.map((result) => {
    let highlightedName = result.item.name;
    let highlightedType = result.item.type;

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

      // Check if the match is in the 'type' key
      if (match.key === 'type') {
        // Loop over the matched indices in reverse order
        for (let i = match.indices.length - 1; i >= 0; i--) {
          const [start, end] = match.indices[i];
          // Insert the highlight tags around the matched text
          highlightedType =
            highlightedType.slice(0, start) +
            '<strong>' +
            highlightedType.slice(start, end + 1) +
            '</strong>' +
            highlightedType.slice(end + 1);
        }
      }
    }

    return { name: highlightedName, type: highlightedType };
  });

const TagInput: React.FC<TagInputProps> = ({
  tags,
  onAddTag,
  setShowSuggestions,
  setShowHelp,
  setShowResults,
  setFilteredTags,
  setResults,
  clickedSuggestions,
}) => {
  const [input, setInput] = useState('');
  // Needed for showing help dropdown
  const [tagWasFocused, setTagWasFocused] = useState(false);
  const [resultsToShow, setResultsToShow] = useState([] as any[]);

  // Fuzzy search initialization
  const options = {
    keys: ['type', 'name'],
    threshold: 0.2,
    minMatchCharLength: 2,
    includeMatches: true,
    // findAllMatches: true,
  };
  const fuse = new Fuse(tags, options);

  const handleOnBlur = () => {
    setShowSuggestions(false);
    setShowHelp(false);
  };

  const handleOnFocus = () => {
    input ? setShowSuggestions(true) : setShowSuggestions(false);
    if (!input) {
      setInput('"');
    }
    setTagWasFocused(true);
    setShowHelp(true);
  };

  const handleKeyDown = (event: any) => {
    if (event.key === 'Enter' && input) {
      // onAddTag(input);
      // setInput('');
      // console.log('debug1->', input[input.length - 1])
      input[input.length - 1] !== '"' && setInput(input + '"');
      setShowSuggestions(false);
      setShowHelp(false);
      setShowResults(true);
      setResults(resultsToShow);
    }
  };

  useEffect(() => {
    input !== '"' && setShowHelp(false);
    setShowSuggestions(false);
    console.log('Input:', input);
    if (input) {
      // Hide help dropdown and show suggestions
      const searchInput = input.replace('"', '');
      input !== '"' && setShowHelp(false);
      setShowSuggestions(true);
      setTagWasFocused(true);
      // Fuzzy search
      if (searchInput.includes(':')) {
        // Split the input into the key and the search term
        const [key, searchTerm] = searchInput
          ?.split(':')
          .map((str) => str.trim());

        // Filter the tags that have the specified key
        const filteredTags = tags.filter(
          (tag) =>
            tag.type?.replace('<strong>', '').replace('</strong>', '') === key
        );

        // Create a new Fuse object with the filtered tags
        const fuse = new Fuse(filteredTags, {
          ...options,
          minMatchCharLength: 1,
        });

        // Perform a fuzzy search on the specified key
        const results = fuse.search(searchTerm);
        // const parsedResults = results?.map((result) => result?.item);
        setResultsToShow(highlightedResults(results));
        setFilteredTags(highlightedResults(results));
        console.log('Fuzzy search results after ":" found:', results);
        console.log('searchTerm:', searchTerm);
      } else {
        // Perform a fuzzy search on all keys
        const results = fuse.search(searchInput);
        // const parsedResults = results?.map((result) => result?.item);
        setResultsToShow(highlightedResults(results));
        setFilteredTags(highlightedResults(results));
        console.log('Fuzzy search results:', results);
      }
    } else {
      tagWasFocused && setShowHelp(true);
      setShowSuggestions(false);
    }
  }, [input]);

  useEffect(() => {
    if (clickedSuggestions) {
      setInput(clickedSuggestions + ': ' + input);
    }
  }, [clickedSuggestions]);

  return (
    <div className="style.tagInput w-full">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search for tags, pages, or people..."
        className="w-1/2"
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
      />
    </div>
  );
};

export default TagInput;
