import { TagProps } from '@app/shared-components/Tag/Tag';

export const containsId = (obj: { [x: string]: any } | null, id: any) => {
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (key === 'pageOwner') return false;
      if (obj[key] === id) return true;
      if (containsId(obj[key], id)) return true;
    }
  }
  return false;
};

export function calculatePopularity(
  tags: Array<TagProps>,
  infoPages: any,
  postPages: any
) {
  const popularityResults = [] as Array<TagProps> & { mentions: number }[];

  tags.forEach((tag) => {
    let count = 0;

    infoPages.forEach((infoPage: { [x: string]: any } | null) => {
      if (containsId(infoPage, tag?._id)) {
        count += 1;
      }
    });

    postPages.forEach((postPage: { [x: string]: any } | null) => {
      if (containsId(postPage, tag?._id)) {
        count += 1;
      }
    });

    popularityResults.push({ ...tag, mentions: count });
  });

  return popularityResults;
}
