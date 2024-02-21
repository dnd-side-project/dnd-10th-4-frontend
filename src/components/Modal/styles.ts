import { css } from '@emotion/react';

const styles = {
  container: css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100%;
    min-height: 100%;
    background-color: rgb(0 0 0 / 0.6);
  `,
  content: css`
    max-width: 600px;
    margin: 0 auto;
  `,
};

export default styles;
