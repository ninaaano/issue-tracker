import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../../../styles/theme';
import FilterBar from '.';

const meta = {
  title: 'Filter Bar',
  component: FilterBar,
};

export default meta;

const Template = (args) => {
  return <FilterBar {...args} />;
};

export const Primary = Template.bind({});
