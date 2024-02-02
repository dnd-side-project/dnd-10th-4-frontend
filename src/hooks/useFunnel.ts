import { useCallback, useState } from 'react';

const useFunnel = <T extends readonly string[]>(steps: T) => {
  const [step, setStep] = useState<T[number]>(steps[0]);
  const currentIdx = steps.indexOf(step);

  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < steps.length - 1;

  const toPrev = useCallback(() => {
    if (!hasPrev) {
      return;
    }

    setStep(steps[currentIdx - 1]);
  }, [currentIdx, hasPrev, steps]);

  const toNext = useCallback(() => {
    if (!hasNext) {
      return;
    }

    setStep(steps[currentIdx + 1]);
  }, [currentIdx, hasNext, steps]);

  const toFirst = useCallback(() => {
    setStep(steps[0]);
  }, [steps]);

  const toLast = useCallback(() => {
    setStep(steps[steps.length - 1]);
  }, [steps]);

  return { step, setStep, hasPrev, hasNext, toPrev, toNext, toFirst, toLast };
};

export default useFunnel;
