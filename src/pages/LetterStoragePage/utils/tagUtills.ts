import { WORRY_DICT } from '@/constants/users';
import { Reply } from '@/types/letter';

export const getTagList = (item: Reply) => {
  const tagList = [
    WORRY_DICT[item.worryType],
    `${item.letterTag.ageRangeStart}~${item.letterTag.ageRangeEnd}세`,
    item.letterTag.equalGender ? '동성에게' : '모두에게',
  ];

  return tagList;
};
