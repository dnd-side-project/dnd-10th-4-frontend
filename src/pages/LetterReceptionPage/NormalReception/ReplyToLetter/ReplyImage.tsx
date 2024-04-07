import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import Button from '@/components/Button';
import { TrashCan } from '@/assets/icons';
import ImageUploadButton from '@/components/ImageUploadButton';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import { type ReplyInputs } from '..';

const ReplyImage = () => {
  const { value, on, off } = useBoolean(false);
  const { watch, setValue } = useFormContext<ReplyInputs>();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    setValue('image', file);
  };

  const handleDeleteImage = () => {
    off();
    setValue('image', undefined);
    toast.error('사진이 삭제됐어요', {
      autoClose: 1500,
      position: 'bottom-center',
    });
  };

  return (
    <>
      {watch('image') ? (
        <PolaroidModal
          leftPosition={1.2}
          img={URL.createObjectURL(watch('image')[0])}
          headerRightContent={
            <IconButton onClick={on}>
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
          leftPosition={1.2}
          onChangeImage={handleFileChange}
        />
      )}
      <BottomSheet open={value} onOpen={on} onClose={off}>
        <BottomSheet.Title>사진을 삭제할까요?</BottomSheet.Title>
        <BottomSheet.Description>
          첨부한 사진을 삭제할까요?
        </BottomSheet.Description>
        <BottomSheet.ButtonSection>
          <Button variant="cancel" onClick={off}>
            취소
          </Button>
          <Button variant="danger" onClick={handleDeleteImage}>
            삭제하기
          </Button>
        </BottomSheet.ButtonSection>
      </BottomSheet>
    </>
  );
};

export default ReplyImage;
