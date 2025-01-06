import { calculatePopularity } from '@app/utils/tags.utls';
import { getCollectionItems } from '@app/wixUtils/client-side';

const fetchTagsWithPopularity = async (infoPages: any[], postPages: any[]) => {
  let tags = [] as any[];

  try {
    // const allTags = await getCollectionItems('Tags');
    const allTagsRespone = await fetch('/api/tags');
    const allAffiliationsRespinse = await fetch('/api/affiliations');
    const allTags = await allTagsRespone.json();
    const allAffiliationsData = await allAffiliationsRespinse.json();
    const allAffiliations = allAffiliationsData.map(
      (affiliation: any) => affiliation.data
    );
    // .filter(
    //   (projectTag: any, index: number, self: any[]) =>
    //     index ===
    //     self.findIndex(
    //       (pt) =>
    //         pt.organisationTag === projectTag.organisationTag &&
    //         pt.projectTag === projectTag.projectTag &&
    //         pt.personTag === projectTag.personTag &&
    //         pt.extraIdentifier === projectTag.extraIdentifier &&
    //         pt.role == projectTag.role
    //     )
    // );
    // console.log('allAffiliations', allAffiliations);

    // console.log(
    //   'debug2222->',
    //   allAffiliations.find(
    //     (item: any) =>
    //       item?.title ===
    //       'Romanian Public Administration 2025 -to- Adrian Curaj'
    //   )
    // );
    // const allTags = await fetch('/api/tags');
    // console.log('allTags', allTags);

    const allTagsWithMentions = await allTags.map((tag: any) => tag.data);
    // console.log('tags->calculating popularity');
    tags = calculatePopularity(
      allTagsWithMentions,
      infoPages,
      postPages,
      allAffiliations
    );
    // console.log('tags->popularity calculated', tags);
    const sortedTags = tags.sort((a, b) => b.mentions - a.mentions);
    // console.log('tags->popularity calculated and sorted', sortedTags);
    // const finEuFunded = tags.find((tag) => tag.name === 'EU funded');
    // console.log('tag->finEuFunded', finEuFunded);
  } catch (error) {
    console.error('Error fetching tags:', error);
  }

  return tags;
};

export default fetchTagsWithPopularity;
