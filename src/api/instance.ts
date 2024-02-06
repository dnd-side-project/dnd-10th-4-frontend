import axios, { isAxiosError } from 'axios';
import { BACKEND_ENDPOINT } from '@/constants/endpoint';
import STORAGE_KEYS from '@/constants/storageKeys';
import { ROUTER_PATHS } from '@/router';
import authAPI from './auth/apis';

const baseInstance = axios.create({
  baseURL: BACKEND_ENDPOINT,
  timeout: 30000,
  withCredentials: true,
});

baseInstance.interceptors.request.use((config) => {
  config.headers.accessToken = localStorage.getItem(STORAGE_KEYS.accessToken);

  return config;
});

baseInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { config } = error;

    if (isAxiosError(error)) {
      switch (error.response?.data) {
        case '액세스 토큰이 만료되었습니다.': {
          const res = await authAPI.getReissue();
          localStorage.setItem(STORAGE_KEYS.accessToken, res.accessToken);
          localStorage.setItem(STORAGE_KEYS.refreshToken, res.refreshToken);
          return axios(config);
        }
        case '리프레시 토큰이 올바르지 않습니다. 다시 로그인해주세요.': {
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

export default baseInstance;
