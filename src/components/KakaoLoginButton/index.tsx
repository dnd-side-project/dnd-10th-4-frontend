import React, { forwardRef } from 'react';
import { KakaoLogo } from '@/assets/icons';
import styles from './styles';

interface KakaoLoginButtonProps extends React.ComponentProps<'a'> {}

const KakaoLoginButton = forwardRef<HTMLAnchorElement, KakaoLoginButtonProps>(
  ({ children = '카카오 로그인', ...props }, ref) => {
    return (
      <a ref={ref} css={styles.button} {...props}>
        <KakaoLogo css={styles.logo} />
        {children}
      </a>
    );
  },
);

KakaoLoginButton.displayName = 'Button';

export default KakaoLoginButton;
