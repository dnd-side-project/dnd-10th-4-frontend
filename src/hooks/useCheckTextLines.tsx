import { useState, useEffect, useCallback, RefObject } from 'react';

const useCheckTextLines = (
  textContainerRef: RefObject<HTMLDivElement>,
  text: string,
  line: number,
): boolean => {
  const [showButton, setShowButton] = useState(false);

  const checkTextLines = useCallback(() => {
    if (textContainerRef.current) {
      const element = textContainerRef.current;
      const lineHeight = parseFloat(
        window.getComputedStyle(element).lineHeight,
      );
      const lines = element.scrollHeight / lineHeight;
      setShowButton(lines > line + 0.5);
    }
  }, [textContainerRef, line]);

  useEffect(() => {
    if (textContainerRef.current) {
      checkTextLines();
      window.addEventListener('resize', checkTextLines);
      return () => window.removeEventListener('resize', checkTextLines);
    }
  }, [text, textContainerRef, checkTextLines]);

  return showButton;
};

export default useCheckTextLines;
