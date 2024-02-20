import { Link } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PencilLine } from '@/assets/icons';
import { iconButtonStyles } from '@/components/IconButton';
import memberOptions from '@/api/member/queryOptions';
import Tooltip from '@/components/Tooltip';
import { ROUTER_PATHS } from '@/router';
import styles from './style';

const WritingButton = () => {
  const { data: member } = useSuspenseQuery(memberOptions.detail());

  return (
    <Tooltip
      delay={3000}
      mountKey="writingButton"
      triggerContent={
        <Link
          css={[iconButtonStyles.button('header', 'r8'), styles.button]}
          to={ROUTER_PATHS.LETTER_WRITE}
          onClick={(e) => member.letterCount === 0 && e.preventDefault()}
        >
          <PencilLine color="white" />
          <p css={styles.text}>{member.letterCount}장</p>
        </Link>
      }
      align="start"
    >
      <p>편지지는 </p>
      <p>하루마다 충전 돼요</p>
    </Tooltip>
  );
};

export default WritingButton;
