import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    onClick: () => alert('onClick'),
    children: 'Button Label',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    onClick: () => alert('onClick'),
    children: 'Button Label',
    variant: 'secondary',
  },
};

export default meta;
