import Link from 'next/link';
import { useState } from 'react';
import style from './LinkComponent.module.css';
import classNames from 'classnames';
import InputText from '@app/shared-components/InputText/InputText';

export type LinkComponentProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const LinkComponent: React.FC<LinkComponentProps> = ({
  href,
  children,
  className,
}) => {
  const [isEditState, setIsEditState] = useState(false);

  return (
    <div className="flex">
      {isEditState ? (
        <InputText placeholder="write the link description, then ENTER or click the link button" />
      ) : (
        <Link href={href} className={classNames(style.link, className)}>
          {children}
        </Link>
      )}
      <button onClick={() => setIsEditState(!isEditState)}>
        {isEditState ? 'Save' : 'Edit'}
      </button>
    </div>
  );
};

export default LinkComponent;
