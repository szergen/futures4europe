import Image from 'next/image';
import style from './HeaderComponent.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';

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
    activity: Array<TagProps>;
  };
};

const HeaderComponent: React.FC<HeaderComponentProps> = ({ organisation }) => {
  const establishedYear = new Date(organisation.organisationEstablishedDate).getFullYear();

  return (
    <div className={classNames(style.personHeader)}>
      <div className={style.imageAndSocialColumn}>
        <Image
          src={getImageUrlForMedia(
            organisation?.organisationTag?.picture ||
              'https://placehold.co/147x147?text=Profile Image',
            147,
            147
          )}
          width={147}
          height={147}
          className={classNames('rounded-full')}
          alt={`User Avatar - ${organisation.title}`}
        />
        {/* Social Icons */}
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
          {organisation.views} views
        </Typography>
      </div>
      <div className={style.detailsColumn}>
        {/* Organisation Info Name */}
        <Typography tag="h1" className=" font-bold text-greyShade">
          {organisation?.organisationTag?.name}
          {/* Organisation Popularity */}
          <span
            data-after={organisation?.organisationTag?.popularity}
            className="after:content-[attr(data-after)] text-lg relative top-[-30px] ml-1 text-gray-500 dark:text-gray-400"
          ></span>
        </Typography>
        {/* Tagline */}
        <Typography tag="h3" className="text-greyShade text-16 italic">
          {organisation?.organisationTag?.tagLine}
        </Typography>        
        {/* Founded */}
        <div className="flex items-center my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="black"
            viewBox="0 0 16 16"
            strokeWidth={0}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path 
              fill-rule="evenodd" 
              clip-rule="evenodd" 
              d="M15.2085 3.66662V6.67138H13.795V11.7597H15.2085V16H0.791504V11.7597H2.20418V6.67138H0.791504V3.66662L7.99961 0L15.2085 3.66662ZM2.20493 4.53201L7.99961 1.58605L13.795 4.53201V5.25795H2.20493V4.53201ZM12.3816 13.1731H13.795V14.5866H2.20493V13.1731H3.61836V6.67138H5.59716V13.1731H7.00983V6.67138H8.98938V13.1731H10.4021V6.67138H12.3816V13.1731Z"
              />
          </svg>
          <Typography tag="span" className="text-greyShade text-stroke-gray font-medium text-14 ml-2">
            Founded in {new Date(organisation.organisationEstablishedDate).getFullYear()}
          </Typography>
        </div>
        {/* Organisation domains */}
        <div className={style.domains}>
          {organisation.activity?.map((activity) => (
            <Tag key={activity.name} {...activity} />
          ))}
        </div>
        {/* Organisation Country */}
        <Tag {...organisation.countryTag} />
      </div>
    </div>
  );
};

export default HeaderComponent;
