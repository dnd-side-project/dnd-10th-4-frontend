import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DownArrow from '@/assets/icons/DownArrow';
import { formatDate } from '@/utils/dateUtils';
import useCheckTextLines from '@/hooks/useCheckTextLines';
import style, { letterAccordionType } from './styles';

interface LetterAccordionProps {
  /** LetterAccordion 컴포넌트의 id 값 입니다. */
  id: string;
  /** LetterAccordion 컴포넌트에 들어갈 편지 내용입니다. */
  text: string;
  /** LetterAccordion 컴포넌트에 들어갈 날짜 입니다. */
  date: Date;
  /** LetterAccordion 컴포넌트의 표시될 줄 개수 입니다. */
  line?: number;
  /** LetterAccordion 컴포넌트의 타입 입니다. (보관함/편지 보내기) */
  type?: letterAccordionType;
  /** LetterAccordion 컴포넌트에 들어가는 사진 URL 입니다. */
  imgUrl?: string;
}

const LetterAccordion = ({
  id,
  text,
  date,
  line = 3,
  type = 'inbox',
  imgUrl = '',
  ...props
}: LetterAccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const [showButton, currentLine] = useCheckTextLines(
    textContainerRef,
    text,
    line,
  );

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div css={style.container} id={id}>
      <LetterContent
        isOpen={isOpen}
        text={text}
        imgUrl={imgUrl}
        type={type}
        line={line}
        textContainerRef={textContainerRef}
        currentLine={currentLine}
        {...props}
      />
      <p css={style.date(type)}>
        {formatDate(date)}
        {type === 'inbox' && '에 받은 편지'}
      </p>
      {showButton && (
        <LetterBottom isOpen={isOpen} toggleAccordion={toggleAccordion} />
      )}
    </div>
  );
};

interface LetterContentProps {
  isOpen: boolean;
  text: string;
  imgUrl?: string;
  type: letterAccordionType;
  line: number;
  textContainerRef: React.RefObject<HTMLDivElement>;
  currentLine: number;
}

const LetterContent = ({
  isOpen,
  text,
  imgUrl,
  type,
  line,
  textContainerRef,
  currentLine,
  ...props
}: LetterContentProps) => {
  const variants = {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: 0 },
  };

  return (
    <div css={style.contentText(isOpen, line, currentLine, imgUrl)}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={variants}
            transition={{
              opacity: { duration: 1 },
              height: { duration: 1 },
            }}
          >
            <div ref={textContainerRef} css={style.openText}>
              {text}
            </div>
            {type !== 'inbox' && imgUrl && (
              <img
                {...props}
                css={style.img(currentLine)}
                src={imgUrl}
                alt="편지와 함께 보낸 이미지"
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
      {!isOpen && (
        <div ref={textContainerRef} css={style.originalText(line)}>
          {text}
        </div>
      )}
    </div>
  );
};

interface LetterBottomProps {
  isOpen: boolean;
  toggleAccordion: () => void;
}

const LetterBottom = ({ isOpen, toggleAccordion }: LetterBottomProps) => {
  return (
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
  );
};

export default LetterAccordion;