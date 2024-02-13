import { useSuspenseQuery } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';
import { WORRY_DICT } from '@/constants/users';
import { Reception } from '@/types/letter';

interface ReceptionLetterType extends Reception {
  tagList: string[];
}

const useLetterWithTags = (letterId: number) => {
  const { data } = useSuspenseQuery({
    ...letterOptions.singleReception(letterId),
  });

  /**
   * TODO: 나이, 성별 태그값 배열에 넣기
   */
  const tagList = data ? [WORRY_DICT[data.worryType]] : [];
  const receptionLetter: ReceptionLetterType = { ...data!, tagList };

  return { receptionLetter };
};

export type { ReceptionLetterType };

export default useLetterWithTags;
