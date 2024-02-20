import { Link } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import { PencilLine } from '@/assets/icons';
import { buttonStyles } from '@/components/Button';
import { ROUTER_PATHS } from '@/router';
import memberOptions from '@/api/member/queryOptions';

const WritingBottomButton = () => {
  const { data: member } = useSuspenseQuery(memberOptions.detail());

  return (
    <Link
      to={ROUTER_PATHS.LETTER_WRITE}
      css={buttonStyles.button('primary', 'md', 'md')}
      onClick={(e) => member.letterCount === 0 && e.preventDefault()}
    >
      <PencilLine />
      편지 쓰기
    </Link>
  );
};

export default WritingBottomButton;
