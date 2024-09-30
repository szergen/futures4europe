import React, { use, useEffect, useState } from 'react';
import { items } from '@wix/data';
import CreatableSelect from 'react-select/creatable';
import classNames from 'classnames';
import { TagProps } from '../Tag/Tag';
import { Modal, Button, TextInput, Label } from 'flowbite-react';
import { useWixModules } from '@wix/sdk-react';

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

  return (
    <>
      <div className="flex flex-col mt-2">
        <Label htmlFor="tagPicker" className="mb-2">
          {tagTypeLabel}
        </Label>
        <CreatableSelect
          isClearable
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={handleUpdateData}
          onCreateOption={handleCreate}
          options={options}
          value={value}
          isMulti={isMulti}
          placeholder={placeholder || 'Select or create a tag'}
          className={classNames('z-50', className)}
          classNames={{
            control: (state) =>
              state.isFocused ? 'text-blue-site ' : 'border-grey-300',
            multiValue: () =>
              '!bg-white !rounded-3xl px-5 shadow-md text-ellipsis',
            // singleValue: () =>
            //   '!bg-white !rounded-3xl px-5 shadow-md text-ellipsis !max-w-64',
          }}
        />
        {showCreateForm && (
          <Modal show={showCreateForm} onClose={() => setShowCreateForm(false)}>
            <Modal.Header>Create New Tag</Modal.Header>
            <Modal.Body>
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <Label htmlFor="tagName">Tag Name</Label>
                  <TextInput
                    id="tagName"
                    value={tagName}
                    onChange={(e) => setTagName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <Label htmlFor="tagTagline">Tag Tagline</Label>
                  <TextInput
                    id="tagTagline"
                    value={tagTagline}
                    onChange={(e) => setTagTagline(e.target.value)}
                    required
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
