import React from 'react';
import { type SerializedStyles } from '@emotion/react';
import styles, { HeaderVariant } from './style';

interface HeaderProps {
  /** Header 컴포넌트에 전달될 클래스 이름입니다. */
  className?: string;
  /** 배경색과 테마를 결정합니다. */
  variant?: HeaderVariant;
  /** 왼쪽 영역에 들어갈 내용입니다. */
  left?: React.ReactNode;
  /** 왼쪽 영역에 들어갈 내용에 적용할 스타일입니다. */
  leftStyle?: SerializedStyles;
  /** 중앙 영역에 들어갈 내용입니다. */
  center?: React.ReactNode;
  /** 중앙 영역에 들어갈 내용에 적용할 스타일입니다. */
  centerStyle?: SerializedStyles;
  /** 오른쪽 영역에 들어갈 내용입니다. */
  right?: React.ReactNode;
  /** 오른쪽 영역에 들어갈 내용에 적용할 스타일입니다. */
  rightStyle?: SerializedStyles;
}

const Header = ({
  className,
  variant = 'none',
  left,
  leftStyle,
  center,
  centerStyle,
  right,
  rightStyle,
}: HeaderProps) => {
  return (
    <header className={className} css={styles.header(variant)}>
      <div css={[styles.left, leftStyle]}>{left}</div>
      <div css={[styles.center, centerStyle]}>{center}</div>
      <div css={[styles.right, rightStyle]}>{right}</div>
    </header>
  );
};

export default Header;
