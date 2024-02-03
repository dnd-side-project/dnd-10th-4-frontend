import { Close } from '@/assets/icons';
import style from './styles';

interface PolaroidProps {
  /** Polaroid 컴포넌트 사진입니다.  */
  imgUrl: string;
  /** Polaroid Top 위치입니다. 기본 15rem 에서 입력한 수 만큼 변경됩니다. */
  topPosition?: number;
  /** Polaroid Left 위치입니다. 기본 1rem 에서 입력한 수 만큼 변경됩니다. */
  leftPosition?: number;
  /** Polaroid 클릭 이벤트 입니다. */
  onClick?: () => void;
  /** 폴라로이드의 엑스버튼 입니다.  */
  cancelButton?: boolean;
  /** 폴라로이드 엑스버튼의 클릭 이벤트 입니다. */
  onClickCancel?: () => void;
}

const Polaroid = ({
  imgUrl,
  topPosition = 0,
  leftPosition = 0,
  cancelButton = false,
  onClickCancel,
  ...props
}: PolaroidProps) => {
  return (
    <>
      <img
        {...props}
        css={style.img(topPosition, leftPosition)}
        src={imgUrl}
        alt="편지와 함께 보낸 이미지"
      />
      {cancelButton && (
        <Close
          css={style.icon(topPosition, leftPosition)}
          width={30}
          height={30}
          onClick={onClickCancel}
        />
      )}
    </>
  );
};

export default Polaroid;
