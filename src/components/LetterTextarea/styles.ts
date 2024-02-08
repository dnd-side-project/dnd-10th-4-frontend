import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';

const style = {
  textarea: css`
    border: none;
    background: none;
    outline: none;
    resize: none;
    ${textStyles.l1m}
  `,
};

export default style;
