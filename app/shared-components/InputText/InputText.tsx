import { Label, TextInput } from 'flowbite-react';
import { useState } from 'react';

export type InputTextProps = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const InputText: React.FC<InputTextProps> = ({
  label,
  helperText,
  placeholder,
  className,
  value,
  onChange,
}) => {
  // Handle on change
  const [inputValue, setInputValue] = useState(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
    onChange && onChange(e);
  };

  return (
    <div className="max-w-md">
      {label && (
        <div className="mb-2 block">
          <Label htmlFor="email3" value={label} />
        </div>
      )}
      <TextInput
        id="email3"
        type="email"
        placeholder={placeholder ? placeholder : undefined}
        required
        helperText={helperText ? <>{helperText}</> : undefined}
        className={className}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputText;
