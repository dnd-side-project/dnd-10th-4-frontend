import { MoreHorizontal } from '@/assets/icons';
import Chip from '../Chip';
import style from './styles';

interface LetterHeaderProps {
  /** from, to 입니다. */
  fromOrTo: 'From' | 'To';
  /** 닉네임 입니다. */
  nickname: string;
  /** 태그 리스트 입니다. */
  tagList?: string[];
  /** 태그 위치 입니다. */
  tagPosition?: 'top' | 'bottom';
  /** more 아이콘 유무 입니다. */
  isMoreIcon?: boolean;
  /** more 아이콘 클릭 이벤트 입니다. */
  onClickMoreIcon?: () => void;
}

const LetterHeader = ({
  fromOrTo,
  nickname,
  tagList,
  tagPosition = 'top',
  isMoreIcon = false,
  onClickMoreIcon,
}: LetterHeaderProps) => {
  const renderTags = () =>
    tagList && (
      <div css={style.info}>
        <div css={style.tag}>
          {tagList.map((item) => (
            <Chip variant="filter" key={item}>
              # {item}
            </Chip>
          ))}
        </div>
        {isMoreIcon && (
          <MoreHorizontal
            height={24}
            css={style.icon}
            onClick={onClickMoreIcon}
          />
        )}
      </div>
    );

  return (
    <>
      {tagPosition === 'top' && renderTags()}
      <div css={style.fromTo}>
        <span>{fromOrTo}.</span>
        <span>{nickname}</span>
      </div>
      {tagPosition === 'bottom' && renderTags()}
    </>
  );
};

export default LetterHeader;
