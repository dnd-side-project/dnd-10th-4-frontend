import { Letter } from '@/types/letter';
import { Worry } from '@/constants/users';
import { baseInstance } from '../instance';

const letterAPI = {
  /** 받은 편지 전체 조회 */
  getReceivedLetters: async () => {
    const { data } = await baseInstance.get<
      Array<{
        createdAt: string;
        letterId: number;
        senderNickname: string;
        receiverNickname: string;
        content: string;
        worryType: Worry;
      }>
    >('/api/letter/reception');
    return data;
  },

  /** 답장 받은 편지 페이징 조회 */
  getRepliedLetters: async (page: number) => {
    const { data } = await baseInstance.get<
      Array<{
        createdAt: string;
        letterId: number;
        senderNickname: string;
        receiverNickname: string;
        content: string;
        repliedContent: string;
        worryType: Worry;
      }>
    >(`/api/letter/reply`, {
      params: {
        page,
      },
    });
    return data;
  },

  /** 편지 작성 */
  postLetter: async (letter: Letter) => {
    const { data } = await baseInstance.post('/api/letter', letter);
    return data;
  },
};

export default letterAPI;
