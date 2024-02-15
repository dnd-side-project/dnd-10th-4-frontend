import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: white;
  `,
  skeletonImg: css`
    width: 7.5rem;
    height: 7.5rem;
    margin-bottom: 2.5rem;
    background-color: ${COLORS.gray6};
  `,
  title: css`
    margin-bottom: 0.5rem;
    ${textStyles.t2};
  `,
  description: css`
    color: ${COLORS.gray3};
    ${textStyles.b3m};
  `,
  button: css`
    flex-grow: 0;
    width: 100%;
    max-width: 12.5rem;
    margin-top: 2.5rem;
  `,
};

export default styles;
