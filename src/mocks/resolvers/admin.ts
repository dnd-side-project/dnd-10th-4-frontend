import { HttpResponse, delay } from 'msw';
import { getSearchParams } from '@/utils/mswUtils';
import { type MSWResolvers } from '@/utils/mswUtils';
import { PagedMemberResponse, PagedReportResponse } from '@/types/admin';
import { getRandomItem } from '@/utils/arrayUtils';
import { NICKNAMES } from '@/constants/users';

export const adminResolvers = {
  getMemberSearch: {
    success: async ({ request }) => {
      await delay();
      const url = new URL(request.url);

      const itemCount = Number(getSearchParams('mswItemCount')) || 10;
      const page = Number(url.searchParams.get('page')) || 1;

      const result: PagedMemberResponse = {
        totalElements: 100,
        totalPage: 10,
        hasNextPage: true,
        members: Array.from({ length: itemCount }, (_, i) => ({
          id: page * 10 + (i + 1),
          role: 'USER',
          email: 'kdo0422@nate.com',
          nickname: `낯선 ${getRandomItem(NICKNAMES)}`,
          gender: 'MALE',
          birthDay: [1999, 4, 22],
          age: 26,
        })),
      };

      return HttpResponse.json(result);
    },
  },

  getReport: {
    success: async ({ request }) => {
      await delay();
      const url = new URL(request.url);

      const itemCount = Number(getSearchParams('mswItemCount')) || 10;
      const page = Number(url.searchParams.get('page')) || 1;

      const result: PagedReportResponse = {
        totalElements: 100,
        totalPage: 10,
        hasNextPage: true,
        letters: Array.from({ length: itemCount }, (_, i) => ({
          id: page * 10 + (i + 1),
          content: '신고 내용',
          reporterEmail: 'kdo0422@nate.com',
          reportedEmail: 'oceanLetter1@gmail.com',
          reportType: 'ABUSE',
        })),
      };

      return HttpResponse.json(result);
    },
  },

  deleteMember: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },
  },

  postLetterSpecial: {
    success: async () => {
      await delay();
      return HttpResponse.json();
    },
  },
} satisfies MSWResolvers;
