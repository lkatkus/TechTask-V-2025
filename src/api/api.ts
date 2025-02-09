import { mockApiClient } from './api.mock';
import { ApiClient, ClientResponse, PexelsResponse } from './api.types';

const LS_API_KEY = 'PEXELS_API_KEY';
const LS_QUERY_KEY = 'PEXELS_QUERY_KEY';

const MOCK_API = import.meta.env.VITE_MOCK_API;
const PEXELS_URL = import.meta.env.VITE_API_URL;
const PEXELS_API_KEY = localStorage.getItem(LS_API_KEY) || import.meta.env.VITE_API_KEY || 'cat';

const QUERY = localStorage.getItem(LS_QUERY_KEY) || 'cat';

const apiClient: ApiClient = {
  async load(page: number): Promise<ClientResponse> {
    try {
      const requestUrl = new URL(PEXELS_URL);
      const searchParams = new URLSearchParams({
        query: QUERY,
        page: String(page),
      });

      requestUrl.search = searchParams.toString();

      const response = await fetch(requestUrl, {
        headers: {
          Authorization: PEXELS_API_KEY,
        },
      });

      const data: PexelsResponse = await response.json();

      return {
        status: 'success',
        data,
      };
    } catch {
      return {
        status: 'error',
      };
    }
  },
};

export const getApiClient = () => {
  if (MOCK_API) {
    return mockApiClient;
  }

  return apiClient;
};
