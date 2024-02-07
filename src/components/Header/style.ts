import { css } from '@emotion/react';

export type HeaderVariant = 'primary' | 'none';

const styles = {
  header: (variant: HeaderVariant) => css`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 3.75rem;
    font-weight: 700;
    font-size: 0.875rem;

    ${variants[variant]}
  `,
  left: css`
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
    margin-left: 1rem;
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
    margin-right: 1rem;
  `,
};

const variants = {
  primary: css`
    background: linear-gradient(
      178deg,
      #67ccff 2.02%,
      rgb(104 205 255 / 0) 97.99%
    );
    color: white;
  `,
  none: css(),
};

export default styles;
