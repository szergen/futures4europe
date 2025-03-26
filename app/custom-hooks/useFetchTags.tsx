import {
  calculatePopularity,
  getTagById,
  getTagByName,
} from '@app/utils/tags.utls';

const fetchTagsWithPopularity = async (infoPages: any[], postPages: any[]) => {
  let tags = [] as any[];

  try {
    // const allTags = await getCollectionItems('Tags');
    const allTagsRespone = await fetch('/api/tags');
    const allTags = await allTagsRespone.json();
    const allAffiliationsRespinse = await fetch('/api/affiliations');
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
    // const tagCautat = getTagByName(tags, 'Sergiu Ciobanasu');
    // console.log('tag->tagCautat', tagCautat);
    // console.log('tagCautatMasterTag->', getTagById(tags, tagCautat?.masterTag));
  } catch (error) {
    console.error('Error fetching tags:', error);
  }

  return tags;
};

export default fetchTagsWithPopularity;
