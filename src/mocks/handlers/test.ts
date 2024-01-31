import { http, HttpResponse, delay } from 'msw';
import { type Test } from '@/types/test';
import { baseURL } from '../baseURL';

/** @NOTE: MSW 핸들러 예시용 임시 코드입니다. */
const testHandler = [
  http.get(baseURL('/test'), async () => {
    await delay(300);

    return HttpResponse.json(
      Array.from({ length: 5 }, (_, idx) => ({
        id: idx.toString(),
        name: `모킹된 ${idx} 번 데이터`,
        content: '목 데이터를 성공적으로 가져왔습니다.',
      })) satisfies Test[],
    );
  }),

  http.get(baseURL('/test/:testId'), async (req) => {
    await delay(300);

    return HttpResponse.json({
      id: req.params.testId as string,
      name: `모킹된 ${req.params.testId} 번 데이터`,
      content: '목 데이터를 성공적으로 가져왔습니다.',
    } satisfies Test);
  }),

  http.post(baseURL('/test'), async () => {
    await delay(300);

    return HttpResponse.json('목 핸들러가 정상적으로 데이터를 받았습니다.');
  }),
];

export default testHandler;
