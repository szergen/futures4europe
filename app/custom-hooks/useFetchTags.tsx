import { useEffect, useState } from 'react';
import { items } from '@wix/data';
import { useWixModules } from '@wix/sdk-react';
import { useAuth } from './AuthContext/AuthContext';
import { calculatePopularity } from '@app/utils/tags.utls';
// import { referencedItemOptions } from '@app/wixUtils/server-side';

const useFetchTags = (
  refresh: boolean,
  setIsLoadingInProgress: (value: boolean) => void,
  infoPages: any[],
  postPages: any[]
) => {
  const [tags, setTags] = useState<any[]>([]);
  const [tagsFetched, setTagsFetched] = useState(false);
  const [areTagsCalculatedWithPopularity, setAreTagsCalculatedWithPopularity] =
    useState(false);
  const [areTagsFetchedFromServer, setAreTagsFetchedFromServer] =
    useState(false);

  const { queryDataItems } = useWixModules(items);
  // const { getDataCollection } = useWixModules(collections);

  useEffect(() => {
    const fetchTags = async () => {
      setIsLoadingInProgress(true);
      try {
        let allTags = [] as any[];
        let skip = 0;
        const limit = 1000;
        let totalCount = 0;
        if (!areTagsFetchedFromServer) {
          do {
            const result = await queryDataItems({
              dataCollectionId: 'Tags',
              // referencedItemOptions: referencedItemOptions,
              returnTotalCount: true,
            })
              .skip(skip)
              .limit(limit)
              .find();
            allTags = [...allTags, ...result?._items];
            totalCount = result?._totalCount;
            skip = limit + skip;
          } while (skip < totalCount);
          setAreTagsFetchedFromServer(true);
        }

        if (
          !areTagsCalculatedWithPopularity &&
          infoPages &&
          postPages &&
          infoPages.length > 0 &&
          postPages.length > 0 &&
          allTags.length > 0
        ) {
          const allTagsWithMentions = allTags.map((tag: any) => tag.data);
          console.log('tags->calculating popularity');
          const tagsWithPopularity = calculatePopularity(
            allTagsWithMentions,
            infoPages,
            postPages
          );
          const findProjectInfoTag = tagsWithPopularity.find(
            (tag) => tag.name === 'project info'
          );
          console.log('tag->project info', findProjectInfoTag);
          setTags(tagsWithPopularity);
          console.log('tags->popularity calculated:', tagsWithPopularity);
          setTagsFetched(true);
          setAreTagsCalculatedWithPopularity(true);
          setIsLoadingInProgress(false);
        }

        // setTags(allTags.map((tag: any) => tag.data));
      } catch (error) {
        console.error('Error fetching tags:', error);
        setIsLoadingInProgress(false);
      }
    };

    fetchTags();
  }, [refresh, infoPages, postPages]);

  return { tags, tagsFetched, setTags };
};

export default useFetchTags;
