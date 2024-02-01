import React, { useState } from 'react';
import LetterPaper from './LetterPaper';
import LetterReceiver from './LetterReceiver';

const LetterWriteContent = () => {
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  const toggleBottomSheet = (state: boolean) => () => {
    setIsBottomSheetOpen(state);
  };

  return (
    <>
      <LetterPaper
        isBottomSheetOpen={isBottomSheetOpen}
        toggleBottomSheet={toggleBottomSheet}
      />
      <LetterReceiver
        isBottomSheetOpen={isBottomSheetOpen}
        toggleBottomSheet={toggleBottomSheet}
      />
    </>
  );
};

export default LetterWriteContent;
