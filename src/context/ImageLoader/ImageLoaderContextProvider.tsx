import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { getApiClient } from '@/api';
import { ImageLoaderContext } from './ImageLoaderContext';
import { Image } from './ImageLoaderContext.types';
import { mapPhotoToImage } from './ImageLoaderContext.utils';

const FAVORITES_STORAGE_KEY = 'FAVORITES_STORAGE_KEY';

export const ImageLoaderContextProvider = ({ children }: PropsWithChildren) => {
  const isInitializedRef = useRef(false);
  const loadingPageRef = useRef(0);
  const currentPageRef = useRef(0);
  const favoritesRef = useRef(new Map());

  const [canLoadMore, setCanLoadMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Image[]>([]);

  const saveFavorites = (favorites: Map<string, string>) => {
    const entries = Array.from(favorites, ([name]) => name);

    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(entries));
  };

  const loadFavorites = () => {
    const storedEntries = localStorage.getItem(FAVORITES_STORAGE_KEY);

    if (storedEntries) {
      try {
        const entries = JSON.parse(storedEntries);
        const map = new Map(entries.map((id: number) => [id, true]));

        favoritesRef.current = map;
      } catch {
        localStorage.removeItem(FAVORITES_STORAGE_KEY);
      }
    }
  };

  const load = async (newPage: number) => {
    if (newPage !== loadingPageRef.current) {
      loadingPageRef.current = newPage;

      setIsLoading(true);

      const res = await getApiClient().load(newPage);

      if (res.status === 'success') {
        const { data } = res;

        if (!data.next_page) {
          setCanLoadMore(false);
        }

        const images: Image[] = data.photos.map((photo) =>
          mapPhotoToImage(photo, favoritesRef.current),
        );

        setData((v) => [...v, ...images]);
        currentPageRef.current = newPage;
      }

      setIsLoading(false);
    }
  };

  const loadNext = canLoadMore
    ? () => {
        load(currentPageRef.current + 1);
      }
    : undefined;

  const toggleFavorite = (id: number) => {
    const updatedFavorites = new Map(favoritesRef.current);
    const isFavorite = updatedFavorites.get(id);

    if (!isFavorite) {
      updatedFavorites.set(id, true);
    } else {
      updatedFavorites.delete(id);
    }

    favoritesRef.current = updatedFavorites;
    saveFavorites(updatedFavorites);
    setData((v) =>
      v.map((item) => {
        const isFavorite = updatedFavorites.get(item.id);

        return { ...item, isFavorite };
      }),
    );
  };

  useEffect(() => {
    if (!isInitializedRef.current) {
      isInitializedRef.current = true;

      loadFavorites();
      load(currentPageRef.current + 1);
    }
  }, [isInitializedRef]);

  const payload = {
    isLoading,
    data,
    actions: {
      loadNext,
      toggleFavorite,
    },
  };

  return <ImageLoaderContext.Provider value={payload}>{children}</ImageLoaderContext.Provider>;
};
