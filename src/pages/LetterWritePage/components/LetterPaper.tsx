import { useFormContext } from 'react-hook-form';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterCard from '@/components/LetterCard';
import { type WriteInputs } from '..';
import { BottomSheetProps } from './LetterWriteContent';
import {
  LetterReceiverContainer,
  LetterContent,
  PolaroidImage,
  ImageSelect,
} from '.';

const LetterPaper = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const { watch } = useFormContext<WriteInputs>();

  return (
    <LetterCard isOpen={true}>
      <LetterReceiverContainer
        onClick={toggleBottomSheet(true)}
        isOpen={isBottomSheetOpen}
      />
      <LetterContent />
      <LetterLengthDate letterLength={watch('content').length} />
      {watch('image') ? <PolaroidImage /> : <ImageSelect />}
    </LetterCard>
  );
};

export default LetterPaper;
