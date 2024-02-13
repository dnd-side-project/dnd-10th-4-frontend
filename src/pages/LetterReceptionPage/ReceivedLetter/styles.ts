import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

const style = {
  text: css`
    height: 15rem;
    ${textStyles.l1m};
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5rem;
    ${textStyles.c1r};
    color: ${COLORS.gray2};
  `,
  navbar: css`
    padding-inline: 0;
  `,
};

export default style;
