import classNames from 'classnames';
import React from 'react';
import style from './HelpDropdown.module.css';
import { HiDocumentSearch } from 'react-icons/hi';
import { motion } from 'framer-motion';
import Tag from '@app/shared-components/Tag/Tag';

const FieldSuggestionTypes = [
  {
    type: <Tag name="Agriculture" />,
    description: 'pages containing the tag Agriculture',
  },
  {
    type: <Tag name="Poland" />,
    description: 'pages containing the tag Poland',
  },
  {
    type: (
      <div className="flex">
        <Tag name="Agriculture" />
        <Tag name="Poland" />
      </div>
    ),
    description: 'pages containing both tags Agriculture and Poland',
  },
  {
    type: <div className="text-black">future</div>,
    description: 'pages containing the text "future"',
  },
  {
    type: <div>activity: [tag name]</div>,
    description: 'to filter by activity',
  },
  // {
  //   type: 'coordinator',
  //   description: '[name] - to filter by coordinator',
  // },
];

export type HelpDropdownProps = {
  handleFieldSelection: (e: any) => void;
};

const HelpDropdown: React.FC<HelpDropdownProps> = ({
  handleFieldSelection,
}) => {
  return (
    <motion.div
      className={classNames('relative z-10')}
      initial={{ opacity: 0, scaleY: 0, translateY: '-10px' }}
      animate={{ opacity: 1, scaleY: 1, translateY: '0px' }}
      transition={{
        duration: 0.5,
        ease: 'easeIn',
        opacity: { delay: 0.3, duration: 0.5 },
        translateY: { delay: 0.3, duration: 0.4 },
      }}
      style={{
        transformOrigin: 'top',
      }}
    >
      <div className={style.helpDropdownContainer}>
        <div className={classNames(style.iconSearchTips, 'flex items-center')}>
          <HiDocumentSearch />
          <span className="ml-2 text-[14px]">EXAMPLES</span>{' '}
          {/* The text with margin for spacing */}
        </div>

        <br />
        {FieldSuggestionTypes.map((field, index) => (
          <div
            key={field.description + index}
            className={classNames(style.textSearchTips, 'flex items-center')}
          >
            <span
              key={`${field.description}`}
              onMouseDown={handleFieldSelection}
            >
              {field.type}
            </span>
            - <span>{field.description}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default HelpDropdown;
