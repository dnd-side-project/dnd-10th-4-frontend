import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

const style = {
  trigger: css`
    cursor: pointer;
  `,
  option: (color?: string) => css`
    ${color && `color: ${color};`}
    display: flex;
    gap: 0.25rem;
    padding-right: 2rem;

    :hover {
      background-color: ${COLORS.gray5};
    }
  `,
};

export default style;
