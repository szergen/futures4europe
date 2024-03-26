import React from 'react';
import style from './PopoverComponent.module.css';
import classNames from 'classnames';
import { Popover, Button } from 'flowbite-react';

export type PopoverProps = {
  children?: React.ReactNode;
  triggerID?: string;
  popoverTitle?: string;
  popoverContent?: string;
  className?: string;
  trigger: 'click' | 'hover';
};

const PopoverComponent: React.FC<PopoverProps> = ({
  children,
  className,
  trigger,
  popoverTitle,
  popoverContent,
}) => {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {popoverTitle}
        </h3>
      </div>
      <div className="px-3 py-2">
        <p>{popoverContent}</p>
      </div>
    </div>
  );

  return (
    <div className={classNames('flex gap-2 inline-block', className)}>
      <Popover content={content} trigger={trigger} placement="top">
        {children}
      </Popover>
    </div>
  );
};
export default PopoverComponent;
