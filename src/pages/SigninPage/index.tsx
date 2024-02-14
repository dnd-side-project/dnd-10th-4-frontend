import { css } from '@emotion/react';
import KakaoLoginButton from '@/components/KakaoLoginButton';
import Header from '@/components/Header';
import textStyles from '@/styles/textStyles';
import MusicButton from '@/components/MusicButton';
import styles from './styles';

const SigninPage = () => {
  return (
    <div css={styles.page}>
      <Header />
      <Header rightContent={<MusicButton />} />

      <main css={styles.main}>
        <p css={[textStyles.b2R, css({ marginBottom: '0.375rem' })]}>
          아무도에게도 말 못한 마음 속 편지
        </p>
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
