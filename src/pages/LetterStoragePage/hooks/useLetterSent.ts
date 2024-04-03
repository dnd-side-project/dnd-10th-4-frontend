import { useSuspenseQuery } from '@tanstack/react-query';
import letterOptions from '@/api/letter/queryOptions';

const useLetterSent = (page: number) => {
  const { data } = useSuspenseQuery({
    ...letterOptions.send(page.toString()),
  });

  return data;
};

export default useLetterSent;
