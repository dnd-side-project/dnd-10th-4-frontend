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
      bottom: 35%;
    `,
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
    `,
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
    `,
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
    `,
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
      bottom: 4%;
    `,
  },
] as const;
