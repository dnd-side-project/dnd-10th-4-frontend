import { useFormContext } from 'react-hook-form';
import { useSuspenseQuery } from '@tanstack/react-query';
import LetterLengthDate from '@/components/LetterLengthDate';
import LetterCard from '@/components/LetterCard';
import memberOptions from '@/api/member/queryOptions';
import LetterHeader from '@/components/LetterHeader';
import { BottomSheetProps } from '../LetterWriteContent';
import { type WriteInputs } from '../..';
import {
  LetterReceiverContainer,
  LetterContent,
  PolaroidImage,
  ImageSelect,
} from '..';

const LetterPaper = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const { watch } = useFormContext<WriteInputs>();
  const { data: member } = useSuspenseQuery(memberOptions.detail());

  return (
    <LetterCard isOpen={true}>
      <LetterReceiverContainer
        onClick={toggleBottomSheet(true)}
        isOpen={isBottomSheetOpen}
      />
      <LetterContent />
      <LetterLengthDate letterLength={watch('content').length} />
      <LetterHeader
        title="From"
        titlePosition="right"
        nickname={member.nickname ?? '유저'}
      />
      {watch('image') ? <PolaroidImage /> : <ImageSelect />}
    </LetterCard>
  );
};

export default LetterPaper;
