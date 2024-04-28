import React from 'react';

const TagList = ({ tags, onRemoveTag }) => {
  return (
    <ul className="style.tagList w-1/2 border-dashed border-2">
      <span>Results:</span>
      {tags.map((tag, index) => (
        <li key={index}>
          {tag.type} : {tag.name}
        </li>
      ))}
    </ul>
  );
};

export default TagList;
