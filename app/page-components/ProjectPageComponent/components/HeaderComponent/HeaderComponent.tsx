import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { formatDate } from '@app/page-components/PostPageComponent/PostPageComponent.utils';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';

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
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ project }) => {
  return (
    <div className={classNames(style.personHeader)}>
      <div className={style.imageAndSocialColumn}>
        <Image
          src={getImageUrlForMedia(
            project?.projectTag?.picture ||
              'https://placehold.co/147x147?text=Profile Image',
            147,
            147
          )}
          width={147}
          height={147}
          className={classNames('rounded-full')}
          alt={`User Avatar - ${project.title}`}
        />
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
        <Typography tag="h1" className=" text-gray-800">
          {project?.projectTag?.name}
          {/* Person Popularity */}
          <span
            data-after={project?.projectTag?.popularity}
            className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
          ></span>
        </Typography>
        {/* Tagline */}
        <Typography tag="h3" className="text-gray-800 italic">
          {project?.projectTag?.tagLine}
        </Typography>
        {/* Project Period */}
        <Typography
          tag="p"
          className="text-gray-500 text-sm font-bold mt-2 mb-2"
        >
          {formatDate(project?.projectStartDate)} -{' '}
          {formatDate(project?.projectEndDate)}
        </Typography>

        {/* project funded */}
        {project.projectFunded && (
          <Tag {...project.projectFunded} className="mb-1" />
        )}
        {/* Person domains */}
        {/* <div className={style.domains}>
          {project.domains.slice(0, 3).map((domain) => (
            <Tag key={domain.name} {...domain} />
          ))}
        </div> */}
        {/* Person Country */}
        <Tag {...project.countryTag} />
      </div>
    </div>
  );
};

export default HeaderComponent;
