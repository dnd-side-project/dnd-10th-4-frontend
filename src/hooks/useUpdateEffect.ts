import { useEffect, type DependencyList, type EffectCallback } from 'react';
import { useIsFirstRender } from './useIsFirstRender';

/** 업데이트시에만 동작하는 Effect 훅입니다. (최초 렌더링에서의 Effect 스킵) */
const useUpdateEffect = (effect: EffectCallback, deps?: DependencyList) => {
  const isFirst = useIsFirstRender();

  useEffect(() => {
    if (!isFirst) {
      return effect();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useUpdateEffect;
