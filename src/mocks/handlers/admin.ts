import { http } from 'msw';
import { API_PATHS } from '@/constants/routerPaths';
import { baseURL } from '@/utils/mswUtils';
import withAuth from '../middlewares/withAuth';
import { adminResolvers } from '../resolvers/admin';

const adminHandler = [
  http.get(
    baseURL(API_PATHS.ADMIN_MEMBER_SEARCH),
    withAuth(adminResolvers.getMemberSearch.success),
  ),

  http.get(
    baseURL(API_PATHS.ADMIN_REPORT),
    withAuth(adminResolvers.getReport.success),
  ),

  http.delete(
    baseURL(API_PATHS.ADMIN_MEMBER_SEARCH),
    withAuth(adminResolvers.deleteMember.success),
  ),
];

export default adminHandler;
