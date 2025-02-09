import type { Meta } from '@storybook/react';
import { ImageLoaderContext, getMockedImages } from '@/context';
import { ImagePage } from './ImagePage';

const meta: Meta<typeof ImagePage> = {
  component: ImagePage,
};

export const Loading = () => (
  <ImageLoaderContext.Provider
    value={{
      isLoading: true,
      data: [],
      actions: {
        toggleFavorite: () => alert('toggleFavorite'),
      },
    }}
  >
    <ImagePage />
  </ImageLoaderContext.Provider>
);

export const Empty = () => (
  <ImageLoaderContext.Provider
    value={{
      isLoading: false,
      data: [],
      actions: {
        toggleFavorite: () => alert('toggleFavorite'),
      },
    }}
  >
    <ImagePage />
  </ImageLoaderContext.Provider>
);

export const Default = () => (
  <ImageLoaderContext.Provider
    value={{
      isLoading: false,
      data: getMockedImages(15),
      actions: {
        toggleFavorite: () => alert('toggleFavorite'),
      },
    }}
  >
    <ImagePage />
  </ImageLoaderContext.Provider>
);

export default meta;
