import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CaretDown from '@/assets/icons/CaretDown';
import { formatDate } from '@/utils/dateUtils';
import LetterHeader from '../LetterHeader';
import style, { letterAccordionType } from './styles';

interface LetterAccordionProps {
  /** LetterAccordion 컴포넌트의 id 값 입니다. */
  id: string;
  /** LetterAccordion 컴포넌트에 들어갈 편지 내용입니다. */
  text: string;
  /** LetterAccordion 컴포넌트에 들어갈 날짜 입니다. */
  date: Date;
  /** LetterAccordion 컴포넌트에 들어갈 닉네임 입니다. */
  nickname: string;
  /** LetterAccordion 컴포넌트의 표시될 줄 개수 입니다. */
  line?: number;
  /** LetterAccordion 컴포넌트의 타입 입니다. (보관함/편지 보내기) */
  type?: letterAccordionType;
  /** LetterAccordion 컴포넌트의 open 여부 입니다. */
  isOpen?: boolean;
  /** LetterAccordion 컴포넌트의 onToggle 함수입니다. */
  onToggle?: () => void;
}

const LetterAccordion = ({
  id,
  text,
  date,
  nickname,
  line = 3,
  type = 'inbox',
  isOpen = false,
  onToggle = () => {},
  ...props
}: LetterAccordionProps) => {
  const textContainerRef = useRef<HTMLDivElement>(null);
  const toggleAccordion = onToggle;

  return (
    <div css={style.container} id={id}>
      <LetterContent
        isOpen={isOpen}
        text={text}
        line={line}
        textContainerRef={textContainerRef}
        date={date}
        type={type}
        nickname={nickname}
        {...props}
      />
      <LetterBottom isOpen={isOpen} toggleAccordion={toggleAccordion} />
    </div>
  );
};

interface LetterContentProps {
  isOpen: boolean;
  text: string;
  imgUrl?: string;
  line: number;
  textContainerRef: React.RefObject<HTMLDivElement>;
  date: Date;
  type?: letterAccordionType;
  nickname: string;
}

const LetterContent = ({
  isOpen,
  text,
  line,
  textContainerRef,
  date,
  type = 'inbox',
  nickname,
  ...props
}: LetterContentProps) => {
  const variants = {
    open: { height: 'auto' },
    collapsed: { height: 0 },
  };

  return (
    <div>
      <div css={style.contentText(isOpen, line)} {...props}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial="collapsed"
              animate="open"
              exit="collapsed"
              variants={variants}
              transition={{
                height: { duration: 1 },
              }}
            >
              <div ref={textContainerRef} css={style.openText}>
                {text}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {!isOpen && (
          <div ref={textContainerRef} css={style.originalText(line)}>
            {text}
          </div>
        )}
      </div>
      {isOpen && (
        <div css={style.info}>
          <p css={style.date(type)}>
            {formatDate(date)}
            {type === 'inbox' && '에 받은 편지'}
          </p>
          <LetterHeader
            title="From"
            titlePosition="right"
            nickname={nickname}
          />
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
        <CaretDown css={style.arrow(isOpen)} />
      </div>
    </div>
  );
};

export default LetterAccordion;
