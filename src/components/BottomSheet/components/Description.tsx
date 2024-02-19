import React from 'react';
import styles from './styles';

interface DescriptionProps {
  children: React.ReactNode;
}

const Description = ({ children, ...props }: DescriptionProps) => {
  return (
    <p css={styles.description} {...props}>
      {children}
    </p>
  );
};

export default Description;
