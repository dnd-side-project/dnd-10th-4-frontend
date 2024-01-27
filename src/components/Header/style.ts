import { css } from '@emotion/react';

export type HeaderVariant = 'primary' | 'secondary';

const styles = {
  header: (variant: HeaderVariant) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.75rem;

    ${variant === 'primary' && primary.header}
  `,
  left: css`
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    margin-left: 0.5rem;
  `,
  center: css`
    display: flex;
    text-align: center;
  `,
  right: css`
    position: absolute;
    right: 0;
    display: flex;
    align-items: center;
    margin-right: 0.5rem;
  `,
};

const primary = {
  header: css`
    border-bottom: 1px solid rgb(255 255 255 / 0.12);
    background: linear-gradient(
      180deg,
      rgb(255 255 255 / 0.2) 0%,
      rgb(255 255 255 / 0.1) 98%
    );
    color: white;
    font-weight: 700;
    font-size: 0.875rem;
    backdrop-filter: blur(4px);
  `,
};

export default styles;
