import { http } from 'msw';
import { API_PATHS } from '@/constants/routerPaths';
import { baseURL } from '@/utils/mswUtils';
import withAuth from '../middlewares/withAuth';
import { reportResolvers } from '../resolvers/report';

const reportHandler = [
  /** 신고하기 */
  http.post(
    baseURL(API_PATHS.REPORT_SEND),
    withAuth(reportResolvers.postReport.success),
  ),
];

export default reportHandler;
