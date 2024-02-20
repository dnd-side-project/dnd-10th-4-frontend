import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const style = {
  trigger: css`
    cursor: pointer;
  `,
  option: (color?: string) => css`
    ${color && `color: ${color};`}
    ${textStyles.b5m};

    display: flex;
    gap: 0.25rem;
    padding-right: 2.3125rem;

    :hover {
      background-color: ${COLORS.gray5};
    }
  `,
};

export default style;
