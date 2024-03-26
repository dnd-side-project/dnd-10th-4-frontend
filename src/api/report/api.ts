import { API_PATHS } from '@/constants/routerPaths';
import { Report } from '@/types/report';
import { authInstance } from '../instance';

const reportAPI = {
  /** 편지 신고 하기 */
  postReportSend: async (report: Report) => {
    const { data } = await authInstance.post(API_PATHS.REPORT_SEND, report);
    return data;
  },
};

export default reportAPI;
