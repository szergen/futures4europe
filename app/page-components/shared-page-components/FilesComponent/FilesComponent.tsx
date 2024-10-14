import style from './FilesComponent.module.css';
import classNames from 'classnames';
import Image from 'next/image';
import Typography from '@app/shared-components/Typography/Typography';
import Tag, { TagProps } from '@app/shared-components/Tag/Tag';
import Button from '@app/shared-components/Button/Button';
import DisplayProjectResultMedia from '../DisplayProjectResultMedia/DisplayProjectResultMedia';
import ProjectResultHeaderImage from '@app/shared-components/ProjectResultHeaderImage/ProjectResultHeaderImage';
import { useEffect, useState } from 'react';
import { is } from '@react-spring/shared';
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
  const mockedFiles = [
    {
      displayName: 'Microbit Educational Guide',
      url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      fileName: '',
      thumbnail: 'https://img.youtube.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
      sizeInBytes: '',
      type: 'video',
    },
  ];

  // if (!mediaFiles || mediaFiles?.length === 0) {
  //   return null;
  // }

  useEffect(() => {
    setCurrentFiles(mediaFiles);
  }, [mediaFiles]);

  return (
    <section>
      {mediaFiles?.length > 0 ||
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
        {mediaFiles?.map((media, index) => (
          <div key={`${media?.thumbnail}-${index}`} className="mr-4">
            {!isEditModeOn ? (
              media && (
                <DisplayProjectResultMedia projectResultMedia={media || {}} />
              )
            ) : (
              <ProjectResultHeaderImage
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
                  let newMediaFiles = [...mediaFiles];
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
                  let newMediaFiles = [...mediaFiles];
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
                  let newMediaFiles = [...mediaFiles];
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
        {isEditModeOn && (
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
                let newMediaFiles = mediaFiles?.length ? [...mediaFiles] : [];
                newMediaFiles[mediaFiles?.length || 0] = {
                  ...newMediaFiles[mediaFiles?.length || 0],
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
                let newMediaFiles = mediaFiles?.length ? [...mediaFiles] : [];
                newMediaFiles[mediaFiles?.length || 0] = {
                  ...newMediaFiles[mediaFiles?.length || 0],
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
                let newMediaFiles = [...mediaFiles];
                newMediaFiles[mediaFiles?.length] = {
                  ...newMediaFiles[mediaFiles?.length],
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
        )}
      </div>
    </section>
  );
};

export default FilesComponent;

// Old code:
{
  /* <div className="flex">
  {files.map((file, index) => (
    <div key={file?.title + index} className={style.fileContainer}>
      <Image
        src="https://framerusercontent.com/images/F46jYRatmGwgDHnyDPIaUs1us.png?scale-down-to=1024"
        width={147}
        height={268}
        className={classNames('rounded-full', style.filePreviewImage)}
        alt="User Avatar - Eva Pericolini"
      />
      <Typography tag="p" className="text-gray-800 mt-2">
        {file.title}
      </Typography>
      <div className={style.downloadButton}>
        <Button>
          Download file ({file.fileSize}){' '}
          <span className="rounded-lg bg-white text-blue-500 p-1 font-bold">
            {file.format}
          </span>
        </Button>
      </div>
    </div>
  ))}
</div>; */
}
