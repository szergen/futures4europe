import { calculatePopularity } from '@app/utils/tags.utls';
import { getCollectionItems } from '@app/wixUtils/client-side';

const fetchTagsWithPopularity = async (infoPages: any[], postPages: any[]) => {
  let tags = [] as any[];

  try {
    const allTags = await getCollectionItems('Tags');
    // console.log('allTags', allTags);

    const allTagsWithMentions = allTags.map((tag: any) => tag.data);
    // console.log('tags->calculating popularity');
    tags = calculatePopularity(allTagsWithMentions, infoPages, postPages);
    const findProjectInfoTag = tags.find((tag) => tag.name === 'project info');
    // console.log('tag->project info', findProjectInfoTag);
  } catch (error) {
    console.error('Error fetching tags:', error);
  }

  return tags;
};

export default fetchTagsWithPopularity;
