import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSuspenseQuery } from '@tanstack/react-query';
import adminOptions from '@/api/admin/queryOptions';
import useAdminPageStore from '@/stores/useAdminPageStore';

const usePagedReportQuery = (email?: string) => {
  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') || '1';
  const setTotalPage = useAdminPageStore((s) => s.setTotalPage);

  const query = useSuspenseQuery(
    adminOptions.report({
      page: `${Number(page) - 1}`,
      reportedEmail: email !== '' ? email : undefined,
    }),
  );

  useEffect(() => {
    setTotalPage(query.data.totalPage);
  }, [query.data.totalPage]);

  return query;
};

export default usePagedReportQuery;
