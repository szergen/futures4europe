import { TagProps } from '@app/shared-components/Tag/Tag';

export const extractInfoPageTypeBasedOnTag = (tag: TagProps) => {
  // case switch
  switch (tag?.name) {
    case 'person info':
      return 'person';
    case 'organisation info':
      return 'organisation';
    case 'project info':
      return 'project';
    default:
      return '';
  }
};

export const extactOwnedPagesIds = (ownedPages: any[]) => {
  return ownedPages.map((page) => page._id);
};

export const decidePageTypeItems = (
  type: string,
  postPages: any,
  infoPages: any
) => {
  switch (type) {
    case 'post':
      return postPages.filter(
        (item: any) =>
          item?.pageTypes?.[0]?.name !== 'event' &&
          item?.pageTypes?.[0]?.name !== 'project result'
      );
    case 'event':
      return filterPagesByType('event', postPages);
    case 'project-result':
      return filterPagesByType('project result', postPages);
    case 'project':
      return filterPagesByType('project info', infoPages);
    case 'person':
      return filterPagesByType('person info', infoPages);
    case 'organisation':
      return filterPagesByType('organisation info', infoPages);
    default:
      return [];
  }
};

export const automaticallyDecidePathPrefixBasedOnPageType = (type: string) => {
  switch (type) {
    case 'post':
      return '/post/';
    case 'event':
      return '/post/';
    case 'project-result':
      return '/post/';
    case 'project info':
      return '/project/';
    case 'person info':
      return '/person/';
    case 'organisation info':
      return '/organisation/';
    default:
      return '/post/';
  }
};

export const filterPagesByType = (type: string, pages: any) => {
  return pages.filter((page: any) => page?.pageTypes?.[0]?.name === type);
};
