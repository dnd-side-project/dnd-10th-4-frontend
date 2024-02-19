import React from 'react';
import styles from './styles';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children, ...props }: TitleProps) => {
  return (
    <h2 css={styles.title} {...props}>
      {children}
    </h2>
  );
};

export default Title;
