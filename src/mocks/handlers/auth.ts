import { http } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { authResolvers } from '../resolvers/auth';

const authHandler = [
  /** 카카오 인가 코드 전송 후 로그인 토큰 받아오기 */
  http.post(
    baseURL(API_PATHS.AUTH_LOGIN_KAKAO),
    authResolvers.postLoginKakao.firstLogin,
  ),

  /** 토큰 재발급 */
  http.get(baseURL(API_PATHS.AUTH_REISSUE), authResolvers.getReissue.success),

  /** 액세스 토큰이 필요한 API를 시뮬레이션하기 위해 테스트 코드에서만 사용되는 API */
  http.get(
    baseURL(API_PATHS.AUTH_ACCESS_CHECK),
    authResolvers.getAccessCheck.success,
  ),
];

export default authHandler;
