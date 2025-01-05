import { TagProps } from '@app/shared-components/Tag/Tag';

export const containsId = (obj: { [x: string]: any } | null, id: any) => {
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (key === 'pageOwner' || key === '_owner' || key === 'Author') continue;
      if (obj[key] === id) return true;
      if (
        obj[key]?.length > 0 &&
        Array.isArray(obj[key]) &&
        obj[key]?.find((item: any) => item?._id === id)
      ) {
        return true;
      }
      // if (containsId(obj[key], id)) return true;
    }
  }
  return false;
};

export function calculatePopularity(
  tags: Array<TagProps>,
  infoPages: any,
  postPages: any,
  allAffiliations: any
) {
  const popularityResults = [] as Array<TagProps> & { mentions: number }[];

  tags.forEach((tag) => {
    let count = 0;

    infoPages.forEach((infoPage: { [x: string]: any } | null) => {
      if (containsId(infoPage?.data, tag?._id)) {
        count += 1;
      }
    });

    postPages.forEach((postPage: { [x: string]: any } | null) => {
      if (containsId(postPage?.data, tag?._id)) {
        count += 1;
      }
    });

    allAffiliations.forEach((affiliation: { [x: string]: any } | null) => {
      if (
        affiliation?.personTag === tag?._id ||
        affiliation?.projectTag === tag?._id ||
        affiliation?.organisationTag === tag?._id
      ) {
        count += 1;
      }
    });

    popularityResults.push({ ...tag, mentions: count });
  });

  return popularityResults;
}
