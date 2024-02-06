import { css } from '@emotion/react';

const styles = {
  page: css`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    min-height: 100%;
    text-align: center;
  `,
  main: css`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    gap: 0.25rem;
    margin-top: 10rem;
    color: white;
  `,
  buttonSection: css`
    margin-bottom: 1.25rem;
    padding: 0 1rem;
  `,
  loginButton: css`
    width: calc(100% - 2rem);
  `,
};

export default styles;
