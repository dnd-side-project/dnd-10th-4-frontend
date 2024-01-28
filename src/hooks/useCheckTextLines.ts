import { useState, useEffect, useCallback, RefObject } from 'react';

const useCheckTextLines = (
  textContainerRef: RefObject<HTMLDivElement>,
  text: string,
  line: number,
): [boolean, number] => {
  const [showButton, setShowButton] = useState(false);
  const [currentLineCount, setCurrentLineCount] = useState(0);

  const checkTextLines = useCallback(() => {
    if (textContainerRef.current) {
      const element = textContainerRef.current;
      const lineHeight = parseFloat(
        window.getComputedStyle(element).lineHeight,
      );

      const lines = Math.round(element.scrollHeight / lineHeight + 0.09);
      setCurrentLineCount(lines);
      setShowButton(lines > line);
    }
  }, [textContainerRef, line]);

  useEffect(() => {
    if (textContainerRef.current) {
      checkTextLines();
      window.addEventListener('resize', checkTextLines);
      return () => window.removeEventListener('resize', checkTextLines);
    }
  }, [text, textContainerRef, checkTextLines]);

  console.log(currentLineCount);
  return [showButton, currentLineCount + 0.5];
};

export default useCheckTextLines;
