import { type Worry, type Gender } from '@/constants/users';
import { Member } from '@/types/member';
import { API_PATHS } from '@/constants/routerPaths';
import { authInstance } from '../instance';

const memberAPI = {
  /** 자신의 회원 정보 조회 */
  getMemberDetail: async () => {
    const { data } = await authInstance.get<Member>(API_PATHS.MEMBER);
    return data;
  },

  /** 온보딩 정보 등록 */
  patchMemberDetail: async (body: {
    nickname: string;
    birthday: string;
    gender: Gender;
    worries: Worry[];
  }) => {
    const { data } = await authInstance.patch(API_PATHS.MEMBER, body);
    return data;
  },

  /** 닉네임 수정 */
  patchNickname: async (body: { nickname: string }) => {
    const { data } = await authInstance.patch(API_PATHS.MEMBER_NICKNAME, body);
    return data;
  },

  /** 생일 수정 */
  patchBirthday: async (body: { birthday: string }) => {
    const { data } = await authInstance.patch(API_PATHS.MEMBER_BIRTHDAY, body);
    return data;
  },

  /** 성별 수정 */
  patchGender: async (body: { gender: Gender }) => {
    const { data } = await authInstance.patch(API_PATHS.MEMBER_GENDER, body);
    return data;
  },

  /** 고민 삭제 */
  deleteWorry: async () => {
    const { data } = await authInstance.delete(API_PATHS.MEMBER_WORRY);
    return data;
  },

  /** 고민 등록 */
  postWorry: async (body: { worries: Worry[] }) => {
    const { data } = await authInstance.post(API_PATHS.MEMBER_WORRY, body);
    return data;
  },

  /** 회원 탈퇴 */
  deleteMember: async () => {
    const { data } = await authInstance.delete(API_PATHS.MEMBER_SIGN_OUT);
    return data;
  },
};

export default memberAPI;
