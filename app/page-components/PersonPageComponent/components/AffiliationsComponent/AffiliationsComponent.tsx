import Image from 'next/image';
import style from './AffiliationsComponent.module.css';
import classNames from 'classnames';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import { useEffect, useState } from 'react';

export type AffiliationsComponentProps = {
  afiliations: Array<
    TagProps & {
      arole: string;
    }
  >;
  current?: boolean;
  isEditModeOn?: boolean;
  updatePersonDataAffiliations?: (affiliations: any) => void;
  tags?: TagProps[];
  handleTagCreated?: () => void;
};

const AffiliationsComponent: React.FC<AffiliationsComponentProps> = ({
  afiliations,
  current,
  isEditModeOn,
  updatePersonDataAffiliations,
  tags,
  handleTagCreated,
}) => {
  const [currentAffiliations, setCurrentAffiliations] = useState(afiliations);

  useEffect(() => {
    setCurrentAffiliations(afiliations);
  }, [afiliations, isEditModeOn]);

  const handleAddAffiliation = (index: number) => {
    const newAffiliation = { id: '', name: '', arole: '' };
    const updatedAffiliations = [
      ...currentAffiliations.slice(0, index + 1),
      newAffiliation,
      ...currentAffiliations.slice(index + 1),
    ];
    updatePersonDataAffiliations &&
      updatePersonDataAffiliations(updatedAffiliations);
    setCurrentAffiliations(updatedAffiliations);
  };

  const handleRemoveAffiliation = (index: number) => {
    const updatedAffiliations = currentAffiliations.filter(
      (_, i) => i !== index
    );
    updatePersonDataAffiliations &&
      updatePersonDataAffiliations(updatedAffiliations);
    setCurrentAffiliations(updatedAffiliations);
  };

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
      {currentAffiliations.map((affilitiation, index) => (
        <div
          key={`affiliation-${affilitiation.name}`}
          className={classNames(style.personWorkplaceItem)}
        >
          {!isEditModeOn ? (
            affilitiation.arole &&
            affilitiation.name && (
              <Typography
                tag="span"
                className={classNames('text-gray-400', 'mr-2')}
              >
                {affilitiation.arole}:
              </Typography>
            )
          ) : (
            <InputText
              placeholder="Role"
              key={`affiliation-${affilitiation.name}`}
              value={affilitiation.arole || ''}
              onChange={(e) => {
                console.log(e?.target?.value);
                const newAffiliations = [...currentAffiliations];
                newAffiliations[index] = {
                  ...newAffiliations[index],
                  arole: e?.target?.value,
                };
                console.log('newAffiliations', newAffiliations);
                updatePersonDataAffiliations &&
                  updatePersonDataAffiliations(newAffiliations);
              }}
              className="h-6"
            />
          )}
          {!isEditModeOn ? (
            affilitiation.name && <Tag {...affilitiation} />
          ) : (
            <TagPicker
              placeholder="Select Organisation"
              tags={tags}
              className="w-80"
              selectedValue={affilitiation.name || undefined}
              updatePostData={(value) => {
                const newAffiliations = [...currentAffiliations];
                newAffiliations[index] = {
                  ...newAffiliations[index],
                  ...value,
                };
                console.log('newAffiliations', newAffiliations);
                updatePersonDataAffiliations &&
                  updatePersonDataAffiliations(newAffiliations);
              }}
              tagType="organisation"
              onTagCreated={handleTagCreated}
            />
          )}
          {isEditModeOn && (
            <div className="h-3">
              <button
                onClick={() => handleAddAffiliation(index)}
                className={
                  'ml-4 text-sm bg-green-600 text-neutral-50 p-1 rounded-md'
                }
              >
                Add Affiliation
              </button>
              <button
                onClick={() => handleRemoveAffiliation(index)}
                className={
                  'ml-4 text-sm bg-red-600 text-neutral-50 p-1 rounded-md'
                }
              >
                Remove Affiliation
              </button>
            </div>
          )}
        </div>
      ))}
    </section>
  );
};

export default AffiliationsComponent;
