const ERROR_RESPONSES = {
  authenticationEntryPoint: '로그인이 필요한 요청 입니다.',
  accessExpired: '액세스 토큰이 만료되었습니다.',
  reissueFailed: '리프레시 토큰이 올바르지 않습니다. 다시 로그인해주세요.',
  memberNotFound: '존재하지 않는 회원입니다.',
  accessDeniedLetter: '해당 편지에 접근할 수 없습니다.',
  repliedLetterPass: '답장한 편지는 패스할 수 없습니다.',
} as const;

export default ERROR_RESPONSES;
