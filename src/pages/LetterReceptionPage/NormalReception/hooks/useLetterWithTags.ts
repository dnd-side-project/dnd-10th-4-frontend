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

  const tagList = [];

  if (data.worryType) {
    tagList.push(WORRY_DICT[data.worryType]);
  }

  if (data.letterTag) {
    tagList.push(
      `${data.letterTag.ageRangeStart}~${data.letterTag.ageRangeEnd}세`,
    );

    tagList.push(data.letterTag.equalGender ? '동성에게' : '모두에게');
  }

  const receptionLetter: ReceptionLetterType = { ...data, tagList };

  return { receptionLetter };
};

export type { ReceptionLetterType };

export default useLetterWithTags;
