import exp from 'constants';
import { Label, TextInput } from 'flowbite-react';

export type InputTextProps = {
  label?: string;
  placeholder?: string;
  helperText?: string;
  className?: string;
};

export const InputText: React.FC<InputTextProps> = ({
  label,
  helperText,
  placeholder,
  className,
}) => {
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
      />
    </div>
  );
};

export default InputText;
