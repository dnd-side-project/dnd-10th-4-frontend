import React from 'react';
import styles from './styles';

interface NavbarProps {
  /** 클래스 이름입니다. */
  className?: string;
  /** Navbar에 들어갈 내용입니다. */
  children?: React.ReactNode;
}

/** 화면의 하단에 위치 시킬 컴포넌트입니다.  */
const Navbar = ({ className, children }: NavbarProps) => {
  return (
    <nav className={className} css={styles.navbar}>
      {children}
    </nav>
  );
};

export default Navbar;
