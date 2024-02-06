export const letterWrite = {
  age: {
    value: 2,
    message: '편지를 받을 사람의 나이를 선택해주세요.',
    min: 10,
    max: 40,
  },
  content: {
    min: {
      value: 10,
      message: '편지 내용은 10자 이상이어야 합니다.',
    },
    max: {
      value: 300,
      message: '편지 내용은 300자 이하이어야 합니다.',
    },
  },
  gender: {
    value: 1,
    message: '편지를 받을 사람의 성별를 선택해주세요.',
  },
  worryType: {
    value: 1,
    message: '편지의 고민을 선택해주세요.',
  },
} as const;
