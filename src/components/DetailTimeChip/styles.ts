import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const style = {
  chip: (isAlmostExpired: boolean) => css`
    color: ${isAlmostExpired ? COLORS.danger : COLORS.primary};
  `,
  text: css`
    ${textStyles.b5m}
  `,
};

export default style;
