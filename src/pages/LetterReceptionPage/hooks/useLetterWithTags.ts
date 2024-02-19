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

  const tagList = data
    ? [
        WORRY_DICT[data.worryType],
        `${data.letterTag?.ageStart}~${data.letterTag?.ageRangeEnd}세`,
        data.letterTag?.equalGender ? '동성에게' : '모두에게',
      ]
    : [];
  const receptionLetter: ReceptionLetterType = { ...data!, tagList };

  return { receptionLetter };
};

export type { ReceptionLetterType };

export default useLetterWithTags;
