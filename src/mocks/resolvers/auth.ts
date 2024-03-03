import { HttpResponse } from 'msw';
import authAPI from '@/api/auth/apis';
import { MSWResolvers, isValidToken } from '@/utils/mswUtils';
import STORAGE_KEYS from '@/constants/storageKeys';
import ERROR_RESPONSES from '@/constants/errorMessages';

export const authResolvers = {
  getReissue: {
    success: async (req) => {
      const refreshToken = req.request.headers.get(STORAGE_KEYS.refreshToken);

      if (isValidToken(refreshToken)) {
        return HttpResponse.json({
          accessToken: 'renewed',
          refreshToken: 'renewed',
        });
      } else {
        return new HttpResponse(ERROR_RESPONSES.reissueFailed, { status: 401 });
      }
    },
  },

  getAccessCheck: {
    success: async (req) => {
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
    },
  },

  postLoginKakao: {
    success: async () => {
      const result = {
        accessToken: 'fresh',
        refreshToken: 'fresh',
        firstLogin: false,
      } satisfies Awaited<ReturnType<(typeof authAPI)['postKakaoCode']>>;

      return HttpResponse.json(result);
    },
    firstLogin: async () => {
      const result = {
        accessToken: 'fresh',
        refreshToken: 'fresh',
        firstLogin: true,
      } satisfies Awaited<ReturnType<(typeof authAPI)['postKakaoCode']>>;

      return HttpResponse.json(result);
    },
  },
} satisfies MSWResolvers;
