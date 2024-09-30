import { media as wixMedia } from '@wix/sdk';

export function getImageUrlForMedia(
  media?: string
  // width: number,
  // height: number
) {
  if (media && media.startsWith('wix:image')) {
    return wixMedia.getImageUrl(media);
    // return wixMedia.getScaledToFillImageUrl(media, width, height, {});
  } else {
    return media;
  }
}
