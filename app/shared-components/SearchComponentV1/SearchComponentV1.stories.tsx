import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import SearchComponentV1 from './SearchComponentV1';

export default {
  title: 'SearchComponentV1',
  component: SearchComponentV1,
} as Meta;

const Template: StoryFn = (args) => <SearchComponentV1 {...args} />;

export const Default = Template.bind({});
