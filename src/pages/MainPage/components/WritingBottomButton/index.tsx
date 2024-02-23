import { useLocation, useNavigate } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { css } from '@emotion/react';
import { PencilLine } from '@/assets/icons';
import Button from '@/components/Button';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import memberOptions from '@/api/member/queryOptions';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';

const WritingBottomButton = () => {
  const { data: member } = useSuspenseQuery(memberOptions.detail());
  const location = useLocation();
  const navigate = useNavigate();

  const isFromOnboardingLetter =
    location.state?.from === ROUTER_PATHS.ONBOARDING;

  const disabled = member.letterCount === 0;

  return (
    <Tooltip
      delay={isFromOnboardingLetter ? 5000 : 0}
      triggerContent={
        <Button
          css={css({ width: '100%' })}
          variant="primary"
          size="md"
          rounded="md"
          disabled={disabled}
          onClick={() => navigate(ROUTER_PATHS.LETTER_WRITE)}
        >
          <PencilLine /> 편지 쓰기
        </Button>
      }
    >
      <p css={textStyles.c1r}>
        {isFromOnboardingLetter
          ? '나의 첫 편지를 바다에 띄어보내 보세요'
          : disabled
            ? '오늘은 더 이상 편지를 쓸 수 없어요'
            : `오늘 편지를 ${member.letterCount}번 더 쓸수 있어요`}
      </p>
    </Tooltip>
  );
};

export default WritingBottomButton;
