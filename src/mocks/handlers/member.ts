import { http } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { API_PATHS } from '@/constants/routerPaths';
import { memberResolvers } from '../resolvers/member';
import withAuth from '../middlewares/withAuth';

const memberHandler = [
  http.get(
    baseURL(API_PATHS.MEMBER),
    withAuth(memberResolvers.getMember.success),
  ),

  http.patch(
    baseURL(API_PATHS.MEMBER),
    withAuth(memberResolvers.patchMember.success),
  ),

  http.patch(
    baseURL(API_PATHS.MEMBER_NICKNAME),
    withAuth(memberResolvers.patchNickname.success),
  ),

  http.patch(
    baseURL(API_PATHS.MEMBER_BIRTHDAY),
    withAuth(memberResolvers.patchBirthday.success),
  ),

  http.patch(
    baseURL(API_PATHS.MEMBER_GENDER),
    withAuth(memberResolvers.patchGender.success),
  ),

  http.delete(
    baseURL(API_PATHS.MEMBER_WORRY),
    withAuth(memberResolvers.deleteWorry.success),
  ),

  http.post(
    baseURL(API_PATHS.MEMBER_WORRY),
    withAuth(memberResolvers.postWorry.success),
  ),

  http.delete(
    baseURL(API_PATHS.MEMBER_SIGN_OUT),
    withAuth(memberResolvers.deleteMember.success),
  ),
];

export default memberHandler;
