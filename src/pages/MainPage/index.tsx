import { useNavigate } from 'react-router-dom';
import { Suspense } from 'react';
import { css } from '@emotion/react';
import IconButton from '@/components/IconButton';
import Header from '@/components/Header';
import { TreasureChest, User } from '@/assets/icons';
import MusicButton from '@/components/MusicButton';
import { ROUTER_PATHS } from '@/router';
import Tooltip from '@/components/Tooltip';
import styles from './styles';
import CarouselArea from './components/CarouselArea';
import WritingButton from './components/WritingButton';
import WritingBottomButton from './components/WritingBottomButton';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.page}>
      <Header
        variant="primary"
        leftContent={
          <Suspense fallback={<></>}>
            <WritingButton />
          </Suspense>
        }
        rightStyle={css({ gap: '0.5rem' })}
        rightContent={
          <>
            <MusicButton
              css={css({ marginRight: '0.75rem' })}
              tooltipProps={{
                align: 'start',
                side: 'bottom',
              }}
            />
            <Tooltip
              triggerContent={
                <IconButton
                  variant="header"
                  rounded="r8"
                  onClick={() => navigate(ROUTER_PATHS.LETTER_STORAGE)}
                >
                  <TreasureChest color="white" />
                </IconButton>
              }
            >
              보관함
            </Tooltip>
            <Tooltip
              align="end"
              triggerContent={
                <IconButton
                  variant="header"
                  rounded="r8"
                  onClick={() => navigate(ROUTER_PATHS.MYPAGE)}
                >
                  <User color="white" />
                </IconButton>
              }
            >
              마이 페이지
            </Tooltip>
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
        <Suspense fallback={<></>}>
          <WritingBottomButton />
        </Suspense>
      </section>
    </div>
  );
};

export default MainPage;
