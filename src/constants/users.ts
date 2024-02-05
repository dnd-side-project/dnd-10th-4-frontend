// https://www.amazingtalker.co.kr/blog/ko/kr-en/67249/#%ED%95%B4%EC%96%91_%ED%8F%AC%EC%9C%A0%EB%A5%98_Marine_Mammals
export const NICKNAMES = [
  '거북이',
  '고래',
  '바다코끼리',
  '상어',
  '물개',
  '오리너구리',
  '하프물범',
  '수달',
  '무스',
  '바다소',
  '바다사자',
  '돌고래',
  '벨루가',
  '해달',
  '수달',
  '바다수달',
  '북극곰',
  '범고래',
  '코끼리물범',
  '물범',
  '흰긴수염고래',
  '향유고래',
  '쥐돌고래',
] as const;

export const WORRY_DICT = {
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

export type Nickname = (typeof NICKNAMES)[number];
export type Worry = keyof typeof WORRY_DICT;
export type Gender = keyof typeof GENDER_DICT;
export type Role = keyof typeof ROLE_DICT;
