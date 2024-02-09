import { css } from '@emotion/react';
import COLORS from '@/constants/colors';

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
  carouselButton: css`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    &:active {
      transform: translateY(-50%) scale(0.95);
    }
  `,
  dotsSection: css`
    display: flex;
    gap: 0.1875rem;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.75rem;
  `,
  dot: (selected: boolean) => css`
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: ${selected ? COLORS.gray1 : COLORS.gray4};
    cursor: pointer;
    transition: background-color 0.15s;
  `,
  bottleImage: css`
    cursor: pointer;
  `,
};

export default styles;
