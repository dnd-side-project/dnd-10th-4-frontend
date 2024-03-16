import { css } from '@emotion/react';
import textStyles from '@/styles/textStyles';
import COLORS from '@/constants/colors';

const styles = {
  header: css`
    margin: 0.5rem 0;
  `,

  container: css`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    min-height: 100svh;
  `,

  main: css`
    flex-grow: 1;
    overflow-y: auto;
    height: 100%;
    padding: 0 1rem;
  `,

  content: css`
    ${textStyles.l1m};
  `,

  card: css`
    top: initial;
    right: initial;
    bottom: 0;
    left: initial;
    flex-grow: 1;
  `,

  icon: css`
    color: white;
    cursor: pointer;
  `,

  date: css`
    display: flex;
    justify-content: flex-end;
    margin-top: 3.5rem;
    ${textStyles.c1r};
    color: ${COLORS.gray2};
  `,

  polaroidContainer: css`
    position: absolute;
    bottom: 0;
    left: 0;
    width: fit-content;
    height: fit-content;
    padding: 0.25rem 0.25rem 1rem;
    border-radius: 0.162rem;
    cursor: pointer;
    transform: rotate(-15deg);
  `,

  polaroid: css`
    width: 4.25rem;
    height: 6.25rem;
    padding: 0.25rem 0.25rem 1rem;
    border: 0.030375rem solid ${COLORS.gray5};
    background-color: white;
    transform: translate(20%, 45%);
  `,

  navbar: css`
    box-sizing: border-box;
  `,
};

export default styles;
