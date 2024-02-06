import {
  type Worry,
  type Gender,
  type Role,
  type Nickname,
} from '@/constants/users';
import baseInstance from '../instance';

const memberAPI = {
  /** 자신의 회원 정보 조회 */
  getMemberDetail: async () => {
    const { data } = await baseInstance.get<{
      id: number;
      email: string;
      nickname: `낯선 ${Nickname}`;
      worryTypes: Worry[];
      gender: Gender;
      age: number;
      role: Role;
    }>('/api/member');
    return data;
  },

  /** 닉네임 수정 */
  patchNickname: async (params: { nickname: Nickname }) => {
    const { data } = await baseInstance.patch('/api/member/nickname', {
      params,
    });
    return data;
  },

  /** 생일 수정 */
  patchBirthday: async (params: { birthday: string }) => {
    const { data } = await baseInstance.patch('/api/member/birthday', {
      params,
    });
    return data;
  },

  /** 성별 수정 */
  patchGender: async (params: { gender: Gender }) => {
    const { data } = await baseInstance.patch('/api/member/gender', {
      params,
    });
    return data;
  },

  /** 고민 삭제 */
  deleteWorry: async () => {
    const { data } = await baseInstance.delete('/api/member/worry');
    return data;
  },

  /** 고민 등록 */
  postWorry: async (params: { worries: Worry[] }) => {
    const { data } = await baseInstance.post('/api/member/worry', {
      params,
    });
    return data;
  },
};

export default memberAPI;