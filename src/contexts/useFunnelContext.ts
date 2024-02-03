import { createContext, useContext } from 'react';

const FunnelContext = createContext({
  toNext: () => {},
  toPrev: () => {},
  toFirst: () => {},
  toLast: () => {},
});

export const FunnelProvider = FunnelContext.Provider;
export const useFunnelContext = () => useContext(FunnelContext);
