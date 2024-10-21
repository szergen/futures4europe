import style from './FilesComponent.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Typography from '@app/shared-components/Typography/Typography';
import DisplayProjectResultMedia from '../DisplayProjectResultMedia/DisplayProjectResultMedia';
import ProjectResultHeaderImage from '@app/shared-components/ProjectResultHeaderImage/ProjectResultHeaderImage';
import { useEffect, useState } from 'react';
import InputText from '@app/shared-components/InputText/InputText';

export type FilesComponentProps = {
  files: Array<{
    title: string;
    href: string;
    fileSize: string;
    format: string;
  }>;
  isEditModeOn?: boolean;
  mediaFiles: Array<{
    url: string;
    displayName: string;
    fileName: string;
    sizeInBytes: string;
    type: string;
    thumbnail: string;
  }>;
  updatePostDataBasedOnKeyValue?: (key: string, value: any) => void;
};

const FilesComponent: React.FC<FilesComponentProps> = ({
  files,
  isEditModeOn,
  mediaFiles,
  updatePostDataBasedOnKeyValue,
}) => {
  const [currentFiles, setCurrentFiles] = useState(mediaFiles);
  // const mockedFiles = [
  //   {
  //     displayName: 'Microbit Educational Guide',
  //     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  //     fileName: '',
  //     thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
  //     sizeInBytes: '',
  //     type: 'video',
  //   },
  // ];

  // if (!mediaFiles || mediaFiles?.length === 0) {
  //   return null;
  // }

  // useEffect(() => {
  //   console.log('debug5->mediaFiles', mediaFiles);
  //   setCurrentFiles(mediaFiles);
  // }, [mediaFiles]);
  // useEffect(() => {
  //   if (isEditModeOn) {
  //     const currentLength = currentFiles?.length;
  //     const emptyMedia = {
  //       thumbnail: '',
  //       type: '',
  //       displayName: '',
  //       url: '',
  //       fileName: '',
  //       sizeInBytes: '',
  //     };

  //     if (currentLength && currentFiles[currentLength - 1]?.url) {
  //       currentFiles.push(emptyMedia);
  //     } else {
  //       setCurrentFiles([emptyMedia]);
  //     }
  //   }
  //   console.log('debug5->currentFiles', currentFiles);
  // }, [isEditModeOn, currentFiles]);

  useEffect(() => {
    if (isEditModeOn) {
      const emptyImage = {
        thumbnail: '',
        type: '',
        displayName: '',
        url: '',
        fileName: '',
        sizeInBytes: '',
      };

      const files = currentFiles || [];
      const lastFile = files[files.length - 1];
      const isLastFileEmpty = lastFile && !lastFile.url;

      if (!isLastFileEmpty) {
        setCurrentFiles([...files, emptyImage]);
        updatePostDataBasedOnKeyValue &&
          updatePostDataBasedOnKeyValue('mediaFiles', [...files, emptyImage]);
      }
    }
    console.log('debug5->currentFiles', currentFiles);
  }, [isEditModeOn, currentFiles]);

  return (
    <section>
      {currentFiles?.length > 0 ||
        (isEditModeOn && (
          <Typography
            tag="h2"
            className={classNames(
              'text-gray-800 w-full my-4',
              style.filesTitle
            )}
          >
            Files
          </Typography>
        ))}

      <div className="flex">
        {currentFiles?.map((media, index) => (
          <div key={`${media?.thumbnail}-${index}`} className="mr-4">
            {!isEditModeOn ? (
              media && (
                <DisplayProjectResultMedia
                  projectResultMedia={media || {}}
                  key={'files-component-' + index}
                />
              )
            ) : (
              <ProjectResultHeaderImage
                key={'files-component-' + index}
                fileIdPrefix={'files-component-prefix-' + index}
                currentImage={media.thumbnail}
                resultType={media.type}
                updatePostData={(value) => {
                  // updatePostData({
                  //   ...post,
                  //   projectResultMedia: {
                  //     ...post.projectResultMedia,
                  //     thumbnail: value.thumbnail,
                  //     sizeInBytes: value.sizeInBytes,
                  //     url: value.url,
                  //     fileName: value.fileName,
                  //     type: value.type,
                  //   },
                  // });
                  let newMediaFiles = [...currentFiles];
                  newMediaFiles[index] = {
                    ...newMediaFiles[index],
                    thumbnail: value.thumbnail,
                    sizeInBytes: value.sizeInBytes,
                    url: value.url,
                    fileName: value.fileName,
                    type: value.type,
                  };
                  updatePostDataBasedOnKeyValue &&
                    updatePostDataBasedOnKeyValue('mediaFiles', newMediaFiles);
                }}
                updatePostDataForVideoImage={(value) => {
                  // updatePostData({
                  //   ...post,
                  //   projectResultMedia: {
                  //     ...post.projectResultMedia,
                  //     thumbnail: value.thumbnail,
                  //     sizeInBytes: '',
                  //     url: value.url,
                  //     fileName: '',
                  //     type: 'video',
                  //   },
                  // });
                  let newMediaFiles = [...currentFiles];
                  newMediaFiles[index] = {
                    ...newMediaFiles[index],
                    thumbnail: value.thumbnail,
                    sizeInBytes: '',
                    url: value.url,
                    fileName: '',
                    type: 'video',
                  };
                  updatePostDataBasedOnKeyValue &&
                    updatePostDataBasedOnKeyValue('mediaFiles', newMediaFiles);
                }}
              />
            )}
            {!isEditModeOn ? (
              <Typography tag="h3" className="text-gray-800 mt-2">
                {media?.displayName}
              </Typography>
            ) : (
              <InputText
                // label="File Display Name"
                placeholder="Enter display name"
                value={media.displayName || ''}
                onChange={(e) => {
                  let newMediaFiles = [...currentFiles];
                  newMediaFiles[index] = {
                    ...newMediaFiles[index],
                    displayName: e.target.value,
                  };
                  updatePostDataBasedOnKeyValue &&
                    updatePostDataBasedOnKeyValue('mediaFiles', newMediaFiles);
                  // updatePostData({
                  //   ...post,
                  //   projectResultMedia: {
                  //     ...post.projectResultMedia,
                  //     displayName: e.target.value,
                  //   },
                  // })
                }}
              />
            )}
          </div>
        ))}
        {/* {isEditModeOn && (
          <div className="blank">
            <ProjectResultHeaderImage
              currentImage={''}
              resultType={''}
              updatePostData={(value) => {
                // updatePostData({
                //   ...post,
                //   projectResultMedia: {
                //     ...post.projectResultMedia,
                //     thumbnail: value.thumbnail,
                //     sizeInBytes: value.sizeInBytes,
                //     url: value.url,
                //     fileName: value.fileName,
                //     type: value.type,
                //   },
                // });
                let newMediaFiles = currentFiles?.length
                  ? [...currentFiles]
                  : [];
                newMediaFiles[currentFiles?.length || 0] = {
                  ...newMediaFiles[currentFiles?.length || 0],
                  thumbnail: value.thumbnail,
                  sizeInBytes: value.sizeInBytes,
                  url: value.url,
                  fileName: value.fileName,
                  type: value.type,
                };
                updatePostDataBasedOnKeyValue &&
                  updatePostDataBasedOnKeyValue('mediaFiles', newMediaFiles);
              }}
              updatePostDataForVideoImage={(value) => {
                // updatePostData({
                //   ...post,
                //   projectResultMedia: {
                //     ...post.projectResultMedia,
                //     thumbnail: value.thumbnail,
                //     sizeInBytes: '',
                //     url: value.url,
                //     fileName: '',
                //     type: 'video',
                //   },
                // });
                let newMediaFiles = currentFiles?.length
                  ? [...currentFiles]
                  : [];
                newMediaFiles[currentFiles?.length || 0] = {
                  ...newMediaFiles[currentFiles?.length || 0],
                  thumbnail: value.thumbnail,
                  sizeInBytes: '',
                  url: value.url,
                  fileName: '',
                  type: 'video',
                };
                updatePostDataBasedOnKeyValue &&
                  updatePostDataBasedOnKeyValue('mediaFiles', newMediaFiles);
              }}
            />

            <InputText
              // label="File Display Name"
              placeholder="Enter display name"
              value={''}
              onChange={(e) => {
                let newMediaFiles = [...currentFiles];
                newMediaFiles[currentFiles?.length] = {
                  ...newMediaFiles[currentFiles?.length],
                  displayName: e.target.value,
                };
                updatePostDataBasedOnKeyValue &&
                  updatePostDataBasedOnKeyValue('mediaFiles', newMediaFiles);
                // updatePostData({
                //   ...post,
                //   projectResultMedia: {
                //     ...post.projectResultMedia,
                //     displayName: e.target.value,
                //   },
                // })
              }}
            />
          </div>
        )} */}
      </div>
    </section>
  );
};

export default FilesComponent;
