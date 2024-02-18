import { http, HttpResponse, delay } from 'msw';
import memberAPI from '@/api/member/apis';
import { baseURL, getSearchParams } from '@/utils/mswUtils';
import QUERY_STRINGS from '@/constants/queryStrings';
import ERROR_RESPONSES from '@/constants/errorMessages';
import withAuth from '../middlewares/withAuth';

const memberHandler = [
  http.get(
    baseURL('/api/member'),
    withAuth(async () => {
      await delay(300);

      const status: number = 200;
      const mswCase = getSearchParams('mswCase');

      switch (status) {
        case 200:
          if (mswCase === 'empty') {
            return HttpResponse.json({
              id: 8,
              email: 'aodem@naver.com',
              nickname: null,
              worryTypes: [],
              gender: null,
              birthDay: null,
              age: null,
              role: 'USER',
            } satisfies Awaited<
              ReturnType<(typeof memberAPI)['getMemberDetail']>
            >);
          } else {
            return HttpResponse.json({
              id: 7,
              email: 'tnlswodnjs99@naver.com',
              nickname: '낯선 거북이',
              worryTypes: ['COURSE', 'STUDY', 'RELATIONSHIP'],
              gender: 'MALE',
              birthDay: [1997, 1, 1],
              age: 28,
              role: 'USER',
            } satisfies Awaited<
              ReturnType<(typeof memberAPI)['getMemberDetail']>
            >);
          }
        case 404:
          return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
            status: 404,
          });
        default:
          return;
      }
    }),
  ),

  http.patch(
    baseURL('/api/member'),
    withAuth(async () => {
      await delay(1000);

      const mswCase = new URLSearchParams(window.location.search).get(
        QUERY_STRINGS.mswCase,
      );

      if (mswCase === '404') {
        return new HttpResponse(ERROR_RESPONSES.memberNotFound, {
          status: 404,
        });
      }

      return HttpResponse.json();
    }),
  ),

  http.patch(
    baseURL('/api/member/nickname'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),

  http.patch(
    baseURL('/api/member/birthday'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),

  http.patch(
    baseURL('/api/member/gender'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),

  http.delete(
    baseURL('/api/member/worry'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),

  http.post(
    baseURL('/api/member/worry'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),
];

export default memberHandler;
