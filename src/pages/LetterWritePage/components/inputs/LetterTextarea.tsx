import { useFormContext } from 'react-hook-form';
import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import { letterWrite } from '@/constants/schemaLiteral';
import { type Inputs } from '../..';

const LetterTextarea = () => {
  const { register } = useFormContext<Inputs>();

  return (
    <textarea
      {...register('content')}
      name="content"
      rows={15}
      autoFocus
      placeholder="하고싶은 이야기를 적어보세요."
      css={style.textarea}
      maxLength={letterWrite.content.max.value}
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
