import { useState } from 'react';
import { LetterPaper, LetterReceiverSelect } from '.';

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
      <LetterReceiverSelect
        isBottomSheetOpen={isBottomSheetOpen}
        toggleBottomSheet={toggleBottomSheet}
      />
    </>
  );
};

export default LetterWriteContent;
