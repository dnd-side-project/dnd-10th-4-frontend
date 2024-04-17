import { useFormContext } from 'react-hook-form';
import { toast } from 'react-toastify';
import Button from '@/components/Button';
import PolaroidModal from '@/components/PolaroidModal';
import IconButton from '@/components/IconButton';
import { TrashCan } from '@/assets/icons';
import BottomSheet from '@/components/BottomSheet';
import useBoolean from '@/hooks/useBoolean';
import { type WriteInputs } from '../..';

const PolaroidImage = () => {
  const { value, on, off } = useBoolean(false);

  const { watch, setValue } = useFormContext<WriteInputs>();
  const imgUrl = URL.createObjectURL(watch('image')[0]);

  const handleDeleteImage = () => {
    off();
    setValue('image', undefined);
    toast.error('사진이 삭제됐어요', {
      position: 'bottom-center',
    });
  };

  return (
    <>
      <PolaroidModal
        img={imgUrl}
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

export default PolaroidImage;
