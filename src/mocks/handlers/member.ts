import { http, HttpResponse, delay } from 'msw';
import memberAPI from '@/api/member/apis';
import { baseURL, type ResponseType } from '@/utils/mswUtils';

const memberHandler = [
  http.get(baseURL('/api/member'), async () => {
    await delay(300);

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
];

export default memberHandler;
