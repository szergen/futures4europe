import React from 'react';
import classNames from 'classnames';
import style from './MiniPagePost.module.css';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import Tag, { TagProps } from '../Tag/Tag';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';

export type MiniPagePostProps = {
  title: string;
  date: string;
  image?: string;
  text?: string;
  tags?: Array<TagProps>;
  recommendations?: {
    number: number;
    images: string[];
  };
};

export const MiniPagePost: React.FC<MiniPagePostProps> = ({
  title,
  date,
  image,
  text,
  tags,
  recommendations,
}) => {
  console.log('MiniPagePostTitle', title);

  return (
    <div className={classNames(style.postItem)}>
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
      <div className={classNames(style.postContent)}>
        {/* Post Title */}
        <Typography tag="h3" className="text-gray-800 font-bold">
          {title}
        </Typography>
        {/* Post Date */}
        <Typography tag="p" className="text-gray-500 text-xs">
          {date}
        </Typography>
        {/* Post Text */}
        <Typography
          tag="div"
          className={classNames(
            'text-gray-500 py-2 text-sm overflow-hidden',
            style.postInnerText
          )}
          htmlText={text}
        ></Typography>
        {/* Post Tags */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {tags?.map((tag, index) => (
            <Tag key={tag.name + '-' + index} {...tag} />
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
          <Typography tag="p" className="text-xs text-gray-400 px-4">
            Recommended by {recommendations?.number ?? 0}{' '}
            {recommendations?.number && recommendations.number < 1
              ? 'person'
              : 'persons'}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default MiniPagePost;
