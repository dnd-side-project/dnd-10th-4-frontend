import React from 'react';
import styles from './style';

interface LeftProps {
  children?: React.ReactNode;
}

const Left = ({ children, ...props }: LeftProps) => {
  return (
    <div css={styles.left} {...props}>
      {children}
    </div>
  );
};

export default Left;
