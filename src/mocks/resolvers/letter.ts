import { HttpResponse, delay } from 'msw';
import { getSearchParams } from '@/utils/mswUtils';
import { ReceivedLetterResponse } from '../datas/letter';

export const letterResolvers = {
  getLetterReception: {
    success: async () => {
      await delay();

      const itemCount =
        Number(getSearchParams('mswItemCount')) ||
        ReceivedLetterResponse.length;

      return HttpResponse.json(
        ReceivedLetterResponse.slice(0, Number(itemCount)),
      );
    },
  },
};
