import { css } from '@emotion/react';
import BottleLetter1 from '@/assets/images/bottleLetter1.png';
import BottleLetter2 from '@/assets/images/bottleLetter2.png';
import BottleLetter3 from '@/assets/images/bottleLetter3.png';
import BottleLetter4 from '@/assets/images/bottleLetter4.png';
import BottleReply1 from '@/assets/images/bottleReply1.png';
import BottleReply2 from '@/assets/images/bottleReply2.png';

export const BOTTLES_LETTER = [
  {
    src: BottleLetter4,
    position: css`
      position: absolute;
      right: 20%;
      bottom: 30%;

      @media (min-aspect-ratio: 0.4/1) {
        bottom: 25%;
      }
    `,
    animation: {
      duration: '5s',
      translateY: '0.5rem',
    },
    chipPosition: css`
      position: absolute;
      top: -2.75rem;
    `,
  },
  {
    src: BottleLetter3,
    position: css`
      position: absolute;
      bottom: 55%;
      left: 10%;

      @media (min-aspect-ratio: 0.4/1) {
        bottom: 45%;
      }
    `,
    animation: {
      duration: '3s',
      translateY: '0.75rem',
    },
    chipPosition: css`
      position: absolute;
      top: -2.5rem;
    `,
  },
  {
    src: BottleLetter2,
    position: css`
      position: absolute;
      right: 20%;
      bottom: 65%;

      @media (min-aspect-ratio: 0.4/1) {
        bottom: 55%;
      }
    `,
    animation: {
      duration: '4s',
      translateY: '1rem',
    },
    chipPosition: css`
      position: absolute;
      top: -2.75rem;
    `,
  },
  {
    src: BottleLetter1,
    position: css`
      position: absolute;
      bottom: 75%;
      left: 25%;

      @media (min-aspect-ratio: 0.4/1) {
        bottom: 65%;
      }
    `,
    animation: {
      duration: '7s',
      translateY: '1rem',
    },
    chipPosition: css`
      position: absolute;
      top: -2.5rem;
      left: 1rem;
    `,
  },
] as const;

export const BOTTLES_REPLY = [
  {
    src: BottleReply1,
    position: css`
      position: absolute;
      bottom: 4%;
      left: 10%;
    `,
  },
  {
    src: BottleReply2,
    position: css`
      position: absolute;
      right: 10%;
      bottom: 0%;
    `,
  },
] as const;
