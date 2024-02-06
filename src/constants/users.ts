export const WORRY_DICT: Record<string, string> = {
  WORK: '일·직장',
  COURSE: '취업·진로',
  RELATIONSHIP: '인간관계',
  BREAK_LOVE: '이별·상실',
  LOVE: '연애',
  STUDY: '학업',
  FAMILY: '가족',
  ETC: '기타',
} as const;

export const GENDER_DICT = {
  MALE: '남성',
  FEMALE: '여성',
} as const;

export const ROLE_DICT = {
  USER: '사용자',
} as const;

export type Worry = keyof typeof WORRY_DICT;
export type Gender = keyof typeof GENDER_DICT;
export type Role = keyof typeof ROLE_DICT;
