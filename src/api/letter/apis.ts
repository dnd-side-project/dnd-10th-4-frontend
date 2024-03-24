import { Storage, type Reception, type Reply, Send } from '@/types/letter';
import { type Worry } from '@/constants/users';
import { type WriteInputs } from '@/pages/LetterWritePage';
import { EQUAL_GENDER_DICT } from '@/constants/letters';
import { type ReplyInputs } from '@/pages/LetterReceptionPage/NormalReception';
import { API_PATHS } from '@/constants/routerPaths';
import { stringFilter } from '@/utils/stringFilter';
import { authInstance } from '../instance';

const letterAPI = {
  /** 받은 편지 전체 조회 */
  getReceivedLetters: async () => {
    const { data } = await authInstance.get<Reception[]>(
      API_PATHS.LETTER_RECEPTION,
    );
    return data;
  },

  /** 답장 받은 편지 페이징 조회 */
  getRepliedLetters: async () => {
    const { data } = await authInstance.get<Reply[]>(API_PATHS.LETTER_REPLY);
    return data;
  },

  /** 편지 작성 */
  postLetter: async (letter: WriteInputs) => {
    const formData = new FormData();
    formData.append('content', stringFilter(letter.content));
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

    const { data } = await authInstance.post(API_PATHS.LETTER, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  },

  /** 보낸 편지 단건 조회 */
  getSingleReception: async (letterId: number) => {
    const { data } = await authInstance.get<Reception>(
      API_PATHS.LETTER_RECEPTION_DETAIL(`${letterId}`),
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
    formData.append('replyContent', stringFilter(letter.replyContent));

    if (letter.image) {
      formData.append('image', letter.image[0]);
    }

    const { data } = await authInstance.patch(
      API_PATHS.LETTER_RECEPTION_REPLY_DETAIL(`${letterId}`),
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
      API_PATHS.LETTER_RECEPTION_PASS_DETAIL(`${letterId}`),
    );
    return data;
  },

  /** 답장 받은 편지 단건 조회 */
  getSingleReply: async (letterId: number) => {
    const { data } = await authInstance.get<Reply>(
      API_PATHS.LETTER_REPLY_DETAIL(`${letterId}`),
    );
    return data;
  },

  /** 답장 받은 편지 보관함에 보관 */
  patchReplyStorage: async (letterId: number) => {
    const { data } = await authInstance.patch(
      API_PATHS.LETTER_REPLY_STORAGE_DETAIL(`${letterId}`),
    );
    return data;
  },

  /** 온보딩 편지 보관함에 보관 */
  patchOnboardingStorage: async (letterId: number) => {
    const { data } = await authInstance.patch(
      API_PATHS.LETTER_ONBOARDING_STORAGE_DETAIL(`${letterId}`),
    );
    return data;
  },

  /** 보관한 편지 페이징 조회 */
  getStoragePaging: async (page: string) => {
    const { data } = await authInstance.get<Storage>(API_PATHS.LETTER_STORAGE, {
      params: { page },
    });
    return data;
  },

  /** 내가 보낸 편지 페이징 조회 */
  getSendPaging: async (page: string) => {
    const { data } = await authInstance.get<Send>(API_PATHS.LETTER_SEND, {
      params: { page },
    });
    return data;
  },

  /** 보관된 편지 보관 취소 */
  patchDeleteLetter: async (letterId: number) => {
    const { data } = await authInstance.patch(
      API_PATHS.LETTER_STORAGE_DETAIL(`${letterId}`),
    );
    return data;
  },

  /** 보낸 편지 삭제 */
  patchDeleteSend: async (letterId: number) => {
    const { data } = await authInstance.patch(
      API_PATHS.LETTER_SEND_DETAIL(`${letterId}`),
    );
    return data;
  },
};

export default letterAPI;
