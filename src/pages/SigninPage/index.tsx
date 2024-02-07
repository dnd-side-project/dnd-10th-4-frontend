import KakaoLoginButton from '@/components/KakaoLoginButton';
import Header from '@/components/Header';
import IconButton from '@/components/IconButton';
import { SoundOff } from '@/assets/icons';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import styles from './styles';

const SigninPage = () => {
  return (
    <div css={styles.page}>
      <Header />
      <Header
        rightContent={
          <Tooltip
            side="bottom"
            align="end"
            triggerContent={
              <IconButton>
                <SoundOff color="white" />
              </IconButton>
            }
          >
            소리를 켜 바다를 느껴보세요
          </Tooltip>
        }
      />

      <main css={styles.main}>
        <p css={textStyles.b3R}>아무도에게도 말 못한 마음 속 편지</p>
        <h1 css={textStyles.logo}>내 마음 속 바다</h1>
      </main>

      <section css={styles.buttonSection}>
        <KakaoLoginButton
          css={styles.loginButton}
          href={import.meta.env.VITE_KAKAO_URL}
        />
      </section>
    </div>
  );
};

export default SigninPage;
