import Polaroid from '@/components/Polaroid';
import Modal from '@/components/Modal';
import useBoolean from '@/hooks/useBoolean';
import Header from '@/components/Header';
import { CaretLeft } from '@/assets/icons';
import style from './styles';

interface PolaroidModalProps {
  /** 폴라로이드 이미지 입니다. */
  img: string;
  /** 폴라로이드 top 위치 입니다. */
  topPosition?: number;
  /** 폴라로이드 left 위치 입니다. */
  leftPosition?: number;
  /** 폴라로이드 헤더의 오른쪽 내용 입니다. */
  headerRightContent?: React.ReactNode;
  /** 폴라로이드 모달 하단 버튼 입니다. */
  children?: React.ReactNode;
}

const PolaroidModal = ({
  img,
  topPosition,
  leftPosition,
  headerRightContent,
  children,
}: PolaroidModalProps) => {
  const { value: isOpen, on: open, off: close } = useBoolean(false);

  return (
    <div>
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
            <CaretLeft
              css={style.icon}
              strokeWidth={2.5}
              color="white"
              onClick={close}
            />
          }
          rightContent={headerRightContent}
        />
        <div css={style.modalContainer}>
          <Polaroid imgUrl={img} size="lg" />
          <div onClick={close}>{children}</div>
        </div>
      </Modal>
    </div>
  );
};

export default PolaroidModal;
