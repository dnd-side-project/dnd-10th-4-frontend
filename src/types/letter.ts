import { type Worry } from '@/constants/letters';

export type letter = {
  content: string;
  equalGender: boolean;
  ageRangeStart: number;
  ageRangeEnd: number;
  worryType: Worry;
};
