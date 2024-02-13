import React, { forwardRef } from 'react';
import style, { type ButtonVariant, type ButtonRounded } from './styles';

interface IconButtonProps extends React.ComponentProps<'button'> {
  /** 아이콘의 색상 입니다. */
  variant?: ButtonVariant;
  /** IconButton 컴포넌트 안에 들어갈 아이콘입니다. */
  children: React.ReactNode;
  /** 버튼의 모서리의 둥근 정도를 지정합니다. */
  rounded?: ButtonRounded;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'header', rounded = 'r100', children, ...props }, ref) => {
    return (
      <button {...props} ref={ref} css={style.button(variant, rounded)}>
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';

export default IconButton;
export { style as iconButtonStyles };
