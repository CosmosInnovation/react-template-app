import axios, { AxiosResponse } from "axios";
import { END_POINTS } from "./uri";
import { getJWToken } from "./token";

export const request = async (
  endpoint: string,
  method: 'get' | 'post' | 'put' | 'patch' | 'delete',
  data?: object
): Promise<AxiosResponse> => {
  
  const url = `${END_POINTS.BASE_URL}${endpoint}`;
  const token = getJWToken();
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token ? token : ''}`,
  }

  switch (method) {
    case 'get':
    case 'delete':
      return await axios[method](url, { headers });
    case 'post':
    case 'put':
    case 'patch':
      return await axios[method](url, data, { headers });
    default:
      throw new Error(`Unsupported method "${method}"`);
  }
};
