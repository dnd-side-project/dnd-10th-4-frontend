import { useSuspenseQuery } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';

const useLetterReply = (page: number) => {
  const { data } = useSuspenseQuery({
    ...letterOptions.storage(page.toString()),
  });

  return data;
};

export default useLetterReply;
