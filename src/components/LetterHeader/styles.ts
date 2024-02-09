import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

export type FromOrTo = 'From' | 'To';

const style = {
  header: (fromOrTo: FromOrTo) => css`
    display: flex;
    gap: 0.5rem;
    justify-content: ${fromOrTo === 'From' ? 'flex-end' : 'space-between'};
  `,
  name: css`
    display: flex;
    gap: 0.5rem;
    align-items: center;

    & > span:nth-of-type(1) {
      color: ${COLORS.gray1};
      ${textStyles.t4};
    }

    & > span:nth-of-type(2) {
      color: ${COLORS.gray3};
      font-weight: 500;
      font-style: normal;
      font-size: 14px;
      line-height: 16px;
    }
  `,
  icon: css`
    cursor: pointer;
  `,
};

export default style;
