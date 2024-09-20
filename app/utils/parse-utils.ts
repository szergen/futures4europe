import { TagProps } from '@app/shared-components/Tag/Tag';

export const extractInfoPageTypeBasedOnTag = (tag: TagProps) => {
  // case switch
  switch (tag.name) {
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
