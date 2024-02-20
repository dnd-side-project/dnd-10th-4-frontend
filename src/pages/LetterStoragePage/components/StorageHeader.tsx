import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import { ROUTER_PATHS } from '@/router';
import textStyles from '@/styles/textStyles';

const StorageHeader = () => {
  const navigate = useNavigate();
  return (
    <Header
      css={style.header}
      leftContent={
        <CaretLeft
          strokeWidth={2.5}
          color="white"
          css={style.icon}
          onClick={() => navigate(ROUTER_PATHS.ROOT)}
        />
      }
      centerContent={<h2 css={style.title}>보관함</h2>}
    />
  );
};

export default StorageHeader;

const style = {
  header: css`
    padding-top: 0.5rem;
  `,
  icon: css`
    cursor: pointer;
  `,
  title: css`
    color: white;
    ${textStyles.b3m}
  `,
};
