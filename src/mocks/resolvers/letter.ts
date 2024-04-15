import { HttpResponse, delay } from 'msw';
import { getSearchParams } from '@/utils/mswUtils';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { type MSWResolvers } from '@/utils/mswUtils';
import {
  OnboardingLetter,
  ReceivedLetterResponse,
  ReceptionLetter,
  ReceptionLetterWithoutImage,
  RepliedLettersResponse,
  ReplyLetter,
} from '../datas/letter';
import {
  PagedReceivedLettersResponsePage1,
  PagedReceivedLettersResponsePage2,
} from '../datas/storage';
import {
  PagedSendLettersResponsePage1,
  PagedSendLettersResponsePage2,
  PagedSendLettersResponsePage3,
} from '../datas/send';

export const letterResolvers = {
  getLetterReception: {
    success: async () => {
      await delay();

      const itemCount =
        Number(getSearchParams('mswItemCount')) ||
        ReceivedLetterResponse.length;

      return HttpResponse.json(
        ReceivedLetterResponse.slice(0, Number(itemCount)),
      );
    },
  },

  getLetterReceptionDetail: {
    success: async (req) => {
      await delay();
      const letterId = Number(req.params.letterId);

      if (letterId === 1) {
        return HttpResponse.json(OnboardingLetter);
      } else {
        return HttpResponse.json(ReceptionLetter(letterId));
      }
    },

    withoutImage: async (req) => {
      await delay();
      const letterId = Number(req.params.letterId);

      if (letterId === 1) {
        return HttpResponse.json(OnboardingLetter);
      } else {
        return HttpResponse.json(ReceptionLetterWithoutImage(letterId));
      }
    },

    accessDenied: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
        status: 400,
      });
    },
  },

  getLetterReply: {
    success: async () => {
      await delay();

      const itemCount =
        Number(getSearchParams('mswItemCount')) ||
        RepliedLettersResponse.length;

      return HttpResponse.json(
        RepliedLettersResponse.slice(0, Number(itemCount)),
      );
    },
  },

  getLetterReplyDetail: {
    success: async (req) => {
      await delay();
      const letterId = Number(req.params.letterId);

      return HttpResponse.json(ReplyLetter(letterId));
    },

    accessDenied: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
        status: 400,
      });
    },
  },

  getLetterStorage: {
    success: async (req) => {
      await delay();
      const url = req.request.url;
      const params = new URLSearchParams(new URL(url).search);
      const pageValue = params.get('page');

      if (pageValue === '0') {
        return HttpResponse.json(PagedReceivedLettersResponsePage1);
      } else {
        return HttpResponse.json(PagedReceivedLettersResponsePage2);
      }
    },
  },

  getLetterSend: {
    success: async (req) => {
      await delay();
      const url = req.request.url;
      const params = new URLSearchParams(new URL(url).search);
      const pageValue = params.get('page');

      if (pageValue === '0') {
        return HttpResponse.json(PagedSendLettersResponsePage1);
      } else if (pageValue === '1') {
        return HttpResponse.json(PagedSendLettersResponsePage2);
      } else {
        return HttpResponse.json(PagedSendLettersResponsePage3);
      }
    },
  },

  postLetter: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    exceedSendLimit: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.exceedSendLimit, {
        status: 400,
      });
    },

    noExt: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.noExt, {
        status: 415,
      });
    },
  },

  patchLetterReceptionReplyDetail: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    alreadyReplyExist: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.alreadyReplyExist, {
        status: 400,
      });
    },

    unSupportExt: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.unSupportExt, {
        status: 415,
      });
    },
  },

  patchLetterReceptionPassDetail: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    repliedLetterPass: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.repliedLetterPass, {
        status: 400,
      });
    },
  },

  patchLetterReplyStorageDetail: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    unAnsweredLetterStore: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.unAnsweredLetterStore, {
        status: 400,
      });
    },
  },

  patchLetterOnboardingStorageDetail: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    unAnsweredLetterStore: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.unAnsweredLetterStore, {
        status: 400,
      });
    },
  },

  patchLetterStorageDetail: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    accessDenied: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
        status: 400,
      });
    },
  },

  patchLetterSendDetail: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    accessDenied: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
        status: 400,
      });
    },
  },

  deleteLetterReply: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    accessDenied: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
        status: 400,
      });
    },
  },
} satisfies MSWResolvers;
