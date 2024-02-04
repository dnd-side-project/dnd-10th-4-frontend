import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import Polaroid from '@/components/Polaroid';
import Modal from '@/components/Modal';
import useModal from '@/hooks/useModal';
import Button from '@/components/Button';

const PolaroidImage = () => {
  const { setValue, watch } = useFormContext();

  const modal = useModal();
  const { open, close } = modal;

  return (
    <>
      <Polaroid
        onClick={open}
        topPosition={5.5}
        leftPosition={1}
        cancelButton={true}
        onClickCancel={() => setValue('image', undefined)}
        imgUrl={URL.createObjectURL(watch('image'))}
      />
      <Modal {...modal}>
        <div css={style.modalContainer}>
          <Polaroid imgUrl={URL.createObjectURL(watch('image'))} size="lg" />
          <div onClick={close}>
            <Button variant="secondary" size="sm">
              닫기
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PolaroidImage;

const style = {
  modalContainer: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    margin-inline: 1rem;
    margin-top: 3rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    button {
      padding-inline: 40px;
    }
  `,
};
