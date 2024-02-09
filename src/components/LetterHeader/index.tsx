import { MoreHorizontal } from '@/assets/icons';
import style, { FromOrTo } from './styles';

interface LetterHeaderProps {
  /** from, to 입니다. */
  fromOrTo: FromOrTo;
  /** 닉네임 입니다. */
  nickname: string;
  /** more 아이콘 유무 입니다. */
  isMoreIcon?: boolean;
  /** more 아이콘 클릭 이벤트 입니다. */
  onClickMoreIcon?: () => void;
}

const LetterHeader = ({
  fromOrTo,
  nickname,
  isMoreIcon = false,
  onClickMoreIcon,
}: LetterHeaderProps) => {
  return (
    <div css={style.header(fromOrTo)}>
      <div css={style.name}>
        <span>{fromOrTo}.</span>
        <span>{nickname}</span>
      </div>
      {isMoreIcon && <MoreHorizontal height={24} onClick={onClickMoreIcon} />}
    </div>
  );
};

export default LetterHeader;
