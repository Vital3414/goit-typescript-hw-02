import axios from "axios";

const BASE_URL = "https://api.unsplash.com";
const ACCESS_KEY = "HCitx9vUVehlHjE_eSe3KXCWcxgRLuPBQiV6Qy5BpQE";

interface ImageItem {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  alt_description: string;
}

interface ApiResponse {
  results: ImageItem[];
}

export const fetchPhotos = async (
  query: string,
  page: number
): Promise<ApiResponse> => {
  const { data } = await axios.get(`${BASE_URL}/search/photos`, {
    params: {
      page,
      query,
      client_id: ACCESS_KEY,
    },
  });
  return data;
};
