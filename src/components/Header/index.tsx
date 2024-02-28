import React from 'react';
import styles, { type HeaderVariant } from './style';
import Left from './components/Left';
import Center from './components/Center';
import Right from './components/Right';

interface HeaderProps {
  /** 배경색과 테마를 결정합니다. */
  variant?: HeaderVariant;
  /** Header 컴포넌트가 그려낼 하위 컴포넌트입니다. (Left, Center, Right 합성 컴포넌트 사용 권장) */
  children?: React.ReactNode;
}

const Header = ({ variant = 'none', children }: HeaderProps) => {
  return <header css={styles.header(variant)}>{children}</header>;
};

Header.Left = Left;
Header.Center = Center;
Header.Right = Right;

export default Header;
