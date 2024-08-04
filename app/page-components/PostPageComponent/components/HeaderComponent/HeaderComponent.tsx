import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag from '@app/shared-components/Tag/Tag';
import { formatDate } from '../../PostPageComponent.utils';
import Divider from '@app/shared-components/Divider/Divider';
import Link from 'next/link';
import Button from '@app/shared-components/Button/Button';

export type HeaderComponentProps = {
  post: {
    title: string;
    pageType: 'Post' | 'Event' | 'Project Result';
    eventDate?: {
      start: string;
      end: string;
    };
    registrationLink: string;
    subtitle: string;
    countryTag: {
      tagText: string;
      tagCounter: number;
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
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ post }) => {
  return (
    <div className={classNames(style.postHeader)}>
      {post.pageType === 'Project Result' && post?.projectResultFile && (
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
        {/* Post Tagline */}
        <Typography tag="h3" className="text-gray-800 italic">
          {post.subtitle}
        </Typography>
        {/* Event Date */}
        {post.pageType === 'Event' && post?.eventDate && (
          <Typography tag="p" className="text-gray-500 text-sm font-bold mt-3">
            {formatDate(post?.eventDate?.start)} -{' '}
            {formatDate(post?.eventDate?.end)}
          </Typography>
        )}
        {/* Registration Link */}
        {post.pageType === 'Event' && (
          <>
            <Divider className="mt-2" />
            <Typography
              tag="p"
              className="text-primary-500 text-xs mt-2 text-gray-500"
            >
              Register Link:
              <Link href="https://google.com" className="ml-2">
                https://futures-garden-human-perception-identity.eventbrite.de
              </Link>
            </Typography>
          </>
        )}
        {/* Post Country */}
        <Tag
          tagText={post.countryTag.tagText}
          tagCounter={post.countryTag.tagCounter}
          className="mt-1"
        />
        {/* Recommandations */}
        <div className={classNames(style.recommandations)}>
          {post?.recommendations?.images?.map((image, index) => (
            <Image
              src={image}
              key={`${index} - ${image}`}
              width={17}
              height={17}
              className={classNames('rounded-full')}
              alt={`Recommended by Person Image ${image}`}
            />
          ))}
          <Typography tag="p" className="text-xs text-gray-400 px-4">
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
    </div>
  );
};

export default HeaderComponent;
