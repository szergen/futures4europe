import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { formatDate } from '@app/page-components/PostPageComponent/PostPageComponent.utils';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';
import InfoPagesImageFileUploader from '@app/shared-components/InfoPagesImageFileUploader/InfoPagesImageFileUploader';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import DatePickerRangeComponentDouble from '@app/shared-components/DatePickerRangeComponentDouble/DatePickerRangeComponentDouble';
import { useEffect, useState } from 'react';

export type HeaderComponentProps = {
  project: {
    projectFunded: TagProps;
    projectEndDate: string;
    projectStartDate: string;
    title: string;
    tagLine: string;
    image: string;
    personPopularity: number;
    euFunded: boolean;
    projectPeriod: {
      start: string;
      end: string;
    };
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
    projectTag: TagProps & { tagLine: string };
  };
  isEditModeOn?: boolean;
  updateProjectData: (data: any) => void;
  updateProjectDataOnKeyValue: (key: string, value: any) => void;
  tags?: TagProps[];
  handleTagCreated?: () => void;
  setValidationState: (data: any) => void;
  isNewPage?: boolean;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  project,
  isEditModeOn,
  updateProjectData,
  updateProjectDataOnKeyValue,
  handleTagCreated,
  setValidationState,
  tags,
  isNewPage,
}) => {
  const validationFunctionForName = (tempName: string | undefined) => {
    if (!tempName) {
      return 'Title is required';
    }
    if (tempName.length < 5) {
      return 'Title should be at least 5 characters long';
    }
    if (tempName.length > 50) {
      return 'Title should be at most 50 characters long';
    }
    if (tempName === 'New Post') {
      return 'Title cannot be "New Post "';
    }
    const validTitleRegex = /^[a-zA-Z0-9 ]+$/;
    if (!validTitleRegex.test(tempName)) {
      return 'Title can only contain small characters, capital characters, numbers, and spaces';
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

  // if is newPage, update the projectTag with the new tag created or selected
  // const [projectTag, setProjectTag] = useState(project?.projectTag);
  const [tagLine, setTagLine] = useState(project?.projectTag?.tagLine || '');

  useEffect(() => {
    console.log('project?.projectTag?.name', project?.projectTag);
    // setProjectTag(project?.projectTag);
    setTagLine(project?.projectTag?.tagLine || '');
  }, [project?.projectTag]);

  useEffect(() => {
    console.log('tagLine', tagLine);
  }, [tagLine]);

  return (
    <div className={classNames(style.personHeader)}>
      <div className={style.imageAndSocialColumn}>
        {!isEditModeOn ? (
          <Image
            src={
              getImageUrlForMedia(project?.projectTag?.picture)?.url ||
              getImageUrlForMedia(project?.projectTag?.picture) ||
              'https://placehold.co/147x147?text=Profile Image'
            }
            width={147}
            height={147}
            className={classNames('rounded-full')}
            alt={`Project Picture - ${project.projectTag?.name}`}
          />
        ) : (
          <div className="w-[147px]">
            <InfoPagesImageFileUploader
              currentImage={project?.projectTag?.picture}
              updatePostData={(value) =>
                updateProjectDataOnKeyValue('personTag', {
                  ...project?.projectTag,
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
        <Typography
          data-after="2153"
          tag="p"
          className="text-sm text-gray-800 my-3 after:content-[attr(data-after)]]"
        >
          {project.views} views
        </Typography>
      </div>
      <div className={style.detailsColumn}>
        {/* Person Info Name */}
        {!isEditModeOn ? (
          <Typography tag="h1" className=" text-gray-800">
            {project?.projectTag?.name}
            {/* Person Popularity */}
            <span
              data-after={project?.projectTag?.popularity}
              className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
            ></span>
          </Typography>
        ) : !isNewPage ? (
          <InputText
            className={classNames(
              style.genericTextArea,
              style.textPostTitleEdit,
              validationFunctionForName(project?.projectTag.name) &&
                style.InputRequired
            )}
            placeholder="Enter title"
            value={project?.projectTag?.name || 'Enter your preffered name'}
            // className={classNames(
            //   // 'personNameTitle',
            //   style.genericTextArea,
            //   style.textPostTitleEdit,
            //   validationFunctionForName(project?.title) && style.InputRequired
            // )}
            onChange={(e) =>
              updateProjectData({
                ...project,
                title: e?.target?.value,
                projectTag: {
                  ...project?.projectTag,
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
            placeholder="Enter the project name"
            tags={tags?.filter(
              (tag) => tag.tagType === 'project' && !tag?.tagPageLink
            )}
            className="relative"
            updatePostData={(value) =>
              updateProjectDataOnKeyValue('projectTag', value)
            }
            tagType="project"
            onTagCreated={handleTagCreated}
          />
        )}
        {/* Tagline */}
        {!isEditModeOn ? (
          <Typography tag="h3" className="text-gray-800 italic">
            {tagLine}
          </Typography>
        ) : (
          <>
            <InputText
              placeholder="Enter a tagline (slogan, acronym, English translation, ...)"
              // value={
              //   project?.projectTag?.tagLine || 'Enter your preffered tagline'
              // }
              value={tagLine}
              onChange={(e) => {
                updateProjectData({
                  ...project,
                  projectTag: {
                    ...project.projectTag,
                    tagLine: e.target.value,
                  },
                });
                setTagLine(e.target.value);
              }}
              shouldUpdateValueState={isNewPage}
              className={classNames(
                style.genericTextArea,
                style.textPostSubtitle
              )}
            />
          </>
        )}
        {/* Project Period */}
        {!isEditModeOn ? (
          <Typography
            tag="p"
            className="text-gray-500 text-sm font-bold mt-2 mb-2"
          >
            {formatDate(project?.projectStartDate)} -{' '}
            {formatDate(project?.projectEndDate)}
          </Typography>
        ) : (
          <div className="flex items-center mt-4">
            <span className="mr-4">Enter begin date</span>
            <DatePickerRangeComponentDouble
              dateStart={
                project?.projectStartDate
                  ? new Date(project?.projectStartDate)
                  : undefined
              }
              dateEnd={
                project?.projectEndDate
                  ? new Date(project?.projectEndDate)
                  : undefined
              }
              handleUpdateStartDate={(date) =>
                updateProjectDataOnKeyValue(
                  'projectStartDate',
                  date.toISOString()
                )
              }
              handleUpdateEndDate={(date) =>
                updateProjectDataOnKeyValue(
                  'projectEndDate',
                  date.toISOString()
                )
              }
            />
            <span className="ml-4">Enter end date</span>
          </div>
        )}

        {/* project funded */}
        {!isEditModeOn ? (
          <Tag {...project.projectFunded} className="mb-1" />
        ) : (
          <TagPicker
            placeholder="Add a project type tag"
            tags={tags?.filter((tag) => tag.tagType === 'project type')}
            className="relative"
            selectedValue={project.projectFunded?.name || undefined}
            updatePostData={(value) =>
              updateProjectDataOnKeyValue('projectFunded', value)
            }
            tagType="project type"
            onTagCreated={handleTagCreated}
          />
        )}

        {/* Person domains */}
        {/* <div className={style.domains}>
          {project.domains.slice(0, 3).map((domain) => (
            <Tag key={domain.name} {...domain} />
          ))}
        </div> */}
        {/* Person Country */}
        {!isEditModeOn ? (
          <Tag {...project.countryTag} />
        ) : (
          <TagPicker
            placeholder={'Add one or more country tags relevant to the project'}
            tags={tags?.filter((tag) => tag?.tagType === 'country')}
            className="relative"
            selectedValue={project?.countryTag?.name || undefined}
            updatePostData={(value) =>
              updateProjectDataOnKeyValue('countryTag', value)
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
