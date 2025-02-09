import { describe, expect, it } from 'vitest';
import { Photo } from '@/api/api.types';
import { mapPhotoToImage } from './ImageLoaderContext.utils';

const BASE_PAYLOAD = {
  id: 1,
  alt: 'payload-alt',
  src: { tiny: 'payload-tiny' },
  photographer: 'payload-photographer',
} as Photo;

const BASE_RESULT = {
  id: 1,
  isFavorite: false,
  src: 'payload-tiny',
  subTitle: 'payload-photographer',
  title: 'payload-alt',
};

const BASE_FAVORITES = new Map([[2, true]]);

describe('ImageLoaderContext.utils', () => {
  describe('mapPhotoToImage', () => {
    it('maps Photo to Image', () => {
      expect(mapPhotoToImage(BASE_PAYLOAD, BASE_FAVORITES)).toStrictEqual(BASE_RESULT);
    });

    it('sets isFavorite using favorites argument', () => {
      expect(mapPhotoToImage({ ...BASE_PAYLOAD, id: 2 }, BASE_FAVORITES)).toStrictEqual({
        ...BASE_RESULT,
        id: 2,
        isFavorite: true,
      });
    });
  });
});
