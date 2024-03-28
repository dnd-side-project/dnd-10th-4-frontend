import React from 'react';
import * as T from '@radix-ui/react-tabs';
import { type TabsVariant } from './styles';
import { TabsProvider } from './contexts/TabsContext';
import List from './components/List';
import Trigger from './components/Trigger';
import Content from './components/Content';

interface TabsProps {
  /** 탭의 배경 색상과 스타일 등 테마를 지정합니다. */
  variant?: TabsVariant;
  /** 기본으로 활성화 되어 있을 탭 아이템의 key를 지정합니다.  */
  defaultValue?: string;
  /** Tabs 컴포넌트 안에 포함될 내용입니다. */
  children?: React.ReactNode;
}

const Tabs = ({ variant = 'primary', defaultValue, children }: TabsProps) => {
  return (
    <TabsProvider value={{ variant }}>
      <T.Root defaultValue={defaultValue}>{children}</T.Root>
    </TabsProvider>
  );
};

Tabs.List = List;
Tabs.Trigger = Trigger;
Tabs.Content = Content;

export default Tabs;
