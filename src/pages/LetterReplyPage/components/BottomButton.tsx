import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import { TreasureChestOutline } from '@/assets/icons';
import { ROUTER_PATHS } from '@/router';

const BottomButton = () => {
  const navigate = useNavigate();
  return (
    <Navbar css={styles.navbar}>
      <Button
        variant="semi-transparent-unaccent"
        size="sm"
        onClick={() => navigate(ROUTER_PATHS.ROOT)}
      >
        닫기
      </Button>
      <Button variant="semi-transparent" size="sm">
        <TreasureChestOutline />
        보관하기
      </Button>
    </Navbar>
  );
};

export default BottomButton;

const styles = {
  navbar: css`
    width: 100%;
    padding-inline: 0;
  `,
};
