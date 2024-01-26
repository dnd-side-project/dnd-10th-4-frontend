import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useModal from '@/hooks/useModal';
import styles from './styles';

interface ModalProps extends ReturnType<typeof useModal> {
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
