import React from 'react';
import styles from './styles';

interface NavbarProps {
  /** Navbar에 들어갈 내용입니다. */
  children?: React.ReactNode;
}

/** 화면의 하단에 위치 시킬 컴포넌트입니다.  */
const Navbar = ({ children, ...props }: NavbarProps) => {
  return (
    <nav css={styles.navbar} {...props}>
      {children}
    </nav>
  );
};

export default Navbar;
