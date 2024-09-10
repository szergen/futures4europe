import Image from 'next/image';
import classNames from 'classnames';

export type DescriptionComponentProps = {
  description: string;
};

const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
  description,
}) => {
  return (
    <div
      className={classNames('text-gray-500 text-sm')}
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></div>
  );
};

export default DescriptionComponent;
