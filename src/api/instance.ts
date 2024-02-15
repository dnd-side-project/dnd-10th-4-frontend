import axios, { isAxiosError } from 'axios';
import { BACKEND_ENDPOINT } from '@/constants/endpoint';
import STORAGE_KEYS from '@/constants/storageKeys';
import { ROUTER_PATHS } from '@/router';
import ERROR_RESPONSES from '@/constants/errorMessages';
import authAPI from './auth/apis';

/** 단순한 API 요청 클라이언트 */
export const baseInstance = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 30000,
});

/** 사용자 인가 권한이 필요한 API 요청 클라이언트 */
export const authInstance = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 30000,
});

authInstance.interceptors.request.use((config) => {
  config.headers.accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);

  return config;
});

authInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config } = error;

    if (isAxiosError(error)) {
      switch (error.response?.data) {
        case ERROR_RESPONSES.accessExpired: {
          const res = await authAPI.getReissue();
          localStorage.setItem(STORAGE_KEYS.accessToken, res.accessToken);
          localStorage.setItem(STORAGE_KEYS.refreshToken, res.refreshToken);
          return axios({
            ...config,
            headers: {
              ...config.headers,
              accessToken: localStorage.getItem(STORAGE_KEYS.accessToken),
            },
          });
        }
        case ERROR_RESPONSES.reissueFailed: {
          localStorage.removeItem(STORAGE_KEYS.accessToken);
          localStorage.removeItem(STORAGE_KEYS.refreshToken);
          window.location.href = ROUTER_PATHS.SIGNIN;
          break;
        }
        default:
          break;
      }
    }

    return Promise.reject(error);
  },
);
