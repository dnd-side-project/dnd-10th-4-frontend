import { Member } from '@/types/member';

export const EmptyMemberInfo: Member = {
  id: 8,
  email: 'aodem@naver.com',
  nickname: null,
  worryTypes: [],
  gender: 'NONE',
  birthDay: null,
  age: null,
  role: 'USER',
  letterCount: 0,
};

export const MemberInfo: Member = {
  id: 7,
  email: 'tnlswodnjs99@naver.com',
  nickname: '낯선 거북이',
  worryTypes: ['COURSE', 'STUDY', 'RELATIONSHIP'],
  gender: 'MALE',
  birthDay: [1997, 12, 31],
  age: 28,
  role: 'USER',
  letterCount: 5,
};
