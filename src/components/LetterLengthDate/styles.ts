import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const style = {
  textCount: css`
    display: flex;
    justify-content: flex-end;

    ${textStyles.c1m}
    & > span:nth-of-type(1) {
      color: ${COLORS.gray1};
    }

    & > span:nth-of-type(2) {
      color: ${COLORS.gray4};
    }
  `,
  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 2.5rem;
    ${textStyles.c1r}
    color: ${COLORS.gray4};
  `,
};

export default style;
