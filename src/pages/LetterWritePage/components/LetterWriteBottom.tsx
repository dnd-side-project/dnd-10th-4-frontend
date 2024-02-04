import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { ROUTER_PATHS } from '@/router';
import { ImageSelect } from '.';

const LetterWriteBottom = () => {
  const navigate = useNavigate();

  return (
    <Navbar css={style.navbar}>
      <Button
        onClick={() => navigate(ROUTER_PATHS.ROOT)}
        type="button"
        variant="secondary"
        size="sm"
      >
        뒤로
      </Button>
      <Button type="submit" variant="primary" size="sm">
        답장 보내기
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
