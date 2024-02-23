import { Suspense } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import STORAGE_KEYS from '@/constants/storageKeys';
import memberOptions from '@/api/member/queryOptions';
import { ROUTER_PATHS } from '@/router';

const SuspensedLayout = () => {
  useSuspenseQuery(memberOptions.detail());

  return <Outlet />;
};

const AuthLayout = () => {
  if (!localStorage.getItem(STORAGE_KEYS.accessToken)) {
    return <Navigate to={ROUTER_PATHS.SIGNIN} />;
  }

  return (
    <Suspense fallback={<>로딩중</>}>
      <SuspensedLayout />
    </Suspense>
  );
};

export default AuthLayout;
