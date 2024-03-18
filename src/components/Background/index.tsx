import React from 'react';
import styles from './styles';

interface BackgroundProps extends React.ComponentPropsWithoutRef<'div'> {
  imageUrl: string;
  children: React.ReactNode;
}

const Background = ({ imageUrl, children }: BackgroundProps) => {
  return (
    <div css={styles.background(imageUrl)}>
      <div css={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Background;
