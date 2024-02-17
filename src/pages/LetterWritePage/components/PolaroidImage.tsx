import { useFormContext } from 'react-hook-form';
import Button from '@/components/Button';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import { TrashCan } from '@/assets/icons';
import { type WriteInputs } from '..';

const PolaroidImage = () => {
  const { watch, setValue } = useFormContext<WriteInputs>();
  const imgUrl = URL.createObjectURL(watch('image')[0]);

  const onClickTrashCan = () => {
    setValue('image', undefined);
  };

  return (
    <PolaroidModal
      img={imgUrl}
      topPosition={5.2}
      leftPosition={1}
      headerRightContent={
        <IconButton onClick={onClickTrashCan}>
          <TrashCan fill="white" />
        </IconButton>
      }
    >
      <Button variant="secondary" size="sm">
        닫기
      </Button>
    </PolaroidModal>
  );
};

export default PolaroidImage;
