import classNames from 'classnames';
import React from 'react';
import style from './HelpDropdown.module.css';
import { HiDocumentSearch } from "react-icons/hi";
import { motion } from 'framer-motion';

const FieldSuggestionTypes = [
  {
    type: 'activity',
    description: '[name] - to filter by domain',
  },
  {
    type: 'author',
    description: '[name] - to filter by author',
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
<motion.div
  className={classNames('w-1/2 border-2', style.helpDropdownContainer)}
  initial={{ opacity: 0, scaleY: 0, translateX: '-50%', translateY: '-10px' }} 
  animate={{ opacity: 1, scaleY: 1, translateX: '-50%', translateY: '0px' }} 
  transition={{
    duration: 0.5, 
    ease: 'easeIn', 
    opacity: { delay: 0.3, duration: .5 }, 
    translateY: { delay: 0.3, duration: .4 },
  }}
  style={{ 
    transformOrigin: 'top'
  }} 
> 

    <div className={classNames(style.iconSearchTips, 'flex items-center')}>
        <HiDocumentSearch/>
      <span className="ml-2 text-[14px]">SEARCH TIPS</span> {/* The text with margin for spacing */}
    </div>

      <br />
      {FieldSuggestionTypes.map((field, index) => (
        <div className={classNames(style.textSearchTips, 'flex items-center')}>
          <span key={`${field.description}`} onMouseDown={handleFieldSelection}>
            {field.type}
          </span>
          : <span>{field.description}</span>
        </div>
      ))}
    </motion.div>
  );
};

export default HelpDropdown;
