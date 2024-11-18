'use client';
import React, { useMemo } from 'react';
import style from './MiniPagesListItemPost.module.css';
import classNames from 'classnames';
import Typography from '@app/shared-components/Typography/Typography';
import MiniPagePost from '@app/shared-components/MiniPagePost/MiniPagePost';
import Link from 'next/link';
import { getPropsForMiniPagesListItemPost } from './MiniPagesListItemPost.utils';
import { automaticallyDecidePathPrefixBasedOnPageType } from '@app/utils/parse-utils';
import { sortResultBySortTags } from '../../../../../shared-components/SearchComponentV1/SearchComponentV1.utils';

enum PageType {
  ProjectInfo = 'project info',
  Event = 'event',
  ProjectResult = 'project result',
  OrganisationInfo = 'organisation info',
  PersonInfo = 'person info',
  Post = 'post',
}

type SortConfigKey = PageType | 'default';

interface PageTypeTag {
  name: string;
  _id?: string;
  tagId?: number;
  tagType?: string;
}

interface Item {
  pageTypes?: PageTypeTag[];
  _createdDate?: { $date?: string } | string;
  title?: string;
  slug?: string;
  [key: string]: any;
}

interface PageTypeSortConfig {
  sortField: string;
  fallbackField: string;
  priority: number;
}

const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date.getTime());
};

const parseDate = (value: unknown): Date | null => {
  if (!value) return null;

  try {
    if (typeof value === 'object' && value !== null && '$date' in value) {
      const dateStr = (value as { $date?: string }).$date;
      if (!dateStr) return null;
      const date = new Date(dateStr);
      return isValidDate(date) ? date : null;
    }

    if (typeof value === 'string') {
      const date = new Date(value);
      return isValidDate(date) ? date : null;
    }

    return null;
  } catch {
    return null;
  }
};

const PAGE_TYPE_SORT_CONFIG: Record<SortConfigKey, PageTypeSortConfig> = {
  [PageType.ProjectInfo]: {
    sortField: 'projectStartDate',
    fallbackField: '_createdDate',
    priority: 3,
  },
  [PageType.Event]: {
    sortField: 'eventStartDate',
    fallbackField: '_createdDate',
    priority: 3,
  },
  [PageType.ProjectResult]: {
    sortField: 'publicationDate',
    fallbackField: '_createdDate',
    priority: 3,
  },
  [PageType.OrganisationInfo]: {
    sortField: '_createdDate',
    fallbackField: '_createdDate',
    priority: 1,
  },
  [PageType.PersonInfo]: {
    sortField: '_createdDate',
    fallbackField: '_createdDate',
    priority: 1,
  },
  [PageType.Post]: {
    sortField: '_createdDate',
    fallbackField: '_createdDate',
    priority: 1,
  },
  default: {
    sortField: '_createdDate',
    fallbackField: '_createdDate',
    priority: 0,
  },
};

const memoizedGetSortConfig = (() => {
  const cache = new Map<string, PageTypeSortConfig>();

  return (pageTypeTag: PageTypeTag | undefined): PageTypeSortConfig => {
    const key = pageTypeTag?.name?.toLowerCase() ?? 'default';
    if (!cache.has(key)) {
      cache.set(
        key,
        PAGE_TYPE_SORT_CONFIG[key as PageType] ||
          PAGE_TYPE_SORT_CONFIG['default']
      );
    }
    return cache.get(key)!;
  };
})();

const getHighestPriorityConfig = (
  pageTypes: PageTypeTag[] | undefined
): PageTypeSortConfig => {
  if (!pageTypes?.length) return PAGE_TYPE_SORT_CONFIG['default'];

  return pageTypes
    .map((pt) => memoizedGetSortConfig(pt))
    .reduce(
      (prev, current) => (current.priority > prev.priority ? current : prev),
      PAGE_TYPE_SORT_CONFIG['default']
    );
};

interface SortableItem extends Item {
  sortDate: number;
  sortPriority: number;
  pageType: string;
  hasPrimaryDate: boolean;
  hasFallbackDate: boolean;
}

const prepareSortableItems = (items: Item[]): SortableItem[] => {
  return items.map((item) => {
    const config = getHighestPriorityConfig(item.pageTypes);
    const pageType = item.pageTypes?.[0]?.name?.toLowerCase() ?? 'default';

    // Check for primary date
    const primaryDate = parseDate(item[config.sortField]);
    const hasPrimaryDate = primaryDate !== null;

    // Check for fallback date
    const fallbackDate = parseDate(item[config.fallbackField]);
    const hasFallbackDate = fallbackDate !== null;

    // Determine final sort date
    const sortDate = (primaryDate || fallbackDate || new Date(0)).getTime();

    return {
      ...item,
      sortDate,
      sortPriority: config.priority,
      pageType,
      hasPrimaryDate,
      hasFallbackDate,
    };
  });
};

const stableSort = <T,>(array: T[], compare: (a: T, b: T) => number): T[] => {
  return array
    .map((item, index) => ({ item, index }))
    .sort((a, b) => compare(a.item, b.item) || a.index - b.index)
    .map(({ item }) => item);
};

const sortItemsByPageType = (items: Item[]): Item[] => {
  try {
    const sortableItems = prepareSortableItems(items);

    return stableSort(sortableItems, (a, b) => {
      // First, compare page types if they're different
      if (a.pageType !== b.pageType) {
        return b.sortPriority - a.sortPriority;
      }

      // For items of the same page type:

      // 1. Items with primary dates come first
      if (a.hasPrimaryDate !== b.hasPrimaryDate) {
        return a.hasPrimaryDate ? -1 : 1;
      }

      // 2. For items that both have or both don't have primary dates,
      // sort by the actual date (whether primary or fallback)
      if (a.hasPrimaryDate === b.hasPrimaryDate) {
        return b.sortDate - a.sortDate;
      }

      // 3. If neither has a primary date, fall back to created date
      if (!a.hasPrimaryDate && !b.hasPrimaryDate) {
        return b.sortDate - a.sortDate;
      }

      return 0;
    });
  } catch (error) {
    console.error('Error sorting items:', error);
    return items;
  }
};

export interface MiniPagesListItemPostProps {
  items: Item[];
  title?: string;
  hideTitle?: boolean;
  pageTypePath?: 'post' | 'project' | 'person' | 'organisation';
  automaticallyCalculatePath?: boolean;
}

const MiniPagesListItemPost: React.FC<MiniPagesListItemPostProps> = ({
  items,
  title = 'Internal Links',
  hideTitle,
  pageTypePath,
  automaticallyCalculatePath,
}) => {
  const sortedItems = sortItemsByPageType(items);

  return (
    <section className={classNames(style.posts)}>
      {!hideTitle && (
        <Typography
          tag="h2"
          className={classNames('text-gray-800 w-full my-4', style.title)}
        >
          {title}
        </Typography>
      )}
      {sortedItems.map((item, index) => (
        <Link
          key={`${item?.title}-${item?._id || index}`}
          href={
            automaticallyCalculatePath
              ? `${automaticallyDecidePathPrefixBasedOnPageType(
                  item?.pageTypes?.[0]
                )}/${item.slug}`
              : `/${pageTypePath || 'post'}/${item.slug}`
          }
        >
          <MiniPagePost {...getPropsForMiniPagesListItemPost(item)} />
        </Link>
      ))}
    </section>
  );
};

export default MiniPagesListItemPost;
