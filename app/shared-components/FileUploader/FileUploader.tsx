import { FileInput, Label } from 'flowbite-react';

const handleFileChange = (event: any) => {
  const file = event.target.files[0];
  console.log('File selected:', file);
  // Process the file
};

export type FileUploaderProps = {};

export const FileUploader = () => {
  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor="file-upload" value="Upload file" />
      </div>
      <FileInput id="file-upload" multiple onChange={handleFileChange} />
      {/* <progress value="50" max="100" /> */}
    </div>
  );
};

export default FileUploader;
