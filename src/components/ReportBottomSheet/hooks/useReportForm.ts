import { useForm } from 'react-hook-form';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { REPORT_TYPE_DICT, type ReportType } from '@/constants/report';

export const reportList = Object.entries(REPORT_TYPE_DICT).map(
  ([key, value]) => ({
    text: value,
    value: key,
  }),
);

export const reportLiteral = {
  reportContent: {
    max: {
      value: 150,
      message: '신고 내용은 150자 이하이어야 합니다.',
    },
  },
};

const L = reportLiteral;

const [report, ...otherReport] = Object.keys(REPORT_TYPE_DICT) as ReportType[];

const reportSchema = z.object({
  reportType: z.enum([report, ...otherReport]),
  reportContent: z
    .string()
    .max(L.reportContent.max.value, L.reportContent.max.message),
});

export type ReportInputs = z.infer<typeof reportSchema>;

const useReportForm = () =>
  useForm<ReportInputs>({
    defaultValues: {
      reportContent: '',
    },
    resolver: zodResolver(reportSchema),
  });

export default useReportForm;
