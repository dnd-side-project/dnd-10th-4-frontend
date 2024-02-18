import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const style = {
  chip: (isAlmostExpired: boolean) => css`
    color: ${isAlmostExpired ? COLORS.red : COLORS.primary};
  `,
  text: css`
    padding-top: 0.2rem;
    ${textStyles.b5m}
  `,
};

export default style;
