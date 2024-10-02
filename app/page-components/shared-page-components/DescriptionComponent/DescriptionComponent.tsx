import Image from 'next/image';
import classNames from 'classnames';
import { use, useEffect, useState } from 'react';
import RTEComponent from '@app/shared-components/RTEComponent/RTEComponent';

export type DescriptionComponentProps = {
  description: string;
  isEditModeOn?: boolean;
  handleUpdate?: (value: string) => void;
};

const DescriptionComponent: React.FC<DescriptionComponentProps> = ({
  description: initialDescription,
  isEditModeOn,
  handleUpdate,
}) => {
  const [contentText, setContentText] = useState(initialDescription);

  const handleUpdateDescription = (value: any) => {
    setContentText(value);
    handleUpdate && handleUpdate(value);
  };

  useEffect(() => {
    setContentText(initialDescription);
  }, [initialDescription]);

  return (
<<<<<<< HEAD
    <div
      className={classNames('text-greyLight text-sm')}
      dangerouslySetInnerHTML={{
        __html: description,
      }}
    ></div>
=======
    <div>
      {!isEditModeOn ? (
        <div
          className={classNames('text-gray-500 text-sm')}
          dangerouslySetInnerHTML={{
            __html: contentText,
          }}
        ></div>
      ) : (
        <RTEComponent
          content={contentText}
          updatePostData={(value) => handleUpdateDescription(value)}
        />
      )}
    </div>
>>>>>>> d5caceef806603d201102a34468925755b5963e2
  );
};

export default DescriptionComponent;
