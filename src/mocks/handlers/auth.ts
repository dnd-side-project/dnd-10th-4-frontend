import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';

const authHandler = [
  http.post(baseURL('/api/oauth2/authorization/kakao'), async () => {
    await delay(300);

    return HttpResponse.json();
  }),

  http.get(baseURL('/api/auth/reissue'), async (req) => {
    await delay(300);

    const refreshToken = req.request.headers.get('refreshtoken');

    if (refreshToken === 'fresh') {
      return HttpResponse.json({
        accessToken: 'renewed',
        refreshToken: 'renewed',
      });
    } else {
      return new HttpResponse(
        '리프레시 토큰이 올바르지 않습니다. 다시 로그인해주세요.',
        { status: 401 },
      );
    }
  }),

  /** 액세스 토큰이 필요한 API를 시뮬레이션하기 위해 테스트 코드에서만 사용되는 API입니다. */
  http.get(baseURL('/mock/auth/access-check'), async (req) => {
    const accessToken = req.request.headers.get('accesstoken');

    if (accessToken === 'fresh') {
      return new HttpResponse('액세스 토큰이 유효합니다.');
    } else {
      return new HttpResponse('액세스 토큰이 만료되었습니다.', {
        status: 401,
      });
    }
  }),
];

export default authHandler;
