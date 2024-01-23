import React, { forwardRef } from 'react';
import styles, { type ButtonVariant } from './styles';

interface ButtonProps extends React.ComponentProps<'button'> {
  /** 버튼의 배경 색상과 폰트 색상을 지정합니다. */
  variant?: ButtonVariant;
  /** 버튼의 내용을 지정합니다. */
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', children, ...props }, ref) => {
    return (
      <button css={styles.button(variant)} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
export { default as buttonStyles } from './styles';
