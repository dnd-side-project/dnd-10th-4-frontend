import { http, HttpResponse, delay } from 'msw';
import memberAPI from '@/api/member/apis';
import { baseURL, type ResponseType } from '@/utils/mswUtils';
import QUERY_STRINGS from '@/constants/queryStrings';

const memberHandler = [
  http.get(baseURL('/api/member'), async () => {
    await delay(300);

    const mswCase = new URLSearchParams(window.location.search).get(
      QUERY_STRINGS.mswCase,
    );

    if (mswCase === '404') {
      return new HttpResponse('존재하지 않는 회원입니다.', {
        status: 404,
      });
    }

    const result = {
      id: 7,
      email: 'tnlswodnjs99@naver.com',
      nickname: '낯선 거북이',
      worryTypes: [],
      gender: 'MALE',
      age: 40,
      role: 'USER',
    } satisfies ResponseType<(typeof memberAPI)['getMemberDetail']>;

    return HttpResponse.json(result);
  }),

  http.patch(baseURL('/api/member/nickname'), async () => {
    await delay(1000);

    return HttpResponse.json();
  }),

  http.patch(baseURL('/api/member/birthday'), async () => {
    await delay(1000);

    return HttpResponse.json();
  }),

  http.patch(baseURL('/api/member/gender'), async () => {
    await delay(1000);

    return HttpResponse.json();
  }),

  http.delete(baseURL('/api/member/worry'), async () => {
    await delay(1000);

    return HttpResponse.json();
  }),

  http.post(baseURL('/api/member/worry'), async () => {
    await delay(1000);

    return HttpResponse.json();
  }),
];

export default memberHandler;
