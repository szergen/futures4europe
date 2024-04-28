import React from 'react';

export const TagTypes = ['domain', 'org', 'project tag', 'organisation tag'];
export const PageTypes = [
  'project result',
  'post',
  'event',
  'project',
  'person',
];

export type SuggestionsProps = {
  tags: any;
  setClickedSuggestions: React.Dispatch<React.SetStateAction<string>>;
};

const Suggestions: React.FC<SuggestionsProps> = ({
  tags,
  setClickedSuggestions,
}) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    console.log('Clicked on tag:', e.target.innerText);
    setClickedSuggestions(e.target.innerText);
  };

  return (
    <div className="style.suggestions w-1/2 border-dashed border-2">
      <div className="border" />
      <div className="style.tagSuggestions">
        <span className="text-purple-700">Tag Suggestions:</span>
        <ul className="style.tags">
          {tags?.map(
            (tag: any, index: number) =>
              index < 10 &&
              TagTypes.find(
                (tagType) =>
                  tagType ===
                  tag.type?.replace('<strong>', '').replace('</strong>', '')
              ) && (
                <li key={index}>
                  <span
                    dangerouslySetInnerHTML={{ __html: tag.type }}
                    onMouseDown={handleClick}
                  ></span>
                  :<span dangerouslySetInnerHTML={{ __html: tag.name }}></span>
                </li>
              )
          )}
        </ul>
      </div>
      <div className="border" />
      <div className="style.pageSuggestions">
        <span className="text-pink-700">Quick Results(Page Suggestions:)</span>
        <ul className="style.pages">
          {tags?.map(
            (tag: any, index: number) =>
              index < 10 &&
              PageTypes.find(
                (pageType) =>
                  pageType ===
                  tag.type?.replace('<strong>', '').replace('</strong>', '')
              ) && (
                <li key={index}>
                  <span
                    dangerouslySetInnerHTML={{ __html: tag.type }}
                    onMouseDown={handleClick}
                  ></span>
                  :<span dangerouslySetInnerHTML={{ __html: tag.name }}></span>
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default Suggestions;
