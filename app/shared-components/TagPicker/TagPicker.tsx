import React, { use, useEffect, useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import classNames from 'classnames';
import { TagProps } from '../Tag/Tag';

export type TagPickerProps = {
  isMulti?: boolean;
  className?: string;
  selectedValue?: string;
  onChange?: (value: string) => void;
  tags?: TagProps[];
  updatePostData?: (data: any) => void;
};

interface Option {
  readonly label: string;
  readonly value: string;
}

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
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
  onChange,
  tags,
  updatePostData,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const tagOptions =
    tags?.map((tag) => createOption(tag.name)) || defaultOptions;
  const [options, setOptions] = useState(tagOptions);
  const [value, setValue] = useState<Option | null>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      if (isMulti) {
        setValue([...(value || []), newOption]);
      } else {
        setValue(newOption);
      }
    }, 1000);
  };

  useEffect(() => {
    if (selectedValue) {
      // setOptions([...tagOptions, createOption(selectedValue)]);
      setValue(createOption(selectedValue));
    }
  }, [selectedValue]);

  // useEffect(() => {
  //   if (onChange) {
  //     onChange(value?.label || '');
  //   }
  // }, [value]);

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue: Option) => {
        console.log('value changing');
        updatePostData &&
          updatePostData(tags?.find((tag) => tag.name === newValue.label));
        setValue(newValue);
      }}
      onCreateOption={handleCreate}
      options={options}
      value={value}
      isMulti={isMulti}
      className={classNames(className)}
      classNames={{
        control: (state) =>
          state.isFocused ? 'text-blue-site ' : 'border-grey-300',
        multiValue: () => '!bg-white !rounded-3xl px-5 shadow-md text-ellipsis',
        // singleValue: () =>
        //   '!bg-white !rounded-3xl px-5 shadow-md text-ellipsis !max-w-64',
      }}
    />
  );
};

export default TagPicker;
