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
  ageStart: number;
  ageRangeEnd: number;
  equalGender: boolean;
};

export type Reception = {
  createdAt: string;
  letterId: number;
  letterTag?: LetterTag;
  senderNickname: string;
  receiverNickname: string;
  content: string;
  worryType: Worry;
  imagePath?: string;
};

export type Reply = {
  createdAt: string;
  letterId: number;
  senderNickname: string;
  receiverNickname: string;
  content: string;
  repliedContent: string;
  worryType: Worry;
};
