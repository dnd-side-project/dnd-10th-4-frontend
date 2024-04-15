import { http } from 'msw';
import { API_PATHS } from '@/constants/routerPaths';
import { baseURL } from '@/utils/mswUtils';
import withAuth from '../middlewares/withAuth';
import { adminResolvers } from '../resolvers/admin';

const adminHandler = [
  // 회원 조회
  http.get(
    baseURL(API_PATHS.ADMIN_MEMBER_SEARCH),
    withAuth(adminResolvers.getMemberSearch.success),
  ),

  // 신고 내역 조회
  http.get(
    baseURL(API_PATHS.ADMIN_REPORT),
    withAuth(adminResolvers.getReport.success),
  ),

  // 회원 삭제
  http.delete(
    baseURL(API_PATHS.ADMIN_MEMBER_SEARCH),
    withAuth(adminResolvers.deleteMember.success),
  ),

  // 운영자가 특정 회원에게 편지를 보내기
  http.post(
    baseURL(API_PATHS.ADMIN_LETTER_SPECIAL),
    withAuth(adminResolvers.postLetterSpecial.success),
  ),
];

export default adminHandler;
