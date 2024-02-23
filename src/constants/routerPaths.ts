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
