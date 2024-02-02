import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as T from '@radix-ui/react-tooltip';
import useTimeout from '@/hooks/useTimeout';
import textStyles from '@/styles/textStyles';
import styles from './styles';

interface TooltipProps {
  /** 툴팁의 위치를 지정합니다. */
  side?: 'left' | 'top' | 'right' | 'bottom';
  /** 화살표 모양의 위치를 지정합니다. */
  align?: 'start' | 'center' | 'end';
  /** 마운트시 최초로 툴팁을 보여줄 시간을 지정합니다. */
  delay?: number;
  /** 툴팁을 보여줄 트리거 컨텐츠를 지정합니다. */
  triggerContent: React.ReactNode;
  /** 툴팁 내용을 지정합니다. */
  children?: React.ReactNode;
}

/** 마우스를 hover할 때 툴팁 컨텐츠를 보여주는 컴포넌트입니다. */
const Tooltip = ({
  side = 'bottom',
  align = 'center',
  delay = 0,
  triggerContent,
  children,
}: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(delay > 0);

  useTimeout(() => setIsOpen(false), delay);

  return (
    <T.Provider>
      <T.Root open={isOpen} onOpenChange={setIsOpen}>
        <T.Trigger asChild>{triggerContent}</T.Trigger>
        <AnimatePresence>
          {isOpen && (
            <T.Portal forceMount>
              <T.Content
                css={[styles.content, textStyles.c1r]}
                asChild
                sideOffset={5}
                align={align}
                side={side}
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
            </T.Portal>
          )}
        </AnimatePresence>
      </T.Root>
    </T.Provider>
  );
};

export default Tooltip;
