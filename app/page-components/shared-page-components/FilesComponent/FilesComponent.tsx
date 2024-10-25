import style from './FilesComponent.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Typography from '@app/shared-components/Typography/Typography';
import DisplayProjectResultMedia from '../DisplayProjectResultMedia/DisplayProjectResultMedia';
import ProjectResultHeaderImage from '@app/shared-components/ProjectResultHeaderImage/ProjectResultHeaderImage';
import { useEffect, useState } from 'react';
import InputText from '@app/shared-components/InputText/InputText';
import Button from '@app/shared-components/Button/Button';
import Link from 'next/link';

export type FilesComponentProps = {
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
  isEditModeOn,
  mediaFiles,
  updatePostDataBasedOnKeyValue,
}) => {
  const [currentFiles, setCurrentFiles] = useState(mediaFiles);

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
      {(currentFiles?.length > 0 || isEditModeOn) && (
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full my-4', style.filesTitle)}
        >
          Files
        </Typography>
      )}

      <div className="flex flex-col">
        {currentFiles?.map((media, index) => (
          <div key={`${media?.thumbnail}-${index}`} className="flex flex-row mr-4">
            {!isEditModeOn ? (
              media.thumbnail && (
                <>
                  <DisplayProjectResultMedia
                    projectResultMedia={media || {}}
                    key={'files-component-' + index}
                  />
                  {media.type !== 'video' && (
                    <Link href={media.url} target="_blank">
                      <Button>
                        Download File (
                        {(Number(media.sizeInBytes) / 1024)
                          ?.toString()
                          ?.split('.')?.[0] + 'kb'}
                        ){' '}
                        <span className="rounded-lg bg-white text-blue-500 p-1 font-bold">
                          {media?.url?.split('.')?.pop()?.toUpperCase()}
                        </span>
                      </Button>
                    </Link>
                  )}
                </>
              )
            ) : (
              <ProjectResultHeaderImage
                key={'files-component-' + index}
                fileIdPrefix={'files-component-prefix-' + index}
                currentImage={media.thumbnail}
                resultType={media.type}
                updatePostData={(value) => {
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
                  setCurrentFiles(newMediaFiles);
                }}
                updatePostDataForVideoImage={(value) => {
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
                  setCurrentFiles(newMediaFiles);
                }}
              />
            )}
            {!isEditModeOn ? (
              <Typography tag="h3" className="text-gray-800 mt-2">
                {media?.displayName}
              </Typography>
            ) : (
              <InputText
                className={(style.fileTitle)}
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
                }}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FilesComponent;
