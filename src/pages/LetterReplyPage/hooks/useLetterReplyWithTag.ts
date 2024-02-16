import { useSuspenseQuery } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';
import { WORRY_DICT } from '@/constants/users';
import { Reply } from '@/types/letter';

interface ReplyLetterType extends Reply {
  tagList: string[];
}

const useLetterReplyWithTag = (letterId: number) => {
  const { data } = useSuspenseQuery({
    ...letterOptions.singleReply(letterId),
  });

  /**
   * TODO: 나이, 성별 태그값 배열에 넣기
   */
  const tagList = data ? [WORRY_DICT[data.worryType]] : [];
  const replyLetter: ReplyLetterType = { ...data!, tagList };

  return { replyLetter };
};

export default useLetterReplyWithTag;
