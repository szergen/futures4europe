import React from 'react';
import classNames from 'classnames';
import style from './MiniPagePost.module.css';
import Image from 'next/image';
import Typography from '../Typography/Typography';
import Tag, { TagProps } from '../Tag/Tag';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';
import dayjs from 'dayjs';
import { PLACEHOLDER_IMAGE } from '../../constants'; // Adjust the path as needed
import AffiliationsComponent from '@app/page-components/PersonPageComponent/components/AffiliationsComponent/AffiliationsComponent';

export type MiniPagePostProps = {
  title: string;
  subtitle: string; // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine
  popularity: number; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {popularity}
  countryTags: Array<TagProps>; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {country}
  tagLine?: string; // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {tagline}
  projectFunded: Array<TagProps>; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectFunded}
  projectStartDate: string; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectStartDate}
  projectEndDate: string; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectEndDate}
  organisationAffiliations: Array<{ organisation: string; role: string }>; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {organisationTags}
  organisationEstablishedDate: string; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {organisationEstablishedDate}
  date: string;
  editDate: string; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {editDate}
  projects: Array<TagProps>; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projects}
  projectResultAuthor: Array<TagProps>; // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectResultAuthor}
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
  subtitle, // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine
  popularity, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {popularity}
  countryTags, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {country}
  tagLine, // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {tagline}
  projectFunded, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectFunded}
  projectStartDate, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectStartDate}
  projectEndDate, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectEndDate}
  organisationAffiliations, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {organisationTags}
  organisationEstablishedDate, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {organisationEstablishedDate}
  date,
  editDate, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {editDate}
  projects, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projects}
  projectResultAuthor, // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {projectResultAuthor}
  image,
  text,
  domains,
  recommendations,
  pageTypeTag,
  primaryTags,
  methods,
}) => {
  console.log('MiniPagePostTitle', subtitle);
  const formattedDate = formatDate(date);
  const formattedEditDate = formatDate(editDate);
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
          {/* // TODO: Refactor this to a helper function @ALEX - de verificat implementarea facuta de mine {popularity} */}
          <span> {popularity} </span>
        </Typography>
        {/* Subtitle */}
        {/* // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {subtitle} */}
        <Typography
          tag="h3"
          className={classNames(style.MiniPagePostSubtitle, '')}
        >
          {subtitle}
        </Typography>
        {/* // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {subtitle} */}
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
        {/* // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {organisationEstablishedDate} */}
        {/* organisationEstablishedDate */}
        {/* <Typography tag="h3" className={classNames(style.MiniPagePostTagline, "")}>   
          <span> {organisationEstablishedDate} </span>
        </Typography>*/}
        {/* // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {country & funded} */}
        {/* Country & Funded */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {countryTags?.map((tag, index) => (
            <Tag key={tag.name + '-' + index} {...tag} disableTooltip />
          ))}

          {projectFunded?.map((tag, index) => (
            <Tag key={tag.name + '-' + index} {...tag} />
          ))}
        </div>
        {/* // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {projects} */}
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
        {recommendations?.images &&
          recommendations.images.length > 0 && ( // TODO: Refactor this to a helper function @ALEX - am pus sa fie ascunse recomandarile daca nu sunt recomandari
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

        {/* // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {projectResultAuthor} */}
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
        {/* // TODO: Refactor this to a helper function @ALEX - de everificat implementarea facuta de mine {country & funded} */}
        {/* Affiliations */}
        <div className={classNames('flex flex-wrap', style.postTags)}>
          {organisationAffiliations?.length > 0 && (
            <AffiliationsComponent
              afiliations={organisationAffiliations.map((affiliation) => ({
                name: affiliation.organisation,
                arole: affiliation.role,
              }))}
              isEditModeOn={false} // Assuming you don't want to edit this in MiniPagePost
            />
          )}
        </div>
        {/* Post Date */}
        <Typography tag="p" className={classNames(style.MiniPagePostDate, '')}>
          Posted on: {formattedDate}
        </Typography>

        {/* Edit Date */}
        {/* TODO: This was moved on top of the title */}
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
