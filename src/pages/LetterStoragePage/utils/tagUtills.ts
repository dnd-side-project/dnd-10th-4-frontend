import { WORRY_DICT } from '@/constants/users';
import { Reply, SendLetter } from '@/types/letter';

export const getTagList = (item: Reply | SendLetter) => {
  const tagList = [];

  if (WORRY_DICT[item.worryType]) {
    tagList.push(WORRY_DICT[item.worryType]);
  }

  if (item.letterTag?.ageRangeStart && item.letterTag?.ageRangeEnd) {
    tagList.push(
      `${item.letterTag?.ageRangeStart}~${item.letterTag?.ageRangeEnd}세`,
    );
  }

  if (item.letterTag?.equalGender !== undefined) {
    tagList.push(item.letterTag.equalGender ? '동성에게' : '모두에게');
  }

  return tagList;
};
