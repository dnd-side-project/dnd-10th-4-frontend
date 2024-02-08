import { css } from '@emotion/react';
import IconButton from '@/components/IconButton';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { PencilLine, TreasureChest, User } from '@/assets/icons';
import MusicButton from '@/components/MusicButton';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';
import styles from './styles';

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
            <IconButton variant="header" rounded="r8">
              <User color="white" />
            </IconButton>
          </>
        }
      />

      <main css={styles.main}>
        <p>내부 컨텐츠</p>
      </main>

      <section css={styles.buttonSection}>
        <Button css={styles.button}>
          <PencilLine />
          편지 쓰기
        </Button>
      </section>
    </div>
  );
};

export default MainPage;
