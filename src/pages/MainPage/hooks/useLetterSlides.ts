import { useSuspenseQueries } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';
import { chunkArray } from '@/utils/arrayUtils';
import {
  MAX_SLIDES,
  RECEPTIONS_PER_SLIDE,
  REPLIES_PER_SLIDE,
} from '@/constants/letters';

const useLetterSlides = () => {
  const [{ data: receptions }, { data: replies }] = useSuspenseQueries({
    queries: [
      { ...letterOptions.reception(), refetchInterval: 60000 },
      { ...letterOptions.reply(), refetchInterval: 60000 },
    ],
  });

  const refinedReceptions = chunkArray(
    receptions.slice(0, MAX_SLIDES * RECEPTIONS_PER_SLIDE),
    RECEPTIONS_PER_SLIDE,
  );

  const refinedReplies = chunkArray(
    replies.slice(0, MAX_SLIDES * REPLIES_PER_SLIDE),
    REPLIES_PER_SLIDE,
  );

  const slides = Array.from({ length: MAX_SLIDES }, (_, idx) => ({
    id: idx + 1,
    receptions: refinedReceptions[idx] || [],
    replies: refinedReplies[idx] || [],
  }));

  return { slides };
};

export default useLetterSlides;
