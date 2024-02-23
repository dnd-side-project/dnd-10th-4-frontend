import { Storage, type Reception, type Reply, Send } from '@/types/letter';
import { type Worry } from '@/constants/users';
import { type WriteInputs } from '@/pages/LetterWritePage';
import { EQUAL_GENDER_DICT } from '@/constants/letters';
import { type ReplyInputs } from '@/pages/LetterReceptionPage/NormalReception';
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
    letter,
  }: {
    letterId: number;
    letter: ReplyInputs;
  }) => {
    const formData = new FormData();
    formData.append('replyContent', letter.replyContent);

    if (letter.image) {
      formData.append('image', letter.image[0]);
    }

    const { data } = await authInstance.patch(
      `api/letter/reception/reply/${letterId}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    return data;
  },

  /** 받은 편지 패스 */
  patchReceptionPass: async (letterId: number) => {
    const { data } = await authInstance.patch(
      `/api/letter/reception/pass/${letterId}`,
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

  /** 답장 받은 편지 보관함에 보관 */
  patchReplyStorage: async (letterId: number) => {
    const { data } = await authInstance.patch(
      `/api/letter/reply/storage/${letterId}`,
    );
    return data;
  },

  /** 보관한 편지 페이징 조회 */
  getStoragePaging: async (page: string) => {
    const { data } = await authInstance.get<Storage>(`/api/letter/storage`, {
      params: { page },
    });
    return data;
  },

  /** 내가 보낸 편지 페이징 조회 */
  getSendPaging: async (page: string) => {
    const { data } = await authInstance.get<Send>(`/api/letter/send`, {
      params: { page },
    });
    return data;
  },

  /** 보관된 편지 보관 취소 */
  patchDeleteLetter: async (letterId: number) => {
    const { data } = await authInstance.patch(
      `/api/letter/storage/${letterId}`,
    );
    return data;
  },

  /** 보낸 편지 삭제 */
  patchDeleteSend: async (letterId: number) => {
    const { data } = await authInstance.patch(`/api/letter/send/${letterId}`);
    return data;
  },
};

export default letterAPI;
