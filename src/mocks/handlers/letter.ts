import { http, HttpResponse, delay } from 'msw';
import { baseURL, getSearchParams } from '@/utils/mswUtils';
import { Reception, Reply } from '@/types/letter';
import ERROR_RESPONSES from '@/constants/errorMessages';
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
    const mswCase = getSearchParams('mswCase');

    const result: Reception =
      mswCase === 'onboarding'
        ? {
            letterType: 'Onboarding',
            createdAt: '2024-02-21T22:41:42',
            letterId: 8,
            letterTag: null,
            senderNickname: '낯선 바다',
            receiverNickname: null,
            content:
              '안녕, 나는 이곳을 운영하고 있는 낯선 바다라고 해. 찾아와줘서 고마워. 너가 와주길 기다리고 있었어.\n나는 말 못할 고민이 있거나 힘든 일이 있을 때, 바다를 찾아가곤해. 내 모든 감정과 생각들을 온전히 이해 받고 공감 받는 기분이 들더라고.\n혹시 너도 마음 속 고민이 있지만 주변 지인에게 부담을 줄까 봐 쉽게 털어 놓지 못했던 경험이 있지 않니?\n내 마음 속 바다에서는 다른 사람에게 말하지 못하는 너만의 고민과 이야기를 물병에 담에 바다에 띄어 보낼 수 있어. 너와 비슷한 고민을 했을 지도 모르는 낯선이로부터 위로의 답장을 주고 받을 수도 있지.\n너에게 말 못할 고민이 있다면, 물병에 담아 띄어보내봐. 혹시 모르잖아. 너의 이름도, 얼굴도 모르는 낯선이로부터 그 누구에게도 받지 못했던 공감과 위로를 받을지.\n기다리고 있을게, 너의 이야기를 듣고싶어.\nP.S. 최근에 갔었던 동해 바다 사진을 동봉해. 너에게도 위로가 되기를',
            worryType: null,
            imagePath:
              'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
          }
        : {
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
            // imagePath: null,
            imagePath:
              'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
          };

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
];

export default letterHandler;
