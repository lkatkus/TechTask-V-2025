import type { Meta, StoryObj } from '@storybook/react';
import { ImageCard } from './ImageCard';

const meta: Meta<typeof ImageCard> = {
  component: ImageCard,
};

type Story = StoryObj<typeof ImageCard>;

export const Default: Story = {
  args: {
    src: '/placeholder.png',
    title: 'Image title',
    subTitle: 'Image subTitle',
    onToggleFavorite: () => alert('toggleFavorite'),
  },
};

export const WithFavorite: Story = {
  args: {
    src: '/placeholder.png',
    title: 'Image title',
    subTitle: 'Image subTitle',
    isFavorite: true,
    onToggleFavorite: () => alert('toggleFavorite'),
  },
};

export default meta;
