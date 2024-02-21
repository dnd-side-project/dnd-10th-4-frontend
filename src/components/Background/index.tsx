import React from 'react';
import styles from './styles';

interface BackgroundProps extends React.ComponentPropsWithoutRef<'div'> {
  imageUrl: string;
  children: React.ReactNode;
  path: string;
}

const Background = ({ imageUrl, children, path }: BackgroundProps) => {
  return (
    <div css={styles.background(imageUrl, path)}>
      <div css={styles.wrapper}>{children}</div>
    </div>
  );
};

export default Background;
