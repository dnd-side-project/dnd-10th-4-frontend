import { createContext, useContext } from 'react';

const TooltipContext = createContext<{
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}>({
  isOpen: false,
  setIsOpen: () => {},
});

export const TooltipProvider = TooltipContext.Provider;
export const useTooltipContext = () => useContext(TooltipContext);
