import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { css } from '@emotion/react';
import IconButton, { iconButtonStyles } from '@/components/IconButton';
import Header from '@/components/Header';
import { buttonStyles } from '@/components/Button';
import { PencilLine, TreasureChest, User } from '@/assets/icons';
import MusicButton from '@/components/MusicButton';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import { ROUTER_PATHS } from '@/router';
import styles from './styles';
import CarouselArea from './components/CarouselArea';

const MainPage = () => {
  return (
    <div css={styles.page}>
      <Header
        variant="primary"
        leftContent={
          <IconButton variant="header" rounded="r8" css={styles.headerButton}>
            <PencilLine color="white" />
            <p css={[textStyles.b4m, css({ color: COLORS.gray1 })]}>4장</p>
          </IconButton>
        }
        rightStyle={css({ gap: '0.5rem' })}
        rightContent={
          <>
            <MusicButton css={css({ marginRight: '0.75rem' })} />
            <IconButton variant="header" rounded="r8">
              <TreasureChest color="white" />
            </IconButton>
            <Link
              to={ROUTER_PATHS.MYPAGE}
              css={iconButtonStyles.button('header', 'r8')}
            >
              <User color="white" />
            </Link>
          </>
        }
      />

      <main css={styles.main}>
        {/* TODO: 로딩 처리 필요 */}
        <Suspense fallback={<></>}>
          <CarouselArea />
        </Suspense>
      </main>

      <section css={styles.buttonSection}>
        <Link
          to={ROUTER_PATHS.LETTER_WRITE}
          css={buttonStyles.button('primary', 'md', 'md')}
        >
          <PencilLine />
          편지 쓰기
        </Link>
      </section>
    </div>
  );
};

export default MainPage;
