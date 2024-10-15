import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { formatDate } from '../../PostPageComponent.utils';
import Divider from '@app/shared-components/Divider/Divider';
import Link from 'next/link';
import Button from '@app/shared-components/Button/Button';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import DatePickerRangeComponentDouble from '@app/shared-components/DatePickerRangeComponentDouble/DatePickerRangeComponentDouble';
import DisplayProjectResultMedia from '@app/page-components/shared-page-components/DisplayProjectResultMedia/DisplayProjectResultMedia';
import ProjectResultHeaderImage from '@app/shared-components/ProjectResultHeaderImage/ProjectResultHeaderImage';

export type HeaderComponentProps = {
  post: {
    title: string;
    pageType: TagProps[];
    eventDate?: {
      start: string;
      end: string;
    };
    registrationLink: string;
    subtitle: string;
    countryTag: {
      name: string;
      popularity: number;
    };
    recommendations: {
      number: number;
      images: string[];
    };
    views: number;
    projectResultMedia?: {
      displayName: string;
      fileName: string;
      sizeInBytes: string;
      type: string;
      url: string;
      thumbnail: string;
    };
  };
  isEditModeOn: boolean;
  updatePostData: (data: any) => void;
  updatePostDataBasedOnKeyValue: (key: string, value: any) => void;
  tags: TagProps[];
  handleTagCreated?: () => void;
  setValidationState?: (data: any) => void;
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  post,
  isEditModeOn,
  updatePostData,
  updatePostDataBasedOnKeyValue,
  tags,
  handleTagCreated,
  setValidationState,
}) => {
  // const { existingPostPagesTitles } = useAuth();

  const validationFunctionForTitle = (tempTitle: string | undefined) => {
    if (!tempTitle) {
      return 'Title is required';
    }
    if (tempTitle?.length < 5) {
      return 'Title should be at least 5 characters long';
    }
    if (tempTitle?.length > 150) {
      return 'Title should be at most 150 characters long';
    }
    if (tempTitle === 'New Post') {
      return 'Title cannot be "New Post"';
    }
    const validTitleRegex = /^(?!.*\s{2,})(?!.*\|).*$/;
    if (!validTitleRegex.test(tempTitle)) {
      return 'Title cannot contain multiple spaces or |';
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
    <div className={classNames(style.postHeader)}>
      {post.pageType?.[0]?.name?.toLowerCase() === 'project result' && (
        // Project Result Image
        <div className={style.imageAndButtons}>
          <div>
            {!isEditModeOn ? (
              post?.projectResultMedia && (
                <DisplayProjectResultMedia
                  projectResultMedia={post?.projectResultMedia || {}}
                />
              )
            ) : (
              <ProjectResultHeaderImage
                currentImage={post?.projectResultMedia?.thumbnail}
                resultType={post?.projectResultMedia?.type}
                updatePostData={(value) => {
                  updatePostData({
                    ...post,
                    projectResultMedia: {
                      ...post.projectResultMedia,
                      thumbnail: value.thumbnail,
                      sizeInBytes: value.sizeInBytes,
                      url: value.url,
                      fileName: value.fileName,
                      type: value.type,
                    },
                  });
                }}
                updatePostDataForVideoImage={(value) => {
                  updatePostData({
                    ...post,
                    projectResultMedia: {
                      ...post.projectResultMedia,
                      thumbnail: value.thumbnail,
                      sizeInBytes: '',
                      url: value.url,
                      fileName: '',
                      type: 'video',
                    },
                  });
                }}
              />
            )}
          </div>
          {!isEditModeOn ? (
            <Typography tag="h3" className="text-gray-800 mt-2">
              {post?.projectResultMedia?.displayName}
            </Typography>
          ) : (
            <InputText
              // label="File Display Name"
              placeholder="Enter display name"
              value={post?.projectResultMedia?.displayName || ''}
              onChange={(e) =>
                updatePostData({
                  ...post,
                  projectResultMedia: {
                    ...post.projectResultMedia,
                    displayName: e.target.value,
                  },
                })
              }
            />
          )}
          {!isEditModeOn && post?.projectResultMedia?.type === 'document' && (
            <div className={style.downloadAndViews}>
              <a
                href={post?.projectResultMedia.url}
                download={post?.projectResultMedia.displayName + '.pdf'}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>
                  Download result (
                  {(Number(post.projectResultMedia.sizeInBytes) / 1024)
                    ?.toString()
                    ?.split('.')?.[0] + 'kb'}
                  ){' '}
                  <span className="rounded-lg bg-white text-blue-500 p-1 font-bold">
                    {post.projectResultMedia?.url
                      ?.split('.')
                      ?.pop()
                      ?.toUpperCase()}
                  </span>
                </Button>
              </a>
            </div>
          )}
        </div>
      )}
      <div className={style.detailsColumn}>
        {/* Post Info Name */}
        {!isEditModeOn ? (
          <Typography tag="h1" className=" text-gray-800">
            {post?.title?.replace(/_/g, ' ')}
            {/* Post Popularity */}
            {/* <span
            data-after="320"
            className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
          ></span> */}
          </Typography>
        ) : (
          <InputText
            className={classNames(
              style.genericTextArea,
              style.textPostTitleEdit,
              validationFunctionForTitle(post?.title) && style.InputRequired
            )}
            // label=""
            placeholder={
              post?.pageType?.[0]?.name !== 'event'
                ? 'Enter the post title'
                : 'Enter the event title'
            }
            value={post?.title}
            onChange={(e) => updatePostData({ ...post, title: e.target.value })}
            validate={validationFunctionForTitle}
            setValidationState={
              setValidationState
                ? (value) => setValidationState({ title: value })
                : undefined
            }
            shouldUpdateValueState={true}
          />
        )}
        {/* Post Subtitle */}
        {!isEditModeOn ? (
          <Typography tag="h3" className="text-gray-800 italic">
            {post.subtitle}
          </Typography>
        ) : (
          <InputText
            label=""
            placeholder={
              post?.pageType?.[0]?.name !== 'event'
                ? 'Enter the post subtitle'
                : 'Enter the event subtitle'
            }
            value={post?.subtitle || ''}
            onChange={(e) =>
              updatePostData({ ...post, subtitle: e.target.value })
            }
            className={classNames(
              style.genericTextArea,
              style.textPostSubtitle
            )}
          />
        )}
        {/* Event Date */}
        {post.pageType?.[0]?.name?.toLowerCase() === 'event' &&
          post?.eventDate && (
            <div>
              {!isEditModeOn ? (
                <Typography
                  tag="p"
                  className="text-gray-500 text-sm font-bold mt-3"
                >
                  {formatDate(post?.eventDate?.start)} -{' '}
                  {formatDate(post?.eventDate?.end)}
                </Typography>
              ) : (
                <div className="flex items-center mt-4">
                  <span className="mr-4">Start Date</span>
                  <DatePickerRangeComponentDouble
                    dateStart={
                      post?.eventDate?.start
                        ? new Date(post.eventDate.start)
                        : undefined
                    }
                    dateEnd={
                      post?.eventDate?.end
                        ? new Date(post.eventDate.end)
                        : undefined
                    }
                    handleUpdateStartDate={(date) =>
                      updatePostDataBasedOnKeyValue('eventDate', {
                        ...post.eventDate,
                        start: date.toISOString(),
                      })
                    }
                    handleUpdateEndDate={(date) =>
                      updatePostDataBasedOnKeyValue('eventDate', {
                        ...post.eventDate,
                        end: date.toISOString(),
                      })
                    }
                  />
                  <span className="ml-4">End Date</span>
                </div>
              )}
            </div>
          )}
        {/* Registration Link */}
        {post.pageType?.[0]?.name?.toLowerCase() === 'event' &&
          post?.eventRegistration && (
            <>
              <Divider className="mt-2" />
              <Typography
                tag="p"
                className="text-primary-500 text-xs mt-2 text-gray-500"
              >
                Register Link:
                {!isEditModeOn ? (
                  <Link
                    href={post?.eventRegistration}
                    target="_blank"
                    className="ml-2"
                  >
                    {post?.eventRegistration}
                  </Link>
                ) : (
                  <InputText
                    placeholder="Paste link to the registration page"
                    value={post?.eventRegistration || 'Enter registration link'}
                    onChange={(e) =>
                      updatePostData({
                        ...post,
                        eventRegistration: e.target.value,
                      })
                    }
                  />
                )}
              </Typography>
            </>
          )}
        {/* Post Country */}
        {
          <div className="flex mt-1">
            {!isEditModeOn ? (
              post?.countryTag && <Tag {...post.countryTag} />
            ) : (
              <TagPicker
                placeholder={
                  post?.pageType?.[0]?.name !== 'event'
                    ? 'Add one or more country tags relevant to your post'
                    : 'Add country tag relevant to your post'
                }
                tags={tags?.filter((tag) => tag?.tagType === 'country')}
                className="mt-1"
                selectedValue={post.countryTag?.name || undefined}
                updatePostData={(value) =>
                  updatePostDataBasedOnKeyValue('countryTag', value)
                }
                tagType="country"
                onTagCreated={handleTagCreated}
                // tagTypeLabel={
                //   post?.pageType?.name !== 'event' ? 'Country' : 'Location'
                // }
              />
            )}
          </div>
        }
        {/* Recommandations */}
        <div className={classNames(style.recommandations)}>
          <Typography tag="p" className="text-xs text-gray-400">
            Recommended by {post.recommendations?.number ?? 0}{' '}
            {post.recommendations?.number && post.recommendations.number < 1
              ? 'person'
              : 'persons'}
          </Typography>
        </div>
        {/* Views */}
        <Typography
          data-after="2153"
          tag="p"
          className="text-sm text-gray-800 my-2 after:content-[attr(data-after)]]"
        >
          {post.views} views
        </Typography>
      </div>
      {!isEditModeOn && <Button className="h-9">Recommend</Button>}
    </div>
  );
};

export default HeaderComponent;
