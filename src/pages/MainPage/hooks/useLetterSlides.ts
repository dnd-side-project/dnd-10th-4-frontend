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
  const [{ data: letters }, { data: replies }] = useSuspenseQueries({
    queries: [letterOptions.reception(), letterOptions.reply(0)],
  });

  const refinedLetters = chunkArray(
    letters.slice(0, MAX_SLIDES * LETTERS_PER_SLIDE),
    LETTERS_PER_SLIDE,
  );

  const refinedReplies = chunkArray(
    replies.slice(0, MAX_SLIDES * REPLIES_PER_SLIDE),
    REPLIES_PER_SLIDE,
  );

  const slideLength = Math.max(refinedLetters.length, refinedReplies.length);
  const slides = Array.from({ length: slideLength }, (_, idx) => ({
    id: idx + 1,
    letters: refinedLetters[idx] || [],
    replies: refinedReplies[idx] || [],
  }));

  return { slides };
};

export default useLetterSlides;
