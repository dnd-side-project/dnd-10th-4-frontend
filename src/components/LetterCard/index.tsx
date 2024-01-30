import React from 'react';
import style, { Backgroundtype } from './styles';
interface CardProps {
  /** Card의 펼쳐진 상태입니다. */
  isOpen?: boolean;
  /** Card의 배경입니다. */
  background?: Backgroundtype;
  /** Card 안에 들어갈 내용입니다. */
  children?: React.ReactNode;
}

const LetterCard = ({
  isOpen = false,
  background = 'primary',
  children,
  ...props
}: CardProps) => {
  return (
    <div css={style.card(isOpen, background)} {...props}>
      {children}
    </div>
  );
};

export default LetterCard;
