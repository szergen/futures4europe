import Image from 'next/image';
import style from './AffiliationsComponent.module.css';
import classNames from 'classnames';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Typography from '@app/shared-components/Typography/Typography';
import InputText from '@app/shared-components/InputText/InputText';
import TagPicker from '@app/shared-components/TagPicker/TagPicker';
import { Button } from 'flowbite-react';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import { useEffect, useRef, useState } from 'react';
import { ItemInterface, ReactSortable } from 'react-sortablejs';
// import Sortable, { Swap } from 'sortablejs';

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
  placeholderRole?: string;
  placeholderTag?: string;
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
  placeholderRole = 'Optionally prefixed by your position',
  placeholderTag = 'Add one or more organisation tags',
}) => {
  const [currentAffiliations, setCurrentAffiliations] = useState(
    afiliations || []
  );
  const inputRefs = useRef([]);
  const [isDisabledSorting, setIsDisabledSorting] = useState(false);

  // #region Initialize Sortable Array
  // const [sortableArray, setSortableArray] = useState(
  //   currentAffiliations?.map((affiliation, index) => {
  //     return { id: index, name: affiliation.name };
  //   })
  // );

  const shouldAddNewAffiliation = () => {
    if (afiliations?.length === 0) return true;
    const lastMember = afiliations?.[afiliations.length - 1];
    return lastMember?.name;
  };

  useEffect(() => {
    console.log('currentAffiliations', currentAffiliations);
    if (isEditModeOn) {
      if (shouldAddNewAffiliation() || !currentAffiliations?.length) {
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

  // const handleInputChange = (e: any, index: number) => {
  //   const newAffiliations = [...currentAffiliations];
  //   newAffiliations[index] = {
  //     ...newAffiliations[index],
  //     arole: e?.target?.value,
  //   };
  //   setCurrentAffiliations(newAffiliations);
  //   updatePersonDataAffiliations &&
  //     updatePersonDataAffiliations(newAffiliations);
  //   console.log('debug12312312', inputRef);

  //   // Adjust the width of the input based on its content
  //   if (inputRef.current) {
  //     console.log('inputRef.current', inputRef.current);
  //     inputRef.current.style.width = `${inputRef.current.scrollWidth}px`;
  //   }
  // };

  // useEffect(() => {
  //   setSortableArray(
  //     currentAffiliations?.map((affiliation, index) => {
  //       return { id: index, name: affiliation?.name };
  //     })
  //   );
  // }, [currentAffiliations]);

  // useEffect(() => {
  //   if (shouldAddNewAffiliation()) {
  //     handleAddAffiliation(0);
  //   }
  // }, [currentAffiliations]);

  // Sortable.mount(new Swap());

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

      <ReactSortable
        list={currentAffiliations as unknown as ItemInterface[]}
        setList={(newState) => {
          setCurrentAffiliations(newState as any);
          updatePersonDataAffiliations &&
            updatePersonDataAffiliations(newState as any);
        }}
        sort={isEditModeOn || !isDisabledSorting}
        disabled={!isEditModeOn || isDisabledSorting}
        className={classNames(
          'flex w-fit flex-wrap z-50'
          // isEditModeOn && 'flex-col'
        )}
        // group="shared"
        onStart={(e) => {
          // console.log('onStart', e);
          e.item.classList.add(style.dragShadow);
        }}
        // onUpdate={(e) => {
        //   // console.log('onSelect', e);
        //   // e.preventDefault();
        //   e.item.classList.remove(style.dragShadow);
        // }}
        // onEnd={(e) => {
        //   // console.log('onSelect', e);
        //   // e.preventDefault();
        //   e.item.classList.remove(style.dragShadow);
        // }}
        // disabled={isDisabledSorting}
        // delay={100}
        // delayOnTouchOnly={true}
      >
        {currentAffiliations?.map((affilitiation, index) => (
          <div
            key={`affiliation-${affilitiation.name}-${index}`}
            className={classNames(style.tagListContainer)}
            // onClick={(e: any) => {
            //   setIsDisabledSorting(true);
            // }}
            // onMouseUp={(e: any) => {
            //   console.log('eeeee onMouseUp', e);
            //   e.preventDefault();
            //   e.stopPropagation();
            // }}
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
                <input
                  ref={(el) => (inputRefs.current[index] = el)}
                  placeholder={placeholderRole}
                  key={`affiliation-${affilitiation.name}-${index}`}
                  value={affilitiation.arole || ''}
                  // onChange={(e) => {
                  //   console.log(e?.target?.value);
                  //   const newAffiliations = [...currentAffiliations];
                  //   newAffiliations[index] = {
                  //     ...newAffiliations[index],
                  //     arole: e?.target?.value,
                  //   };
                  //   setCurrentAffiliations(newAffiliations);
                  //   console.log('newAffiliations', newAffiliations);
                  //   updatePersonDataAffiliations &&
                  //     updatePersonDataAffiliations(newAffiliations);
                  // }}
                  // onChange={(e) => handleInputChange(e, index)}
                  onChange={(e) => {
                    const newAffiliations = [...currentAffiliations];
                    newAffiliations[index] = {
                      ...newAffiliations[index],
                      arole: e?.target?.value,
                    };
                    setCurrentAffiliations(newAffiliations);
                    updatePersonDataAffiliations &&
                      updatePersonDataAffiliations(newAffiliations);
                    // console.log('debug12312312', inputRef);

                    // Adjust the width of the input based on its content
                    if (inputRefs.current[index]) {
                      inputRefs.current[
                        index
                      ].style.width = `${inputRefs.current[index].scrollWidth}px`;
                    }
                  }}
                  className={classNames(
                    // 'backgroundLabelAffiliation',
                    // style.genericTextArea,
                    style.roleInput,
                    style.inputText
                  )}
                  style={{
                    width: `${inputRefs.current?.[index]?.scrollWidth}px`,
                  }}
                  // isHorizontal
                />
              </div>
            )}
            {!isEditModeOn ? (
              affilitiation.name && <Tag {...affilitiation} />
            ) : (
              <>
                <TagPicker
                  key={`affiliation-${affilitiation.name}-${index}`}
                  placeholder={placeholderTag}
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
                  setIsDisabledSorting={setIsDisabledSorting}
                  tagType="organisation"
                  onTagCreated={handleTagCreated}
                />
                <button
                  onClick={() => handleRemoveAffiliation(index)}
                  className={classNames(style.affiliationRemove, '')}
                  key={`affiliation-remove-${affilitiation.name}-${index}`}
                >
                  <SpriteSvg.EditCloseIcon
                    className="mb-0"
                    sizeW={16}
                    sizeH={16}
                    viewBox={'-3 -2 22 22'}
                    fill={'#fff'}
                    strokeWidth={0}
                    inline={true}
                  />
                </button>
              </>
            )}
            {/* {isEditModeOn && (
            // <button
            //   onClick={() => handleRemoveAffiliation(index)}
            //   className={classNames(style.affiliationRemove, '')}
            //   key={`affiliation-remove-${affilitiation.name}-${index}`}
            // >
            //   <SpriteSvg.EditCloseIcon
            //     className="mb-0"
            //     sizeW={16}
            //     sizeH={16}
            //     viewBox={'-3 -2 22 22'}
            //     fill={'#fff'}
            //     strokeWidth={0}
            //     inline={true}
            //   />
            // </button>
          )} */}
          </div>
        ))}
      </ReactSortable>
    </section>
  );
};

export default AffiliationsComponent;
