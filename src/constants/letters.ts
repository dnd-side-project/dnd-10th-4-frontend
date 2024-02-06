import { WORRY_DICT, type Worry } from './users';

export const EQUAL_GENDER_DICT: Record<string, boolean> = {
  '나와 같은 성별에게 보내기': true,
  '모두에게 보내기': false,
} as const;

export type EQUAL_GENDER = keyof typeof EQUAL_GENDER_DICT;

export { WORRY_DICT, type Worry };
