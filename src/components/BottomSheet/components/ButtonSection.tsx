import React from 'react';
import styles from './styles';

interface ButtonSectionProps {
  children: React.ReactNode;
}

const ButtonSection = ({ children }: ButtonSectionProps) => {
  return <section css={styles.buttonSection}>{children}</section>;
};

export default ButtonSection;
