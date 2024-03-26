import { Tooltip } from 'flowbite-react';
import React from 'react';
import classNames from 'classnames';

type Tooltip2Props = {
  text?: string;
  tooltipText: string;
  classNameFoContainer?: string;
  placement: 'top' | 'right' | 'bottom' | 'left';
};

export const Tooltip2: React.FC<Tooltip2Props> = ({
  text,
  tooltipText,
  placement,
  classNameFoContainer,
}) => {
  return (
    <div className={classNames('inline-block', classNameFoContainer)}>
      <Tooltip content={tooltipText} placement={placement}>
        <span className="cursor-pointer">
          {text}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 inline-block"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
        </span>
      </Tooltip>
    </div>
  );
};

export default Tooltip2;
