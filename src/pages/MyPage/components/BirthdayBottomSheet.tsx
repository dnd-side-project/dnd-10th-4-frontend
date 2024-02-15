import { Controller, useForm } from 'react-hook-form';
import { type SubmitHandler } from 'react-hook-form';
import { css } from '@emotion/react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import {
  formSchema as onboardingFormSchema,
  initialSchema as onboardingInitialFormSchema,
  formLiteral,
} from '@/pages/OnboardingPage/hooks/useOnboardingForm';
import { clampValue } from '@/utils/stringUtils';
import memberAPI from '@/api/member/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import memberOptions from '@/api/member/queryOptions';
import { bottomSheetStyles } from '../style';

interface BirthdayBottomSheetProps extends ReturnType<typeof useBoolean> {}

const formSchema = onboardingFormSchema.pick({ birthday: true });
const initialSchema = onboardingInitialFormSchema.pick({ birthday: true });

type Inputs = z.infer<typeof formSchema>;
type InitialInputs = z.infer<typeof initialSchema>;

const BirthdayBottomSheet = ({ value, on, off }: BirthdayBottomSheetProps) => {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<InitialInputs, void, Inputs>({
    defaultValues: {
      birthday: {
        year: '',
        month: '',
        day: '',
      },
    },
    mode: 'all',
    resolver: zodResolver(formSchema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: memberAPI.patchBirthday,
  });

  const queryClient = useQueryClient();

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

    await mutateAsync({ birthday });

    queryClient.invalidateQueries({
      queryKey: memberOptions.detail().queryKey,
    });

    off();
  };

  return (
    <BottomSheet open={value} onOpen={on} onClose={off}>
      <section css={bottomSheetStyles.mainSection}>
        <h2 css={bottomSheetStyles.title}>언제로 변경하시겠어요?</h2>
        <div css={styles.inputSection}>
          <span css={css({ flexBasis: '6.25rem' })}>
            <Controller
              name="birthday.year"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  inputMode="numeric"
                  placeholder="YYYY"
                  autoComplete="off"
                  maxLength={formLiteral.year.length}
                  onChange={async (e) => {
                    e.target.value = clampValue(
                      e.target.value,
                      formLiteral.year.max,
                    );
                    field.onChange(e);
                  }}
                />
              )}
            />
          </span>
          <span css={css({ flexBasis: '4.6875rem' })}>
            <Controller
              name="birthday.month"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  inputMode="numeric"
                  placeholder="MM"
                  autoComplete="off"
                  maxLength={formLiteral.month.length}
                  onChange={async (e) => {
                    e.target.value = clampValue(
                      e.target.value,
                      formLiteral.month.max,
                    );
                    field.onChange(e);
                  }}
                />
              )}
            />
          </span>
          <span css={css({ flexBasis: '4.6875rem' })}>
            <Controller
              name="birthday.day"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  inputMode="numeric"
                  placeholder="DD"
                  autoComplete="off"
                  maxLength={formLiteral.day.length}
                  onChange={async (e) => {
                    e.target.value = clampValue(
                      e.target.value,
                      formLiteral.day.max,
                    );
                    field.onChange(e);
                  }}
                />
              )}
            />
          </span>
        </div>
        <p css={bottomSheetStyles.description}>
          생년월일은 한 번만 수정할 수 있어요
        </p>
      </section>
      <section css={bottomSheetStyles.buttonSection}>
        <Button variant="cancel" rounded="none" size="sm" onClick={off}>
          닫기
        </Button>
        <Button
          variant="primary"
          rounded="none"
          size="sm"
          disabled={!isValid || isPending}
          onClick={handleSubmit(onSubmit)}
        >
          {isPending ? <LoadingSpinner /> : isValid ? '완료' : '입력해주세요'}
        </Button>
      </section>
    </BottomSheet>
  );
};

export default BirthdayBottomSheet;

const styles = {
  inputSection: css`
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    width: 100%;

    input {
      box-sizing: border-box;
      width: 100%;
      padding: 0.75rem 0.875rem;
      border: 1px solid var(--gray-gray5, #e0e0e0);
      border-radius: 0.75rem;
      background: #fff;
      text-align: center;

      &:focus {
        outline: 1px solid ${COLORS.primary};
      }

      ${textStyles.b3R};
    }
  `,
};
