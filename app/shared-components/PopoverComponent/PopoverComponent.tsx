import React from 'react';
import style from './PopoverComponent.module.css';
import classNames from 'classnames';
import { Popover } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';

export type PopoverProps = {
  children?: React.ReactNode;
  triggerID?: string;
  // popoverTitle?: string;
  popoverContent?: string;
  className?: string;
  trigger: 'click' | 'hover';
  popoverImage?: string;
  popoverImageAlt?: string;
};

const PopoverComponent: React.FC<PopoverProps> = ({
  children,
  className,
  trigger,
  // popoverTitle,
  popoverContent,
  popoverImage,
  popoverImageAlt,
}) => {
  const content = (
    <div className="w-64 text-sm text-gray-500 dark:text-gray-400">
      {/* <div className="border-b border-gray-200 bg-gray-100 px-3 py-2 dark:border-gray-600 dark:bg-gray-700">
        <h3 className="font-semibold text-gray-900 dark:text-white">
          {popoverTitle}
        </h3>
      </div> */}
      <div className="px-3 py-2 flex">
        {popoverImage && (
          <Image
            src={
              popoverImage || 'https://placehold.co/600x400?text=placeholder'
            }
            alt={popoverImageAlt || 'Image Thumbnail'}
            width={100}
            height={100}
          />
        )}
        <div className="flex flex-wrap">
          <span className={classNames(popoverImage && 'px-3')}>
            {popoverContent}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <Popover content={content} trigger={trigger} placement="top">
      {children}
    </Popover>
  );
};
export default PopoverComponent;
