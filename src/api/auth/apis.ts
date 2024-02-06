import STORAGE_KEYS from '@/constants/storageKeys';
import baseInstance from '../instance';

const authAPI = {
  // TODO: 추후 API 명세에 맞게 수정해야 합니다.
  postKakaoCode: async (code: string) => {
    const { data } = await baseInstance.post(
      '/api/oauth2/authorization/kakao',
      {
        code,
      },
    );
    return data;
  },

  /** 토큰 재발급 */
  getReissue: async () => {
    const { data } = await baseInstance.get('/api/auth/reissue', {
      headers: {
        refreshToken: localStorage.getItem(STORAGE_KEYS.refreshToken),
      },
    });
    return data;
  },

  /** 액세스 토큰이 필요한 API를 시뮬레이션하기 위해 테스트 코드에서만 사용되는 API */
  getAccessCheck: async () => {
    const { data } = await baseInstance.get('/mock/auth/access-check');
    return data;
  },
};

export default authAPI;
