import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '../baseURL';

const testHandler = [
  http.get(baseURL('/test/:id'), async (req) => {
    await delay(300);

    return HttpResponse.json({
      id: req.params.id,
      name: `모킹된 ${req.params.id} 번 데이터`,
    });
  }),
];

export default testHandler;
