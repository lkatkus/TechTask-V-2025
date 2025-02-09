import { Photo } from '@/api/api.types';
import { Image } from './ImageLoaderContext.types';

export const mapPhotoToImage = (
  { id, alt, src, photographer }: Photo,
  favorites: Map<number, boolean>,
): Image => ({
  id,
  src: src.tiny,
  title: alt,
  subTitle: photographer,
  isFavorite: favorites.has(id),
});
