import { HttpResponse, delay } from 'msw';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { type MSWResolvers } from '@/utils/mswUtils';

export const reportResolvers = {
  postReport: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    alreadyReportExist: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.alreadyReportExist, {
        status: 400,
      });
    },

    accessDenied: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
        status: 400,
      });
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },
} satisfies MSWResolvers;
