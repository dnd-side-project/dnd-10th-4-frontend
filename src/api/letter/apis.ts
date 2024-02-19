import { type Reception, type Reply } from '@/types/letter';
import { type Worry } from '@/constants/users';
import { type WriteInputs } from '@/pages/LetterWritePage';
import { type ReplyInputs } from '@/pages/LetterReceptionPage/ReplyToLetter';
import { EQUAL_GENDER_DICT } from '@/constants/letters';
import { authInstance } from '../instance';

const letterAPI = {
  /** 받은 편지 전체 조회 */
  getReceivedLetters: async () => {
    const { data } = await authInstance.get<Reception[]>(
      '/api/letter/reception',
    );
    return data;
  },

  /** 답장 받은 편지 페이징 조회 */
  getRepliedLetters: async () => {
    const { data } = await authInstance.get<Reply[]>(`/api/letter/reply`);
    return data;
  },

  /** 편지 작성 */
  postLetter: async (letter: WriteInputs) => {
    const formData = new FormData();
    formData.append('content', letter.content);
    formData.append(
      'equalGender',
      EQUAL_GENDER_DICT[1] === letter.gender ? 'true' : 'false',
    );
    formData.append('ageRangeStart', letter.age[0].toString());
    formData.append('ageRangeEnd', letter.age[1].toString());
    formData.append('worryType', letter.worryType as Worry);

    if (letter.image) {
      formData.append('image', letter.image[0]);
    }

    const { data } = await authInstance.post('/api/letter', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
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
    body: ReplyInputs;
  }) => {
    const { data } = await authInstance.patch(
      `api/letter/reception/reply/${letterId}`,
      body,
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

  /** 답장 받은 편지 단건 조회 */
  getSingleReply: async (letterId: number) => {
    const { data } = await authInstance.get<Reply>(
      `/api/letter/reply/${letterId}`,
    );
    return data;
  },

  /** 받은 편지 보관함에 보관 */
  patchReceptionStorage: async (letterId: number) => {
    const { data } = await authInstance.patch(
      `/api/letter/reception/storage/${letterId}`,
    );
    return data;
  },
};

export default letterAPI;
