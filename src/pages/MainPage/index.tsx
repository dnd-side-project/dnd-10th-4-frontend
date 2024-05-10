import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';
import IconButton from '@/components/IconButton';
import Header from '@/components/Header';
import { TreasureChest, User } from '@/assets/icons';
import MusicButton from '@/components/MusicButton';
import { ROUTER_PATHS } from '@/constants/routerPaths';
import Tooltip from '@/components/Tooltip';
import styles from './styles';
import CarouselArea from './components/CarouselArea';
import LetterCountIconButton from './components/LetterCountIconButton';
import WritingBottomButton from './components/WritingBottomButton';

const MainPage = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.page}>
      <Header variant="primary">
        <Header.Left>
          <LetterCountIconButton />
        </Header.Left>
        <Header.Right css={css({ gap: '0.5rem' })}>
          <MusicButton
            css={css({ marginRight: '0.75rem' })}
            tooltipContentProps={{
              align: 'start',
              side: 'bottom',
            }}
          />
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                variant="header"
                rounded="r8"
                onClick={() => navigate(ROUTER_PATHS.LETTER_STORAGE)}
              >
                <TreasureChest color="white" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content>보관함</Tooltip.Content>
          </Tooltip>
          <Tooltip>
            <Tooltip.Trigger>
              <IconButton
                variant="header"
                rounded="r8"
                onClick={() => navigate(ROUTER_PATHS.MYPAGE)}
              >
                <User color="white" />
              </IconButton>
            </Tooltip.Trigger>
            <Tooltip.Content align="end">마이 페이지</Tooltip.Content>
          </Tooltip>
        </Header.Right>
      </Header>

      <main css={styles.main}>
        <CarouselArea />
      </main>

      <section css={styles.buttonSection}>
        <WritingBottomButton />
      </section>
    </div>
  );
};

export default MainPage;
