import { http } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import { memberResolvers } from '../resolvers/member';
import withAuth from '../middlewares/withAuth';

const memberHandler = [
  http.get(baseURL('/api/member'), withAuth(memberResolvers.getMember.success)),

  http.patch(
    baseURL('/api/member'),
    withAuth(memberResolvers.patchMember.success),
  ),

  http.patch(
    baseURL('/api/member/nickname'),
    withAuth(memberResolvers.patchNickname.success),
  ),

  http.patch(
    baseURL('/api/member/birthday'),
    withAuth(memberResolvers.patchBirthday.success),
  ),

  http.patch(
    baseURL('/api/member/gender'),
    withAuth(memberResolvers.patchGender.success),
  ),

  http.delete(
    baseURL('/api/member/worry'),
    withAuth(memberResolvers.deleteWorry.success),
  ),

  http.post(
    baseURL('/api/member/worry'),
    withAuth(memberResolvers.postWorry.success),
  ),

  http.delete(
    baseURL('/api/member/sign-out'),
    withAuth(memberResolvers.deleteMember.success),
  ),
];

export default memberHandler;
