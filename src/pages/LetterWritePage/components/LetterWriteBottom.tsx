import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ROUTER_PATHS } from '@/router';
import LoadingSpinner from '@/components/LoadingSpinner';
import { ImageSelect } from '.';

interface LetterWriteBottomProps {
  isPending: boolean;
}

const LetterWriteBottom = ({ isPending }: LetterWriteBottomProps) => {
  const navigate = useNavigate();

  return (
    <Navbar css={style.navbar}>
      <Button
        onClick={() => navigate(ROUTER_PATHS.ROOT)}
        type="button"
        variant="secondary"
        size="sm"
      >
        취소
      </Button>
      <Button disabled={isPending} type="submit" variant="primary" size="sm">
        {isPending ? <LoadingSpinner /> : '보내기'}
      </Button>
      <ImageSelect />
    </Navbar>
  );
};

export default LetterWriteBottom;

const style = {
  navbar: css`
    padding-inline: 0;
  `,
};
