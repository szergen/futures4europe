import Image from 'next/image';
import classNames from 'classnames';

export type PersonDescriptionComponentProps = {
  description: string;
};

const PersonDescriptionComponent: React.FC<PersonDescriptionComponentProps> = ({
  description,
}) => {
  return (
    <section className={classNames('text-gray-500 text-sm')}>
      {description}
    </section>
  );
};

export default PersonDescriptionComponent;
