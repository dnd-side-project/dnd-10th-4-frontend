import { useFormContext } from 'react-hook-form';
import Button from '@/components/Button';
import PolaroidModal from '@/components/PolaroidModal';
import { type WriteInputs } from '..';

const PolaroidImage = () => {
  const { watch } = useFormContext<WriteInputs>();
  const imgUrl = URL.createObjectURL(watch('image')[0]);

  return (
    <PolaroidModal img={imgUrl} topPosition={4.5} leftPosition={1}>
      <Button variant="secondary" size="sm">
        닫기
      </Button>
    </PolaroidModal>
  );
};

export default PolaroidImage;
