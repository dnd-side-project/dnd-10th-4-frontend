import { type Worry } from '@/constants/letters';

export type Letter = {
  content: string;
  equalGender: boolean;
  ageRangeStart: number;
  ageRangeEnd: number;
  worryType: Worry;
  image: File;
};

export type Reception = {
  createdAt: string;
  letterId: number;
  senderNickname: string;
  receiverNickname: string;
  content: string;
  worryType: Worry;
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
