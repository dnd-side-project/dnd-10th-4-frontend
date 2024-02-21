import { css } from '@emotion/react';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  main: css`
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
  `,
  polaroidFrame: css`
    box-sizing: border-box;
    width: 100%;
    padding: 1.25rem 1.25rem 5rem;
    border-radius: 0.5rem;
    background-color: white;
  `,
  polaroid: css`
    width: 100%;
    height: 52vh;
  `,
  icon: css`
    color: white;
    cursor: pointer;
  `,
  button: css`
    width: 100%;
    max-width: 9.375rem;
    margin-top: 1.25rem;
  `,
};

export default styles;
