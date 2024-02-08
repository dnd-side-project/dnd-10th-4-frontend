import style from './styles';

interface LetterTextareaProps {
  /** textarea 의 name 입니다. */
  name: string;
  /** textarea 의 세로 줄 개수 입니다. */
  rows?: number;
  /** textarea 의 자동 포커스 여부 입니다. */
  autoFocus?: boolean;
  /** textarea 의 placeholder 입니다.  */
  placeholder?: string;
  /** textarea 의 최대 글자수 입니다. */
  maxLength?: number;
}

const LetterTextarea = ({
  name,
  rows = 15,
  autoFocus = true,
  placeholder,
  maxLength = 300,
  ...props
}: LetterTextareaProps) => {
  return (
    <textarea
      {...props}
      name={name}
      rows={rows}
      autoFocus={autoFocus}
      placeholder={placeholder}
      maxLength={maxLength}
      css={style.textarea}
    />
  );
};

export default LetterTextarea;
