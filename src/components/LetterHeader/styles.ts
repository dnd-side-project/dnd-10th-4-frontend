import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

const style = {
  fromTo: css`
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
  info: css`
    display: flex;
    justify-content: space-between;
  `,
  tag: css`
    display: flex;
    gap: 0.5rem;
  `,
  icon: css`
    cursor: pointer;
  `,
};

export default style;
