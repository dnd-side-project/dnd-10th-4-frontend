import { WORRY_DICT, type Worry } from './users';

export const EQUAL_GENDER_DICT = [
  '모두에게 보내기',
  '나와 같은 성별에게 보내기',
] as const;

export type EqualGender = (typeof EQUAL_GENDER_DICT)[number];

/** 메인 페이지 최대 슬라이드 */
export const MAX_SLIDES = 4;
/** 슬라이드 당 보여줄 받은 편지 갯수 */
export const RECEPTIONS_PER_SLIDE = 4;
/** 슬라이드 당 보여줄 받은 답장 갯수 */
export const REPLIES_PER_SLIDE = 2;

export { WORRY_DICT, type Worry };
