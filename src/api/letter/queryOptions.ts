import { queryOptions } from '@tanstack/react-query';
import letterAPI from './apis';

const letterOptions = {
  all: ['letter'] as const,

  reception: () =>
    queryOptions({
      queryKey: [...letterOptions.all, 'reception'] as const,
      queryFn: () => letterAPI.getReceivedLetters(),
    }),

  reply: (page: number) =>
    queryOptions({
      queryKey: [...letterOptions.all, 'reply', page] as const,
      queryFn: () => letterAPI.getRepliedLetters(page),
    }),

  singleReception: (letterId: number) =>
    queryOptions({
      queryKey: [...letterOptions.all, 'reception', letterId] as const,
      queryFn: () => letterAPI.getSingleReception(letterId),
      gcTime: 5 * 60 * 1000,
      staleTime: 1 * 60 * 1000,
    }),
};

export default letterOptions;
