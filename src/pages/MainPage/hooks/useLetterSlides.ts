import { useSuspenseQueries } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';
import { chunkArray } from '@/utils/arrayUtils';

/** 최대 슬라이드 */
const MAX_SLIDES = 4;
/** 슬라이드 당 보여줄 받은 편지 갯수 */
const LETTERS_PER_SLIDE = 4;
/** 슬라이드 당 보여줄 받은 답장 갯수 */
const REPLIES_PER_SLIDE = 2;

const useLetterSlides = () => {
  const [{ data: receptions }, { data: replies }] = useSuspenseQueries({
    queries: [
      { ...letterOptions.reception(), refetchInterval: 60000 },
      { ...letterOptions.reply(), refetchInterval: 60000 },
    ],
  });

  const refinedReceptions = chunkArray(
    receptions.slice(0, MAX_SLIDES * LETTERS_PER_SLIDE),
    LETTERS_PER_SLIDE,
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
