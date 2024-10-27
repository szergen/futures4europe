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
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import { Modal, Label, TextInput, Button } from 'flowbite-react';
import dayjs from 'dayjs';


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
    if (tempName.length > 100) {
      return 'Title should be at most 100 characters long';
    }
    if (tempName === 'New Post') {
      return 'Title cannot be "New Post "';
    }
    // const validTitleRegex = /^(?!.*\s{2,})(?!.*\|).*$/;
    // if (!validTitleRegex.test(tempName)) {
    //   return 'Title cannot contain multiple spaces or |';
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
  const [tagLine, setTagLine] = useState(project?.projectTag?.tagLine || '');

  useEffect(() => {
    console.log('project?.projectTag?.name', project?.projectTag);
    // setProjectTag(project?.projectTag);
    setTagLine(project?.projectTag?.tagLine || '');
  }, [project?.projectTag]);

  useEffect(() => {
    console.log('tagLine', tagLine);
  }, [tagLine]);


{/* // TODO: @alex update social links */}
  const [showCreateForm, setShowCreateForm] = useState(false);
  const handleIconClick = () => {
    setShowCreateForm(true);
};
{/* // TODO: @alex update social links - end */}

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
                updateProjectDataOnKeyValue('projectTag', {
                  ...project?.projectTag,
                  picture: value,
                })
              }
            />
          </div>
        )}
        {/* // TODO: @alex update social links */}
        {/* Social Icons */}
        <div className={style.socialIcons}>
          {/* Linkedin */}
          <i className={style.socialIcon} onClick={handleIconClick}>
            <SpriteSvg.AccountLinkLinkedin
              viewBox="-4 -4 32 32"
              className={classNames(style.website)}
              sizeW={24}
              sizeH={24}
              fill={'var(--primary-white)'}
              strokeWidth={0}
              style={{ padding: 'var(--w-space-xs)', backgroundColor: 'var(--color-background-primary)' }}
              inline={false}
            />
          </i>
          {/* Link */}
          <i className={style.socialIcon} onClick={handleIconClick}>
            <SpriteSvg.AccountLinkGeneral
              className={classNames(style.website)}
              sizeW={24}
              sizeH={24}
              fill={'var(--primary-white)'}
              viewBox={'-4 -4 32 32'}
              strokeWidth={0}
              inline={false}
            />
          </i>
        </div>
        {/* Views */}
        {!isEditModeOn && (
          <Typography
            data-after="2153"
            tag="p"
            className="text-sm text-gray-800 my-3 after:content-[attr(data-after)]]"
          >
            {project.views} views
          </Typography>
        )}
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
              validationFunctionForName(project?.projectTag?.name) &&
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
            {project?.projectStartDate
              ? dayjs(project?.projectStartDate).format('MMMM YYYY')
              : ''}{' '}
            {project?.projectStartDate && project?.projectEndDate && '-'}{' '}
            {project?.projectStartDate && project?.projectEndDate
              ? dayjs(project?.projectEndDate).format('MMMM YYYY')
              : ''}
          </Typography>
        ) : (
          <div className="flex items-center mt-4 mb-4">
            {/* <span className="mr-4">Enter begin date</span> */}
            <DatePickerRangeComponentDouble
              dateFormate="YYYY MMMM"
              placeholderStartDate="Begin Date"
              placeholderEndDate="End Date"
              dateStart={
                project?.projectStartDate
                  ? new Date(project?.projectStartDate)
                  : null
              }
              dateEnd={
                project?.projectEndDate
                  ? new Date(project?.projectEndDate)
                  : null
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
            {/* <span className="ml-4">Enter end date</span> */}
          </div>
        )}

        {/* project funded */}
        {!isEditModeOn ? (
          <Tag {...project.projectFunded} className="mb-1" />
        ) : (
          <TagPicker
            placeholder="Add a project type tag"
            tags={tags?.filter((tag) => tag.tagType === 'project type')}
            className="relative mt-2 mb-2"
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
            className="relative mt-2 mb-2"
            selectedValue={project?.countryTag?.name || undefined}
            updatePostData={(value) =>
              updateProjectDataOnKeyValue('countryTag', value)
            }
            tagType="country"
            onTagCreated={handleTagCreated}
            // tagTypeLabel={'Country'}
          />
        )}

        {/* // TODO: Alex @modal update social links */}
        <Modal show={showCreateForm} onClose={() => setShowCreateForm(false)}>
          <Modal.Header>Paste the url</Modal.Header>
          <Modal.Body>
            <form>
              <div className="mb-4">
                <Label htmlFor="tagName" className="relative">
                  Add link...
                </Label>
                <TextInput
                  placeholder="Paste the url"
                  id="tagName"
                  onChange={(e) => setTagName(e.target.value)}
                  required
                  helperText={
                    !setShowCreateForm && (
                      <span className="text-red-600 relative -top-3">
                        Name already exists
                      </span>
                    )
                  }
                />
              </div>
              <Button
                disabled={!setShowCreateForm || setShowCreateForm}
                type="submit"
                // disabled={isLoading}
              >
                Update
              </Button>
            </form>
          </Modal.Body>
        </Modal>
        {/* // TODO: Alex @modal update social links - end */}                
      </div>
    </div>
  );
};

export default HeaderComponent;
