import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';
import { useEffect, useState } from 'react';
import InfoPagesImageFileUploader from '@app/shared-components/InfoPagesImageFileUploader/InfoPagesImageFileUploader';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import DatePickerComponent from '@app/shared-components/DatePickerComponent/DatePickerComponent';
import { formatDate } from '@app/page-components/PostPageComponent/PostPageComponent.utils';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import dayjs from 'dayjs';

export type HeaderComponentProps = {
  organisation: {
    organisationEstablishedDate: string;
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
    domains: Array<TagProps>;
    organisationTag: TagProps & { tagLine: string };
    // activity: Array<TagProps>;
    organisationType: Array<TagProps>;
  };
  isEditModeOn?: boolean;
  updateOrganisationData: (data: any) => void;
  updateOrganisationDataOnKeyValue: (key: string, value: any) => void;
  tags?: TagProps[];
  handleTagCreated?: () => void;
  setValidationState: (data: any) => void;
  isNewPage?: boolean;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  organisation,
  isEditModeOn,
  updateOrganisationData,
  updateOrganisationDataOnKeyValue,
  tags,
  handleTagCreated,
  setValidationState,
  isNewPage,
}) => {
  const validationFunctionForName = (tempName: string) => {
    if (tempName?.length < 5) {
      return 'Title should be at least 5 characters long';
    }
    if (tempName?.length > 70) {
      return 'Title should be at most 70 characters long';
    }
    if (tempName === 'New Post') {
      return 'Title cannot be "New Post"';
    }

    // const validTitleRegex = /^[a-zA-Z0-9 ]+$/;
    // if (!validTitleRegex.test(tempName)) {
    //   return 'Title can only contain small characters, capital characters, numbers, and spaces';
    // }
    // const isTempTitleExisting = existingPostPagesTitles?.some(
    //   (postPageTitle) =>
    //     postPageTitle !== defaultPostTitle && postPageTitle === tempTitle
    // );
    // if (isTempTitleExisting) {
    //   return 'Title already exists';
    // }
    return '';
  };

  // if is newPage, update the projectTag with the new tag created or selected
  // const [projectTag, setProjectTag] = useState(project?.projectTag);
  const [tagLine, setTagLine] = useState(
    organisation?.organisationTag?.tagLine || ''
  );

  useEffect(() => {
    console.log('project?.projectTag?.name', organisation?.organisationTag);
    // setProjectTag(project?.projectTag);
    setTagLine(organisation?.organisationTag?.tagLine || '');
  }, [organisation?.organisationTag]);

  useEffect(() => {
    console.log('tagLine', tagLine);
  }, [tagLine]);

  console.log('organisation', organisation);

  return (
    <div className={classNames(style.personHeader)}>
      <div className={style.imageAndSocialColumn}>
        {!isEditModeOn ? (
          <Image
            src={
              getImageUrlForMedia(organisation?.organisationTag?.picture)
                ?.url ||
              getImageUrlForMedia(organisation?.organisationTag?.picture) ||
              'https://placehold.co/147x147?text=Profile Image'
            }
            width={147}
            height={147}
            className={classNames('rounded-full')}
            alt={`Organisation Image - ${organisation?.organisationTag?.name}`}
          />
        ) : (
          <div className="w-72">
            <InfoPagesImageFileUploader
              currentImage={organisation?.organisationTag?.picture}
              updatePostData={(value) =>
                updateOrganisationDataOnKeyValue('organisationTag', {
                  ...organisation?.organisationTag,
                  picture: value,
                })
              }
            />
          </div>
        )}
        {/* Social Icons */}
        {/* Social Icons */}
        <div className={style.socialIcons}>
          {/* Linkedin */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" rounded-full"
            fill="currentColor"
            width={24}
            height={24}
            style={{
              color: '#fff',
              backgroundColor: '#0077b5',
              padding: '5px',
            }}
            viewBox="0 -7 23 40"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          {/* Link */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 rounded-full p-1"
            style={{ backgroundColor: '#9d8fdf', color: 'white' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
            />
          </svg>
        </div>
        {/* Views */}
        {!isEditModeOn && (
          <Typography
            data-after="2153"
            tag="p"
            className="text-sm text-gray-800 my-3 after:content-[attr(data-after)]]"
          >
            {organisation.views} views
          </Typography>
        )}
      </div>
      <div className={style.detailsColumn}>
        {/* Organisation Info Name */}
        {!isEditModeOn ? (
          <Typography tag="h1" className=" font-bold text-greyShade">
            {organisation?.organisationTag?.name}
            {/* Organisation Popularity */}
            <span
              data-after={organisation?.organisationTag?.popularity}
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
        ) : !isNewPage ? (
          <InputText
            // label="Title"
            placeholder="Enter title"
            value={
              organisation?.organisationTag?.name || 'Enter your preffered name'
            }
            className={classNames(
              // 'personNameTitle',
              style.genericTextArea,
              style.textPostTitleEdit,
              validationFunctionForName(organisation.organisationTag?.name) &&
                style.InputRequired
            )}
            onChange={(e) =>
              updateOrganisationData({
                ...organisation,
                title: e?.target?.value,
                organisationTag: {
                  ...organisation?.organisationTag,
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
          />
        ) : (
          <TagPicker
            placeholder="Enter the organisation name"
            tags={tags?.filter(
              (tag) => tag.tagType === 'organisation' && !tag?.tagPageLink
            )}
            className="relative"
            updatePostData={(value) =>
              updateOrganisationDataOnKeyValue('organisationTag', value)
            }
            tagType="organisation"
            onTagCreated={handleTagCreated}
          />
        )}
        {/* Founded */}
        <div className="flex items-center my-2">
          {organisation?.organisationEstablishedDate && isEditModeOn && (
            <SpriteSvg.AccountOrg2Icon
              className="mb-4 mr-2"
              sizeW={24}
              sizeH={24}
              viewBox={'0 0 18 18'}
              fill={'#000'}
              stroke={'0'}
              inline={false}
            />
          )}
          {!isEditModeOn ? (
            organisation?.organisationEstablishedDate ? (
              <Typography
                tag="span"
                className="text-greyShade text-stroke-gray font-medium text-14 ml-2"
              >
                Founded in:
                {/* {dayjs(organisation?.organisationEstablishedDate).format(
                  'YYYY'
                )} */}
                {organisation?.organisationEstablishedDate}
              </Typography>
            ) : (
              ''
            )
          ) : (
            <>
              <DatePickerComponent
                placeholder="Established Year"
                dateFormate="YYYY"
                date={
                  !organisation?.organisationEstablishedDate
                    ? null
                    : new Date(organisation?.organisationEstablishedDate)
                }
                onChange={(value) =>
                  updateOrganisationDataOnKeyValue(
                    'organisationEstablishedDate',
                    value.getFullYear().toString()
                  )
                }
              />
            </>
          )}
        </div>
        {/* Tagline */}
        {!isEditModeOn ? (
          <Typography tag="h3" className="text-gray-800 italic">
            {tagLine}
          </Typography>
        ) : (
          <>
            <InputText
              placeholder="Enter a tagline (slogan, acronym, English translation, ...)"
              value={tagLine}
              onChange={(e) => {
                updateOrganisationData({
                  ...organisation,
                  organisationTag: {
                    ...organisation.organisationTag,
                    tagLine: e.target.value,
                  },
                });
                setTagLine(e.target.value);
              }}
              shouldUpdateValueState={isNewPage}
              className={classNames(
                // 'personTaglineTitle',
                style.genericTextArea,
                style.textPostSubtitle
              )}
            />
          </>
        )}
        {/* Organisation domains */}
        <div className={style.domains}>
          {!isEditModeOn ? (
            organisation?.organisationType?.map((orgType) => (
              <Tag key={orgType.name} {...orgType} />
            ))
          ) : (
            <TagPicker
              placeholder="Add one or more organisation type tags"
              tags={tags?.filter((tag) => tag?.tagType === 'organisation type')}
              className="w-full"
              isMulti
              selectedValues={organisation?.organisationType?.map(
                (orgType) => orgType?.name
              )}
              updatePostData={(value) => {
                updateOrganisationDataOnKeyValue('organisationType', value);
              }}
              tagType={'person type'}
              onTagCreated={handleTagCreated}
            />
          )}
        </div>
        {/* Organisation Country */}
        {!isEditModeOn ? (
          <Tag {...organisation.countryTag} />
        ) : (
          <TagPicker
            placeholder={
              'Add one or more country tags (where the organisation is based in)'
            }
            tags={tags?.filter((tag) => tag?.tagType === 'country')}
            className="relative"
            selectedValue={organisation?.countryTag?.name || undefined}
            updatePostData={(value) =>
              updateOrganisationDataOnKeyValue('countryTag', value)
            }
            tagType="country"
            onTagCreated={handleTagCreated}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
