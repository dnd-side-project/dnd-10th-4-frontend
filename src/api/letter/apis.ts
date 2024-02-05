import { type Worry } from '@/constants/users';
import baseInstance from '../instance';

const letterAPI = {
  /** 편지 작성 */
  postLetter: async (params: {
    content: string;
    equalGender: boolean;
    ageRangeStart: number;
    ageRangeEnd: number;
    worryType: Worry;
  }) => {
    const { data } = await baseInstance.post('/api/letter', { params });
    return data;
  },
};

export default letterAPI;
