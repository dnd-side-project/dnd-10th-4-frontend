import { forwardRef, ComponentProps } from 'react';
import { letterWrite } from '@/constants/schemaLiteral';
import style from './styles';

interface LetterTextareaProps extends ComponentProps<'textarea'> {
  /** textarea 의 name 입니다. */
  name: string;
  /** textarea 의 세로 줄 개수 입니다. */
  rows?: number;
  /** textarea 의 placeholder 입니다.  */
  placeholder?: string;
  /** textarea 의 최대 글자수 입니다. */
  maxLength?: number;
}

const LetterTextarea = forwardRef<HTMLTextAreaElement, LetterTextareaProps>(
  (
    {
      name,
      rows = 15,
      placeholder,
      maxLength = letterWrite.content.max.value,
      ...props
    },
    ref,
  ) => {
    return (
      <textarea
        {...props}
        ref={ref}
        name={name}
        rows={rows}
        placeholder={placeholder}
        maxLength={maxLength}
        css={style.textarea}
      />
    );
  },
);

LetterTextarea.displayName = 'LetterTextarea';

export default LetterTextarea;
