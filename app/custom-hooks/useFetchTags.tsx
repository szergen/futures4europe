import { calculatePopularity } from '@app/utils/tags.utls';
import { getCollectionItems } from '@app/wixUtils/client-side';

const fetchTagsWithPopularity = async (infoPages: any[], postPages: any[]) => {
  let tags = [] as any[];

  try {
    // const allTags = await getCollectionItems('Tags');
    const allTagsRespone = await fetch('/api/tags');
    const allTags = await allTagsRespone.json();
    // const allTags = await fetch('/api/tags');
    // console.log('allTags', allTags);

    const allTagsWithMentions = await allTags.map((tag: any) => tag.data);
    // console.log('tags->calculating popularity');
    tags = calculatePopularity(allTagsWithMentions, infoPages, postPages);
    // console.log('tags->popularity calculated', tags);
    const sortedTags = tags.sort((a, b) => b.mentions - a.mentions);
    // console.log('tags->popularity calculated and sorted', sortedTags);
    // const findProjectInfoTag = tags.find((tag) => tag.name === 'project info');
    // console.log('tag->project info', findProjectInfoTag);
  } catch (error) {
    console.error('Error fetching tags:', error);
  }

  return tags;
};

export default fetchTagsWithPopularity;
