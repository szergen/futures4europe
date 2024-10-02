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

function deepEqual(obj1: any, obj2: any): boolean {
  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== 'object' ||
    typeof obj2 !== 'object' ||
    obj1 === null ||
    obj2 === null
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (const key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }

  return true;
}

function arraysEqual(arr1: any[], arr2: any[]): boolean {
  if (arr1?.length !== arr2?.length) return false;

  for (let i = 0; i < arr1?.length; i++) {
    if (!deepEqual(arr1[i], arr2[i])) {
      return false;
    }
  }

  return true;
}

export { deepEqual, arraysEqual };
