import Image from 'next/image';
import { uploadFileToWix } from '@app/wixUtils/client.utils';
import { Alert, FileInput, Label, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';
import classNames from 'classnames';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';
import style from './InfoPagesImageFileUploader.module.css';
// import WixMediaImage from '../WixMediaImage/WixMediaImage';

export type FileUploaderProps = {
  currentImage?: string;
  updatePostData?: (value: string) => void;
};

const InfoPagesImageFileUploader: React.FC<FileUploaderProps> = ({
  currentImage,
  updatePostData,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isValidState, setIsValidState] = useState(true);
  const [imageURL, setImageURL] = useState(currentImage || '');
  const [isImageLoading, setIsImageLoading] = useState(false);

  const { userDetails } = useAuth();
  const composeFilePath = `/InfoPages_Images/${
    userDetails?.contactId || 'visitors'
  }/`;

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file && file.size > 5 * 1024 * 1024) {
      setIsValidState(false);
      event.target.value = ''; // clear the selected file
      return;
    } else {
      setIsValidState(true);
      setUploadedFile(file as File);
      console.log('File selected:', file);
      setIsImageLoading(true);
      const uploadedFileResponse = await uploadFileToWix(file, composeFilePath);
      setIsImageLoading(false);
      console.log('uploadedFileResponse', uploadedFileResponse);
      setImageURL(uploadedFileResponse?.url);
      updatePostData && updatePostData(uploadedFileResponse?.url);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center relative">
      <Label
        htmlFor="dropzone-file-avatar"
        className={classNames(
          style.avatarUpload,
          !imageURL && style.avatarUploadEpty
        )}
      >
        <div className="w-full h-full">
          <span className="top-10 relative">
            {!imageURL || imageURL === ' ' ? 'Upload Image' : ''}
          </span>
          <SpriteSvg.AccountEdit
            className="text-site-black mb-6 text-[var(--color-text-icon-error)]"
            sizeW={42}
            sizeH={42}
            viewBox={'0 0 24 24'}
            stroke={'var(--color-text-brand-tag)'}
            strokeWidth={2}
            inline={false}
          />
        </div>

        <FileInput
          id="dropzone-file-avatar"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </Label>
      {/* <p className="text-xs w-full text-gray-500 dark:text-gray-400">
        {uploadedFile?.name || 'No file selected'}
      </p> */}

      {!isValidState && (
        <Alert color="failure" icon={HiInformationCircle} className="my-2">
          <span className="font-small">
            File is larger than 5MB. Please try again.
          </span>
        </Alert>
      )}
      {imageURL && imageURL !== ' ' && (
        <div
          className={classNames(
            style.AvatarImagine,
            'relative w-[147px] h-[147px]'
          )}
        >
          <Image
            src={
              getImageUrlForMedia(imageURL)?.url ||
              getImageUrlForMedia(imageURL) ||
              ''
            }
            width={147}
            height={147}
            className={classNames(
              'rounded-full block object-cover',
              isImageLoading && 'opacity-30'
            )}
            alt="Post Image"
          />
          {isImageLoading && (
            <div
              className={classNames(
                'absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-md',
                style.existingImageSpinner
              )}
            >
              <Spinner size="xl" />
            </div>
          )}
        </div>
      )}
      {isImageLoading && (!imageURL || imageURL === ' ') && (
        <div className="flex items-center justify-center w-full h-32">
          <Spinner size="xl" />
        </div>
      )}
    </div>
    // <div>
    //   <div className="mb-2 block">
    //     <Label htmlFor="file-upload" value="Upload file" />
    //   </div>
    //   <FileInput
    //     id="file-upload"
    //     onChange={handleFileChange}
    //     helperText="PNG, JPG, GIF (MAX. 5MB)."
    //   />
    //   {/* <progress value="50" max="100" /> */}
    // </div>
  );
};

export default InfoPagesImageFileUploader;
