import { http, HttpResponse, delay } from 'msw';
import { baseURL, getSearchParams } from '@/utils/mswUtils';
import { Reception, Reply } from '@/types/letter';
import ERROR_RESPONSES from '@/constants/errorMessages';
import withAuth from '../middlewares/withAuth';
import {
  ReceivedLetterResponse,
  RepliedLettersResponse,
} from '../datas/letter';

const letterHandler = [
  http.get(
    baseURL('/api/letter/reception'),
    withAuth(async () => {
      await delay(1000);

      const itemCount =
        Number(getSearchParams('mswItemCount')) ||
        ReceivedLetterResponse.length;

      return HttpResponse.json(
        ReceivedLetterResponse.slice(0, Number(itemCount)),
      );
    }),
  ),

  http.get(
    baseURL('/api/letter/reply'),
    withAuth(async () => {
      await delay(1000);

      const itemCount =
        Number(getSearchParams('mswItemCount')) ||
        RepliedLettersResponse.length;

      return HttpResponse.json(
        RepliedLettersResponse.slice(0, Number(itemCount)),
      );
    }),
  ),

  http.post(
    baseURL('/api/letter'),
    withAuth(async () => {
      await delay(1000);

      const status: number = 200;

      switch (status) {
        case 200:
          return HttpResponse.json();
        case 400:
          return new HttpResponse(ERROR_RESPONSES.exceedSendLimit, {
            status: 400,
          });
        case 415:
          return new HttpResponse(ERROR_RESPONSES.noExt, {
            status: 415,
          });
        default:
          break;
      }
    }),
  ),

  http.get(baseURL('/api/letter/reception/:letterId'), async (req) => {
    await delay(300);

    const result: Reception = {
      createdAt: '2024-02-17T16:50:44',
      letterId: Number(req.params.letterId),
      letterTag: {
        ageRangeStart: 20,
        ageRangeEnd: 50,
        equalGender: true,
      },
      senderNickname: '낯선 고양이123',
      receiverNickname: '낯선 강아지456',
      content: `${req.params.letterId} 번째 편지 입니다. 여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오`,
      worryType: 'BREAK_LOVE',
      imagePath: null,
      // imagePath:
      //   'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
    };

    const status: number = 200;

    switch (status) {
      case 200:
        return HttpResponse.json(result);
      case 400:
        return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
          status: 400,
        });
      default:
        break;
    }
  }),

  http.patch(
    baseURL('/api/letter/reception/reply/:letterId'),
    withAuth(async () => {
      await delay(1000);

      const status: number = 200;

      switch (status) {
        case 200:
          return HttpResponse.json();
        case 400:
          return new HttpResponse(ERROR_RESPONSES.alreadyReplyExist, {
            status: 400,
          });
        default:
          break;
      }
    }),
  ),

  http.patch(baseURL('/api/letter/reception/pass/:letterId'), async () => {
    await delay(1000);

    const status: number = 200;

    switch (status) {
      case 200:
        return HttpResponse.json();
      case 400:
        return new HttpResponse(ERROR_RESPONSES.repliedLetterPass, {
          status: 400,
        });
      default:
        break;
    }
  }),

  http.get(
    baseURL('/api/letter/reply/:letterId'),
    withAuth(async (req) => {
      await delay(300);

      const result: Reply = {
        createdAt: '2024-02-18T16:50:44',
        repliedAt: '2024-02-19T16:50:44',
        letterId: Number(req.params.letterId),
        letterTag: {
          ageRangeStart: 20,
          ageRangeEnd: 50,
          equalGender: true,
        },
        senderNickname: '낯선 고양이123',
        receiverNickname: '낯선 강아지456',
        content: `${req.params.letterId} 번째 편지 입니다. 여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오`,
        repliedContent: `${req.params.letterId} 번째 편지 답장 입니다.`,
        worryType: 'BREAK_LOVE',
        // imagePath: null,
        imagePath:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
      };

      const status: number = 200;

      switch (status) {
        case 200:
          return HttpResponse.json(result);
        case 400:
          return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
            status: 400,
          });
        default:
          break;
      }
    }),
  ),

  http.patch(
    baseURL('/api/letter/reply/storage/:letterId'),
    withAuth(async () => {
      await delay(1000);

      const status: number = 200;

      switch (status) {
        case 200:
          return HttpResponse.json();
        case 400:
          return new HttpResponse(ERROR_RESPONSES.unAnsweredLetterStore, {
            status: 400,
          });
        default:
          break;
      }
    }),
  ),
];

export default letterHandler;
