import * as React from 'react';
import { Story } from '@storybook/react';
import { Cell, CellProps } from './Cell';

const Template: Story<CellProps> = (args) => <Cell {...args} />;

export default {
  title: 'Components/Cell',
  component: Cell,
};

export const Default = Template.bind({});
Default.args = {
  id: 1,
};
