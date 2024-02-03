import { createContext, useContext } from 'react';

/** Funnel을 조작하는 핸들러를 하위 트리에 공유할 수 있는 Context입니다. */
const FunnelContext = createContext({
  toNext: () => {},
  toPrev: () => {},
  toFirst: () => {},
  toLast: () => {},
});

export const FunnelProvider = FunnelContext.Provider;
export const useFunnelContext = () => useContext(FunnelContext);
