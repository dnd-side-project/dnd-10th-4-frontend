import { http, HttpResponse, delay } from 'msw';
import { baseURL } from '@/utils/mswUtils';
import QUERY_STRINGS from '@/constants/queryStrings';
import {
  ReceivedLetterResponse,
  PagedRepliedLettersResponse,
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
      ) || ReceivedLetterResponse.length;

    return HttpResponse.json({
      ...PagedRepliedLettersResponse,
      postList: PagedRepliedLettersResponse.postList.slice(
        0,
        Number(itemCount),
      ),
    });
  }),

  http.post(baseURL('/api/letter'), async () => {
    await delay(1000);
    return HttpResponse.json();
  }),
];

export default letterHandler;
