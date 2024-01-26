import { css } from '@emotion/react';

export type ButtonVariant =
  | 'header'
  | 'leftCarousel'
  | 'rightCarousel'
  | 'bottom';

const style = {
  button: (variant: ButtonVariant) => css`
    display: flex;
    padding: 8px;
    border: ${variants[variant].border};
    border-radius: 100px;
    background: ${variants[variant].background};
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(2px);

    &:hover {
      background: ${variants[variant].hoverBackground};
    }

    &:active {
      background: ${variants[variant].activeBackground};
      box-shadow: 0 2px 10px rgb(0 0 0 / 0.2);
      transform: scale(0.95);
    }
  `,
};

const variants = {
  header: {
    border: '1px solid rgba(255, 255, 255, 0.1)',
    background: 'rgba(255, 255, 255, 0.3)',
    hoverBackground: 'rgba(255, 255, 255, 0.4)',
    activeBackground: 'rgba(255, 255, 255, 0.5)',
  },
  leftCarousel: {
    border: '1px solid rgba(255, 255, 255, 0.30)',
    background:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.50) 100%)',
    hoverBackground:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.60) 100%)',
    activeBackground:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.70) 100%)',
  },
  rightCarousel: {
    border: '1px solid rgba(255, 255, 255, 0.30)',
    background:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.51) 38.5%, rgba(255, 255, 255, 0.20) 100%)',
    hoverBackground:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.61) 38.5%, rgba(255, 255, 255, 0.30) 100%)',
    activeBackground:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.71) 38.5%, rgba(255, 255, 255, 0.40) 100%)',
  },
  bottom: {
    border: '1px solid rgba(255, 255, 255, 0.3)',
    background:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.70) 0%, rgba(255, 255, 255, 0.28) 100%)',
    hoverBackground:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.80) 0%, rgba(255, 255, 255, 0.38) 100%)',
    activeBackground:
      'radial-gradient(491.85% 132.88% at 0% 12.5%, rgba(255, 255, 255, 0.90) 0%, rgba(255, 255, 255, 0.48) 100%)',
  },
};

export default style;
