import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';

const oauth2Handler = [
  http.post(baseURL('/oauth2/authorization/kakao'), async () => {
    await delay(300);

    return HttpResponse.json();
  }),
];

export default oauth2Handler;
