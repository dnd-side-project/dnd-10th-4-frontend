import React from 'react';
import styles from './styles';

interface DescriptionProps {
  children: React.ReactNode;
}

const Description = ({ children, ...props }: DescriptionProps) => {
  return (
    <div css={styles.description} {...props}>
      {children}
    </div>
  );
};

export default Description;
