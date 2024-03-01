export const API_PATHS = {
  MEMBER: '/api/member',
  MEMBER_NICKNAME: '/api/member/nickname',
  MEMBER_BIRTHDAY: '/api/member/birthday',
  MEMBER_GENDER: '/api/member/gender',
  MEMBER_WORRY: '/api/member/worry',
  MEMBER_SIGN_OUT: '/api/member/sign-out',

  LETTER: '/api/letter',
  LETTER_RECEPTION: '/api/letter/reception',
  LETTER_RECEPTION_DETAIL: (letterId: string) =>
    `/api/letter/reception/${letterId}`,
  LETTER_RECEPTION_REPLY_DETAIL: (letterId: string) =>
    `/api/letter/reception/reply/${letterId}`,
  LETTER_RECEPTION_PASS_DETAIL: (letterId: string) =>
    `/api/letter/reception/pass/${letterId}`,

  LETTER_REPLY: '/api/letter/reply',
  LETTER_REPLY_DETAIL: (letterId: string) => `/api/letter/reply/${letterId}`,
  LETTER_REPLY_STORAGE_DETAIL: (letterId: string) =>
    `/api/letter/reply/storage/${letterId}`,

  LETTER_ONBOARDING_STORAGE_DETAIL: (letterId: string) =>
    `/api/letter/onboarding/storage/${letterId}`,

  LETTER_STORAGE: '/api/letter/storage',
  LETTER_STORAGE_DETAIL: (letterId: string) =>
    `/api/letter/storage/${letterId}`,

  LETTER_SEND: '/api/letter/send',
  LETTER_SEND_DETAIL: (letterId: string) => `/api/letter/send/${letterId}`,
} as const;

export const ROUTER_PATHS = {
  ROOT: '/',
  SIGNIN: '/signin',
  SIGNIN_REDIRECT_KAKAO: '/signin/redirect/kakao',
  ONBOARDING: '/onboarding',
  LETTER_WRITE: '/write',
  LETTER_RECEPTION: (letterId: string) => `/reception/${letterId}`,
  MYPAGE: '/mypage',
  LETTER_REPLY: (letterId: string) => `/reply/${letterId}`,
  LETTER_STORAGE: `/storage`,
} as const;
