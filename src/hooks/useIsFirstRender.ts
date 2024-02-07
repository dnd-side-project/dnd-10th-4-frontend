import { useRef } from 'react';

/** 최초 렌더링인지의 여부를 확인합니다. */
export function useIsFirstRender() {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;

    return true;
  }

  return isFirst.current;
}
