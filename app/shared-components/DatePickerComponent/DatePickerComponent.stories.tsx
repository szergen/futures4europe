import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import DatePickerComponent, {
  DatePickerComponentProps,
} from './DatePickerComponent';

export default {
  title: 'DatePickerComponent',
  component: DatePickerComponent,
} as Meta;

const Template: StoryFn<DatePickerComponentProps> = (args) => (
  <DatePickerComponent {...args} />
);

export const Default = Template.bind({});
Default.args = {
  date: new Date(),
};
