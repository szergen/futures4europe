import React from 'react';
import classNames from 'classnames';
import style from './MiniPagePost.module.css';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import Tag, { TagProps } from '../Tag/Tag';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';
import dayjs from 'dayjs';

export type MiniPagePostProps = {
  title: string;
  date: string;
  image?: string;
  text?: string;
  domains?: Array<TagProps>;
  methods?: Array<TagProps>;
  recommendations?: {
    number: number;
    images: string[];
  };
  pageTypeTag?: TagProps;
  primaryTags?: Array<TagProps>;
};

export const MiniPagePost: React.FC<MiniPagePostProps> = ({
  title,
  date,
  image,
  text,
  domains,
  recommendations,
  pageTypeTag,
  primaryTags,
  methods,
}) => {
  console.log('MiniPagePostTitle', title);

  return (
    <div className={classNames(style.postItem)}>
      <div className={classNames(style.postImageAndTagContainer)}>
        {pageTypeTag && <Tag {...pageTypeTag} className="ml-1 mb-1" />}
        <Image
          src={
            image && image !== ' '
              ? image
              : 'https://placehold.co/600x400?text=placeholder'
          }
          width={124}
          height={124}
          alt="Post Image"
          className={classNames('rounded-md', style.postImage)}
        />
      </div>
      <div className={classNames(style.postContent)}>
        {/* Post Date */}
        <Typography tag="p" className="text-gray-500 text-xs self-end mb-1.5">
          Last Edited: {dayjs(date).format('MMMM DD, YYYY')}
        </Typography>
        {/* Post Title */}
        <Typography tag="h3" className="text-gray-800 font-bold">
          {title}
        </Typography>
        {/* Primary Tags */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {primaryTags?.map((tag, index) => (
            <Tag key={tag?.name + '-' + index} {...tag} />
          ))}
        </div>
        {/* Post Text */}
        <Typography
          tag="div"
          className={classNames(
            'text-gray-500 py-2 text-sm overflow-hidden',
            style.postInnerText
          )}
          htmlText={text}
        ></Typography>
        {/* Domain Tags */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {domains?.map((tag, index) => (
            <Tag key={tag?.name + '-' + index} {...tag} />
          ))}
        </div>
        {/* Method Tags */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {methods?.map((tag, index) => (
            <Tag key={tag?.name + '-' + index} {...tag} />
          ))}
        </div>
        {/* Post recommendations */}
        <div className={classNames(style.postRecommandations)}>
          {recommendations?.images.map((image, index) => (
            <Image
              src={image}
              key={`${index} - ${image} - ${title} - `}
              width={17}
              height={17}
              className={classNames('rounded-full')}
              alt={`Recommended by Person Image ${image}`}
            />
          ))}
          {recommendations?.number && (
            <Typography tag="p" className="text-xs text-gray-400 px-4">
              Recommended by {recommendations?.number ?? 0}{' '}
              {recommendations?.number && recommendations.number < 1
                ? 'person'
                : 'persons'}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniPagePost;
