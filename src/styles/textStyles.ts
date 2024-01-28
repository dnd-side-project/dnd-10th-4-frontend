import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

export type TextVariant =
  | 'heading'
  | 'thin'
  | 'button'
  | 'button-bold'
  | 'description';

const textStyles = (variant: TextVariant) => {
  switch (variant) {
    case 'heading':
      return css`
        color: black;
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.5rem;
      `;
    case 'thin':
      return css`
        color: black;
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.25rem;
      `;
    case 'button':
      return css`
        color: black;
        font-weight: 500;
        font-size: 1rem;
        line-height: 1.5rem;
      `;
    case 'button-bold':
      return css`
        color: black;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.5rem;
      `;
    case 'description':
      return css`
        color: ${COLORS.gray4};
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1rem;
      `;
  }
};

export default textStyles;
