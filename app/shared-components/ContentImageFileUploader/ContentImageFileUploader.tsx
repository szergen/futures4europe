import Image from 'next/image';
import { uploadFileToWix } from '@app/wixUtils/client.utils';
import { TextInput, Alert, FileInput, Label, Spinner } from 'flowbite-react';
import { useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';
import classNames from 'classnames';
import { useAuth } from '@app/custom-hooks/AuthContext/AuthContext';
import style from './ContentImageFileUploader.module.css';
import SpriteSvg from '../SpriteSvg/SpriteSvg';
// import WixMediaImage from '../WixMediaImage/WixMediaImage';

export type FileUploaderProps = {
  currentImage?: string;
  currentCaption?: string;
  updatePostData?: (value: string, caption: string) => void;
};

const ContentImageFileUploader: React.FC<FileUploaderProps> = ({
  currentImage,
  currentCaption,
  updatePostData,
}) => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isValidState, setIsValidState] = useState(true);
  const [imageURL, setImageURL] = useState(currentImage || '');
  const [caption, setCaption] = useState(currentCaption || '');
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [imageCaption, setImageCaption] = useState('');

  const { userDetails } = useAuth();
  const composeFilePath = `/PostPages_Images/${
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
      updatePostData && updatePostData({ url: uploadedFileResponse?.url, caption: imageCaption });
    }
  };

  {/* REVIEW: Check new caption handleCaptionChange function to update the caption state and call */}
  const handleCaptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCaption = event.target.value;
    setCaption(newCaption);
    updatePostData && updatePostData({ url: imageURL, caption: newCaption });
  };

  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="relative flex h-12 w-full cursor-pointer items-center rounded-lg bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        {/* REVIEW: Removed the text to show like teh design // Dont delete, maybe it will change in the future */}
        {/* <div className="flex items-center border-r-2  border-dashed border-gray-300 dark:border-gray-600 mr-4 px-4">
          {!imageURL || imageURL === ' ' ? '' : ''}
        </div> */}
        <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center ml-4">
          <SpriteSvg.EditImageIcon
              className="text-site-black mt-1"
              sizeW={24}
              sizeH={24}
              viewBox={'0 0 32 32'}
              fill={'currentColor'}
              strokeWidth={0}
              inline={false}
            />
          Click to upload or drag and drop a file relevant to your post (pdf/doc, 5 MB max.)
        </div>

        <FileInput
          id="dropzone-file"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </Label>

      {/* REVIEW: Removed the text to show like teh design // Dont delete, maybe it will change in the future */}
      {/* <p className="text-xs w-full text-gray-500 dark:text-gray-400">
        {uploadedFile?.name || ''}
      </p> */}
      {!isValidState && (
        <Alert color="failure" icon={HiInformationCircle} className="my-2">
          <span className="font-small">
            File is larger than 5MB. Please try again.
          </span>
        </Alert>
      )}
      {imageURL && imageURL !== ' ' && (
        <div className="relative">
          <Image
            src={
              getImageUrlForMedia(imageURL)?.url ||
              getImageUrlForMedia(imageURL) ||
              ''
            }
            width={600}
            height={400}
            className={classNames(
              'rounded-md block mx-auto',
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

      <div className="mt-2">
        <Label htmlFor="image-caption" value="Image Caption" />
        <TextInput
          id="image-caption"
          type="text"
          value={caption}
          onChange={handleCaptionChange}
          placeholder="Enter image caption"
          className="mt-2 p-2 border rounded"
        />
      </div>

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

export default ContentImageFileUploader;
// async function newFunction(file: File | undefined) {
//   try {
//     const generatedFileUploadUrl = await generateFileUploadUrl(
//       file?.type || 'image/jpeg',
//       {
//         fileName: file?.name,
//         filePath: '/PostPages_Images/',
//       },
//       file
//     );

//     console.log('generatedFileUploadUrl', generatedFileUploadUrl);

//     console.log('File type:', file.type);
//     // Set loading state here if needed
//     const uploadResponse = await fetch(
//       `${generatedFileUploadUrl.uploadUrl}?filename=${file?.name}`,
//       {
//         method: 'PUT',
//         headers: {
//           'Content-Type': file?.type || 'image/jpeg',
//         },
//         body: file, // Directly sending the file
//         mode: 'cors', // CORS handling if needed
//       }
//     );

//     if (!uploadResponse.ok) {
//       throw new Error(`Upload failed: ${uploadResponse.statusText}`);
//     }

//     const jsonResponse = await uploadResponse.json();
//     console.log('File upload response', jsonResponse.file);
//   } catch (error) {
//     console.error('Error uploading file', error);
//   }
// }
