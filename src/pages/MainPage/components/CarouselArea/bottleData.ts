import { css } from '@emotion/react';
import BottleLetter1 from '@/assets/images/bottleLetter1.png';
import BottleLetter2 from '@/assets/images/bottleLetter2.png';
import BottleLetter3 from '@/assets/images/bottleLetter3.png';
import BottleLetter4 from '@/assets/images/bottleLetter4.png';
import BottleReply1 from '@/assets/images/bottleReply1.png';
import BottleReply2 from '@/assets/images/bottleReply2.png';
import SparkleBig from '@/assets/images/sparkleBig.png';
import SparkleSmall from '@/assets/images/sparkleSmall.png';

export const BOTTLES_LETTER = [
  {
    bottle: {
      src: BottleLetter4,
    },
    container: {
      animation: {
        duration: '5s',
        translateY: '0.5rem',
      },
      position: css`
        position: absolute;
        right: 20%;
        bottom: 30%;

        @media (min-aspect-ratio: 0.4/1) {
          bottom: 25%;
        }
      `,
    },
    sparkles: [
      {
        src: SparkleBig,
        position: css`
          position: absolute;
          top: 30%;
          right: 0;
        `,
      },
    ],
    chip: {
      position: css`
        position: absolute;
        top: -2.75rem;
      `,
    },
  },
  {
    bottle: {
      src: BottleLetter3,
    },
    container: {
      animation: {
        duration: '3s',
        translateY: '0.75rem',
      },
      position: css`
        position: absolute;
        bottom: 55%;
        left: 10%;

        @media (min-aspect-ratio: 0.4/1) {
          bottom: 45%;
        }
      `,
    },
    sparkles: [
      {
        src: SparkleBig,
        position: css`
          position: absolute;
          top: -20%;
          left: 30%;
        `,
      },
    ],
    chip: {
      position: css`
        position: absolute;
        top: -2.5rem;
      `,
    },
  },
  {
    bottle: {
      src: BottleLetter2,
    },
    container: {
      animation: {
        duration: '4s',
        translateY: '1rem',
      },
      position: css`
        position: absolute;
        right: 20%;
        bottom: 65%;

        @media (min-aspect-ratio: 0.4/1) {
          bottom: 55%;
        }
      `,
    },
    sparkles: [
      {
        src: SparkleBig,
        position: css`
          position: absolute;
          top: 30%;
          left: 0;
        `,
      },
    ],
    chip: {
      position: css`
        position: absolute;
        top: -2.75rem;
      `,
    },
  },
  {
    bottle: {
      src: BottleLetter1,
    },
    container: {
      animation: {
        duration: '7s',
        translateY: '1rem',
      },
      position: css`
        position: absolute;
        bottom: 75%;
        left: 25%;

        @media (min-aspect-ratio: 0.4/1) {
          bottom: 65%;
        }
      `,
    },
    sparkles: [
      {
        src: SparkleBig,
        position: css`
          position: absolute;
          top: 30%;
          right: 0;
        `,
      },
    ],
    chip: {
      position: css`
        position: absolute;
        top: -2.5rem;
        left: 1rem;
      `,
    },
  },
] as const;

export const BOTTLES_REPLY = [
  {
    bottle: {
      src: BottleReply1,
    },
    container: {
      position: css`
        position: absolute;
        bottom: 4%;
        left: 10%;
      `,
    },
    sparkles: [
      {
        src: SparkleBig,
        position: css`
          position: absolute;
          top: 15%;
          right: 35%;
        `,
      },
      {
        src: SparkleSmall,
        position: css`
          position: absolute;
          bottom: 20%;
          left: 30%;
        `,
      },
    ],
  },
  {
    bottle: {
      src: BottleReply2,
    },
    container: {
      position: css`
        position: absolute;
        right: 10%;
        bottom: 0%;
      `,
    },
    sparkles: [
      {
        src: SparkleBig,
        position: css`
          position: absolute;
          top: -35%;
          right: 25%;
        `,
      },
      {
        src: SparkleSmall,
        position: css`
          position: absolute;
          top: 10%;
          left: 0;
        `,
      },
    ],
  },
] as const;
