import React from 'react';
import * as T from '@radix-ui/react-tabs';
import styles, { type TabsVariant } from './styles';

interface TabsProps {
  /** 탭의 배경 색상과 스타일 등 테마를 지정합니다. */
  variant?: TabsVariant;
  /** 기본으로 활성화 되어 있을 탭 아이템의 key를 지정합니다.  */
  defaultValue?: string;
  /** 탭 아이템의 목록을 지정합니다. */
  tabItems: {
    key: string;
    label: React.ReactNode;
    content: React.ReactNode;
  }[];
}

const Tabs = ({ variant = 'primary', defaultValue, tabItems }: TabsProps) => {
  defaultValue = defaultValue ?? tabItems[0].key;

  return (
    <T.Root defaultValue={defaultValue}>
      <T.List css={styles.list(variant)} aria-label="Tabs">
        {tabItems.map((tabItem) => (
          <T.Trigger
            css={styles.trigger(variant)}
            key={tabItem.key}
            value={tabItem.key}
          >
            {tabItem.label}
          </T.Trigger>
        ))}
      </T.List>

      {tabItems.map((tabItem) => (
        <T.Content key={tabItem.key} value={tabItem.key}>
          {tabItem.content}
        </T.Content>
      ))}
    </T.Root>
  );
};

export default Tabs;
export { default as tabsStyles } from './styles';
