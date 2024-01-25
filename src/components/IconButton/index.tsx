import React from 'react';
import style, { ButtonVariant } from './styles';

interface IconButtonProps extends React.ComponentProps<'button'> {
  /** 아이콘의 색상 입니다. */
  variant?: ButtonVariant;
  /** IconButton 컴포넌트 안에 들어갈 아이콘입니다. */
  children: React.ReactNode;
}

const IconButton = ({
  variant = 'header',
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button {...props} css={style.button(variant)}>
      {children}
    </button>
  );
};

export default IconButton;
