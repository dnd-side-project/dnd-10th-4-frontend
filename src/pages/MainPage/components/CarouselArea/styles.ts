import { css } from '@emotion/react';

const styles = {
  viewport: css`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  `,
  container: css`
    display: flex;
    height: 100%;
  `,
  slide: css`
    position: relative;
    flex: 0 0 100%;
    height: 100%;
  `,
  button: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%) scale(0.95);
    }
  `,
  bottleImage: css`
    cursor: pointer;
  `,
  timeChip: css`
    position: absolute;
    padding: 0.125rem 0.75rem;
    cursor: default;
  `,
};

export default styles;
