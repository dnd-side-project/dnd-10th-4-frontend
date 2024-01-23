import { css } from '@emotion/react';

const style = {
  background: (imageUrl: string) => css`
    height: 100svh;
    background-image: url(${imageUrl});
    background-position: center center;
    background-size: 40rem 100%;
    background-repeat: repeat-x;

    @media (max-width: 768px) {
      background-position: center;
      background-size: cover;
      background-repeat: no-repeat;
    }
  `,
  wrapper: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    height: 100%;
    margin: 0 auto;
    padding-inline: 1rem;
  `,
};

export default style;