import type { Meta } from '@storybook/react';
import { ImageLoaderContext, getMockedImages } from '@/context';
import { ImageList } from './ImageList';

const meta: Meta<typeof ImageList> = {
  component: ImageList,
};

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
    <ImageList />
  </ImageLoaderContext.Provider>
);

export const WithLoadingTrigger = () => (
  <ImageLoaderContext.Provider
    value={{
      isLoading: false,
      data: getMockedImages(15),
      actions: {
        loadNext: () => alert('loadNext'),
        toggleFavorite: () => alert('toggleFavorite'),
      },
    }}
  >
    <ImageList />
  </ImageLoaderContext.Provider>
);

export default meta;
