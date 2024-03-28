import { css } from '@emotion/react';
import COLORS from '@/constants/colors';
import textStyles from '@/styles/textStyles';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    min-height: 100svh;
    padding: 0 1rem 1rem;
    text-align: center;
  `,
  main: css`
    flex-grow: 1;
    width: 100%;
  `,
  tabContent: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin: 1rem 0;
  `,
  input: css`
    margin-bottom: 1rem;
    padding: 0.8125rem 1rem;
    border: 1px solid rgb(255 255 255 / 0.3);
    border-radius: 0.75rem;
    color: ${COLORS.gray1};
    outline: none;
    text-align: center;
    backdrop-filter: blur(7.5px);

    ${textStyles.t3}
  `,
};

export default styles;
