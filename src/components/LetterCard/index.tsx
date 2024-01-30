import React from 'react';
import style from './styles';

interface CardProps {
  isOpen?: boolean;
  children: React.ReactNode;
}

const LetterCard = ({ isOpen = false, children }: CardProps) => {
  return <div css={style.card(isOpen)}>{children}</div>;
};

export default LetterCard;
