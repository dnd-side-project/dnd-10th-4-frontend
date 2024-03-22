import { useForm, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import useBoolean from '@/hooks/useBoolean';
import { REPORT_TYPE_DICT, type ReportType } from '@/constants/report';
import reportAPI from '@/api/report/api';
import ERROR_RESPONSES from '@/constants/errorMessages';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import BottomSheet from '../BottomSheet';
import Button from '../Button';
import LoadingSpinner from '../LoadingSpinner';
import style from './styles';
import Radio from './components/Radio';

interface ReportBottomSheetProps extends ReturnType<typeof useBoolean> {}

const reportList = Object.entries(REPORT_TYPE_DICT).map(([key, value]) => ({
  text: value,
  value: key,
}));

const [report, ...otherReport] = Object.keys(REPORT_TYPE_DICT) as ReportType[];

const reportSchema = z.object({
  reportType: z.enum([report, ...otherReport]),
  reportContent: z.string(),
});

export type ReportInputs = z.infer<typeof reportSchema>;

const ReportBottomSheet = ({ value, on, off }: ReportBottomSheetProps) => {
  const navigate = useNavigate();
  const { letterId } = useParams();

  const methods = useForm<ReportInputs>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      reportContent: '',
    },
  });

  const { register, handleSubmit, control, reset } = methods;
  const selectedValue = useWatch({ control, name: 'reportType' });

  const { mutate, isPending } = useMutation({
    mutationFn: reportAPI.postReportSend,
  });

  const onSubmit = async (data: ReportInputs) => {
    mutate(
      { letterId: Number(letterId), ...data },
      {
        onSuccess: () => {
          toast.success('신고가 접수되었어요', {
            position: 'bottom-center',
            autoClose: 1500,
          });
        },
        onError: (err) => {
          if (isAxiosError(err)) {
            if (
              err.response?.data === ERROR_RESPONSES.memberNotFound ||
              err.response?.data === ERROR_RESPONSES.accessDeniedLetter
            ) {
              navigate(ROUTER_PATHS.ROOT);
            }
          }
        },
        onSettled: () => {
          off();
          reset();
        },
      },
    );
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div css={style.container}>
          <div>
            <BottomSheet.Title>신고하기</BottomSheet.Title>
          </div>
          <div css={style.radioContainer}>
            {reportList.map((report) => (
              <Radio
                key={report.value}
                value={report.value}
                text={report.text}
                selectedValue={selectedValue}
                {...register('reportType')}
              />
            ))}
          </div>
          <div css={style.textareaContainer}>
            <label htmlFor="reportDetails">상세 내용</label>
            <textarea
              css={style.textarea}
              id="reportDetails"
              placeholder="상세내용을 적어주세요."
              rows={5}
              maxLength={150}
              {...register('reportContent')}
            />
          </div>
        </div>
        <BottomSheet.ButtonSection>
          <Button variant="cancel" onClick={off}>
            취소하기
          </Button>
          <Button type="submit" variant="danger">
            {isPending ? <LoadingSpinner /> : <>신고하기</>}
          </Button>
        </BottomSheet.ButtonSection>
      </form>
    </BottomSheet>
  );
};

export default ReportBottomSheet;
