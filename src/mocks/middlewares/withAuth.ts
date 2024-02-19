import {
  HttpResponse,
  type DefaultBodyType,
  type HttpResponseResolver,
  type PathParams,
} from 'msw';
import STORAGE_KEYS from '@/constants/storageKeys';
import { isValidToken } from '@/utils/mswUtils';
import ERROR_RESPONSES from '@/constants/errorMessages';

/** 로그인이 되어 있지 않다면 401 응답을 하는 미들웨어입니다. */
function withAuth(
  resolver: HttpResponseResolver<PathParams, DefaultBodyType, undefined>,
): HttpResponseResolver<PathParams, DefaultBodyType, undefined> {
  return async (input) => {
    const { request } = input;

    const accessToken = request.headers.get(STORAGE_KEYS.accessToken);

    if (!isValidToken(accessToken)) {
      return new HttpResponse(ERROR_RESPONSES.accessExpired, { status: 401 });
    }

    return resolver(input);
  };
}

export default withAuth;
