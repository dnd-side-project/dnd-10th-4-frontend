import { css } from '@emotion/react';

const styles = {
  container: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgb(0 0 0 / 0.6);
    user-select: none;
  `,
  content: css`
    max-width: 600px;
    margin: 0 auto;
  `,
};

export default styles;
