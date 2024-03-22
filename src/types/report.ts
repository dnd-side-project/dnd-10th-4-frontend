import { type ReportType } from '@/constants/report';

export type Report = {
  letterId: number;
  reportType: ReportType;
  reportContent: string;
};
