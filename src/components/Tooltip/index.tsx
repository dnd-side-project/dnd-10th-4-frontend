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

/** 마우스를 hover할 때 툴팁 컨텐츠를 보여주는 컴포넌트입니다. */
const Tooltip = ({ mountKey, delay = 0, children }: TooltipProps) => {
  const KEY = `tooltip-${mountKey}`;

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

Tooltip.Trigger = Trigger;
Tooltip.Content = Content;

export default Tooltip;
