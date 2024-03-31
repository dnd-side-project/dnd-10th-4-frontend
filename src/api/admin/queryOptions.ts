import { queryOptions } from '@tanstack/react-query';
import adminAPI from './apis';

const adminOptions = {
  all: ['admin'] as const,

  member: (params?: { page?: string; email?: string }) =>
    queryOptions({
      queryKey: [...adminOptions.all, 'member', params] as const,
      queryFn: () => adminAPI.getMemberSearch(params),
    }),

  report: (params?: { page?: string; reportedEmail?: string }) =>
    queryOptions({
      queryKey: [...adminOptions.all, 'report', params] as const,
      queryFn: () => adminAPI.getReport(params),
    }),
};

export default adminOptions;
