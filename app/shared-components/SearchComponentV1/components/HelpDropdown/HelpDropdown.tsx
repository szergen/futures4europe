import React from 'react';

const FieldSuggestionTypes = [
  {
    type: 'activity-domain',
    description: '[name] - to filter by domain',
  },
  {
    type: 'author',
    description: '[name] - to filter by domain',
  },
  {
    type: 'people',
    description: '[name] - to filter by people',
  },
  {
    type: 'participant',
    description: '[name] - to filter by participant',
  },
  {
    type: 'speaker',
    description: '[name] - to filter by speaker',
  },
  {
    type: 'coordinator',
    description: '[name] - to filter by coordinator',
  },
];

export type HelpDropdownProps = {
  handleFieldSelection: (e: any) => void;
};

const HelpDropdown: React.FC<HelpDropdownProps> = ({
  handleFieldSelection,
}) => {
  return (
    <div className="style.help-dropdown w-1/2 border-dashed border-2">
      Select:
      <br />
      {FieldSuggestionTypes.map((field, index) => (
        <>
          <span key={index} onMouseDown={handleFieldSelection}>
            {field.type}
          </span>
          : <span>{field.description}</span>, <br />
        </>
      ))}
    </div>
  );
};

export default HelpDropdown;
