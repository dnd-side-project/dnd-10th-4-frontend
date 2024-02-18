import { http, HttpResponse, delay } from 'msw';
import { baseURL, getSearchParams } from '@/utils/mswUtils';
import { Reception, Reply } from '@/types/letter';
import {
  ReceivedLetterResponse,
  RepliedLettersResponse,
} from '../datas/letter';
import withAuth from '../middlewares/withAuth';

const letterHandler = [
  http.get(
    baseURL('/api/letter/reception'),
    withAuth(async () => {
      await delay(1000);

      const status: number = 200;
      const itemCount =
        Number(getSearchParams('mswItemCount')) ||
        ReceivedLetterResponse.length;

      switch (status) {
        case 200:
          return HttpResponse.json(
            ReceivedLetterResponse.slice(0, Number(itemCount)),
          );
        default:
          break;
      }
    }),
  ),

  http.get(
    baseURL('/api/letter/reply'),
    withAuth(async () => {
      await delay(1000);

      const status: number = 200;
      const itemCount =
        Number(getSearchParams('mswItemCount')) ||
        RepliedLettersResponse.length;

      switch (status) {
        case 200:
          return HttpResponse.json(
            RepliedLettersResponse.slice(0, Number(itemCount)),
          );
        default:
          break;
      }
    }),
  ),

  http.post(
    baseURL('/api/letter'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),

  http.get(
    baseURL('/api/letter/reception/:letterId'),
    withAuth(async (req) => {
      await delay(300);

      const status: number = 200;
      const result: Reception = {
        createdAt: '2024-02-13T16:50:44',
        letterId: Number(req.params.letterId),
        senderNickname: '낯선 고양이123',
        receiverNickname: '낯선 강아지456',
        content: `${req.params.letterId} 번째 편지 입니다. 여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오`,
        worryType: 'BREAK_LOVE',
      };

      switch (status) {
        case 200:
          return HttpResponse.json(result, {
            status,
          });
        default:
          break;
      }

      return HttpResponse.json(result);
    }),
  ),

  http.patch(
    baseURL('/api/letter/reception/reply/:letterId'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),

  http.patch(
    baseURL('/api/letter/reception/toss/:letterId'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),

  http.get(
    baseURL('/api/letter/reply/:letterId'),
    withAuth(async (req) => {
      await delay(300);

      const status: number = 200;
      const result: Reply = {
        createdAt: '2024-02-13T16:50:44',
        letterId: Number(req.params.letterId),
        senderNickname: '낯선 고양이123',
        receiverNickname: '낯선 강아지456',
        content: `${req.params.letterId} 번째 편지 입니다. 여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오`,
        repliedContent: `${req.params.letterId} 번째 편지 답장 입니다.`,
        worryType: 'BREAK_LOVE',
      };

      switch (status) {
        case 200:
          return HttpResponse.json(result);
        default:
          break;
      }
    }),
  ),

  http.patch(
    baseURL('/api/letter/reception/storage/:letterId'),
    withAuth(async () => {
      await delay(1000);

      return HttpResponse.json();
    }),
  ),
];

export default letterHandler;
