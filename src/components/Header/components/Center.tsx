import React from 'react';
import styles from './style';

interface CenterProps {
  children?: React.ReactNode;
}

const Center = ({ children, ...props }: CenterProps) => {
  return (
    <div css={styles.center} {...props}>
      {children}
    </div>
  );
};

export default Center;
