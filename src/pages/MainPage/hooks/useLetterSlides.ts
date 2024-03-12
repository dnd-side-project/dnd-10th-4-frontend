import { useEffect } from 'react';
import { useSuspenseQueries } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';
import { chunkArray } from '@/utils/arrayUtils';
import {
  MAX_SLIDES,
  RECEPTIONS_PER_SLIDE,
  REPLIES_PER_SLIDE,
} from '@/constants/letters';
import useLetterSlideStore from '@/stores/useLetterSlideStore';

const useLetterSlides = () => {
  const receptions = useLetterSlideStore((s) => s.receptions);
  const replies = useLetterSlideStore((s) => s.replies);
  const syncReceptions = useLetterSlideStore((s) => s.syncReceptions);
  const syncReplies = useLetterSlideStore((s) => s.syncReplies);

  const [{ data: fetchedReceptions }, { data: fetchedReplies }] =
    useSuspenseQueries({
      queries: [
        { ...letterOptions.reception(), refetchInterval: 60000 },
        { ...letterOptions.reply(), refetchInterval: 60000 },
      ],
    });

  useEffect(() => {
    syncReceptions(fetchedReceptions.map((r) => r.letterId));
    syncReplies(fetchedReplies.map((r) => r.letterId));
  }, [fetchedReceptions, fetchedReplies]);

  const refinedReceptions = chunkArray(
    receptions
      .map((item) =>
        item
          ? fetchedReceptions.find((value) => value.letterId === item.id)
          : undefined,
      )
      .slice(0, MAX_SLIDES * RECEPTIONS_PER_SLIDE),
    RECEPTIONS_PER_SLIDE,
  );

  const refinedReplies = chunkArray(
    replies
      .map((item) =>
        item
          ? fetchedReplies.find((value) => value.letterId === item.id)
          : undefined,
      )
      .slice(0, MAX_SLIDES * RECEPTIONS_PER_SLIDE),
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
