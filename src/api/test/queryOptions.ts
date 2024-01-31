import { queryOptions } from '@tanstack/react-query';
import testAPI from './apis';

const testOptions = {
  all: ['test'] as const,

  detail: (testId: string) =>
    queryOptions({
      queryKey: [...testOptions.all, testId] as const,
      queryFn: () => testAPI.getTestDetail(testId),
    }),
};

export default testOptions;
