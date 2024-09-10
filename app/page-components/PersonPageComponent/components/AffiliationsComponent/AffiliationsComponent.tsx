import Image from 'next/image';
import style from './AffiliationsComponent.module.css';
import classNames from 'classnames';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';

export type AffiliationsComponentProps = {
  afiliations: Array<
    TagProps & {
      arole: string;
    }
  >;
  current?: boolean;
};

const AffiliationsComponent: React.FC<AffiliationsComponentProps> = ({
  afiliations,
  current,
}) => {
  return (
    <section className={style.personWorkplace}>
      {!current && (
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 w-full my-4',
            style.affiliationsTitle
          )}
        >
          Former Affiliations
        </Typography>
      )}
      {afiliations.map((affilitiation) => (
        <div
          key={`affiliation-${affilitiation.name}`}
          className={classNames(style.personWorkplaceItem)}
        >
          <Typography
            tag="span"
            className={classNames('text-gray-400', 'mr-2')}
          >
            {affilitiation.arole}:
          </Typography>
          <Tag
            name={affilitiation.name}
            popularity={affilitiation.popularity}
            href={affilitiation.href}
            picture={affilitiation.picture}
          />
        </div>
      ))}
    </section>
  );
};

export default AffiliationsComponent;
