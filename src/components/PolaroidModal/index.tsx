import Polaroid from '@/components/Polaroid';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import style from './styles';

interface PolaroidModalProps {
  /** 폴라로이드 이미지 입니다. */
  img: string;
  topPosition?: number;
  leftPosition?: number;
  children: React.ReactNode;
}

const PolaroidModal = ({
  img,
  topPosition,
  leftPosition,
  children,
}: PolaroidModalProps) => {
  const { value: isOpen, on: open, off: close } = useBoolean(false);

  return (
    <>
      <Polaroid
        onClick={open}
        topPosition={topPosition}
        leftPosition={leftPosition}
        imgUrl={img}
      />
      <Modal close={close} isOpen={isOpen}>
        <Header
          css={style.modalHeader}
          leftContent={
            <CaretLeft strokeWidth={2.5} color="white" onClick={close} />
          }
        />
        <div css={style.modalContainer}>
          <Polaroid imgUrl={img} size="lg" />
          <div onClick={close}>{children}</div>
        </div>
      </Modal>
    </>
  );
};

export default PolaroidModal;
