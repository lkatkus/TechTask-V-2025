export type Image = {
  id: number;
  src: string;
  title: string;
  subTitle: string;
  isFavorite?: boolean;
};

export type ImageLoaderContextValues = {
  isLoading: boolean;
  data: Image[];
  actions: {
    loadNext?: () => void;
    toggleFavorite: (id: number) => void;
  };
};
