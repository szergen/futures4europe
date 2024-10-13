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
import SpriteSvg from '@app/shared-components/SpriteSvg/SpriteSvg';

export type ContentComponentProps = {
  contentText: string[];
  contentImages: Array<{ url: string; caption: string }>;
  isEditModeOn: boolean;
  updatePostDataContent: (value: string, index: number) => void;
  updatePostDataContentImages: (
    value: { url: string; caption: string },
    index: number
  ) => void;
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
  // console.log('contentText', contentText);
  // console.log('contentImages', contentImages);

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

  const handleUpdatePostDataContentImages = (
    value: { url: string; caption: string },
    index: number
  ) => {
    const newContentImages = [...contentImages];
    newContentImages[index] = value;
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
                <section
                  key={`contentItem-${index}`}
                  className={classNames(style.editorMode, 'w-full')}
                >
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
                        <div className="relative">
                          <RTEComponent
                            content={initialContentText?.[index]}
                            updatePostData={(value) =>
                              handleUpdatePostDataContent(value, index)
                            }
                          />
                          <div className="flex flex-col">
                            {/* Delete RTE */}
                            {!initialContentText?.[index + 1] && (
                              <button
                                onClick={handleRemoveContent}
                                className={classNames(style.buttonRemove, '')}
                              >
                                <SpriteSvg.EditCloseIcon
                                  className="text-site-black mt-1"
                                  sizeW={24}
                                  sizeH={24}
                                  viewBox={'0 0 32 32'}
                                  fill={'currentColor'}
                                  strokeWidth={0}
                                  inline={false}
                                />
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
                          <figure>
                            <Image
                              src={
                                getImageUrlForMedia(contentImages[index].url)
                                  ?.url ||
                                getImageUrlForMedia(contentImages[index].url) ||
                                ''
                              }
                              width={600}
                              height={400}
                              className={classNames('rounded-md block mx-auto')}
                              alt={contentImages[index].caption || 'Post Image'}
                            />
                            {contentImages[index].caption && (
                              <figcaption className="text-center mt-2 text-sm text-gray-600">
                                {contentImages[index].caption}
                              </figcaption>
                            )}
                          </figure>
                        )
                      ) : (
                        <div
                          className={classNames(
                            style.ContentImageWrapper,
                            'relative'
                          )}
                        >
                          <ContentImageFileUploader
                            currentImage={contentImages[index].url}
                            currentCaption={contentImages[index].caption}
                            updatePostData={(value) =>
                              handleUpdatePostDataContentImages(value, index)
                            }
                          />
                          <div className="flex flex-col">
                            {/* Delete FIle Uploader */}
                            {!initialContentImages?.[index + 1] && (
                              <button
                                onClick={handleRemoveImage}
                                className={classNames(style.buttonRemove, '')}
                              >
                                <SpriteSvg.EditCloseIcon
                                  className="text-site-black mt-1"
                                  sizeW={24}
                                  sizeH={24}
                                  viewBox={'0 0 32 32'}
                                  fill={'currentColor'}
                                  strokeWidth={0}
                                  inline={false}
                                />
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
                                  className={classNames(
                                    style.buttonAdd,
                                    'px-2 py-2 rounded-md text-white bg-blue-600 w-40 mt-4 px-2 py-2 rounded-md text-white bg-blue-600 w-40 mt-4'
                                  )}
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
        <button onClick={() => handleAddContent()} className="">
          Add Content
        </button>
      )}
    </main>
  );
};

export default ContentComponent;
