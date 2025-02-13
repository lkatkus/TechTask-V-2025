export type Photo = {
  id: number;
  width: number;
  height: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  avg_color: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
  liked: boolean;
  alt: string;
};

export type PexelsResponse = {
  next_page?: string;
  page: number;
  per_page: number;
  photos: Photo[];
  total_results: number;
};

type ErrorResponse = {
  status: 'error';
};

type SuccessResponse = {
  status: 'success';
  data: PexelsResponse;
};

export type ClientResponse = ErrorResponse | SuccessResponse;

export type ApiClient = {
  load: (page: number) => Promise<ClientResponse>;
};
