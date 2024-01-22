import { css } from '@emotion/react';

const style = {
  background: (imageUrl: string) => css`
    height: 100svh;
    background-image: url(${imageUrl});
    background-position: center center;
    background-size: auto 90%;
    background-repeat: repeat-x;

    @media (max-width: 768px) {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  `,
};

export default style;
