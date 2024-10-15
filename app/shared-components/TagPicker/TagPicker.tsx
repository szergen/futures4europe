import React, { use, useEffect, useState } from 'react';
import { items } from '@wix/data';
import CreatableSelect from 'react-select/creatable';
import Select, { components } from 'react-select';
import classNames from 'classnames';
import { TagProps } from '../Tag/Tag';
import { Modal, Button, TextInput, Label } from 'flowbite-react';
import { useWixModules } from '@wix/sdk-react';
import styles from './TagPicker.module.css';
import { motion } from 'framer-motion';

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
}) => {
  // #region Tag creation form state
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [tagName, setTagName] = useState('');
  const [tagTagline, setTagTagline] = useState('');
  const [isLoading, setIsLoading] = useState(false);
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
      const filteredTags = extraFilterTags(tags, selectedValues[0]);
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
  / * catalin */;

  // Define the custom animated Input component
  const AnimatedInput = (props) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        {/* Spread props to include the original Input component */}
        <components.Input {...props} />
      </motion.div>
    );
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      border: 'none', // Removes the border
      boxShadow: 'none', // Removes the focus outline
      '&:hover': {
        border: 'none', // Removes the border on hover as well
      },
      minHeight: '5 0px',
      height: '50px',
    }),

    input: (provided, state) => ({
      ...provided,
      color: 'var(--primary-brand-color)',
      fontSize: 'var(--w-font-size-tag)',
      padding: '0px var(--w-space-s)',
      backgroundColor: state.isFocused ? null : 'var(--primary-white)',
      borderRadius: 'var(--p-border-radius-tag)',
      margin: '8px 0px',
      // minHeight: state.isFocused ? null : 'var(--w-space-xxl)',
      transition: 'all 100ms',
      border: 'none', // Removes the border on the input field
      outline: 'none', // Removes the input outline
      boxShadow: '0px 0px 0px 3px var(--color-background-brand-tag)',
      // height: 'var(--w-space-xxl)',
    }),
    menu: (provided) => ({
      ...provided,
      width: '300px', // Set the desired width for the menu
      position: 'absolute', // Ensures the menu is positioned absolutely
      zIndex: 9999, // Ensures the menu is on top
    }),
    menuList: (provided) => ({
      ...provided,
      maxHeight: '200px', // Set a max height if needed
      padding: '10px 6px',
    }),
    valueContainer: (provided) => ({
      ...provided,
      // padding: '0px',
    }),
    singleValue: (provided) => ({
      ...provided,
      margin: '0 4px', // Adjust margin if necessary
    }),
    placeholder: (provided) => ({
      ...provided,
      padding: '0px var(--w-space-s)', // Set a max height if needed
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
  };

  return (
    <>
      <div
        className={classNames(
          styles.tagPickerWrapper,
          'relative cursor-pointer'
        )}
      >
        {tagTypeLabel && (
          <Label htmlFor="tagPicker" className="mb-20">
            {tagTypeLabel}
          </Label>
        )}
        <CreatableSelect
          classNamePrefix="react-select"
          unstyled
          // menuIsOpen={true}
          components={customComponents}
          isClearable={true}
          isDisabled={isLoading}
          isLoading={isLoading}
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
            multiValue: () => 'tagPickerPill tagPickerPillRemove z-5 my-1 cursor-pointer',
            singleValue: () => 'tagPickerPillSingle tagPickerPillRemove cursor-pointer z-5',
            menu: () => classNames('', styles.tagPickerMenu),
            menuList: () => classNames('', styles.tagPickerMenuList),
            option: () => classNames('', styles.option),
            valueContainer: () =>
              classNames(
                'text-gray-400 bg-slate-100 rounded-lg ',
                styles.tagPickerValueContainer
              ),
          }}
        />
        {showCreateForm && (
          <Modal show={showCreateForm} onClose={() => setShowCreateForm(false)}>
            <Modal.Header>Add project title</Modal.Header>
            <Modal.Body>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <Label htmlFor="tagName">Project Name</Label>
                  <TextInput
                    id="tagName"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="tagTagline">Project Tagline</Label>
                  <TextInput
                    id="tagTagline"
                    value={tagTagline}
                    onChange={(e) => setTagTagline(e.target.value)}
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
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
