import { useFormContext } from 'react-hook-form';
import { ChangeEvent } from 'react';
import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';

const LetterTextarea = () => {
  const { register, setValue } = useFormContext();

  const MAX_CONTENT = 300;

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;

    if (inputValue.length <= MAX_CONTENT) {
      setValue('content', inputValue);
    } else {
      setValue('content', inputValue.slice(0, MAX_CONTENT - 1));
    }
  };

  return (
    <textarea
      {...register('content')}
      name="content"
      rows={15}
      autoFocus
      placeholder="하고싶은 이야기를 적어보세요."
      css={style.textarea}
      onChange={handleChange}
    />
  );
};
export default LetterTextarea;

const style = {
  label: css`
    padding-block: 0.5rem;
    ${textStyles.t3};
  `,
  textarea: css`
    border: none;
    background: none;
    outline: none;
    resize: none;
    ${textStyles.l1m}
  `,
};
