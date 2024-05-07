import { Navigate, Outlet } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import STORAGE_KEYS from '@/constants/storageKeys';
import memberOptions from '@/api/member/queryOptions';

const AdminLayout = () => {
  const { data } = useSuspenseQuery(memberOptions.detail());

  if (!localStorage.getItem(STORAGE_KEYS.accessToken)) {
    return <Navigate to={ROUTER_PATHS.SIGNIN} />;
  }

  if (data.role !== 'ADMIN') {
    return <Navigate to={ROUTER_PATHS.SIGNIN} />;
  }

  return <Outlet />;
};

export default AdminLayout;
