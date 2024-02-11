import style, { titleType, positonType } from './styles';

interface LetterHeaderProps {
  /** title 입니다. (To / From) */
  title?: titleType;
  /** title 위치입니다. (Left / Right)  */
  titlePosition?: positonType;
  /** 닉네임 입니다. */
  nickname: string;
}

const LetterHeader = ({
  title = 'To',
  titlePosition = 'reft',
  nickname,
}: LetterHeaderProps) => {
  return (
    <div css={style.header(titlePosition)}>
      <div css={style.name}>
        <span>{title}.</span>
        <span>{nickname}</span>
      </div>
    </div>
  );
};

export default LetterHeader;
