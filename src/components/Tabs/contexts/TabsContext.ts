import { createContext, useContext } from 'react';
import { type TabsVariant } from '../styles';

const TabsContext = createContext<{
  variant: TabsVariant;
} | null>(null);

export const TabsProvider = TabsContext.Provider;

export const useTabsContext = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('useTabsContext must be used within a TabsProvider');
  }

  return context;
};
