import { useSuspenseQuery } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';

const useLetterReply = (letterId: number) => {
  const { data } = useSuspenseQuery({
    ...letterOptions.singleReply(letterId),
  });

  return data;
};

export default useLetterReply;
