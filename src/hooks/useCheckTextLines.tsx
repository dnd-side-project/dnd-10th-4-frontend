import { useState, useEffect, useCallback, RefObject } from 'react';

const useCheckTextLines = (
  textContainerRef: RefObject<HTMLDivElement>,
  text: string,
): boolean => {
  const [showButton, setShowButton] = useState(false);

  const checkTextLines = useCallback(() => {
    if (textContainerRef.current) {
      const element = textContainerRef.current;
      const lineHeight = parseFloat(
        window.getComputedStyle(element).lineHeight,
      );
      const lines = element.scrollHeight / lineHeight;
      setShowButton(lines > 3.5);
    }
  }, [textContainerRef]);

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
