import {
  useForm,
  type SubmitHandler,
  type SubmitErrorHandler,
} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import memberAPI from '@/api/member/apis';
import LoadingSpinner from '@/components/LoadingSpinner';
import StepTemplate from '../components/StepTemplate';
import onboardingStyles from '../styles';

const formLiteral = {
  year: {
    min: 1800,
    max: new Date().getFullYear(),
    length: 4,
  },
  month: {
    min: 1,
    max: 12,
    length: 2,
  },
  day: {
    min: 1,
    max: 31,
    length: 2,
  },
} as const;

const L = formLiteral;

const formSchema = z.object({
  year: z.coerce.number().int().min(L.year.min).max(L.year.max),
  month: z.coerce.number().int().min(L.month.min).max(L.month.max),
  day: z.coerce.number().int().min(L.day.min).max(L.day.max),
});

type Inputs = z.infer<typeof formSchema>;

const InputBirthdayStep = () => {
  const { register, handleSubmit } = useForm<Inputs>({
    resolver: zodResolver(formSchema),
  });

  const { toNext } = useFunnelContext();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: memberAPI.patchBirthday,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value.replace(/[^0-9]/g, '');

    if (!(name === 'day' || name === 'month' || name === 'year')) {
      return;
    }

    const max = formLiteral[name].max;

    if (Number(value) > max) {
      e.target.value = max.toString();
    } else {
      e.target.value = value.toString().padStart(value.length, '0');
    }
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const year = data.year.toString().padStart(formLiteral.year.length, '0');
    const month = data.month.toString().padStart(formLiteral.month.length, '0');
    const day = data.day.toString().padStart(formLiteral.day.length, '0');

    const birthday = `${year}-${month}-${day}`;

    await mutateAsync({
      birthday,
    });

    toNext();
  };

  const onError: SubmitErrorHandler<Inputs> = (errors) => {
    console.error(errors);
  };

  return (
    <StepTemplate
      buttonContent={
        <Button
          type="submit"
          variant="primary"
          onClick={handleSubmit(onSubmit, onError)}
          disabled={isPending}
        >
          {isPending ? <LoadingSpinner size="1.3rem" /> : '다음'}
        </Button>
      }
    >
      <p css={[textStyles.b4m, css({ marginBottom: '0.25rem' })]}>
        낯선거북이님의 편지가 잘 전해질 수 있도록
      </p>
      <h3 css={[textStyles.t3, css({ marginBottom: '1.5625rem' })]}>
        생년월일을 알려주세요
      </h3>
      <section css={styles.inputSection}>
        <input
          css={[onboardingStyles.input, styles.input('0.9')]}
          {...register('year')}
          type="text"
          placeholder="YYYY"
          autoComplete="off"
          onChange={handleChange}
          maxLength={formLiteral.year.length}
        />
        <input
          css={[onboardingStyles.input, styles.input('1')]}
          {...register('month')}
          type="text"
          placeholder="MM"
          autoComplete="off"
          onChange={handleChange}
          maxLength={formLiteral.month.length}
        />
        <input
          css={[onboardingStyles.input, styles.input('1')]}
          {...register('day')}
          type="text"
          placeholder="DD"
          autoComplete="off"
          onChange={handleChange}
          maxLength={formLiteral.day.length}
        />
      </section>
    </StepTemplate>
  );
};

export default InputBirthdayStep;

const styles = {
  inputSection: css`
    display: flex;
    gap: 0.5rem;
    width: 100%;
    max-width: 16.25rem;
  `,
  input: (shrink: string) => css`
    flex-shrink: ${shrink};
    width: 100%;
  `,
};
