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
    }),

  singleReply: (letterId: number) =>
    queryOptions({
      queryKey: [...letterOptions.all, 'reply', letterId] as const,
      queryFn: () => letterAPI.getSingleReply(letterId),
    }),
};

export default letterOptions;
