import React from 'react';
import KakaoLoginButton from '@/components/KakaoLoginButton';
import Header from '@/components/Header';
import IconButton from '@/components/IconButton';
import { SoundOff } from '@/assets/icons';
import Tooltip from '@/components/Tooltip';
import textStyles from '@/styles/textStyles';
import styles from './styles';

const SigninPage = () => {
  return (
    <main css={styles.page}>
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

      <section css={styles.main}>
        <h1 css={textStyles.b3R}>아무도에게도 말 못한 마음 속 편지</h1>
        <h1 css={textStyles.logo}>내 마음 속 바다</h1>
      </section>

      <KakaoLoginButton css={styles.loginButton} />
    </main>
  );
};

export default SigninPage;
