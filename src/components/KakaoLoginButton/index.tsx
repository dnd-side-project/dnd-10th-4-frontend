import React, { forwardRef } from 'react';
import { KakaoLogo } from '@/assets/icons';
import styles from './styles';

interface KakaoLoginButtonProps extends React.ComponentProps<'button'> {}

const KakaoLoginButton = forwardRef<HTMLButtonElement, KakaoLoginButtonProps>(
  ({ children = '카카오 로그인', ...props }, ref) => {
    return (
      <button ref={ref} css={styles.button} {...props}>
        <KakaoLogo css={styles.logo} />
        {children}
      </button>
    );
  },
);

KakaoLoginButton.displayName = 'Button';

export default KakaoLoginButton;
