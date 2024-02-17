import { type Worry, type Gender, type Role } from '@/constants/users';
import { authInstance } from '../instance';

const memberAPI = {
  /** 자신의 회원 정보 조회 */
  getMemberDetail: async () => {
    const { data } = await authInstance.get<{
      id: number;
      email: string;
      nickname: string;
      worryTypes: Worry[];
      gender: Gender;
      age: number;
      role: Role;
    }>('/api/member');
    return data;
  },

  /** 온보딩 정보 등록 */
  postMemberDetail: async (params: {
    nickname: string;
    birthday: string;
    gender: Gender;
    worries: Worry[];
  }) => {
    const { data } = await authInstance.post('/api/member', {
      params,
    });
    return data;
  },

  /** 닉네임 수정 */
  patchNickname: async (params: { nickname: string }) => {
    const { data } = await authInstance.patch('/api/member/nickname', {
      params,
    });
    return data;
  },

  /** 생일 수정 */
  patchBirthday: async (params: { birthday: string }) => {
    const { data } = await authInstance.patch('/api/member/birthday', {
      params,
    });
    return data;
  },

  /** 성별 수정 */
  patchGender: async (params: { gender: Gender }) => {
    const { data } = await authInstance.patch('/api/member/gender', {
      params,
    });
    return data;
  },

  /** 고민 삭제 */
  deleteWorry: async () => {
    const { data } = await authInstance.delete('/api/member/worry');
    return data;
  },

  /** 고민 등록 */
  postWorry: async (params: { worries: Worry[] }) => {
    const { data } = await authInstance.post('/api/member/worry', {
      params,
    });
    return data;
  },
};

export default memberAPI;
