import { css } from '@emotion/react';

const styles = {
  container: (width: string, height: string) => css`
    position: relative;
    display: flex;
    width: ${width};
    height: ${height};
    color: white;
    text-align: center;
  `,

  progress: css`
    overflow: hidden;
    width: 100%;
    border: 1px solid rgb(255 255 255 / 0.3);
    border-radius: 0.75rem;
    background: radial-gradient(
      264.44% 135.37% at 1.63% 0%,
      rgb(255 255 255 / 0.56) 0%,
      rgb(255 255 255 / 0.08) 100%,
      rgb(255 255 255 / 0.16) 100%,
      rgb(255 255 255 / 0.24) 100%
    );

    /* Fix overflow clipping in Safari */
    transform: translateZ(0);
    backdrop-filter: blur(7.5px);
  `,

  indicator: css`
    width: 100%;
    height: 100%;
    background-color: white;
    transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
  `,

  label: (height: string) => css`
    position: absolute;
    top: calc(${height} + 0.25rem);
    width: 100%;
  `,
};

export default styles;
