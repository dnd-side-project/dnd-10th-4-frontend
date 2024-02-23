import { http, HttpResponse, delay } from 'msw';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { Reception, Reply } from '@/types/letter';
import { baseURL, getSearchParams } from '@/utils/mswUtils';
import withAuth from '../middlewares/withAuth';
import {
  OnboardingLetter,
  ReceivedLetterResponse,
  RepliedLettersResponse,
} from '../datas/letter';
import {
  PagedReceivedLettersResponsePage1,
  PagedReceivedLettersResponsePage2,
} from '../datas/storage';
import {
  PagedSendLettersResponsePage1,
  PagedSendLettersResponsePage2,
  PagedSendLettersResponsePage3,
} from '../datas/send';

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

    const status: number = 200;
    const letterId = Number(req.params.letterId);

    const result: Reception = {
      letterType: null,
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
      // sendImagePath: null,
      sendImagePath:
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
    };

    switch (status) {
      case 200:
        if (letterId === 1) {
          return HttpResponse.json(OnboardingLetter);
        }

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
        case 415:
          return new HttpResponse(ERROR_RESPONSES.unSupportExt, {
            status: 415,
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
        sendImagePath:
          'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
        replyImagePath:
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

  http.patch(
    baseURL('/api/letter/onboarding/storage/:letterId'),
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

  http.get(
    baseURL('/api/letter/storage'),
    withAuth(async (req) => {
      await delay(300);
      const url = req.request.url;
      const params = new URLSearchParams(new URL(url).search);
      const pageValue = params.get('page');

      if (pageValue === '0') {
        return HttpResponse.json(PagedReceivedLettersResponsePage1);
      } else {
        return HttpResponse.json(PagedReceivedLettersResponsePage2);
      }
    }),
  ),

  http.get(
    baseURL('/api/letter/send'),
    withAuth(async (req) => {
      await delay(300);
      const url = req.request.url;
      const params = new URLSearchParams(new URL(url).search);
      const pageValue = params.get('page');

      if (pageValue === '0') {
        return HttpResponse.json(PagedSendLettersResponsePage1);
      } else if (pageValue === '1') {
        return HttpResponse.json(PagedSendLettersResponsePage2);
      } else {
        return HttpResponse.json(PagedSendLettersResponsePage3);
      }
    }),
  ),

  http.patch(
    baseURL('/api/letter/storage/:letterId'),
    withAuth(async () => {
      await delay(1000);

      const status: number = 200;

      switch (status) {
        case 200:
          return HttpResponse.json();
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
    baseURL('/api/letter/send/:letterId'),
    withAuth(async () => {
      await delay(1000);

      const status: number = 200;

      switch (status) {
        case 200:
          return HttpResponse.json();
        case 400:
          return new HttpResponse(ERROR_RESPONSES.accessDeniedLetter, {
            status: 400,
          });
        default:
          break;
      }
    }),
  ),
];

export default letterHandler;
