import Image from 'next/image';
import style from './AffiliationsComponent.module.css';
import classNames from 'classnames';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import { Button } from 'flowbite-react';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';

export type AffiliationsComponentProps = {
  afiliations: Array<
    TagProps & {
      arole: string;
    }
  >;
  tagListTitle: string;
  current?: boolean;
  isEditModeOn?: boolean;
  updatePersonDataAffiliations?: (affiliations: any) => void;
  tags?: TagProps[];
  handleTagCreated?: () => void;
  title?: string;
};

const AffiliationsComponent: React.FC<AffiliationsComponentProps> = ({
  afiliations,
  tagListTitle,
  current,
  isEditModeOn,
  updatePersonDataAffiliations,
  tags,
  handleTagCreated,
  title,
}) => {
  const [currentAffiliations, setCurrentAffiliations] = useState(afiliations);

  const shouldAddNewAffiliation = () => {
    if (afiliations?.length === 0) return false;
    const lastMember = afiliations?.[afiliations.length - 1];
    return lastMember?.name && lastMember?.arole;
  };

  useEffect(() => {
    console.log('currentAffiliations', currentAffiliations);
    if (isEditModeOn) {
      if (shouldAddNewAffiliation() || !currentAffiliations) {
        handleAddAffiliation(0);
      }
      setCurrentAffiliations(afiliations);
    }
  }, [afiliations, isEditModeOn]);

  // useEffect(() => {
  //   console.log('currentAffiliations', currentAffiliations);
  // }, [currentAffiliations]);

  const handleAddAffiliation = (index: number) => {
    if (index === 0 && !currentAffiliations && !currentAffiliations?.length) {
      const newAffiliation = { id: '', name: '', arole: '' };
      const updatedAffiliations = [newAffiliation];
      updatePersonDataAffiliations &&
        updatePersonDataAffiliations(updatedAffiliations);
      setCurrentAffiliations(updatedAffiliations);
      return;
    }
    const newAffiliation = { id: '', name: '', arole: '' };
    // const updatedAffiliations = [
    //   ...currentAffiliations.slice(0, index + 1),
    //   newAffiliation,
    //   ...currentAffiliations.slice(index + 1),
    // ];
    let newUpdatedAffuliations = currentAffiliations;
    newUpdatedAffuliations.push(newAffiliation);
    // const updatedAffiliations =
    updatePersonDataAffiliations &&
      updatePersonDataAffiliations(newUpdatedAffuliations);
    setCurrentAffiliations(newUpdatedAffuliations);
  };

  const handleRemoveAffiliation = (index: number) => {
    const updatedAffiliations = currentAffiliations.filter(
      (_, i) => i !== index
    );
    updatePersonDataAffiliations &&
      updatePersonDataAffiliations(updatedAffiliations);
    setCurrentAffiliations(updatedAffiliations);
  };

  if (
    (!currentAffiliations ||
      currentAffiliations?.length === 0 ||
      (!currentAffiliations?.[0]?.arole && !currentAffiliations?.[0]?.name)) &&
    !isEditModeOn
  ) {
    return null;
  }

  // useEffect(() => {
  //   if (shouldAddNewAffiliation()) {
  //     handleAddAffiliation(0);
  //   }
  // }, [currentAffiliations]);

  return (
    <section className={classNames(style.tagListRootContainer)}>
      <div className={classNames('flex items-center', style.tagListTitle)}>
        <Typography
          tag="h2"
          className={classNames(
            'text-gray-800 grow'
            //  style.tagListTitle
          )}
        >
          {tagListTitle}
        </Typography>
      </div>
      {/* {!current && (
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full my-4', style.tagListTitle)}  
        >
          {title ? title : 'Former Affiliations'}
        </Typography>
      )} */}
      <div
        className={classNames(
          'flex w-full',
          isEditModeOn && 'flex-wrap'
        )}
      >
        {/* <ReactSortable
          list={currentAffiliations}
          setList={setCurrentAffiliations}
        > */}
          {currentAffiliations?.map((affilitiation, index) => (
            // <Reorder.Item
            //   key={`affiliation-${affilitiation.name}-${index}`}
            //   value={affilitiation}
            //   animate={false}
            // >
            <div
              key={`affiliation-${affilitiation.name}-${index}`}
              className={classNames(style.tagListContainer)}
            >
              {!isEditModeOn ? (
                affilitiation.arole &&
                affilitiation.name && (
                  <Typography
                    tag="span"
                    className={classNames(
                      'backgroundLabelAffiliation',
                      'pr-4 pl-2'
                    )}
                  >
                    {affilitiation.arole}
                  </Typography>
                )
              ) : (
                <div className={classNames(style.inputContainer)}>
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
                      setCurrentAffiliations(newAffiliations);
                      console.log('newAffiliations', newAffiliations);
                      updatePersonDataAffiliations &&
                        updatePersonDataAffiliations(newAffiliations);
                    }}
                    className={classNames(
                      // 'backgroundLabelAffiliation',
                      // style.genericTextArea,
                      style.roleInput
                    )}
                    isHorizontal
                  />
                </div>
              )}
              {!isEditModeOn ? (
                affilitiation.name && <Tag {...affilitiation} />
              ) : (
                <TagPicker
                  key={`affiliation-${affilitiation.name}-${index}`}
                  placeholder="Select Organisation"
                  tags={tags}
                  selectedValue={affilitiation?.name || undefined}
                  updatePostData={(value) => {
                    const newAffiliations = [...currentAffiliations];
                    newAffiliations[index] = {
                      ...newAffiliations[index],
                      ...value,
                    };
                    setCurrentAffiliations(newAffiliations);
                    console.log('newAffiliations', newAffiliations);
                    updatePersonDataAffiliations &&
                      updatePersonDataAffiliations(newAffiliations);
                  }}
                  tagType="organisation"
                  onTagCreated={handleTagCreated}
                />
              )}
              {isEditModeOn &&
                currentAffiliations?.[index + 1] &&
                affilitiation.arole &&
                affilitiation.name && (
                  <button
                    onClick={() => handleRemoveAffiliation(index)}
                    className={
                      'ml-4 text-sm bg-red-600 text-neutral-50 p-1 rounded-md inline-block text-nowrap'
                    }
                  >
                    Remove Affiliation
                  </button>
                )}
            </div>
            // </Reorder.Item>
          ))}
        {/* </ReactSortable> */}
      </div>
    </section>
  );
};

export default AffiliationsComponent;
