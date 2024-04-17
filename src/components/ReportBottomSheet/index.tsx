import { useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import letterOptions from '@/api/letter/queryOptions';
import useBoolean from '@/hooks/useBoolean';
import reportAPI from '@/api/report/api';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import ERROR_RESPONSES from '@/constants/errorMessages';
import BottomSheet from '../BottomSheet';
import Button from '../Button';
import LoadingSpinner from '../LoadingSpinner';
import style from './styles';
import Radio from './components/Radio';
import useReportForm, { reportList, ReportInputs } from './hooks/useReportForm';

const ReportBottomSheet = ({
  value,
  on,
  off,
}: ReturnType<typeof useBoolean>) => {
  const navigate = useNavigate();
  const { letterId } = useParams();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useReportForm();
  const selectedValue = useWatch({ control, name: 'reportType' });
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: reportAPI.postReportSend,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: letterOptions.all });
    },
  });

  const onSubmit = async (data: ReportInputs) => {
    mutate(
      { letterId: Number(letterId), ...data },
      {
        onSuccess: () => {
          toast.success('신고가 접수되었어요.', {
            position: 'bottom-center',
          });
          navigate(ROUTER_PATHS.ROOT);
        },
        onError: (err) => {
          if (isAxiosError(err)) {
            if (
              err.response?.data === ERROR_RESPONSES.memberNotFound ||
              err.response?.data === ERROR_RESPONSES.accessDeniedLetter ||
              err.response?.data === ERROR_RESPONSES.alreadyReportExist
            ) {
              navigate(ROUTER_PATHS.ROOT);
            }
          }
          off();
        },
      },
    );
  };

  useEffect(() => {
    if (errors.reportType) {
      toast.warn(errors.reportType.message, {
        position: 'bottom-center',
      });
    }
  }, [errors]);

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
          <Button
            type="button"
            variant="cancel"
            onClick={() => {
              off(), reset();
            }}
          >
            취소하기
          </Button>
          <Button disabled={isPending} type="submit" variant="danger">
            {isPending ? <LoadingSpinner /> : <>신고하기</>}
          </Button>
        </BottomSheet.ButtonSection>
      </form>
    </BottomSheet>
  );
};

export default ReportBottomSheet;
