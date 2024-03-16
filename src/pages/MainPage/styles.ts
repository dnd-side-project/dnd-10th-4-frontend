import { css } from '@emotion/react';

const styles = {
  page: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    height: 100svh;
    text-align: center;
  `,
  main: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 0.25rem;
    color: white;
  `,
  buttonSection: css`
    margin-bottom: 1.25rem;
    padding: 0 1rem;
  `,
};

export default styles;
