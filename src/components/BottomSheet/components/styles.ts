import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

const styles = {
  title: css`
    padding: 0.5rem 1rem;
    text-align: center;
    ${textStyles.t2};
  `,
  content: css`
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem;
    text-align: center;
  `,
  description: css`
    margin-bottom: 1rem;
    color: ${COLORS.gray3};
    text-align: center;

    ${textStyles.b5R}
  `,
  divider: css`
    width: 100%;
    height: 1px;
    background-color: ${COLORS.gray6};
  `,
};

export default styles;
