import { createContext, useContext } from 'react';

const FunnelContext = createContext({
  toNext: () => {},
  toPrev: () => {},
  toLast: () => {},
});

export const FunnelProvider = FunnelContext.Provider;
export const useFunnelContext = () => useContext(FunnelContext);
