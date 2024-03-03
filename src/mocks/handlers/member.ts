import { http } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { memberResolvers } from '../resolvers/member';
import withAuth from '../middlewares/withAuth';

const memberHandler = [
  /** 자신의 회원 정보 조회 */
  http.get(
    baseURL(API_PATHS.MEMBER),
    withAuth(memberResolvers.getMember.success),
  ),

  /** 온보딩 정보 등록 */
  http.patch(
    baseURL(API_PATHS.MEMBER),
    withAuth(memberResolvers.patchMember.success),
  ),

  /** 닉네임 수정 */
  http.patch(
    baseURL(API_PATHS.MEMBER_NICKNAME),
    withAuth(memberResolvers.patchNickname.success),
  ),

  /** 생일 수정 */
  http.patch(
    baseURL(API_PATHS.MEMBER_BIRTHDAY),
    withAuth(memberResolvers.patchBirthday.success),
  ),

  /** 성별 수정 */
  http.patch(
    baseURL(API_PATHS.MEMBER_GENDER),
    withAuth(memberResolvers.patchGender.success),
  ),

  /** 고민 삭제 */
  http.delete(
    baseURL(API_PATHS.MEMBER_WORRY),
    withAuth(memberResolvers.deleteWorry.success),
  ),

  /** 고민 등록 */
  http.post(
    baseURL(API_PATHS.MEMBER_WORRY),
    withAuth(memberResolvers.postWorry.success),
  ),

  /** 회원 탈퇴 */
  http.delete(
    baseURL(API_PATHS.MEMBER_SIGN_OUT),
    withAuth(memberResolvers.deleteMember.success),
  ),
];

export default memberHandler;
