// TODO: emotion 테스트용 컴포넌트입니다. 추후에 삭제해도 좋습니다.

import React from 'react';
import { css } from '@emotion/react';

interface EmotionTestButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

const EmotionTestButton = ({ children, ...props }: EmotionTestButtonProps) => {
  return (
    <button
      {...props}
      css={css({
        color: 'hotpink',
        '&:hover': {
          color: 'blue',
        },
      })}
    >
      {children}
    </button>
  );
};

export default EmotionTestButton;
