import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

export type HeaderVariant = 'primary' | 'secondary' | 'none';

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

    ${variant === 'primary' && primary.header}
    ${variant === 'secondary' && secondary.header}
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

const primary = {
  header: css`
    border-bottom: 1px solid rgb(255 255 255 / 0.12);
    background: linear-gradient(
      180deg,
      rgb(255 255 255 / 0.2) 0%,
      rgb(255 255 255 / 0.1) 98%
    );
    color: white;
    backdrop-filter: blur(4px);
  `,
};

const secondary = {
  header: css`
    border-bottom: 1px solid rgb(255 255 255 / 0.12);
    background: rgb(255 255 255 / 0.75);
    color: ${COLORS.gray2};
    backdrop-filter: blur(40px);
  `,
};

export default styles;
