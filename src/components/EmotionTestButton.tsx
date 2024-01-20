import React from 'react';
import styles from './EmotionTestButton.style';

interface EmotionTestButtonProps
  extends React.ComponentPropsWithoutRef<'button'> {
  /** 버튼 안에 들어갈 내용을 지정합니다. */
  children?: React.ReactNode;
  /** 버튼에 들어갈 패딩의 크기를 지정합니다. */
  size?: 'small' | 'medium' | 'large';
}

/** TODO: emotion 테스트용 컴포넌트입니다. 추후에 삭제해도 좋습니다. */
const EmotionTestButton = ({
  children,
  size = 'medium',
  ...props
}: EmotionTestButtonProps) => {
  return (
    <button {...props} css={styles.button(size)}>
      {children}
    </button>
  );
};

export default EmotionTestButton;
