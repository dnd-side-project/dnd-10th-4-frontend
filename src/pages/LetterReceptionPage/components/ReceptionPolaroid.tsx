import { css } from '@emotion/react';
import Polaroid from '@/components/Polaroid';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import Button from '@/components/Button';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';

const ReceptionPolaroid = () => {
  const imgUrl =
    'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg';

  const { value: isOpen, on: open, off: close } = useBoolean(false);

  return (
    <>
      <Polaroid
        onClick={open}
        topPosition={5.5}
        leftPosition={1}
        imgUrl={imgUrl}
      />
      <Modal close={close} isOpen={isOpen}>
        <Header
          css={style.modalHeader}
          leftContent={
            <CaretLeft strokeWidth={2.5} color="white" onClick={close} />
          }
        />
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

export default ReceptionPolaroid;

const style = {
  modalHeader: css`
    margin-block: 0.5rem;
  `,
  modalContainer: css`
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    align-items: center;
    margin-inline: 1rem;

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
