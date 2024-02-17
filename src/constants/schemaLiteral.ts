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
  image: {
    maxFileSize: {
      value: 5000000,
      message: '사진은 5MB 이하여야 합니다.',
    },
    acceptType: {
      list: ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/bmp'],
      message: '사진은 이미지 파일만 가능합니다.',
    },
  },
} as const;
