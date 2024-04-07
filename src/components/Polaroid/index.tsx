import { AddImage } from '@/assets/icons';
import Tooltip from '../Tooltip';
import style, { PolaroidSize } from './styles';
interface PolaroidProps {
  /** Polaroid 컴포넌트 사진입니다.  */
  imgUrl?: string;
  /** Polaroid Top 위치입니다. 기본 15rem 에서 입력한 수 만큼 변경됩니다. */
  bottomPosition?: number;
  /** Polaroid Left 위치입니다. 기본 1rem 에서 입력한 수 만큼 변경됩니다. */
  leftPosition?: number;
  /** Polaroid 클릭 이벤트 입니다. */
  onClick?: () => void;
  /** 폴라로이드의 크기 입니다. */
  size?: PolaroidSize;
}

const Polaroid = ({
  imgUrl,
  bottomPosition = -1,
  leftPosition = 0,
  size = 'sm',
  ...props
}: PolaroidProps) => {
  return (
    <>
      {imgUrl ? (
        <img
          {...props}
          css={style.img(bottomPosition, leftPosition, size)}
          src={imgUrl}
          alt="편지와 함께 보낸 이미지"
        />
      ) : (
        <Tooltip delay={2000}>
          <Tooltip.Trigger>
            <div {...props} css={style.empty(bottomPosition, leftPosition)}>
              <AddImage fill="#6F6B63" />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Content>사진을 함께 보낼 수 있어요</Tooltip.Content>
        </Tooltip>
      )}
    </>
  );
};

export default Polaroid;
