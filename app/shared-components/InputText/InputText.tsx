import { Label, TextInput } from 'flowbite-react';
import { title } from 'process';
import { useEffect, useState } from 'react';

export type InputTextProps = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  validate?: (value: string) => string;
  setValidationState?: (value: any) => void;
  shouldUpdateValueState?: boolean;
};

export const InputText: React.FC<InputTextProps> = ({
  label,
  helperText,
  placeholder,
  className,
  value,
  onChange,
  validate,
  setValidationState,
  shouldUpdateValueState,
}) => {
  // Handle on change
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState(''); // State for error message

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    console.log(newValue);
    setInputValue(newValue);

    if (validate) {
      const errorMessage = validate(newValue);
      setError(errorMessage);
    }
    onChange && onChange(e);
  };

  useEffect(() => {
    if (validate && value) {
      const errorMessage = validate(value);
      setValidationState && setValidationState(errorMessage);
      setError(errorMessage);
    }
    if (shouldUpdateValueState) {
      setInputValue(value);
    }
  }, [value]);

  return (
    <div className="max-w-md relative">
      {label && (
        <div className="mb-2 block">
          <Label htmlFor="email3" value={label} />
        </div>
      )}
      <TextInput
        id={label?.toLowerCase()}
        type="text"
        placeholder={placeholder ? placeholder : undefined}
        required
        helperText={helperText ? <>{helperText}</> : undefined}
        className={className}
        value={inputValue}
        onChange={handleChange}
      />
      {error && <p className="errorInputText text-red-500 text-sm mt-2">{error}</p>}{' '}
    </div>
  );
};

export default InputText;
