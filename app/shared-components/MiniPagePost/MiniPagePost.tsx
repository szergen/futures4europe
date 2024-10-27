import React from 'react';
import classNames from 'classnames';
import style from './MiniPagePost.module.css';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import Tag, { TagProps } from '../Tag/Tag';
import dayjs from 'dayjs';
import { PLACEHOLDER_IMAGE } from '../../constants'; // Adjust the path as needed
import AffiliationsComponent from '@app/page-components/PersonPageComponent/components/AffiliationsComponent/AffiliationsComponent';

export type MiniPagePostProps = {
  title: string;
  subtitle?: string;
  popularity?: number;
  countryTags?: Array<TagProps>;
  tagLine?: string;
  projectFunded?: Array<TagProps>;
  projectStartDate?: string;
  projectEndDate?: string;
  organisationAffiliations?: Array<{ organisation: string; role: string }>;
  organisationEstablishedDate?: string;
  date?: string;
  editDate?: string;
  projects?: Array<TagProps>;
  projectResultAuthor?: Array<TagProps>;
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
  subtitle,
  popularity,
  countryTags,
  tagLine,
  projectFunded,
  projectStartDate,
  projectEndDate,
  organisationAffiliations,
  organisationEstablishedDate,
  date,
  editDate,
  projects,
  projectResultAuthor,
  image,
  text,
  domains,
  recommendations,
  pageTypeTag,
  primaryTags,
  methods,
}) => {
  console.log('MiniPagePostTitle', subtitle);
  const formattedDate = date ? formatDate(date) : '';
  const formattedEditDate = editDate ? formatDate(editDate) : '';
  // const year = new Date(newDate).getFullYear();
  // const day = String(newDate.getDate()).padStart(2, '0'); // Add leading zero if needed
  // const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  // const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className={classNames(style.postItem)}>
      <div className={classNames(style.postImageAndTagContainer)}>
        {pageTypeTag && <Tag {...pageTypeTag} className="ml-1 mb-1" />}
        <Image
          src={image && image !== ' ' ? image : PLACEHOLDER_IMAGE}
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
        <Typography
          tag="h3"
          className={classNames(style.MiniPagePostTitle, '')}
        >
          {title}
          <span> {popularity} </span>
        </Typography>
        {/* Subtitle */}

        <Typography
          tag="h3"
          className={classNames(style.MiniPagePostSubtitle, '')}
        >
          {subtitle}
        </Typography>
        {/* Tagline */}
        <Typography
          tag="h3"
          className={classNames(style.MiniPagePostTagline, '')}
        >
          <span> {tagLine} </span>
        </Typography>
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {primaryTags?.map((tag, index) => (
            <Tag key={tag?.name + '-' + index} {...tag} />
          ))}
        </div>
        {/* organisationEstablishedDate */}
        {/* <Typography tag="h3" className={classNames(style.MiniPagePostTagline, "")}>   
          <span> {organisationEstablishedDate} </span>
        </Typography>*/}
        {/* Country & Funded */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {countryTags?.map((tag, index) => (
            <Tag key={tag.name + '-' + index} {...tag} disableTooltip />
          ))}

          {projectFunded?.map((tag, index) => (
            <Tag key={tag.name + '-' + index} {...tag} />
          ))}
        </div>
        {/* projects */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {projects?.map((tag, index) => (
            <Tag key={tag.name + '-' + index} {...tag} disableTooltip />
          ))}
        </div>
        {/* Post Text */}
        <Typography
          tag="div"
          className={classNames(
            'mt-2 textTruncate',
            style.MiniPagePostDescription
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
        {recommendations?.images && recommendations.images.length > 0 && (
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
        )}

        {/* projectResultAuthor */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {projectResultAuthor?.map((tag, index) => (
            <Tag key={tag.name + '-' + index} {...tag} disableTooltip />
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
        {/* Affiliations */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {organisationAffiliations && organisationAffiliations?.length > 0 && (
            <AffiliationsComponent
              afiliations={organisationAffiliations.map((affiliation) => ({
                name: affiliation.organisation,
                arole: affiliation.role,
              }))}
              isEditModeOn={false} // Assuming you don't want to edit this in MiniPagePost
              tagListTitle=""
            />
          )}
        </div>
        {/* Post Date */}
        <Typography tag="p" className={classNames(style.MiniPagePostDate, '')}>
          Posted on: {formattedDate}
        </Typography>

        {/* Edit Date - MOVED ON TOP OF TITLE */}
        {/* <Typography tag="p" className={classNames(style.MiniPagePostDate, '')}>
          Edited on: {formattedEditDate}
        </Typography> */}
      </div>
    </div>
  );
};

export const formatDate = (date: string | Date): string => {
  const newDate = new Date(date);
  const year = newDate.getFullYear();
  const day = String(newDate.getDate()).padStart(2, '0'); // Add leading zero if needed
  const month = String(newDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
  return `${day}/${month}/${year}`;
};

export default MiniPagePost;
