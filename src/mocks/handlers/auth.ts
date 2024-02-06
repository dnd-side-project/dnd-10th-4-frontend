import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';

const authHandler = [
  http.post(baseURL('/oauth2/authorization/kakao'), async () => {
    await delay(300);

    return HttpResponse.json();
  }),
];

export default authHandler;
