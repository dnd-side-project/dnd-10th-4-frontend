import { createContext, useContext } from 'react';

const TooltipContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
} | null>(null);

export const TooltipProvider = TooltipContext.Provider;

export const useTooltipContext = () => {
  const context = useContext(TooltipContext);

  if (!context) {
    throw new Error('useTooltipContext must be used within a TooltipProvider');
  }

  return context;
};
