import { css } from '@emotion/react';
import BottleReception1 from '@/assets/images/bottleReception1.webp';
import BottleReception2 from '@/assets/images/bottleReception2.webp';
import BottleReception3 from '@/assets/images/bottleReception3.webp';
import BottleReception4 from '@/assets/images/bottleReception4.webp';
import BottleReply1 from '@/assets/images/bottleReply1.webp';
import BottleReply2 from '@/assets/images/bottleReply2.webp';
import SparkleBig from '@/assets/images/sparkleBig.webp';
import SparkleSmall from '@/assets/images/sparkleSmall.webp';

export const RECEPTION_BOTTLES = [
  {
    bottle: {
      src: BottleReception4,
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
  {
    bottle: {
      src: BottleReception3,
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
      src: BottleReception2,
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
      src: BottleReception1,
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
] as const;

export const REPLY_BOTTLES = [
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
