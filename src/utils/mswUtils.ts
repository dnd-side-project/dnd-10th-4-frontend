import { BACKEND_ENDPOINT } from '@/constants/endpoint';

/** MSW 핸들러에서 사용할 base URL 경로를 반환합니다. */
export const baseURL = (path: string) => {
  return BACKEND_ENDPOINT + path;
};
