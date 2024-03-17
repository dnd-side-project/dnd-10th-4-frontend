import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const style = {
  radio: css`
    display: flex;
    align-items: center;
    cursor: pointer;
  `,
  radioButton: css`
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem 0 0;
    border: 0.125rem solid ${COLORS.gray5};
    border-radius: 50%;
    cursor: pointer;
    transition: border 0.3s ease-out;
    appearance: none;

    :checked {
      border: 0.5rem solid ${COLORS.danger};
    }

    :active {
      border: 0.3rem solid ${COLORS.danger};
    }
  `,
  radioSpan: (value: string, selectedValue: string | null) => css`
    ${textStyles.b5m};
    font-weight: ${value === selectedValue ? 500 : 400};
  `,
};

export default style;
