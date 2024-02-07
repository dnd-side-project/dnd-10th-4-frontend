import { WORRY_DICT, type Worry } from './users';

export const EQUAL_GENDER_DICT = [
  '모두에게 보내기',
  '나와 같은 성별에게 보내기',
] as const;

export type EqualGender = (typeof EQUAL_GENDER_DICT)[number];

export { WORRY_DICT, type Worry };
