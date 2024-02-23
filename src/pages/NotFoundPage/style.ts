import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

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
  image: css`
    width: 14.125rem;
    height: 10.375rem;
    margin-bottom: 2.5rem;
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
