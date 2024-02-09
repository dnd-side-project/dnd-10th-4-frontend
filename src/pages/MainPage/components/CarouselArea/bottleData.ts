import { css, type SerializedStyles } from '@emotion/react';
import BottleLetter1 from '@/assets/images/bottleLetter1.png';
import BottleLetter2 from '@/assets/images/bottleLetter2.png';
import BottleLetter3 from '@/assets/images/bottleLetter3.png';
import BottleLetter4 from '@/assets/images/bottleLetter4.png';
import BottleReply1 from '@/assets/images/bottleReply1.png';
import BottleReply2 from '@/assets/images/bottleReply2.png';

export const BOTTLES: {
  src: string;
  position: SerializedStyles;
  chipPosition?: SerializedStyles;
}[] = [
  {
    src: BottleLetter1,
    position: css({
      left: '25%',
      bottom: '75%',
    }),
    chipPosition: css({
      top: '-2.5rem',
      left: '1rem',
    }),
  },
  {
    src: BottleLetter2,
    position: css({
      right: '20%',
      bottom: '65%',
    }),
    chipPosition: css({
      top: '-2.75rem',
    }),
  },
  {
    src: BottleLetter3,
    position: css({
      left: '10%',
      bottom: '55%',
    }),
    chipPosition: css({
      top: '-2.5rem',
    }),
  },
  {
    src: BottleLetter4,
    position: css({
      right: '20%',
      bottom: '35%',
    }),
    chipPosition: css({
      top: '-2.75rem',
    }),
  },
  {
    src: BottleReply1,
    position: css({
      left: '10%',
      bottom: '4%',
    }),
  },
  {
    src: BottleReply2,
    position: css({
      right: '10%',
      bottom: '4%',
    }),
  },
];
