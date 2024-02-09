import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

interface LetterContentProps {
  children: ReactNode;
  isBlock?: boolean;
}

const LetterContent = ({ children, isBlock = false }: LetterContentProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      css={style.content(isBlock)}
    >
      {children}
    </motion.div>
  );
};

export default LetterContent;

const style = {
  content: (isBlock: boolean) => css`
    display: ${isBlock ? 'block' : 'flex'};
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-inline: 0.5rem;
  `,
};
