import { css } from '@emotion/react';

const style = {
  background: (imageUrl: string) => css`
    @keyframes gradient {
      0% {
        background-position: 0% center;
      }

      100% {
        background-position: 36000% center;
      }
    }

    height: 100svh;
    background-image: url(${imageUrl});
    background-position: center center;
    background-size: 600px 100%;
    background-repeat: repeat-x;
    animation: gradient linear infinite;
    animation-duration: 20000s;

    @media (max-width: 1200px) {
      animation-duration: 14400s;
    }

    @media (max-width: 1000px) {
      animation-duration: 9600s;
    }

    @media (max-width: 900px) {
      animation-duration: 8000s;
    }

    @media (max-width: 800px) {
      animation-duration: 7200s;
    }

    @media (max-width: 700px) {
      animation-duration: 4800s;
    }

    @media (max-width: 650px) {
      animation-duration: 3200s;
    }

    @media (max-width: 600px) {
      animation-duration: 2400s;
    }

    @media (max-width: 400px) {
      animation-duration: 10000s;
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
  `,
};

export default style;
