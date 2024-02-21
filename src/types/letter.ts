import { type Worry } from '@/constants/letters';

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
  imagePath: string | null;
};

export type Reply = {
  createdAt: string;
  repliedAt: string;
  letterId: number;
  letterTag: LetterTag;
  senderNickname: string;
  receiverNickname: string;
  content: string;
  repliedContent: string;
  worryType: Worry;
  sendImagePath: string | null;
  replyImagePath: string | null;
};
