import React from 'react';
import styles from './style';

interface RightProps {
  children?: React.ReactNode;
}

const Right = ({ children, ...props }: RightProps) => {
  return (
    <div css={styles.right} {...props}>
      {children}
    </div>
  );
};

export default Right;
