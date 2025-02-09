import { ApiClient, PexelsResponse, Photo } from './api.types';

const getMockPhoto = (id: number): Photo =>
  ({
    id,
    alt: `photo-alt-${id}`,
    photographer: `photo-photographer-${id}`,
    src: { tiny: '/placeholder.png' },
  }) as Photo;
const getMockPhotos = (prefix: number, count: number): Photo[] =>
  Array(count)
    .fill(null)
    .map((_, i) => getMockPhoto(prefix + i));

const MOCK_PAGES_DATA: PexelsResponse[] = [
  {
    page: 1,
    per_page: 15,
    total_results: 25,
    next_page: 'next-page-2',
    photos: getMockPhotos(100, 15),
  },
  {
    page: 2,
    per_page: 15,
    total_results: 25,
    next_page: 'next-page-3',
    photos: getMockPhotos(200, 15),
  },
  {
    page: 3,
    per_page: 15,
    total_results: 25,
    photos: getMockPhotos(300, 5),
  },
];

const EMPTY_PAGES_DATA: PexelsResponse = {
  page: 1,
  per_page: 15,
  total_results: 0,
  photos: [],
};

const RESPONSE_TIMEOUT = 500;
const MOCK_API_EMPTY_RESPONSE = 'MOCK_API_EMPTY_RESPONSE';

export const mockApiClient: ApiClient = {
  load: async (page: number) =>
    new Promise((res) => {
      setTimeout(() => {
        const isEmptyResponse = localStorage.getItem(MOCK_API_EMPTY_RESPONSE);
        const data = isEmptyResponse ? EMPTY_PAGES_DATA : MOCK_PAGES_DATA[page - 1];

        return res({ status: 'success', data });
      }, RESPONSE_TIMEOUT);
    }),
};
