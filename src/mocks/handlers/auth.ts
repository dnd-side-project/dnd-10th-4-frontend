import { http, HttpResponse, delay } from 'msw';
import { baseURL, isValidToken } from '@/utils/mswUtils';
import ERROR_RESPONSES from '@/constants/errorMessages';
import STORAGE_KEYS from '@/constants/storageKeys';

const authHandler = [
  http.post(baseURL('/api/oauth2/authorization/kakao'), async () => {
    await delay(300);

    localStorage.setItem(STORAGE_KEYS.accessToken, 'fresh');
    localStorage.setItem(STORAGE_KEYS.refreshToken, 'fresh');

    return HttpResponse.json();
  }),

  http.get(baseURL('/api/auth/reissue'), async (req) => {
    await delay(300);

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
