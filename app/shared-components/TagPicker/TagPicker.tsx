import React, { use, useEffect, useState } from 'react';
import { items } from '@wix/data';
import CreatableSelect from 'react-select/creatable';
import Select, { components } from 'react-select';
import classNames from 'classnames';
import Tag, { TagProps } from '../Tag/Tag';
import { Modal, Button, TextInput, Label } from 'flowbite-react';
import { useWixModules } from '@wix/sdk-react';
import styles from './TagPicker.module.css';
import { motion } from 'framer-motion';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
// import Option from 'react-select/dist/declarations/src/components/Option';

export type TagPickerProps = {
  isMulti?: boolean;
  className?: string;
  selectedValue?: string;
  selectedValues?: Array<string>;
  tags?: TagProps[];
  updatePostData?: (data: any) => void;
  tagType?: string;
  onTagCreated?: () => void;
  tagTypeLabel?: string;
  placeholder?: string;
  extraFilterTags?: (tags: TagProps[], firstTag: string) => TagProps[];
  setIsDisabledSorting?: (value: boolean) => void;
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label?.toLowerCase()?.replace(/\W/g, ''),
});

let defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
];

// Custom ClearIndicator component for single-value selects
const customClearIndicator = (props) => {
  return props.isMulti ? null : <components.ClearIndicator {...props} />;
};

export const TagPicker: React.FC<TagPickerProps> = ({
  isMulti,
  className,
  selectedValue,
  tags,
  updatePostData,
  selectedValues,
  tagType = 'Unassigned',
  onTagCreated,
  tagTypeLabel,
  placeholder,
  extraFilterTags,
  setIsDisabledSorting,
}) => {
  // #region Tag creation form state
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [tagName, setTagName] = useState('');
  const [tagTagline, setTagTagline] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { tags: allTags } = useAuth();
  // #endregion

  // #region Tag picker state
  const tagOptions =
    tags?.map((tag) => createOption(tag.name)) || defaultOptions;
  const [options, setOptions] = useState(tagOptions);
  const [value, setValue] = useState<Option | Array<Option> | null>();
  // #endregion

  // #region extra filtering logic
  useEffect(() => {
    if (extraFilterTags) {
      console.log('filteredTags 1st value', selectedValues);
      const filteredTags = extraFilterTags(tags, selectedValues?.[0]); // TODO: Check if this is the correct value @ALEX - am adugat ?. (TypeError: Cannot read properties of undefined (reading '0'))
      console.log('filteredTags', filteredTags);
      setOptions(filteredTags?.map((tag) => createOption(tag.name)));
    }
  }, [tags]);
  // #endregion

  // #region Wix upload logic
  const { insertDataItem } = useWixModules(items);
  const uploadTag = async (tagName: string, tagTagline: string) => {
    try {
      const result = await insertDataItem({
        dataCollectionId: 'Tags',
        dataItem: {
          data: {
            name: tagName,
            tagLine: tagTagline,
            tagType: tagType,
          },
        },
      });
      return result;
    } catch (error) {
      console.error('Error uploading tag:', error);
    }
  };
  // #endregion

  // #region Tag creation form handlers
  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newOption = createOption(tagName);
    setIsLoading(true);

    try {
      // #region Logic for creating Tag in Wix
      const uploadedTag = await uploadTag(tagName, tagTagline);
      console.log('uploadedTag', uploadedTag);
      // #endregion

      // #region Logic for updating the tag picker options
      setOptions((prev) => [...prev, newOption]);
      if (isMulti) {
        setValue([...(value || []), newOption]);
      } else {
        setValue(newOption);
      }
      // #endregion

      // #region Callback for refreshing the tags
      onTagCreated && onTagCreated();
      // #endregion

      // #region Extra logic to update the post data
      // Single tag picker
      tags.push(uploadedTag?.dataItem?.data);
      updatePostData &&
        !isMulti &&
        updatePostData(tags?.find((tag) => tag?.name === newOption?.label));
      // Multi tag picker
      updatePostData &&
        isMulti &&
        updatePostData(
          [...(value || []), newOption]?.map((value: any) =>
            tags?.find((tag) => tag?.name === value?.label)
          )
        );
      // #endregion

      // #region Resetting the form state
      setIsLoading(false);
      setShowCreateForm(false);
      setTagName('');
      setTagTagline('');
      // #endregion
    } catch (error) {
      console.error('Error uploading tag in formSubmit:', error);
      setIsLoading(false);
    }
  };

  const handleCreate = (inputValue: string) => {
    setTagName(inputValue);
    setShowCreateForm(true);
  };
  // #endregion

  useEffect(() => {
    if (selectedValue) {
      // setOptions([...tagOptions, createOption(selectedValue)]);
      setValue(createOption(selectedValue));
    }
    if (selectedValues) {
      setValue(selectedValues?.map((value) => createOption(value)));
    }
  }, [selectedValue, selectedValues]);

  const handleUpdateData = (newValue: Option) => {
    console.log('value changing');
    updatePostData &&
      !isMulti &&
      updatePostData(tags?.find((tag) => tag?.name === newValue?.label));
    console.log(
      'debug1->tag found',
      tags?.find((tag) => tag?.name === newValue?.label)
    );
    updatePostData &&
      isMulti &&
      updatePostData(
        newValue?.map((value: any) =>
          tags?.find((tag) => tag?.name === value?.label)
        )
      );
    setValue(newValue);
  };
  // / * catalin */;

  // Define the custom animated Input component
  const AnimatedInput = (props) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0 }}
      >
        {/* Spread props to include the original Input component */}
        <components.Input {...props} />
      </motion.div>
    );
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        border: 'none',
      },
      minHeight: '5 0px',
      margin: '0px 0px 0px 0px',
    }),
    input: (provided, state) => ({
      ...provided,
      color: 'var(--primary-brand-color)',
      fontSize: 'var(--w-font-size-tag)',
      padding: '0px var(--w-space-s)',
      height: 'var(--w-space-xxxl)',
      // minHeight: state.isFocused ? null : 'var(--w-space-xxl)',
      transition: '',
      border: 'none',
      outline: 'none',
      backgroundColor: state.selectProps.inputValue
        ? 'var(--color-background-empty)'
        : 'var(--color-background-brand-tag)',
      borderRadius: 'var(--p-border-radius-tag)',
    }),
    menu: (provided) => ({
      ...provided,
      width: '100%',
      position: 'absolute',
      zIndex: 9999,
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '200px',
      padding: '10px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      // padding: '0px',
    }),
    singleValue: (provided) => ({
      ...provided,
      position: 'relative',
    }),
    option: (provided) => ({
      ...provided,
      margin: '0 4px',
    }),
    placeholder: (provided, state) => ({
      ...provided,
      padding: '0px var(--w-space-s)',
      margin: '0px 4px',
      backgroundColor: 'var(--primary-white)',
      borderRadius: 'var(--p-border-radius-tag)',
    }),
    // indicatorSeparator: state => ({
    //   display: 'none',
    // }),
    // indicatorsContainer: (provided, state) => ({
    //   ...provided,
    //   height: '30px',
    // }),
  };

  // REVIEW catalin

  // components
  const customComponents = {
    ClearIndicator: customClearIndicator,
    Option: (props: any) => {
      const correspondingTag = tags?.find(
        (tag) => tag.name === props.data.label
      );
      return (
        // <components.Option {...props}>
        correspondingTag ? (
          <components.Option {...props}>
            <div
              className={classNames(
                styles.tagPickerTagline,
                'p-1 ml-2 flex flex-row items-center items-left'
              )}
              // onClick={(e: any) => {
              //   console.log('eeeee onClick', e);
              //   // e.preventDefault();
              //   e.stopPropagation();
              // }}
              // onMouseUp={(e: any) => {
              //   console.log('eeeee onMouseUp', e);
              //   e.preventDefault();
              //   // e.stopPropagation();
              // }}
            >
              <Tag
                {...correspondingTag}
                disableTooltip={true}
                disableLink={true}
              />
              <p>{correspondingTag.tagLine}</p>
            </div>
          </components.Option>
        ) : (
          <button
            className="bg-sky-600 text-white px-4 py-2 rounded-lg"
            onClick={() => {
              console.log('debug1->props', props);
              handleCreate(props.value);
            }}
          >
            Create {props.value} Tag
          </button>
        )
        // </components.Option>
      );
    },
    MultiValue: (props: any) => {
      const correspondingTag = tags?.find(
        (tag) => tag.name === props.data.label
      );
      return correspondingTag ? (
        <components.MultiValue {...props}>
          <Tag {...correspondingTag} disableTooltip={true} disableLink={true} />
        </components.MultiValue>
      ) : (
        ''
      );
    },
    // Control: ({ children, ...props }: ControlProps<any>) => {
    //   return (
    //     <components.Control {...props}>
    //       👍 {children}
    //     </components.Control>
    //   );
    // },
    // SingleValue: (props: any) => {
    //   const correspondingTag = tags?.find(
    //     (tag) => tag.name === props.data.label
    //   );
    //   return correspondingTag ? (
    //     <components.SingleValue {...props}>
    //       <Tag {...correspondingTag} disableTooltip={true} disableLink={true} />
    //     </components.SingleValue>
    //   ) : (
    //     ''
    //   );
    // },
  };

  const validationForTagName = (tagName: string) => {
    return allTags?.find(
      (tag) => tag?.name === tagName && tag?.tagType === tagType
    );
  };

  const validationFunctionForTitle = (tagName: string | undefined) => {
    if (!tagName) {
      setIsTagNameValid(false);
      return 'Tag Name is required';
    }
    if (tagName?.length < 2) {
      setIsTagNameValid(false);
      return 'Tag Name should be at least 2 characters long';
    }
    if (tagName?.length > 100) {
      setIsTagNameValid(false);
      return 'Tag Name should be at most 100 characters long';
    }

    if (validationForTagName(tagName)) {
      setIsTagNameValid(false);
      return 'Tag Name already exists in a different tag type';
    }
    // const isTempTitleExisting = existingPostPagesTitles?.some(
    //   (postPageTitle) =>
    //     postPageTitle !== defaultPostTitle && postPageTitle === tempTitle
    // );
    // if (isTempTitleExisting) {
    //   return 'Title already exists';
    // }
    setIsTagNameValid(true);

    return '';
  };

  const [isTagNameValid, setIsTagNameValid] = useState(true);
  const [validationMessage, setValidationMessage] = useState('');

  useEffect(() => {
    setValidationMessage(validationFunctionForTitle(tagName));
  }, [tagName]);

  return (
    <>
      <div
        className={classNames(
          styles.tagPickerWrapper,
          'w-full relative cursor-pointer'
        )}
        // onClick={(e: any) => {
        //   console.log('eeeee onClick', e);
        //   // e.preventDefault();
        //   e.stopPropagation();
        // }}
        // onMouseUp={(e: any) => {
        //   console.log('eeeee onMouseUp', e);
        //   // e.preventDefault();
        //   e.stopPropagation();
        // }}
      >
        {tagTypeLabel && (
          <Label htmlFor="tagPicker" className="mb-20">
            {tagTypeLabel}
          </Label>
        )}
        <CreatableSelect
          classNamePrefix="react-select"
          unstyled
          // menuIsOpen={tagType === 'organisation'}
          components={customComponents}
          // onMenuOpen={(e) => console.log('menu open', e)}
          // menuIsOpen={true}
          isClearable={true}
          isDisabled={isLoading}
          isLoading={isLoading}
          onMenuOpen={() => {
            setIsDisabledSorting && setIsDisabledSorting(true);
          }}
          onMenuClose={() => {
            setIsDisabledSorting && setIsDisabledSorting(false);
          }}
          onChange={handleUpdateData}
          onCreateOption={handleCreate}
          options={options}
          value={value}
          isMulti={isMulti}
          placeholder={placeholder || 'Add one or more post type tags'}
          styles={customStyles}
          className={classNames('', className)}
          classNames={{
            control: (state) =>
              classNames(
                state.isFocused ? styles.TagCursor : 'text-gray-site' // Proper ternary expression
              ),
            multiValue: () =>
              classNames(
                // styles.tagPickerPill,
                'tagPickerPill tagPickerPillRemove cursor-pointer'
                // styles.tagPickerPillMultiModule
              ),
            singleValue: () =>
              classNames(
                'tagPickerPillSingle cursor-pointer',
                styles.tagPickerPillSingleModule
              ),
            menu: () => classNames('', styles.tagPickerMenu),
            menuList: () => classNames('', styles.tagPickerMenuList),
            // option: () => classNames('', styles.option),
            valueContainer: () =>
              classNames(
                'text-gray-400', // bg-slate-100
                styles.tagPickerValueContainer
              ),
          }}
        />
        {showCreateForm && (
          <Modal show={showCreateForm} onClose={() => setShowCreateForm(false)}>
            <Modal.Header>Add tag element</Modal.Header>
            <Modal.Body>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <Label htmlFor="tagName" className="relative">
                    Project Name
                  </Label>
                  <TextInput
                    id="tagName"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    required
                    helperText={
                      !isTagNameValid && (
                        <span className="text-red-600 relative -top-3">
                          Name already exists
                          {validationMessage}
                        </span>
                      )
                    }
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="tagTagline">Tagline</Label>
                  <TextInput
                    id="tagTagline"
                    value={tagTagline}
                    onChange={(e) => setTagTagline(e.target.value)}
                  />
                </div>
                <Button
                  disabled={!isTagNameValid || isLoading}
                  type="submit"
                  // disabled={isLoading}
                >
                  Submit
                </Button>
              </form>
            </Modal.Body>
          </Modal>
        )}
      </div>
    </>
  );
};

export default TagPicker;
