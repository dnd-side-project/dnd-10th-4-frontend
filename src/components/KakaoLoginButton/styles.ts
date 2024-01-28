import { css } from '@emotion/react';

const styles = {
  button: css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 1rem 1.25rem;
    border: none;
    border-radius: 6.25rem;
    background-color: #fee500;
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.25rem;
    cursor: pointer;
  `,
  logo: css`
    position: absolute;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    margin-left: 1.25rem;
    color: black;
  `,
};

export default styles;
