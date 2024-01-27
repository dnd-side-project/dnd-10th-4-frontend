import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DownArrow from '@/assets/icons/downArrow.svg?react';
import formatDate from '@/utils/dateUtils';
import useCheckTextLines from '@/hooks/useCheckTextLines';
import style from './styles';

interface AccordionProps {
  /** Accordion 컴포넌트의 id 값 입니다. */
  id: string;
  /** Accordion 컴포넌트에 들어갈 편지 내용입니다. */
  text: string;
  /** Accordion 컴포넌트에 들어갈 날짜 입니다. */
  date: Date;
}

const Accordion = ({ id, text, date }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const showButton = useCheckTextLines(textContainerRef, text);

  const toggleAccordion = () => setIsOpen(!isOpen);

  const variants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <div css={style.container} id={id}>
      <div css={style.contentText}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={variants}
              transition={{
                opacity: { duration: 1.5 },
                height: { duration: 0.5 },
              }}
            >
              <div>{text}</div>
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <div ref={textContainerRef} css={style.originalText}>
            {text}
          </div>
        )}
      </div>
      <p css={style.date}>{formatDate(date)}</p>
      {showButton && (
        <div css={style.bottom}>
          <div css={style.line} />
          <div
            role="button"
            aria-expanded={isOpen}
            onClick={toggleAccordion}
            css={style.button}
          >
            {isOpen ? '접기' : '펼치기'}
            <DownArrow css={style.arrow(isOpen)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;