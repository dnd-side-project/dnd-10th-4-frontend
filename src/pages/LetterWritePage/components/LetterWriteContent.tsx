import { useState } from 'react';
import { LetterPaper, LetterReceiverBottomSheet } from '.';

export interface BottomSheetProps {
  isBottomSheetOpen: boolean;
  toggleBottomSheet: (state: boolean) => () => void;
}

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
      <LetterReceiverBottomSheet
        isBottomSheetOpen={isBottomSheetOpen}
        toggleBottomSheet={toggleBottomSheet}
      />
    </>
  );
};

export default LetterWriteContent;
