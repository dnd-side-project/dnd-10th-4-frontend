import { type ReportType } from '@/constants/report';
import { type Pagination } from './pagination';
import { type Member } from './member';

export type PagedReportResponse = Pagination & {
  letters: {
    id: number;
    reporterEmail: string;
    reportedEmail: string;
    reportType: ReportType;
    content: string;
  }[];
};

export type PagedMemberResponse = Pagination & {
  members: Omit<Member, 'worryTypes' | 'letterCount'>[];
};
