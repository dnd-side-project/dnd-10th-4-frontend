import { HttpResponse, delay } from 'msw';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { type MSWResolvers } from '@/utils/mswUtils';
import { AdminMemberInfo, EmptyMemberInfo, MemberInfo } from '../datas/member';

export const memberResolvers = {
  getMember: {
    success: async () => {
      await delay();
      return HttpResponse.json(MemberInfo);
    },

    admin: async () => {
      await delay();
      return HttpResponse.json(AdminMemberInfo);
    },

    empty: async () => {
      await delay();
      return HttpResponse.json(EmptyMemberInfo);
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },

  patchMember: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },

  patchNickname: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },

  patchBirthday: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },

  patchGender: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },

  deleteWorry: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },

  postWorry: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },

  deleteMember: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },

    notFound: async () => {
      await delay();
      return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
        status: 404,
      });
    },
  },
} satisfies MSWResolvers;
