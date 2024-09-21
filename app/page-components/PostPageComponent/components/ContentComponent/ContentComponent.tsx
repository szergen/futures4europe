import style from './ContentComponent.module.css';
import Image from 'next/image';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import WixMediaImage from '@app/shared-components/WixMediaImage/WixMediaImage';
import Tag from '@app/shared-components/Tag/Tag';
import RTEComponent from '@app/shared-components/RTEComponent/RTEComponent';
import { useEffect, useState } from 'react';
import ContentImageFileUploader from '@app/shared-components/ContentImageFileUploader/ContentImageFileUploader';
import { getImageUrlForMedia } from '@app/page-components/PageComponents.utils';

export type ContentComponentProps = {
  contentText: string[];
  contentImages: string[];
  isEditModeOn: boolean;
  updatePostDataContent: (value: string, index: number) => void;
  updatePostDataContentImages: (value: string, index: number) => void;
};

const ContentComponent: React.FC<ContentComponentProps> = ({
  contentText: initialContentText,
  contentImages: initialContentImages,
  isEditModeOn,
  updatePostDataContent,
  updatePostDataContentImages,
}) => {
  const [contentText, setContentText] = useState(initialContentText);
  const [contentImages, setContentImages] = useState(initialContentImages);
  console.log('contentText', contentText);
  console.log('contentImages', contentImages);

  const handleAddContent = () => {
    setContentText((prevContentText) => {
      const newContentText = [...prevContentText];
      let indexToInsert = -1;
      for (let i = 0; i < 10; i++) {
        if (newContentText[i] === undefined || newContentText[i] === ' ') {
          newContentText[i] = ' ';
          indexToInsert = i;
          break;
        }
      }
      if (indexToInsert !== -1) {
        updatePostDataContent(' ', indexToInsert);
        setContentText(newContentText);
      }
      return newContentText;
    });
  };

  const handleAddImage = () => {
    setContentImages((prevContentImages) => {
      const newContentImages = [...prevContentImages];
      let indexToInsert = -1;
      for (let i = 0; i < 10; i++) {
        if (newContentImages[i] === undefined || newContentImages[i] === ' ') {
          newContentImages[i] = ' ';
          indexToInsert = i;
          break;
        }
      }
      if (indexToInsert !== -1) {
        updatePostDataContentImages(' ', indexToInsert);
        setContentImages(newContentImages);
      }
      return newContentImages;
    });
  };

  const handleRemoveContent = () => {
    setContentText((prevContentText) => {
      const newContentText = [...prevContentText];
      for (let i = 9; i >= 0; i--) {
        if (newContentText[i] !== undefined) {
          newContentText[i] = undefined;
          updatePostDataContent(undefined, i);
          break;
        }
      }
      return newContentText;
    });
  };

  const handleRemoveImage = () => {
    setContentImages((prevContentImages) => {
      const newContentImages = [...prevContentImages];
      for (let i = 9; i >= 0; i--) {
        if (newContentImages[i] !== undefined) {
          newContentImages[i] = undefined;
          updatePostDataContentImages(undefined, i);
          break;
        }
      }
      return newContentImages;
    });
  };

  const handleUpdatePostDataContent = (value: string, index: number) => {
    const newContentText = [...contentText];
    newContentText[index] = value;
    setContentText(newContentText);
    updatePostDataContent(value, index);
  };

  const handleUpdatePostDataContentImages = (value: string, index: number) => {
    const newContentImages = [...contentImages];
    newContentImages[index] !== ' ' ? value : '';
    setContentImages(newContentImages);
    updatePostDataContentImages(value, index);
  };

  const definedItemsCount = contentText.filter(
    (item) => item !== undefined
  ).length;

  useEffect(() => {
    setContentText(initialContentText);
    setContentImages(initialContentImages);
  }, [initialContentText, initialContentImages]);

  return (
    <main className={style.postContent}>
      {initialContentText?.length
        ? initialContentText.map(
            (item, index) =>
              item && (
                <section key={`contentItem-${index}`} className="w-full">
                  {initialContentText?.[index] && (
                    <>
                      {!isEditModeOn ? (
                        <div
                          dangerouslySetInnerHTML={{
                            __html: initialContentText?.[index],
                          }}
                          className="py-4"
                        ></div>
                      ) : (
                        <div>
                          <RTEComponent
                            content={initialContentText?.[index]}
                            updatePostData={(value) =>
                              handleUpdatePostDataContent(value, index)
                            }
                          />
                          <div className="flex flex-col">
                            {/* Delete RTE */}
                            {!initialContentText?.[index + 1] && (
                              <button onClick={handleRemoveContent}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                            )}
                            {!initialContentText?.[index + 1] &&
                              isEditModeOn &&
                              definedItemsCount < 10 &&
                              !initialContentImages?.[index] &&
                              initialContentImages?.[index - 1] !== ' ' && (
                                <button
                                  onClick={() => handleAddImage()}
                                  className="px-2 py-2 rounded-md text-white bg-blue-600 w-40 mt-4"
                                >
                                  Add Image
                                </button>
                              )}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                  {initialContentImages?.[index] && (
                    <>
                      {!isEditModeOn ? (
                        initialContentImages?.[index] && (
                          <Image
                            src={
                              getImageUrlForMedia(initialContentImages?.[index])
                                ?.url ||
                              getImageUrlForMedia(
                                initialContentImages?.[index]
                              ) ||
                              ''
                            }
                            width={600}
                            height={400}
                            className={classNames('rounded-md block mx-auto')}
                            alt="Post Image"
                          />
                        )
                      ) : (
                        <div>
                          <ContentImageFileUploader
                            currentImage={initialContentImages[index]}
                            updatePostData={(value) =>
                              handleUpdatePostDataContentImages(value, index)
                            }
                          />
                          <div className="flex flex-col">
                            {/* Delete FIle Uploader */}
                            {!initialContentImages?.[index + 1] && (
                              <button onClick={handleRemoveImage}>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth={1.5}
                                  stroke="currentColor"
                                  className="w-6 h-6"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                  />
                                </svg>
                              </button>
                            )}
                            {!contentText?.[index + 1] &&
                              isEditModeOn &&
                              definedItemsCount < 10 &&
                              (contentImages?.[index + 1] === ' ' ||
                                !contentImages?.[index + 1]) && (
                                // initialContentText?.[index] &&
                                // initialContentText?.[index - 1] === ' ' &&
                                <button
                                  onClick={() => handleAddContent()}
                                  className="px-2 py-2 rounded-md text-white bg-blue-600 w-40 mt-4"
                                >
                                  Add Content
                                </button>
                              )}
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </section>
              )
          )
        : ''}
      {isEditModeOn && definedItemsCount < 10 && !initialContentText[0] && (
        <button
          onClick={() => handleAddContent()}
          className="px-2 py-2 rounded-md text-white bg-blue-600 w-40 mt-4"
        >
          Add Content
        </button>
      )}
    </main>
  );
};

export default ContentComponent;
