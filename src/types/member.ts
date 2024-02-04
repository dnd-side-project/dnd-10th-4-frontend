import { NICKNAMES } from '@/constants/users';

export type Worry =
  | 'WORK'
  | 'COURSE'
  | 'RELATIONSHIP'
  | 'BREAK_LOVE'
  | 'LOVE'
  | 'STUDY'
  | 'FAMILY'
  | 'ETC';

export type Nickname = (typeof NICKNAMES)[number];
export type Gender = 'MALE' | 'FEMALE';
export type Role = 'USER';
