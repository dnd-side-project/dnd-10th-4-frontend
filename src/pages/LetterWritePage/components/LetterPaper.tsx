import { useFormContext } from 'react-hook-form';
import { ChangeEvent } from 'react';
import LetterCard from '@/components/LetterCard';
import { formatDate } from '@/utils/dateUtils';
import Polaroid from '@/components/Polaroid';
import style from '../styles';
import { BottomSheetProps } from './LetterWriteContent';
import { LetterReceiverContainer } from '.';

const LetterPaper = ({
  isBottomSheetOpen,
  toggleBottomSheet,
}: BottomSheetProps) => {
  const { register, setValue, watch } = useFormContext();
  const MAX_CONTENT = 300;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= MAX_CONTENT) {
      setValue('content', inputValue);
    } else {
      setValue('content', inputValue.slice(0, MAX_CONTENT - 1));
    }
  };

  return (
    <LetterCard isOpen={true}>
      <LetterReceiverContainer
        onClick={toggleBottomSheet(true)}
        isOpen={isBottomSheetOpen}
      />
      <textarea
        {...register('content')}
        name="content"
        rows={15}
        autoFocus
        placeholder="하고싶은 이야기를 적어보세요."
        css={style.textarea}
        onChange={handleChange}
      />
      <div css={style.textCount}>
        <span>{watch('content').length}</span>
        <span>&nbsp;/ {MAX_CONTENT}</span>
      </div>
      <div css={style.date}>
        <span>{formatDate(new Date())}</span>
      </div>
      {watch('image') && (
        <Polaroid
          topPosition={5.5}
          leftPosition={1}
          cancelButton={true}
          onClickCancel={() => setValue('image', null)}
          imgUrl={URL.createObjectURL(watch('image'))}
        />
      )}
    </LetterCard>
  );
};

export default LetterPaper;
