import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { getImageUrlForMedia } from '../../../PageComponents.utils';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import InfoPagesImageFileUploader from '@app/shared-components/InfoPagesImageFileUploader/InfoPagesImageFileUploader';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import { useState } from 'react';
import { Modal, Label, TextInput, Button } from 'flowbite-react';
import SocialLinksComponent from '@app/page-components/shared-page-components/SocialLinksComponent/SocialLinksComponent';

export type HeaderComponentProps = {
  person: {
    title: string;
    tagLine: string;
    image: string;
    personPopularity: number;
    pageType: 'Post' | 'Event' | 'Project Result';
    description: string;
    countryTag: {
      name: string;
      popularity: number;
    };
    recommendations: {
      number: number;
      images: string[];
    };
    views: number;
    personRoles: Array<TagProps>;
    personTag: TagProps;
    activity: Array<TagProps>;
    linkedinLink: string;
    websiteLink: string;
    researchGateLink: string;
    orcidLink: string;
  };
  isEditModeOn: boolean;
  tags: TagProps[];
  updatePersonData: (data: any) => void;
  updatePersonDataOnKeyValue: (key: string, value: any) => void;
  setValidationState: (data: any) => void;
  handleTagCreated: () => void;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  person,
  isEditModeOn,
  tags,
  updatePersonData,
  updatePersonDataOnKeyValue,
  setValidationState,
  handleTagCreated,
}) => {
  const validationFunctionForName = (
    tempName: string | undefined,
    existingPostPagesTitles?: string[],
    defaultPostTitle?: string
  ): string => {
    if (!tempName) {
      return 'Title is required';
    }

    if (tempName.length < 5) {
      return 'Title should be at least 5 characters long';
    }
    if (tempName.length > 100) {
      return 'Title should be at most 100 characters long';
    }
    if (tempName === 'New Post') {
      return 'Title cannot be "New Post"';
    }
    // const validTitleRegex = /^(?!.*\s{2,})(?!.*\|).*$/;
    // if (!validTitleRegex.test(tempName)) {
    //   return 'Title cannot contain multiple spaces or |';
    // }

    if (Array.isArray(existingPostPagesTitles) && defaultPostTitle) {
      const isTempTitleExisting = existingPostPagesTitles.some(
        (postPageTitle) =>
          postPageTitle !== defaultPostTitle && postPageTitle === tempName
      );
      if (isTempTitleExisting) {
        return 'Title already exists';
      }
    }

    return '';
  };

  return (
    <div className={classNames(style.personHeader)}>
      <div className={style.imageAndSocialColumn}>
        {!isEditModeOn ? (
          <Image
            src={
              getImageUrlForMedia(person?.personTag?.picture)?.url ||
              getImageUrlForMedia(person?.personTag?.picture) ||
              'https://placehold.co/147x147?text=Profile Image'
            }
            width={647}
            height={647}
            className={classNames('rounded-full')}
            alt={`User Avatar - ${person.title}`}
          />
        ) : (
          <div className="w-72">
            <InfoPagesImageFileUploader
              currentImage={person?.personTag?.picture}
              updatePostData={(value) =>
                updatePersonDataOnKeyValue('personTag', {
                  ...person?.personTag,
                  picture: value,
                })
              }
            />
          </div>
        )}
        {/* Social Icons */}
        <SocialLinksComponent
          isEditModeOn={isEditModeOn}
          linkedinLink={person?.linkedinLink}
          websiteLink={person?.websiteLink}
          researchGateLink={person?.researchGateLink}
          orcidLink={person?.orcidLink}
          handleUpdate={updatePersonDataOnKeyValue}
          extended
        />
        {/* Views */}
        {!isEditModeOn && (
          <Typography
            data-after="2153"
            tag="p"
            className="text-sm text-gray-800 my-3 after:content-[attr(data-after)]]"
          >
            {person.views} views
          </Typography>
        )}
      </div>
      <div className={style.detailsColumn}>
        {/* Person Info Name */}
        {!isEditModeOn ? (
          <Typography tag="h1" className="text-gray-800">
            {person?.personTag?.name}
            {/* Person Popularity */}
            <span
              data-after={person?.personTag?.popularity || ''}
              className={classNames(
                style.personTagPopularity,
                'after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400'
              )}
            ></span>
          </Typography>
        ) : (
          <InputText
            placeholder="Enter your full name (as you want to be seen by others)*"
            value={person?.personTag?.name}
            className={classNames(
              // 'personNameTitle',
              style.genericTextArea,
              style.textPostTitleEdit,
              validationFunctionForName(person?.title) && style.InputRequired
            )}
            onChange={(e) =>
              updatePersonData({
                ...person,
                title: e?.target?.value,
                personTag: {
                  ...person?.personTag,
                  name: e?.target?.value,
                },
              })
            }
            validate={validationFunctionForName}
            setValidationState={
              setValidationState
                ? (value) => setValidationState({ title: value })
                : undefined
            }
            shouldUpdateValueState={true}
          />
        )}
        {/* Person Tagline */}
        {!isEditModeOn ? (
          <Typography tag="h3" className="text-gray-800 italic">
            {person?.personTag?.tagLine}
          </Typography>
        ) : (
          <InputText
            // label="Tagline"
            placeholder="Enter a tagline (motto, slogan, ...)"
            className={classNames(
              // 'personTaglineTitle',
              style.genericTextArea,
              style.textPostSubtitle
            )}
            value={person?.personTag?.tagLine || ''}
            onChange={(e) =>
              updatePersonData({
                ...person,
                personTag: {
                  ...person.personTag,
                  tagLine: e.target.value,
                },
              })
            }
          />
        )}
        {/* Person type - activity */}
        <div className={classNames('flex flex-wrap', style.domains)}>
          {!isEditModeOn ? (
            person.activity?.map((activity) => (
              <Tag key={activity?.name} {...activity} />
            ))
          ) : (
            <TagPicker
              tags={tags?.filter((tag) => tag?.tagType === 'person type')}
              className="w-full"
              isMulti
              selectedValues={person?.activity?.map(
                (activity) => activity?.name
              )}
              updatePostData={(value) => {
                updatePersonDataOnKeyValue('activity', value);
              }}
              tagType={'person type'}
              onTagCreated={handleTagCreated}
              placeholder="Select Activity Interests"
              newTagHeader="Create a new activity"
              newTagType="Activity name"
              newTagTagline="Enter a tagline (slogan, acronym, English translation, ...)"
            />
          )}
        </div>
        {/* Person Country */}
        <div className="mt-1">
          {!isEditModeOn ? (
            <Tag {...person.countryTag} />
          ) : (
            <TagPicker
              placeholder={'Add a country tag (your current residence)'}
              tags={tags?.filter((tag) => tag?.tagType === 'country')}
              className="relative"
              selectedValue={person?.countryTag?.name || undefined}
              updatePostData={(value) =>
                updatePersonDataOnKeyValue('countryTag', value)
              }
              tagType="country"
              onTagCreated={handleTagCreated}
              newTagHeader="Create a new contry tag"
              newTagType="Country name"
              newTagTagline="Enter a tagline (slogan, acronym, English translation, ...)"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
