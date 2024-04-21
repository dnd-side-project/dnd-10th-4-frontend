import { getCurrentPageTitle } from './routeUtils';

const mocks = vi.hoisted(() => {
  return {
    ROUTER_PATHS: {
      ROOT: '/',
      LETTER_STORAGE: '/storage',
      LETTER_RECEPTION: (letterId: string) => `/reception/${letterId}` as const,
      SECOND_PARAMS: (param1: string, param2: string) =>
        `/first/${param1}/second/${param2}` as const,
      THIRD_PARAMS: (param1: string, param2: string, param3: string) =>
        `/first/${param1}/second/${param2}/third/${param3}` as const,
    },
    ROUTER_TITLES: {
      LETTER_STORAGE: '보관함',
      LETTER_RECEPTION: '내게 온 편지',
      SECOND_PARAMS: '이중 파라미터 테스트',
      THIRD_PARAMS: '삼중 파라미터 테스트',
    },
  };
});

vi.mock('@/constants/routerPaths', () => mocks);

describe('getCurrentPageTitle', () => {
  it('URI에 해당하는 타이틀이 존재하면 그 타이틀을 반환해야 한다.', () => {
    expect(getCurrentPageTitle('/storage')).toBe('보관함');
    expect(getCurrentPageTitle('/reception/1')).toBe('내게 온 편지');
    expect(getCurrentPageTitle('/first/1/second/5')).toBe(
      '이중 파라미터 테스트',
    );
    expect(getCurrentPageTitle('/first/1/second/5/third/3')).toBe(
      '삼중 파라미터 테스트',
    );
  });

  it('URI에 해당하는 타이틀이 없으면 undefined를 반환해야 한다.', () => {
    expect(getCurrentPageTitle('/')).toBe(undefined);
    expect(getCurrentPageTitle('/없는_주소')).toBe(undefined);
  });
});
