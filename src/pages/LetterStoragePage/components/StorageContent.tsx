import React from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';
interface StorageContentProps {
  children: React.ReactNode;
}

const StorageContent = ({ children }: StorageContentProps) => {
  return (
    <motion.div
      css={style.container}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default StorageContent;

const style = {
  container: css`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  `,
};
