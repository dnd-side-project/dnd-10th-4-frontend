import letterAPI from '@/api/letter/apis';
import { type Reply, type Reception } from '@/types/letter';

export const ReceptionLetter = (letterId: number): Reception =>
  ({
    letterType: null,
    createdAt: '2024-02-17T16:50:44',
    letterId: letterId,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이123',
    receiverNickname: '낯선 강아지456',
    content: `${letterId} 번째 편지 입니다. 여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오`,
    worryType: 'BREAK_LOVE',
    sendImagePath:
      'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  }) as const;

export const ReceptionLetterWithoutImage = (letterId: number): Reception =>
  ({ ...ReceptionLetter(letterId), sendImagePath: null }) as const;

export const OnboardingLetter: Reception = {
  letterType: 'Onboarding',
  createdAt: '2024-02-21T22:41:42',
  letterId: 1,
  letterTag: null,
  senderNickname: '낯선 바다',
  receiverNickname: '낯선 유저',
  content:
    '안녕, 나는 이곳을 운영하고 있는 낯선 바다라고 해. 찾아와줘서 고마워. 너가 와주길 기다리고 있었어.\n나는 말 못할 고민이 있거나 힘든 일이 있을 때, 바다를 찾아가곤해. 내 모든 감정과 생각들을 온전히 이해 받고 공감 받는 기분이 들더라고.\n혹시 너도 마음 속 고민이 있지만 주변 지인에게 부담을 줄까 봐 쉽게 털어 놓지 못했던 경험이 있지 않니?\n내 마음 속 바다에서는 다른 사람에게 말하지 못하는 너만의 고민과 이야기를 물병에 담에 바다에 띄어 보낼 수 있어. 너와 비슷한 고민을 했을 지도 모르는 낯선이로부터 위로의 답장을 주고 받을 수도 있지.\n너에게 말 못할 고민이 있다면, 물병에 담아 띄어보내봐. 혹시 모르잖아. 너의 이름도, 얼굴도 모르는 낯선이로부터 그 누구에게도 받지 못했던 공감과 위로를 받을지.\n기다리고 있을게, 너의 이야기를 듣고싶어.\nP.S. 최근에 갔었던 동해 바다 사진을 동봉해. 너에게도 위로가 되기를',
  worryType: null,
  sendImagePath: 'https://d2bunq4des8hir.cloudfront.net/letter/oceanImage.jpeg',
} as const;

export const ReplyLetter = (letterId: number): Reply =>
  ({
    letterType: null,
    createdAt: '2024-02-18T16:50:44',
    repliedAt: '2024-02-19T16:50:44',
    letterId: letterId,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이123',
    receiverNickname: '낯선 강아지456',
    content: `${letterId} 번째 편지 입니다. 여기 거 다 남겨두고서 혹시겨두고서 혹시나 기대도 포기하려 하오 그대 부디 잘 지내시오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오 좋은 사람 만나오 사는 동안 날 잊고 사시오 진정 행복하길 바라겠소 이 맘만 가져가오 기나긴 그대 침묵을 이별로 받아두겠소 행여 이 맘 다칠까 근심은 접어두오 오 사랑한 사람이여 더 이상 못보아도 사실 그대 있음으로 힘겨운 날들을 견뎌 왔음에 감사하오`,
    repliedContent: `${letterId} 번째 편지 답장 입니다.`,
    worryType: 'BREAK_LOVE',
    sendImagePath:
      'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
    replyImagePath:
      'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg',
  }) as const;

export const ReceivedLetterResponse = [
  OnboardingLetter,
  {
    createdAt: new Date(
      new Date().getTime() - 48 * 60 * 60 * 1000 + 60 * 60 * 1000,
    ).toISOString(),
    letterId: 4,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저2',
    content: '안녕',
    worryType: 'WORK',
    sendImagePath: null,
  },
  {
    createdAt: new Date(
      new Date().getTime() - 23 * 60 * 60 * 1000,
    ).toISOString(),
    letterId: 5,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저3',
    content: '안녕',
    worryType: 'COURSE',
    sendImagePath: null,
  },
  {
    createdAt: new Date(
      new Date().getTime() - 1 * 60 * 60 * 1000,
    ).toISOString(),
    letterId: 6,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저4',
    content: '안녕',
    worryType: 'RELATIONSHIP',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 7,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저5',
    content: '안녕',
    worryType: 'LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 8,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저6',
    content: '안녕',
    worryType: 'STUDY',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 9,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저7',
    content: '안녕',
    worryType: 'FAMILY',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 10,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저8',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 11,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저9',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 12,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저10',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 13,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저11',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 14,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저12',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 15,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저13',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 16,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저13',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 17,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저13',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 18,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저13',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 19,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저13',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
  {
    createdAt: '2024-02-05T15:40:44',
    letterId: 20,
    letterType: null,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 소',
    receiverNickname: '낯선 유저13',
    content: '안녕',
    worryType: 'BREAK_LOVE',
    sendImagePath: null,
  },
] satisfies Awaited<ReturnType<(typeof letterAPI)['getReceivedLetters']>>;

export const RepliedLettersResponse = [
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 1,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 강아지',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'WORK',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 2,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 3,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 4,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 5,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 6,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 7,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 8,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 9,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
  {
    letterType: null,
    createdAt: '2024-02-05T15:40:44',
    repliedAt: '2024-02-07T15:40:44',
    letterId: 10,
    letterTag: {
      ageRangeStart: 20,
      ageRangeEnd: 50,
      equalGender: true,
    },
    senderNickname: '낯선 고양이',
    receiverNickname: '낯선 유저1',
    content: '안녕',
    repliedContent: '안녕하세요!',
    worryType: 'LOVE',
    sendImagePath: null,
    replyImagePath: null,
  },
] satisfies Awaited<ReturnType<(typeof letterAPI)['getRepliedLetters']>>;
