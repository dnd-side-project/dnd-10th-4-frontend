import { BACKEND_ENDPOINT } from '@/constants/endpoint';

/** MSW 핸들러에서 사용할 base URL 경로를 반환합니다. */
export const baseURL = (path: string) => {
  return BACKEND_ENDPOINT + path;
};

/** MSW 핸들러의 시나리오에서 액세스 토큰 or 리프레쉬 토큰이 유효한지 체크합니다. */
export const isValidToken = (token: string | null) => {
  return token === 'fresh' || token === 'renewed';
};
