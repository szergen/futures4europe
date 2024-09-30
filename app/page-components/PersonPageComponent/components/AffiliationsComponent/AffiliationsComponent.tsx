import Image from 'next/image';
import style from './AffiliationsComponent.module.css';
import classNames from 'classnames';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import InputText from '@app/shared-components/InputText/InputText';

export type AffiliationsComponentProps = {
  afiliations: Array<
    TagProps & {
      arole: string;
    }
  >;
  current?: boolean;
  isEditModeOn?: boolean;
};

const AffiliationsComponent: React.FC<AffiliationsComponentProps> = ({
  afiliations,
  current,
  isEditModeOn,
}) => {
  console.log('AffiliationsComponent', afiliations);
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
      {afiliations.map((affilitiation, index) => (
        <div
          key={`affiliation-${affilitiation.name}`}
          className={classNames(style.personWorkplaceItem)}
        >
          {!isEditModeOn ? (
            <Typography
              tag="span"
              className={classNames('text-gray-400', 'mr-2')}
            >
              {affilitiation.arole}:
            </Typography>
          ) : (
            <InputText
              placeholder="Role"
              value={affilitiation?.arole || ''}
              onChange={(e) => {
                console.log(e.target.value);
              }}
            />
          )}
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
