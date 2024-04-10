import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import FileUploader, { FileUploaderProps } from './FileUploader';

export default {
  title: 'FileUploader',
  component: FileUploader,
} as Meta;

const Template: StoryFn<FileUploaderProps> = (args) => (
  <FileUploader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
