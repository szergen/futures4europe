import Image from 'next/image';
import classNames from 'classnames';

export type DescriptionComponentProps = {
  description: string;
};

const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
  description,
}) => {
  return (
    <section className={classNames('text-gray-500 text-sm')}>
      {description}
    </section>
  );
};

export default DescriptionComponent;
