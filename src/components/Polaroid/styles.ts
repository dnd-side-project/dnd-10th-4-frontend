import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

const style = {
  img: (topPosition: number, leftPosition: number) => css`
    position: relative;
    top: ${topPosition + 15}rem;
    left: ${leftPosition + 1}rem;
    width: 3.6844rem;
    height: 4.9394rem;
    padding: 0.324rem 0.324rem 0.972rem;
    border: 0.030375rem solid ${COLORS.gray5};
    border-radius: 0.162rem;
    background: #fff;
    cursor: pointer;
    transform: rotate(-15deg);
  `,
};

export default style;
