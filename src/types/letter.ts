import { type Worry } from '@/constants/letters';
import { type Pagination } from './pagination';

export type Letter = {
  content: string;
  equalGender: boolean;
  ageRangeStart: number;
  ageRangeEnd: number;
  worryType: Worry;
  image: File;
};

export type LetterTag = {
  ageRangeStart: number;
  ageRangeEnd: number;
  equalGender: boolean;
};

export type Reception = {
  letterType: 'Onboarding' | null;
  letterId: number;
  createdAt: string;
  letterTag: LetterTag | null;
  senderNickname: string;
  receiverNickname: string | null;
  content: string;
  worryType: Worry | null;
  sendImagePath: string | null;
};

export type Reply = {
  letterType: 'Onboarding' | null;
  createdAt: string;
  repliedAt: string;
  letterId: number;
  letterTag: LetterTag | null;
  senderNickname: string;
  receiverNickname: string;
  content: string;
  repliedContent: string;
  worryType: Worry;
  sendImagePath: string | null;
  replyImagePath: string | null;
};

export type Storage = Pagination & {
  letters: Reply[];
};

export type SendLetter = {
  createdAt: string;
  letterId: number;
  letterTag: LetterTag | null;
  senderNickname: string;
  content: string;
  worryType: Worry;
  sendImagePath: string | null;
};

export type Send = Pagination & {
  letters: SendLetter[];
};
