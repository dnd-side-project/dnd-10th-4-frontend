import { css } from '@emotion/react';

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
    margin-top: 1rem;
  `,
};

export default styles;
