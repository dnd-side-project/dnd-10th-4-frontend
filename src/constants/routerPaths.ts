export const API_PATHS = {
  MEMBER: '/api/member',
  MEMBER_NICKNAME: '/api/member/nickname',
  MEMBER_BIRTHDAY: '/api/member/birthday',
  MEMBER_GENDER: '/api/member/gender',
  MEMBER_WORRY: '/api/member/worry',
  MEMBER_SIGN_OUT: '/api/member/sign-out',
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
