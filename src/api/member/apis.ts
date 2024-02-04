import {
  type Worry,
  type Gender,
  type Role,
  type Nickname,
} from '@/types/member';
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
};

export default memberAPI;
