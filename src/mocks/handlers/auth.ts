import { http, HttpResponse } from 'msw';
import { baseURL, isValidToken } from '@/utils/mswUtils';
import ERROR_RESPONSES from '@/constants/errorMessages';
import STORAGE_KEYS from '@/constants/storageKeys';
import authAPI from '@/api/auth/apis';

const authHandler = [
  http.post(baseURL('/api/auth/login/kakao/postman'), async () => {
    const firstLogin = true;

    const result = {
      accessToken: 'fresh',
      refreshToken: 'fresh',
      firstLogin,
    } satisfies Awaited<ReturnType<(typeof authAPI)['postKakaoCode']>>;

    return HttpResponse.json(result);
  }),

  http.get(baseURL('/api/auth/reissue'), async (req) => {
    const refreshToken = req.request.headers.get(STORAGE_KEYS.refreshToken);

    if (isValidToken(refreshToken)) {
      return HttpResponse.json({
        accessToken: 'renewed',
        refreshToken: 'renewed',
      });
    } else {
      return new HttpResponse(ERROR_RESPONSES.reissueFailed, { status: 401 });
    }
  }),

  /** 액세스 토큰이 필요한 API를 시뮬레이션하기 위해 테스트 코드에서만 사용되는 API입니다.  */
  http.get(baseURL('/mock/auth/access-check'), async (req) => {
    const accessToken = req.request.headers.get(STORAGE_KEYS.accessToken);

    if (accessToken === 'fresh') {
      return new HttpResponse(
        '액세스 토큰이 유효하여 재발급하지 않아도 됩니다.',
      );
    } else {
      return new HttpResponse(ERROR_RESPONSES.accessExpired, {
        status: 401,
      });
    }
  }),
];

export default authHandler;
