import { useQuery } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';
import { WORRY_DICT } from '@/constants/users';
import { Reception } from '@/types/letter';

interface ReceptionLetterType extends Reception {
  tagList: string[];
}

const useLetterTag = (letterId: string) => {
  const { data } = useQuery({
    ...letterOptions.singleReception(Number(letterId)),
  });

  /**
   * TODO: 나이, 성별 값 배열에 넣기
   */
  const tagList = data ? [WORRY_DICT[data.worryType]] : [];
  const letter: ReceptionLetterType = { ...data!, tagList };

  return { letter };
};

export type { ReceptionLetterType };

export default useLetterTag;
