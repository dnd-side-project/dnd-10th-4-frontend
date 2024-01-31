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
}

const Polaroid = ({
  imgUrl,
  topPosition = 0,
  leftPosition = 0,
  ...props
}: PolaroidProps) => {
  return (
    <img
      {...props}
      css={style.img(topPosition, leftPosition)}
      src={imgUrl}
      alt="편지와 함께 보낸 이미지"
    />
  );
};

export default Polaroid;
