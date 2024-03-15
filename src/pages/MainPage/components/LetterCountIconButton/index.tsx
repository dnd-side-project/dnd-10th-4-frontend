import { useSuspenseQuery } from '@tanstack/react-query';
import { PencilLine } from '@/assets/icons';
import IconButton from '@/components/IconButton';
import memberOptions from '@/api/member/queryOptions';
import Tooltip from '@/components/Tooltip';
import useBoolean from '@/hooks/useBoolean';
import styles from './style';
import LetterCountBottomSheet from './LetterCountBottomSheet';

const LetterCountIconButton = () => {
  const { data: member } = useSuspenseQuery(memberOptions.detail());

  const bottomSheet = useBoolean(false);

  return (
    <>
      <LetterCountBottomSheet
        letterCount={member.letterCount}
        {...bottomSheet}
      />
      <Tooltip delay={3000} mountKey="letterCountIconButton">
        <Tooltip.Trigger>
          <IconButton
            css={styles.button}
            variant="header"
            rounded="r8"
            onClick={bottomSheet.on}
          >
            <PencilLine color="white" />
            <p css={styles.text}>{member.letterCount}장</p>
          </IconButton>
        </Tooltip.Trigger>
        <Tooltip.Content align="start">
          <p>편지지는 </p>
          <p>하루마다 충전 돼요</p>
        </Tooltip.Content>
      </Tooltip>
    </>
  );
};

export default LetterCountIconButton;
