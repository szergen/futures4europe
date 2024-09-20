import Image from 'next/image';
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

export type HeaderComponentProps = {
  post: {
    title: string;
    pageType: TagProps;
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
    projectResultFile?: {
      href: string;
      title: string;
      fileSize: string;
      format: string;
    };
  };
  isEditModeOn: boolean;
  updatePostData: (data: any) => void;
  updatePostDataBasedOnKeyValue: (key: string, value: any) => void;
  tags: TagProps[];
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  post,
  isEditModeOn,
  updatePostData,
  updatePostDataBasedOnKeyValue,
  tags,
}) => {
  return (
    <div className={classNames(style.postHeader)}>
      {post.pageType?.name?.toLowerCase() === 'project result' &&
        post?.projectResultFile && (
          // Project Result Image
          <div className={style.imageAndButtons}>
            <Image
              src={post?.projectResultFile?.href}
              width={247}
              height={368}
              className={classNames('rounded-full', style.projectResultImage)}
              alt={`Project Result Preview - ${post.projectResultFile.title}`}
            />
            <Typography tag="h3" className="text-gray-800 mt-2">
              {post.projectResultFile.title}
            </Typography>
            <div className={style.downloadAndViews}>
              <Button>
                Download result ({post.projectResultFile.fileSize}){' '}
                <span className="rounded-lg bg-white text-blue-500 p-1 font-bold">
                  {post.projectResultFile.format}
                </span>
              </Button>
            </div>
          </div>
        )}
      <div className={style.detailsColumn}>
        {/* Post Info Name */}
        <Typography tag="h1" className=" text-gray-800">
          {post.title.replace(/_/g, ' ')}
          {/* Post Popularity */}
          <span
            data-after="320"
            className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
          ></span>
        </Typography>
        {/* Post Subtitle */}
        {!isEditModeOn ? (
          <Typography tag="h3" className="text-gray-800 italic">
            {post.subtitle}
          </Typography>
        ) : (
          <InputText
            label="Subtitle"
            placeholder="Enter subtitle"
            value={post?.subtitle || 'Enter subtitle'}
            onChange={(e) =>
              updatePostData({ ...post, subtitle: e.target.value })
            }
          />
        )}
        {/* Event Date */}
        {post.pageType?.name?.toLowerCase() === 'event' && post?.eventDate && (
          <Typography tag="p" className="text-gray-500 text-sm font-bold mt-3">
            {formatDate(post?.eventDate?.start)} -{' '}
            {formatDate(post?.eventDate?.end)}
          </Typography>
        )}
        {/* Registration Link */}
        {post.pageType?.name?.toLowerCase() === 'event' &&
          post?.eventRegistration && (
            <>
              <Divider className="mt-2" />
              <Typography
                tag="p"
                className="text-primary-500 text-xs mt-2 text-gray-500"
              >
                Register Link:
                <Link
                  href={post?.eventRegistration}
                  target="_blank"
                  className="ml-2"
                >
                  {post?.eventRegistration}
                </Link>
              </Typography>
            </>
          )}
        {/* Post Country */}
        {
          <div>
            {!isEditModeOn ? (
              post?.countryTag && <Tag {...post.countryTag} className="mt-1" />
            ) : (
              <TagPicker
                tags={tags?.filter((tag) => tag?.tagType === 'country')}
                className="w-80"
                selectedValue={post.countryTag?.name || undefined}
                updatePostData={(value) =>
                  updatePostDataBasedOnKeyValue('countryTag', value)
                }
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
      <Button className="h-9">Recommend</Button>
    </div>
  );
};

export default HeaderComponent;
