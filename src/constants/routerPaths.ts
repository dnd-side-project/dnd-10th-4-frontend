export const API_PATHS = {
  AUTH_ACCESS_CHECK: '/mock/auth/access-check', // 테스트 코드에서만 사용되는 API
  AUTH_LOGIN_KAKAO: '/api/auth/login/kakao',
  AUTH_REISSUE: '/api/auth/reissue',

  MEMBER: '/api/member',
  MEMBER_NICKNAME: '/api/member/nickname',
  MEMBER_BIRTHDAY: '/api/member/birthday',
  MEMBER_GENDER: '/api/member/gender',
  MEMBER_WORRY: '/api/member/worry',
  MEMBER_SIGN_OUT: '/api/member/sign-out',

  LETTER: '/api/letter',
  LETTER_RECEPTION: '/api/letter/reception',
  LETTER_RECEPTION_DETAIL: (letterId: string) =>
    `/api/letter/reception/${letterId}` as const,
  LETTER_RECEPTION_REPLY_DETAIL: (letterId: string) =>
    `/api/letter/reception/reply/${letterId}` as const,
  LETTER_RECEPTION_PASS_DETAIL: (letterId: string) =>
    `/api/letter/reception/pass/${letterId}` as const,

  LETTER_REPLY: '/api/letter/reply',
  LETTER_REPLY_DETAIL: (letterId: string) =>
    `/api/letter/reply/${letterId}` as const,
  LETTER_REPLY_STORAGE_DETAIL: (letterId: string) =>
    `/api/letter/reply/storage/${letterId}` as const,

  LETTER_ONBOARDING_STORAGE_DETAIL: (letterId: string) =>
    `/api/letter/onboarding/storage/${letterId}` as const,

  LETTER_STORAGE: '/api/letter/storage',
  LETTER_STORAGE_DETAIL: (letterId: string) =>
    `/api/letter/storage/${letterId}` as const,

  LETTER_SEND: '/api/letter/send',
  LETTER_SEND_DETAIL: (letterId: string) =>
    `/api/letter/send/${letterId}` as const,

  REPORT_SEND: '/api/report',

  ADMIN_REPORT: '/api/report',
  ADMIN_MEMBER_SEARCH: '/api/member/search',
  ADMIN_LETTER_SPECIAL: '/api/letter/special',
} as const;

export const ROUTER_PATHS = {
  ROOT: '/',
  SIGNIN: '/signin',
  SIGNIN_REDIRECT_KAKAO: '/signin/redirect/kakao',
  ONBOARDING: '/onboarding',
  LETTER_WRITE: '/write',
  LETTER_RECEPTION: (letterId: string) => `/reception/${letterId}` as const,
  LETTER_REPLY: (letterId: string) => `/reply/${letterId}` as const,
  LETTER_STORAGE: `/storage`,
  MYPAGE: '/mypage',
  ADMIN: '/admin',
} as const;

export const ROUTER_TITLES = {
  SIGNIN: '로그인',
  SIGNIN_REDIRECT_KAKAO: '로그인 중...',
  ONBOARDING: '환영해요',
  LETTER_WRITE: '편지 쓰기',
  LETTER_RECEPTION: '내게 온 편지',
  LETTER_REPLY: '내게 온 답장',
  LETTER_STORAGE: '보관함',
  MYPAGE: '내 정보',
  ADMIN: '관리자',
} satisfies Partial<Record<keyof typeof ROUTER_PATHS, string>>;
