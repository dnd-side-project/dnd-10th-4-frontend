import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import textStyles from '@/styles/textStyles';

const StorageHeader = () => {
  const navigate = useNavigate();
  return (
    <div css={style.container}>
      <Header
        variant="primary"
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
    </div>
  );
};

export default StorageHeader;

const style = {
  container: css`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: center;
  `,
  header: css`
    max-width: 600px;
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
