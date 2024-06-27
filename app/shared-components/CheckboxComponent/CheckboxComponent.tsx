import { Checkbox, Label } from 'flowbite-react';

export type CheckboxComponentProps = {
  id: string;
  defaultChecked?: boolean;
  label?: string;
};

export const CheckboxComponent: React.FC<CheckboxComponentProps> = ({
  defaultChecked,
  label,
}) => {
  return (
    <div className="flex max-w-md flex-col gap-4" id="checkbox">
      <div className="flex items-center gap-2">
        <Checkbox id="accept" defaultChecked={defaultChecked} />
        {label && (
          <Label htmlFor="accept" className="flex">
            {label}
          </Label>
        )}
      </div>
    </div>
  );
};

export default CheckboxComponent;
