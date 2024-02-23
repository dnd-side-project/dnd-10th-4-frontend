import { useFormContext } from 'react-hook-form';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import Button from '@/components/Button';
import { TrashCan } from '@/assets/icons';
import ImageUploadButton from '@/components/ImageUploadButton';
import { ReplyInputs } from '.';

const ReplyImage = () => {
  const { watch, setValue } = useFormContext<ReplyInputs>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setValue('image', file);
  };

  const handleClickTrashCan = () => {
    setValue('image', undefined);
  };

  return (
    <>
      {watch('image') ? (
        <PolaroidModal
          topPosition={5.5}
          leftPosition={1.2}
          img={URL.createObjectURL(watch('image')[0])}
          headerRightContent={
            <IconButton onClick={handleClickTrashCan}>
              <TrashCan fill="white" />
            </IconButton>
          }
        >
          <Button variant="secondary" size="sm">
            닫기
          </Button>
        </PolaroidModal>
      ) : (
        <ImageUploadButton
          topPosition={5.5}
          leftPosition={1.2}
          onChangeImage={handleFileChange}
        />
      )}
    </>
  );
};

export default ReplyImage;
