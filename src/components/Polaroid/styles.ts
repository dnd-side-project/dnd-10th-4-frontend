import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

const style = {
  img: (topPosition: number, leftPosition: number) => css`
    position: absolute;
    top: ${topPosition + 15}rem;
    left: ${leftPosition + 1}rem;
    width: 4.25rem;
    height: 6.25rem;
    padding: 0.25rem 0.25rem 1rem;
    border: 0.030375rem solid ${COLORS.gray5};
    border-radius: 0.162rem;
    background: #fff;
    cursor: pointer;
    transform: rotate(-15deg);
  `,
  icon: (topPosition: number, leftPosition: number) => css`
    position: absolute;
    top: ${topPosition + 13.8}rem;
    left: ${leftPosition + 3.6}rem;
    cursor: pointer;
  `,
};

export default style;
