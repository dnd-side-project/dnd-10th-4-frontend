import { Letter, Reception } from '@/types/letter';
import { Worry } from '@/constants/users';
import { baseInstance, authInstance } from '../instance';

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
    const { data } = await authInstance.post('/api/letter', letter);
    return data;
  },

  /** 보낸 편지 단건 조회 */
  getSingleReception: async (letterId: number) => {
    const { data } = await authInstance.get<Reception>(
      `/api/letter/reception/${letterId}`,
    );
    return data;
  },

  /** 받은 편지 답장 */
  patchReceptionReply: async ({
    letterId,
    body,
  }: {
    letterId: number;
    body: FormData;
  }) => {
    const { data } = await authInstance.patch(
      `api/letter/reception/reply/${letterId}`,
      body,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data;
  },

  /** 받은 편지 토스 */
  patchReceptionToss: async (letterId: number) => {
    const { data } = await authInstance.patch(
      `/api/letter/reception/toss/${letterId}`,
    );
    return data;
  },
};

export default letterAPI;
