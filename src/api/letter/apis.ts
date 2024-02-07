import { Letter } from '@/types/letter';
import { baseInstance } from '../instance';

const letterAPI = {
  /** 편지 작성 */
  postLetter: async (letter: Letter) => {
    const { data } = await baseInstance.post('/api/letter', letter);
    return data;
  },
};

export default letterAPI;
