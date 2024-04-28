import { Alert, FileInput, Label } from 'flowbite-react';
import { useState } from 'react';
import { HiInformationCircle } from 'react-icons/hi';

// const handleFileChange = (event: any) => {
//   const file = event.target.files[0];
//   console.log('File selected:', file);
//   // Process the file
// };

export type FileUploaderProps = {};

export const FileUploader = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [isValidState, setIsValidState] = useState(true);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.size > 2 * 1024 * 1024) {
      // file size is in bytes
      setIsValidState(false);
      event.target.value = ''; // clear the selected file
      return;
    } else {
      setIsValidState(true);
      setUploadedFile(file as File);
    }
    // handle the file here
  };
  return (
    <div className="flex w-1/4 flex-wrap items-center justify-center">
      <Label
        htmlFor="dropzone-file"
        className="relative flex h-12 w-full cursor-pointer items-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <svg
          className="h-10 w-10 text-gray-500 dark:text-gray-400 border-r-2  border-dashed border-gray-300 dark:border-gray-600 mr-4 p-2 rounded-lg"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Click to upload or drag and drop
        </p>

        <FileInput
          id="dropzone-file"
          className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleFileChange}
        />
      </Label>
      <p className="text-xs w-full text-gray-500 dark:text-gray-400">
        {uploadedFile?.name || 'No file selected'}
      </p>
      <p className="text-xs w-full text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 5MB)
      </p>
      {!isValidState && (
        <Alert color="failure" icon={HiInformationCircle} className="my-2">
          <span className="font-small">
            File is larger than 5MB. Please try again.
          </span>
        </Alert>
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

export default FileUploader;
