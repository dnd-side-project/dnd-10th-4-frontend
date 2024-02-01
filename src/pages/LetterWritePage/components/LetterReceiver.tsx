import React from 'react';
import BottomSheet from '@/components/BottomSheet';

interface LetterReceiverProps {
  isBottomSheetOpen: boolean;
  toggleBottomSheet: (state: boolean) => () => void;
}

const LetterReceiver = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: LetterReceiverProps) => {
  return (
    <BottomSheet
      open={isBottomSheetOpen}
      onClose={toggleBottomSheet(false)}
      onOpen={toggleBottomSheet(true)}
    >
      <div>
        <p>누구에게 보낼까요</p>
        <div>
          <p>나이</p>
        </div>
        <div>
          <p>성별</p>
        </div>
        <div>
          <p>고민</p>
        </div>
      </div>
    </BottomSheet>
  );
};

export default LetterReceiver;
