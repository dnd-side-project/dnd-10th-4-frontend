import React from 'react';
import { motion } from 'framer-motion';

interface StorageContentProps {
  children: React.ReactNode;
}

const StorageContent = ({ children }: StorageContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};

export default StorageContent;
