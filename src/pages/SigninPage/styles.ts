import { css } from '@emotion/react';

const styles = {
  page: css`
    position: relative;
    display: flex;
    flex-direction: column;
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
  loginButton: css`
    position: absolute;
    bottom: 0;
    width: 100%;
    margin-bottom: 1.25rem;
  `,
};

export default styles;
