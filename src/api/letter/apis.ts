import { letter } from '@/types/letter';
import baseInstance from '../instance';

const letterAPI = {
  /** 편지 작성 */
  postLetter: async (params: letter) => {
    const { data } = await baseInstance.post('/api/letter', { params });
    return data;
  },
};

export default letterAPI;
