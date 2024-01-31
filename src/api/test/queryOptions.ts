import { queryOptions } from '@tanstack/react-query';
import testAPI from './apis';

/** @NOTE: API 통신 예시용 임시 코드입니다. */
const testOptions = {
  all: ['test'] as const,

  list: () =>
    queryOptions({
      queryKey: testOptions.all,
      queryFn: () => testAPI.getTestList(),
    }),

  detail: (testId: string) =>
    queryOptions({
      queryKey: [...testOptions.all, testId] as const,
      queryFn: () => testAPI.getTestDetail(testId || '0'),
    }),
};

export default testOptions;
