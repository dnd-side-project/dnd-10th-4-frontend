import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import Polaroid from '@/components/Polaroid';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import { Inputs } from '..';

const PolaroidImage = () => {
  const { setValue, watch } = useFormContext<Inputs>();
  const imgUrl = URL.createObjectURL(watch('image')[0]);

  const { value: isOpen, on: open, off: close } = useBoolean(false);

  return (
    <>
      <Polaroid
        onClick={open}
        topPosition={5.5}
        leftPosition={1}
        cancelButton={true}
        onClickCancel={() => setValue('image', undefined)}
        imgUrl={imgUrl}
      />
      <Modal close={close} isOpen={isOpen}>
        <div css={style.modalContainer}>
          <Polaroid imgUrl={imgUrl} size="lg" />
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
    gap: 1.25rem;
    justify-content: center;
    align-items: center;
    margin-inline: 1rem;
    margin-top: 15vh;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }

    button {
      padding-inline: 3.75rem;
    }
  `,
};
