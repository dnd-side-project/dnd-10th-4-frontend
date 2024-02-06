import { queryOptions } from '@tanstack/react-query';
import memberAPI from './apis';

const memberOptions = {
  all: ['member'] as const,

  detail: () =>
    queryOptions({
      queryKey: [...memberOptions.all, 'detail'] as const,
      queryFn: () => memberAPI.getMemberDetail(),
    }),
};

export default memberOptions;
