import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const styles = {
  button: css`
    display: flex;
    gap: 0.5rem;
    align-items: center;
    width: fit-content;
    padding: 0.5rem 1rem;
  `,
  text: css`
    color: ${COLORS.gray1};
    ${textStyles.b4m};
  `,
};

export default styles;
