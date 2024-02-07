import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './styles';

interface ModalProps {
  /** 모달이 열려있는지 여부입니다. */
  isOpen: boolean;
  /** 모달을 닫을 때 호출되는 함수입니다. */
  close: () => void;
  /** 모달 컨텐츠 영역에 보여줄 컨텐츠입니다. */
  children: React.ReactNode;
}

const Modal = ({ isOpen, close, children }: ModalProps) => {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        close();
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, close]);

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.aside
          css={styles.container}
          ref={containerRef}
          onClick={(e) => e.target === containerRef.current && close()}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div css={styles.content}>{children}</div>
        </motion.aside>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default Modal;
