import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import STORAGE_KEYS from '@/constants/storageKeys';
import LoadingScreen from '@/components/LoadingScreen';
import memberOptions from '@/api/member/queryOptions';

const SuspensedLayout = () => {
  const { data } = useSuspenseQuery(memberOptions.detail());

  if (data.role !== 'ADMIN') {
    return <Navigate to={ROUTER_PATHS.SIGNIN} />;
  }

  return <Outlet />;
};

const AdminLayout = () => {
  if (!localStorage.getItem(STORAGE_KEYS.accessToken)) {
    return <Navigate to={ROUTER_PATHS.SIGNIN} />;
  }

  return (
    <Suspense fallback={<LoadingScreen />}>
      <SuspensedLayout />
    </Suspense>
  );
};

export default AdminLayout;
