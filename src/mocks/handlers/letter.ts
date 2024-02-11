import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import QUERY_STRINGS from '@/constants/queryStrings';
import { Reception } from '@/types/letter';
import {
  ReceivedLetterResponse,
  RepliedLettersResponse,
} from '../datas/letter';

const letterHandler = [
  http.get(baseURL('/api/letter/reception'), async () => {
    await delay(1000);

    const itemCount =
      Number(
        new URLSearchParams(window.location.search).get(
          QUERY_STRINGS.mswItemCount,
        ),
      ) || ReceivedLetterResponse.length;

    return HttpResponse.json(
      ReceivedLetterResponse.slice(0, Number(itemCount)),
    );
  }),

  http.get(baseURL('/api/letter/reply'), async () => {
    await delay(1000);

    const itemCount =
      Number(
        new URLSearchParams(window.location.search).get(
          QUERY_STRINGS.mswItemCount,
        ),
      ) || RepliedLettersResponse.length;

    return HttpResponse.json(
      RepliedLettersResponse.slice(0, Number(itemCount)),
    );
  }),

  http.post(baseURL('/api/letter'), async () => {
    await delay(1000);
    return HttpResponse.json();
  }),

  http.get(baseURL('/api/letter/reception/:letterId'), async (req) => {
    await delay(300);

    const result: Reception = {
      createdAt: '2024-02-05T15:40:44',
      letterId: Number(req.params.letterId),
      senderNickname: '낯선 고양이123',
      receiverNickname: '낯선 강아지456',
      content: `${req.params.letterId} 번째 편지 입니다. 여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오`,
      worryType: 'BREAK_LOVE',
    };

    return HttpResponse.json(result);
  }),

  http.patch(baseURL('/api/letter/reception/reply/:letterId'), async () => {
    await delay(1000);

    return HttpResponse.json();
  }),

  http.patch(baseURL('/api/letter/reception/toss/:letterId'), async () => {
    await delay(1000);

    return HttpResponse.json();
  }),
];

export default letterHandler;
