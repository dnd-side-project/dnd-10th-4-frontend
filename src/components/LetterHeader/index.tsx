import { MoreHorizontal } from '@/assets/icons';
import style, { titleType, positonType } from './styles';

interface LetterHeaderProps {
  /** title 입니다. (To / From) */
  title?: titleType;
  /** title 위치입니다. (Left / Right)  */
  titlePosition?: positonType;
  /** 닉네임 입니다. */
  nickname: string;
  /** more 아이콘 유무 입니다. */
  isMoreIcon?: boolean;
  /** more 아이콘 클릭 이벤트 입니다. */
  onClickMoreIcon?: () => void;
}

const LetterHeader = ({
  title = 'To',
  titlePosition = 'reft',
  nickname,
  isMoreIcon = false,
  onClickMoreIcon,
}: LetterHeaderProps) => {
  return (
    <div css={style.header(titlePosition)}>
      <div css={style.name}>
        <span>{title}.</span>
        <span>{nickname}</span>
      </div>
      {isMoreIcon && <MoreHorizontal height={24} onClick={onClickMoreIcon} />}
    </div>
  );
};

export default LetterHeader;
