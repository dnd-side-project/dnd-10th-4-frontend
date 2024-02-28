import { type Gender, type Role, type Worry } from '@/constants/users';

export type Member = {
  id: number;
  role: Role;
  email: string;
  nickname: string | null;
  gender: Gender | 'NONE';
  birthDay: [number, number, number] | null;
  age: number | null;
  worryTypes: Worry[];
  letterCount: number;
};
