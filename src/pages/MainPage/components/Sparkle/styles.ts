import { css, keyframes } from '@emotion/react';

const sparkle = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
`;

const styles = {
  sparkleAnimation: css`
    animation: ${sparkle} 3s infinite alternate ease-out;
  `,
};

export default styles;
