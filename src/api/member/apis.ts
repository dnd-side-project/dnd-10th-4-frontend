import { type Worry, type Gender } from '@/constants/users';
import { Member } from '@/types/member';
import { authInstance } from '../instance';

const memberAPI = {
  /** 자신의 회원 정보 조회 */
  getMemberDetail: async () => {
    const { data } = await authInstance.get<Member>('/api/member');
    return data;
  },

  /** 온보딩 정보 등록 */
  patchMemberDetail: async (body: {
    nickname: string;
    birthday: string;
    gender: Gender;
    worries: Worry[];
  }) => {
    const { data } = await authInstance.patch('/api/member', body);
    return data;
  },

  /** 닉네임 수정 */
  patchNickname: async (body: { nickname: string }) => {
    const { data } = await authInstance.patch('/api/member/nickname', body);
    return data;
  },

  /** 생일 수정 */
  patchBirthday: async (body: { birthday: string }) => {
    const { data } = await authInstance.patch('/api/member/birthday', body);
    return data;
  },

  /** 성별 수정 */
  patchGender: async (body: { gender: Gender }) => {
    const { data } = await authInstance.patch('/api/member/gender', body);
    return data;
  },

  /** 고민 삭제 */
  deleteWorry: async () => {
    const { data } = await authInstance.delete('/api/member/worry');
    return data;
  },

  /** 고민 등록 */
  postWorry: async (body: { worries: Worry[] }) => {
    const { data } = await authInstance.post('/api/member/worry', body);
    return data;
  },

  /** 회원 탈퇴 */
  deleteMember: async () => {
    const { data } = await authInstance.delete('/api/member/sign-out');
    return data;
  },
};

export default memberAPI;
