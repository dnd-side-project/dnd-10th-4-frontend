import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import useModal from '@/hooks/useModal';
import styles from './styles';

interface ModalProps extends ReturnType<typeof useModal> {
  /** 모달 컨텐츠 영역에 보여줄 컨텐츠입니다. */
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
