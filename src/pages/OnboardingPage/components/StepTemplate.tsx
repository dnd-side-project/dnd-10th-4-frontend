import React from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

interface StepTemplateProps {
  children: React.ReactNode;
  buttonContent?: React.ReactNode;
}

const StepTemplate = ({ children, buttonContent }: StepTemplateProps) => {
  return (
    <>
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        css={styles.main}
      >
        {children}
      </motion.main>
      <section css={styles.buttonSection}>{buttonContent}</section>
    </>
  );
};

export default StepTemplate;

const styles = {
  main: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 10rem;
    padding: 0.5rem;
    word-break: keep-all;
  `,
  buttonSection: css`
    width: 100%;
    max-width: 12.5rem;
    margin-bottom: 1.25rem;

    button {
      width: 100%;
    }
  `,
};
