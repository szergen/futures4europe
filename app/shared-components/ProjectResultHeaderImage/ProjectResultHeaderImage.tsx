import React, { useState } from 'react';
import ProjectResultFileUploader from '../ProjectResultFileUploader/ProjectResultFileUploader';
import ProjectResultVideoImage from '../ProjectResultVideoImage/ProjectResultVideoImage';

type ProjectResultHeaderImageProps = {
  currentImage?: string;
  resultType?: string;
  updatePostData?: (value: any) => void;
  updatePostDataForVideoImage?: (value: any) => void;
  fileIdPrefix?: string;
};

const ProjectResultHeaderImage: React.FC<ProjectResultHeaderImageProps> = ({
  currentImage,
  resultType,
  updatePostData,
  updatePostDataForVideoImage,
  fileIdPrefix,
}) => {
  const [selectedOption, setSelectedOption] = useState('file');

  return (
    <div>
      <div className="flex">
        <div className="flex items-center mb-4 mr-4">
          <input
            id="file-option"
            name="upload-option"
            type="radio"
            value="file"
            checked={selectedOption === 'file'}
            onChange={() => setSelectedOption('file')}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label
            htmlFor="file-option"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            Upload PDF
          </label>
        </div>
        <div className="flex items-center mb-4">
          <input
            id="text-option"
            name="upload-option"
            type="radio"
            value="text"
            checked={selectedOption === 'text'}
            onChange={() => setSelectedOption('text')}
            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
          />
          <label
            htmlFor="text-option"
            className="ml-3 block text-sm font-medium text-gray-700"
          >
            Video URL
          </label>
        </div>
      </div>
      {selectedOption === 'file' ? (
        <ProjectResultFileUploader
          currentImage={resultType === 'document' ? currentImage : undefined}
          updatePostData={updatePostData ? updatePostData : undefined}
          fileIdPrefix={fileIdPrefix}
        />
      ) : (
        <ProjectResultVideoImage
          currentImage={resultType !== 'document' ? currentImage : undefined}
          updatePostDataForVideoImage={
            updatePostDataForVideoImage
              ? updatePostDataForVideoImage
              : undefined
          }
        />
      )}
    </div>
  );
};

export default ProjectResultHeaderImage;
