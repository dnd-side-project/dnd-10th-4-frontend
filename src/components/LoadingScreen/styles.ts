import { css } from '@emotion/react';

const styles = {
  container: css`
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(0 0 0 / 0.6);
    color: white;
  `,
  content: css`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    margin: 0 auto;
  `,
};

export default styles;
