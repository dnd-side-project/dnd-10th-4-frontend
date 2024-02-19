import React from 'react';
import styles from './styles';

interface ContentProps {
  children: React.ReactNode;
}

const Content = ({ children, ...props }: ContentProps) => {
  return (
    <section css={styles.content} {...props}>
      {children}
    </section>
  );
};

export default Content;
