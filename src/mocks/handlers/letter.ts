import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';

const letterHandler = [
  http.post(baseURL('/api/letter'), async () => {
    await delay(1000);
    return HttpResponse.json();
  }),
];

export default letterHandler;
