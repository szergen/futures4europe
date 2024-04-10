import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Tag, { TagProps } from './Tag';
import { TagCategories } from './Tag.utils';

export default {
  title: 'Tag',
  component: Tag,
} as Meta;

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  tagText: 'Very Long Tag text that should be truncated',
  editable: true,
  //   className: 'bg-blue-500',
  //   tagCategory: TagCategories.person,
  href: 'https://www.google.com',
  thumbnail: 'https://picsum.photos/id/101/140/140',
  thumbnailAlt: 'Thumbnail',
  tagCounter: 5,
  tagTrend: 10,
  enableLabel: true,
};
