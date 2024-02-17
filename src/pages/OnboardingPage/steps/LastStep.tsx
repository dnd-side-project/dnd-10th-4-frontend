import {
  useFormContext,
  type SubmitHandler,
  type SubmitErrorHandler,
} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import { isAxiosError } from 'axios';
import Button from '@/components/Button';
import textStyles from '@/styles/textStyles';
import { ROUTER_PATHS } from '@/router';
import memberAPI from '@/api/member/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import ERROR_RESPONSES from '@/constants/errorMessages';
import StepTemplate from '../components/StepTemplate';
import { Inputs, formLiteral } from '../hooks/useOnboardingForm';

const LastStep = () => {
  const {
    handleSubmit,
    formState: { isValid },
  } = useFormContext<Inputs>();
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: memberAPI.postMemberDetail,
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const year = data.birthday.year
      .toString()
      .padStart(formLiteral.year.length, '0');
    const month = data.birthday.month
      .toString()
      .padStart(formLiteral.month.length, '0');
    const day = data.birthday.day
      .toString()
      .padStart(formLiteral.day.length, '0');

    const birthday = `${year}-${month}-${day}`;

    try {
      await mutateAsync({
        nickname: data.nickname,
        worries: data.worries,
        gender: data.gender,
        birthday,
      });

      navigate(ROUTER_PATHS.ROOT);
    } catch (err) {
      if (
        isAxiosError(err) &&
        err.response?.data === ERROR_RESPONSES.memberNotFound
      ) {
        console.error(err);
        navigate(ROUTER_PATHS.SIGNIN);
      } else {
        throw err;
      }
    }
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => {
    console.error(errors);

    navigate(ROUTER_PATHS.ROOT);
  };

  return (
    <StepTemplate
      buttonContent={
        <Button
          variant="primary"
          onClick={handleSubmit(onSubmit, onError)}
          disabled={isPending}
        >
          {isPending ? (
            <LoadingSpinner size="1.25rem" />
          ) : isValid ? (
            '시작하기'
          ) : (
            '건너뛰기'
          )}
        </Button>
      }
    >
      <h3 css={[textStyles.t1, css({ marginBottom: '0.375rem' })]}>
        {isValid ? '프로필이 완성됐어요' : '프로필 작성을 건너뛸까요?'}
      </h3>
      <p css={textStyles.b3R}>바다가 당신의 편지를 기다리고 있어요</p>
    </StepTemplate>
  );
};

export default LastStep;
