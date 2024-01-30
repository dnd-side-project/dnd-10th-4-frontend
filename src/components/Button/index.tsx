import React, { forwardRef } from 'react';
import styles, { type ButtonSize, type ButtonVariant } from './styles';

interface ButtonProps extends React.ComponentProps<'button'> {
  /** 버튼의 배경 색상과 폰트 색상을 지정합니다. */
  variant?: ButtonVariant;
  /** 버튼에 들어갈 패딩의 크기를 지정합니다. */
  size?: ButtonSize;
  /** 버튼의 내용을 지정합니다. */
  children?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button css={styles.button(variant, size)} ref={ref} {...props}>
        {children}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;
export { default as buttonStyles } from './styles';
