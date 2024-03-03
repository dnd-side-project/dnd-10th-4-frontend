import STORAGE_KEYS from '@/constants/storageKeys';
import { API_PATHS } from '@/constants/routerPaths';
import { baseInstance, authInstance } from '../instance';

const authAPI = {
  /** 카카오 인가 코드 전송 후 로그인 토큰 받아오기 */
  postKakaoCode: async (code: string) => {
    const { data } = await baseInstance.post<{
      accessToken: string;
      refreshToken: string;
      firstLogin: boolean;
    }>(API_PATHS.AUTH_LOGIN_KAKAO, null, {
      params: {
        code,
      },
    });
    return data;
  },

  /** 토큰 재발급 */
  getReissue: async () => {
    const { data } = await authInstance.get(API_PATHS.AUTH_REISSUE, {
      headers: {
        refreshToken: localStorage.getItem(STORAGE_KEYS.refreshToken),
      },
    });
    return data;
  },

  /** 액세스 토큰이 필요한 API를 시뮬레이션하기 위해 테스트 코드에서만 사용되는 API */
  getAccessCheck: async () => {
    const { data } = await authInstance.get(API_PATHS.AUTH_ACCESS_CHECK);
    return data;
  },
};

export default authAPI;
