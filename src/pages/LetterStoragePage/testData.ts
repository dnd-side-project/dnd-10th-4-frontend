import { Worry } from '@/constants/users';

export const testData = {
  totalElements: 5,
  totalPage: 3,
  hasNextPage: false,
  letters: [
    {
      createdAt: '2024-02-21T00:53:25',
      repliedAt: '2024-02-23T07:51:08',
      letterId: 1,
      letterTag: {
        ageRangeStart: 10,
        ageRangeEnd: 30,
        equalGender: true,
      },
      senderNickname: '낯선 강아지',
      receiverNickname: '낯선 유저1',
      content:
        '안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입니다. 이 편지는 300자 입니다. 안녕하세요 편지 내용입',
      repliedContent: '안녕하세요!',
      worryType: 'WORK' as Worry,
      sendImagePath: null,
      replyImagePath: null,
    },
    {
      createdAt: '2024-02-21T00:53:25',
      repliedAt: '2024-02-23T07:51:08',
      letterId: 2,
      letterTag: {
        ageRangeStart: 10,
        ageRangeEnd: 30,
        equalGender: true,
      },
      senderNickname: '낯선 고양이',
      receiverNickname: '낯선 유저1',
      content: '안녕',
      repliedContent: '안녕하세요!',
      worryType: 'LOVE' as Worry,
      sendImagePath: null,
      replyImagePath: null,
    },
    {
      createdAt: '2024-02-21T00:53:25',
      repliedAt: '2024-02-23T07:51:08',
      letterId: 3,
      letterTag: {
        ageRangeStart: 10,
        ageRangeEnd: 30,
        equalGender: true,
      },
      senderNickname: '낯선 소',
      receiverNickname: '낯선 유저1',
      content: '안녕',
      repliedContent: '하이',
      worryType: 'BREAK_LOVE' as Worry,
      sendImagePath:
        'https://letter-img-bucket.s3.ap-northeast-2.amazonaws.com/letter/3.jpg',
      replyImagePath:
        'https://letter-img-bucket.s3.ap-northeast-2.amazonaws.com/letter/3.jpg',
    },
    {
      createdAt: '2024-02-21T00:53:25',
      repliedAt: '2024-02-23T07:51:08',
      letterId: 4,
      letterTag: {
        ageRangeStart: 10,
        ageRangeEnd: 30,
        equalGender: true,
      },
      senderNickname: '낯선 소',
      receiverNickname: '낯선 유저1',
      content: '안녕',
      repliedContent: '하이',
      worryType: 'BREAK_LOVE' as Worry,
      sendImagePath:
        'https://letter-img-bucket.s3.ap-northeast-2.amazonaws.com/letter/3.jpg',
      replyImagePath:
        'https://letter-img-bucket.s3.ap-northeast-2.amazonaws.com/letter/3.jpg',
    },
    {
      createdAt: '2024-02-21T00:53:25',
      repliedAt: '2024-02-23T07:51:08',
      letterId: 5,
      letterTag: {
        ageRangeStart: 10,
        ageRangeEnd: 30,
        equalGender: true,
      },
      senderNickname: '낯선 소',
      receiverNickname: '낯선 유저1',
      content: '안녕',
      repliedContent: '하이',
      worryType: 'BREAK_LOVE' as Worry,
      sendImagePath:
        'https://letter-img-bucket.s3.ap-northeast-2.amazonaws.com/letter/3.jpg',
      replyImagePath:
        'https://letter-img-bucket.s3.ap-northeast-2.amazonaws.com/letter/3.jpg',
    },
  ],
};
