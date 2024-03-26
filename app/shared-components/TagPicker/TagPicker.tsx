import React, { useState } from 'react';
import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

interface Option {
  readonly label: string;
  readonly value: string;
}

export type TagPickerProps = {
  tags?: string[];
  selectedTags?: string[];
  setSelectedTags?: (tags: string[]) => void;
};

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
];

export const TagPicker: React.FC<TagPickerProps> = ({
  tags,
  selectedTags,
  setSelectedTags,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(defaultOptions);
  const [value, setValue] = useState<Option | null>();

  const handleCreate = (inputValue: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue([...value, newOption]);
    }, 1000);
  };

  return (
    <CreatableSelect
      isClearable
      isDisabled={isLoading}
      isLoading={isLoading}
      onChange={(newValue) => setValue(newValue)}
      onCreateOption={handleCreate}
      options={options}
      value={value}
      isMulti
    />
  );
};

export default TagPicker;

// Simple componenet without creatable
// export const TagPicker: React.FC<TagPickerProps> = ({
//     tags,
//     selectedTags,
//     setSelectedTags,
//   }) => {
//     const [selectedOption, setSelectedOption] = useState(null);
//     return (
//       <Select
//         closeMenuOnSelect={false}
//         defaultValue={selectedOption}
//         isMulti
//         onChange={setSelectedOption}
//         options={options}
//       />
//     );
//   };
