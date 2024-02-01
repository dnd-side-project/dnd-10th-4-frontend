import React from 'react';
import { css } from '@emotion/react';
import Navbar from '@/components/Navbar';
import Button, { buttonStyles } from '@/components/Button';
import { ImageSquare } from '@/assets/icons';

const styles = {
  navbar: css`
    padding-inline: 0;
  `,
  iconContainer: css`
    flex-grow: 0;
    margin-left: 0.75rem;
    padding: 0.5rem 0.75rem;
    border-radius: 0.5rem;
  `,
};

const LetterWriteBottom = () => {
  return (
    <Navbar css={styles.navbar}>
      <Button variant="secondary" size="sm">
        뒤로
      </Button>
      <Button variant="primary" size="sm">
        답장 보내기
      </Button>
      <button
        css={[buttonStyles.button('semi-transparent'), styles.iconContainer]}
      >
        <ImageSquare />
      </button>
    </Navbar>
  );
};

export default LetterWriteBottom;
