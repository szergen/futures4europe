import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { getImageUrlForMedia } from '../../../PageComponents.utils';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import InfoPagesImageFileUploader from '@app/shared-components/InfoPagesImageFileUploader/InfoPagesImageFileUploader';

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
  const validationFunctionForName = (tempName: string) => {
    if (tempName.length < 5) {
      return 'Title should be at least 5 characters long';
    }
    if (tempName.length > 30) {
      return 'Title should be at most 30 characters long';
    }
    if (tempName === 'New Post') {
      return 'Title cannot be "New Post"';
    }
    if (tempName === 'New Post') {
      return 'Title cannot be "New Post "';
    }
    // const isTempTitleExisting = existingPostPagesTitles?.some(
    //   (postPageTitle) =>
    //     postPageTitle !== defaultPostTitle && postPageTitle === tempTitle
    // );
    // if (isTempTitleExisting) {
    //   return 'Title already exists';
    // }
    return '';
  };

  return (
    <div className={classNames(style.personHeader)}>
      <div className={style.imageAndSocialColumn}>
        {!isEditModeOn ? (
          <Image
            src={
              getImageUrlForMedia(person.personTag.picture)?.url ||
              getImageUrlForMedia(person.personTag.picture) ||
              'https://placehold.co/147x147?text=Profile Image'
            }
            width={147}
            height={147}
            className={classNames('rounded-full')}
            alt={`User Avatar - ${person.title}`}
          />
        ) : (
          <div className="w-72">
            <InfoPagesImageFileUploader
              currentImage={person.personTag.picture}
              updatePostData={(value) =>
                updatePersonDataOnKeyValue('personTag', {
                  ...person.personTag,
                  picture: value,
                })
              }
            />
          </div>
        )}
        {/* Social Icons */}
        <div className={style.socialIcons}>
          {/* Linkedin */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" rounded-full"
            fill="currentColor"
            width={32}
            height={32}
            style={{
              color: '#fff',
              backgroundColor: '#0077b5',
              padding: '5px',
            }}
            viewBox="0 -7 23 40"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
          {/* Research Gate */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32px"
            height="32px"
            version="1.1"
            style={{
              shapeRendering: 'geometricPrecision',
              textRendering: 'geometricPrecision',
              fillRule: 'evenodd',
              clipRule: 'evenodd',
            }}
            viewBox="0 0 32 32"
          >
            <g id="Capa_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                style={{ fill: '#04D4AC', fillRule: 'nonzero' }}
                d="M32.04 15.97c0,8.85 -7.18,16.03 -16.02,16.03 -8.85,0 -16.02,-7.18 -16.02,-16.03 0,-8.85 7.17,-16.03 16.02,-16.03 8.84,0 16.02,7.18 16.02,16.03zm-14.79 7c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22z"
              />
              <path
                style={{ fill: 'white', fillRule: 'nonzero' }}
                d="M17.25 22.97c-1.43,-0.28 -2.28,-1.11 -4.45,-4.33 -0.72,-1.08 -0.72,-1.08 -1.42,-1.13 -1.03,-0.07 -0.95,-0.25 -0.92,2.02 0.04,2.58 0.01,2.52 1.5,2.77 0.39,0.06 0.42,0.09 0.42,0.32 0,0.26 0,0.26 -2.62,0.28 -2.46,0.02 -2.62,0.01 -2.67,-0.14 -0.1,-0.29 0.05,-0.43 0.59,-0.53 0.61,-0.11 0.93,-0.36 1.01,-0.78 0.04,-0.16 0.05,-2.32 0.03,-4.8 -0.03,-5.21 0.03,-4.9 -0.93,-5.11 -0.6,-0.13 -0.79,-0.27 -0.71,-0.51 0.06,-0.16 0.19,-0.17 2.92,-0.22 4.06,-0.08 4.82,0.05 5.9,1.01 1.13,1.01 1.29,2.55 0.39,3.84 -0.4,0.58 -1.2,1.2 -1.82,1.43 -0.29,0.11 -0.53,0.23 -0.53,0.27 0,0.12 0.92,1.43 1.49,2.13 1.52,1.85 2.34,2.57 3.19,2.79 0.53,0.14 0.68,0.29 0.53,0.55 -0.16,0.27 -0.96,0.33 -1.9,0.14zm-3.83 -6.63c2,-0.82 2.15,-3.57 0.25,-4.38 -0.49,-0.21 -0.62,-0.22 -1.85,-0.22 -1.33,0 -1.33,0 -1.35,2.31 -0.02,1.27 -0.01,2.37 0.02,2.43 0.09,0.21 2.34,0.1 2.93,-0.14zm6.97 -2.85c-1.55,-0.29 -2.06,-1.24 -1.98,-3.68 0.04,-1.35 0.15,-1.72 0.67,-2.28 0.92,-0.99 3.2,-0.9 4.04,0.16 0.36,0.45 0.33,0.59 -0.17,0.74 -0.39,0.13 -0.39,0.13 -0.75,-0.23 -0.85,-0.82 -2.32,-0.52 -2.58,0.54 -0.13,0.47 -0.12,2.46 0.01,2.91 0.35,1.27 2.46,1.27 2.82,0 0.22,-0.81 0.17,-0.87 -0.8,-0.92 -0.47,-0.02 -0.47,-0.02 -0.47,-0.41 0,-0.38 0,-0.38 1.12,-0.41 1.45,-0.03 1.43,-0.05 1.36,1.01 -0.09,1.33 -0.45,1.97 -1.32,2.35 -0.57,0.24 -1.35,0.33 -1.95,0.22zm0 0z"
              />
            </g>
          </svg>
          {/* Orcid */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Layer_1"
            x="0px"
            y="0px"
            width="32px"
            height="32px"
            viewBox="0 0 256 256"
          >
            <path
              style={{
                fill: '#A6CE39',
              }}
              d="M256,128c0,70.7-57.3,128-128,128C57.3,256,0,198.7,0,128C0,57.3,57.3,0,128,0C198.7,0,256,57.3,256,128z"
            />
            <g>
              <path
                style={{ fill: '#FFF' }}
                d="M86.3,186.2H70.9V79.1h15.4v48.4V186.2z"
              />
              <path
                style={{ fill: '#FFF' }}
                d="M108.9,79.1h41.6c39.6,0,57,28.3,57,53.6c0,27.5-21.5,53.6-56.8,53.6h-41.8V79.1z M124.3,172.4h24.5   c34.9,0,42.9-26.5,42.9-39.7c0-21.5-13.7-39.7-43.7-39.7h-23.7V172.4z"
              />
              <path d="M88.7,56.8c0,5.5-4.5,10.1-10.1,10.1c-5.6,0-10.1-4.6-10.1-10.1c0-5.6,4.5-10.1,10.1-10.1   C84.2,46.7,88.7,51.3,88.7,56.8z" />
            </g>
          </svg>
        </div>
        {/* Views */}
        <Typography
          data-after="2153"
          tag="p"
          className="text-sm text-gray-800 my-3 after:content-[attr(data-after)]]"
        >
          {person.views} views
        </Typography>
      </div>
      <div className={style.detailsColumn}>
        {/* Person Info Name */}
        {!isEditModeOn ? (
          <Typography tag="h1" className=" text-gray-800">
            {person.personTag.name}
            {/* Person Popularity */}
            <span
              data-after={person?.personTag?.popularity || ''}
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
        ) : (
          <InputText
            // label="Title"
            placeholder="Enter title"
            value={person.personTag.name || 'Enter your preffered name'}
            className="w-72"
            onChange={(e) =>
              updatePersonData({
                ...person,
                title: e.target.value,
                personTag: {
                  ...person.personTag,
                  name: e.target.value,
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
        )}
        {/* Person Tagline */}
        {!isEditModeOn ? (
          <Typography tag="h3" className="text-gray-800 italic">
            {person?.personTag?.tagLine}
          </Typography>
        ) : (
          <InputText
            // label="Tagline"
            placeholder="Enter tagline"
            value={person?.personTag?.tagLine || 'Enter your preffered tagline'}
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
        <div className={style.domains}>
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
            />
          )}
        </div>
        {/* Person Country */}
        {!isEditModeOn ? (
          <Tag {...person.countryTag} />
        ) : (
          <TagPicker
            placeholder={'Select Country'}
            tags={tags?.filter((tag) => tag?.tagType === 'country')}
            className="w-80"
            selectedValue={person?.countryTag?.name || undefined}
            updatePostData={(value) =>
              updatePersonDataOnKeyValue('countryTag', value)
            }
            tagType="country"
            onTagCreated={handleTagCreated}
            // tagTypeLabel={'Country'}
          />
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
