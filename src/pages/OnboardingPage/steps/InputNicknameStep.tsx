import { useState } from 'react';
import { css } from '@emotion/react';
import { useMutation } from '@tanstack/react-query';
import Button from '@/components/Button';
import { useFunnelContext } from '@/contexts/useFunnelContext';
import textStyles from '@/styles/textStyles';
import { Shuffle } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import COLORS from '@/constants/colors';
import { NICKNAMES } from '@/constants/users';
import { type Nickname } from '@/types/member';
import LoadingSpinner from '@/components/LoadingSpinner';
import memberAPI from '@/api/member/apis';
import StepTemplate from '../components/StepTemplate';
import onboardingStyles from '../styles';

const InputNicknameStep = () => {
  const [nickname, setNickname] = useState<Nickname>(NICKNAMES[0]);

  const { toNext } = useFunnelContext();
  const { mutateAsync, isPending } = useMutation({
    mutationFn: memberAPI.patchNickname,
  });

  const handleChangeNickname = () => {
    const randomIndex = Math.floor(Math.random() * NICKNAMES.length);
    setNickname(NICKNAMES[randomIndex]);
  };

  const handleNext = async () => {
    await mutateAsync({ nickname });
    toNext();
  };

  return (
    <StepTemplate
      buttonContent={
        <Button variant="primary" onClick={handleNext} disabled={isPending}>
          {isPending ? <LoadingSpinner size="1.3rem" /> : '다음'}
        </Button>
      }
    >
      <h3 css={[textStyles.t4, css({ marginBottom: '1.4375rem' })]}>
        바다에게 당신의 이름을 알려주세요
      </h3>
      <div css={[onboardingStyles.input, styles.input]}>
        <span>낯선 </span>
        <span css={css({ color: COLORS.gray3 })}>{nickname}</span>
        <IconButton
          css={styles.icon}
          variant="header"
          onClick={handleChangeNickname}
        >
          <Shuffle />
        </IconButton>
      </div>
    </StepTemplate>
  );
};

export default InputNicknameStep;

const styles = {
  input: css`
    box-sizing: border-box;
    width: 100%;
    max-width: 15.3rem;
  `,
  icon: css`
    position: absolute;
    top: 50%;
    right: 0.375rem;
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%);
    }
  `,
};
