import React, { useEffect, useState } from 'react';
import * as T from '@radix-ui/react-tooltip';
import useTimeout from '@/hooks/useTimeout';
import { TooltipProvider } from './contexts/TooltipContext';
import Trigger from './components/Trigger';
import Content from './components/Content';

interface TooltipProps {
  /** 마운트시 최초로 툴팁을 한 번만 보여주고 싶을 때, sessionStorage에 저장할 키를 지정합니다. (없다면 항시 보여줍니다.) */
  mountKey?: string;
  /** 마운트시 최초로 툴팁을 보여줄 시간을 지정합니다. */
  delay?: number;
  /** Tooltip 컴포넌트 안에 포함될 내용입니다. */
  children?: React.ReactNode;
}

const NewTooltip = ({ mountKey, delay = 0, children }: TooltipProps) => {
  const KEY = `newtooltip-${mountKey}`;

  const [isOpen, setIsOpen] = useState(
    delay <= 0 || sessionStorage.getItem(KEY) ? false : true,
  );

  useEffect(() => {
    if (mountKey) {
      sessionStorage.setItem(KEY, 'true');
    }
  }, []);

  useTimeout(() => {
    setIsOpen(false);
  }, delay);

  return (
    <TooltipProvider value={{ isOpen, setIsOpen }}>
      <T.Provider>
        <T.Root open={isOpen} onOpenChange={setIsOpen}>
          {children}
        </T.Root>
      </T.Provider>
    </TooltipProvider>
  );
};

NewTooltip.Trigger = Trigger;
NewTooltip.Content = Content;

export default NewTooltip;
