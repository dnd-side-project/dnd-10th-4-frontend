// TODO: emotion 테스트용 컴포넌트입니다. 추후에 삭제해도 좋습니다.

import React from 'react';
import { css } from '@emotion/react';
import clsx from 'clsx';

interface EmotionTestButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const EmotionTestButton = ({
  children,
  size,
  ...props
}: EmotionTestButtonProps) => {
  return (
    <button
      {...props}
      css={css({
        color: 'hotpink',
        '&:hover': {
          color: 'blue',
        },
        padding: clsx({
          '1rem': size === 'small',
          '2rem': size === 'medium',
          '3rem': size === 'large',
        }),
      })}
    >
      {children}
    </button>
  );
};

export default EmotionTestButton;
