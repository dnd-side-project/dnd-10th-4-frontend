const ERROR_RESPONSES = {
  accessExpired: '액세스 토큰이 만료되었습니다.',
  reissueFailed: '리프레시 토큰이 올바르지 않습니다. 다시 로그인해주세요.',
  usernameNotFound: '존재하지 않는 회원입니다.',
} as const;

export default ERROR_RESPONSES;
