import React from 'react';
import { type SerializedStyles } from '@emotion/react';
import styles, { HeaderVariant } from './style';

interface HeaderProps {
  /** Header 컴포넌트에 전달될 클래스 이름입니다. */
  className?: string;
  /** 배경색과 테마를 결정합니다. */
  variant?: HeaderVariant;
  /** 왼쪽 영역에 들어갈 내용입니다. */
  leftContent?: React.ReactNode;
  /** 왼쪽 영역에 적용할 스타일입니다. */
  leftStyle?: SerializedStyles;
  /** 중앙 영역에 들어갈 내용입니다. */
  centerContent?: React.ReactNode;
  /** 중앙 영역에 적용할 스타일입니다. */
  centerStyle?: SerializedStyles;
  /** 오른쪽 영역에 들어갈 내용입니다. */
  rightContent?: React.ReactNode;
  /** 오른쪽 영역에 적용할 스타일입니다. */
  rightStyle?: SerializedStyles;
}

const Header = ({
  className,
  variant = 'none',
  leftContent,
  leftStyle,
  centerContent,
  centerStyle,
  rightContent,
  rightStyle,
}: HeaderProps) => {
  return (
    <header className={className} css={styles.header(variant)}>
      <div css={[styles.left, leftStyle]}>{leftContent}</div>
      <div css={[styles.center, centerStyle]}>{centerContent}</div>
      <div css={[styles.right, rightStyle]}>{rightContent}</div>
    </header>
  );
};

export default Header;
