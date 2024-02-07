import { useEffect, useRef } from 'react';

/** delay만큼 기다렸다가 callback을 실행하는 훅입니다. */
const useTimeout = (callback: VoidFunction, delay: number) => {
  const callbackRef = useRef(callback);

  // 마지막 callback을 저장
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // delay 후에 callback 실행
  useEffect(() => {
    const timer = setTimeout(callbackRef.current, delay);
    return () => clearTimeout(timer);
  }, [delay]);
};

export default useTimeout;
