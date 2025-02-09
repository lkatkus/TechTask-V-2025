import { createContext, useContext } from 'react';
import { ImageLoaderContextValues } from './ImageLoaderContext.types';

const initialValues: ImageLoaderContextValues = {
  isLoading: false,
  data: [],
  actions: {
    toggleFavorite: () => null,
  },
};

export const ImageLoaderContext = createContext<ImageLoaderContextValues>(initialValues);

export const useImageLoader = () => useContext(ImageLoaderContext);
