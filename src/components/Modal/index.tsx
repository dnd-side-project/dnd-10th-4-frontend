import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@emotion/react';
import useModal from '@/hooks/useModal';

const styles = {
  container: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 0.6);
  `,
  content: css`
    max-width: 600px;
    margin: 0 auto;
  `,
};

interface ModalProps extends ReturnType<typeof useModal> {
  children: React.ReactNode;
}

const Modal = ({ isOpen, close, children }: ModalProps) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  return (
    <>
      {isOpen &&
        createPortal(
          <div css={styles.container}>
            <div css={styles.content}>{children}</div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Modal;
