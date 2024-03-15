import React from 'react';
import * as T from '@radix-ui/react-tooltip';
import { motion, AnimatePresence } from 'framer-motion';
import textStyles from '@/styles/textStyles';
import { useTooltipContext } from '../contexts/TooltipContext';
import styles from '../styles';

interface ContentProps {
  /** 툴팁의 배치 위치 */
  side?: 'left' | 'top' | 'right' | 'bottom';
  /** 툴팁의 정렬 위치 */
  align?: 'start' | 'center' | 'end';
  /** 요소에 Portal을 적용해서 body 태그에서 렌더링 할지의 여부 */
  withPortal?: boolean;
  /** 툴팁 안에 들어갈 컨텐츠 */
  children?: React.ReactNode;
}

const WithPortal = ({
  withPortal,
  children,
}: {
  withPortal: boolean;
  children: React.ReactNode;
}) => {
  return withPortal ? <T.Portal forceMount>{children}</T.Portal> : children;
};

/** 툴팁 내부에서 보여줄 컨텐츠를 나타내는 컴포넌트입니다.  */
const Content = ({
  side = 'bottom',
  align = 'center',
  withPortal = true,
  children,
}: ContentProps) => {
  const { isOpen } = useTooltipContext();

  return (
    <AnimatePresence>
      {isOpen && (
        <WithPortal withPortal={withPortal}>
          <T.Content
            css={[styles.content, textStyles.c1r]}
            sideOffset={5}
            align={align}
            side={side}
            asChild
            forceMount
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.1 }}
            >
              {children}
              <T.Arrow css={styles.arrow} />
            </motion.div>
          </T.Content>
        </WithPortal>
      )}
    </AnimatePresence>
  );
};

export default Content;
