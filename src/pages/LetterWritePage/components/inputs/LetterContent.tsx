import { useFormContext } from 'react-hook-form';
import LetterTextarea from '@/components/LetterTextarea';
import { type Inputs } from '../..';

const LetterContent = () => {
  const { register } = useFormContext<Inputs>();

  return (
    <LetterTextarea
      {...register('content')}
      name="content"
      placeholder="하고싶은 이야기를 적어보세요."
    />
  );
};
export default LetterContent;
