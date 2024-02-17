import STORAGE_KEYS from '@/constants/storageKeys';
import authAPI from './auth/apis';

beforeEach(() => {
  localStorage.clear();
  localStorage.clear();

  global.window = Object.create(window);
  Object.defineProperty(window, 'location', {
    value: {
      href: import.meta.env.BASE_URL,
    },
    writable: true,
  });
});

it('AT 유효', async () => {
  localStorage.setItem(STORAGE_KEYS.accessToken, 'fresh');
  localStorage.setItem(STORAGE_KEYS.refreshToken, 'fresh');

  expect(authAPI.getAccessCheck()).resolves.not.toThrow();
});

it('AT 만료시 재발급 요청 후 원본 요청 재수행', async () => {
  localStorage.setItem(STORAGE_KEYS.accessToken, 'stale');
  localStorage.setItem(STORAGE_KEYS.refreshToken, 'fresh');

  const getReissue = vi.spyOn(authAPI, 'getReissue');
  const getAccessCheck = vi.spyOn(authAPI, 'getAccessCheck');

  await expect(authAPI.getAccessCheck()).rejects.toThrow();
  expect(getReissue).toBeCalledTimes(1);
  expect(getAccessCheck).toBeCalledTimes(1);
  expect(localStorage.getItem(STORAGE_KEYS.accessToken)).toBe('renewed');
  expect(localStorage.getItem(STORAGE_KEYS.refreshToken)).toBe('renewed');
});

it('AT + RT 모두 만료시 스토리지에서 토큰 제거', async () => {
  localStorage.setItem(STORAGE_KEYS.accessToken, 'stale');
  localStorage.setItem(STORAGE_KEYS.refreshToken, 'stale');

  const getReissue = vi.spyOn(authAPI, 'getReissue');
  const getAccessCheck = vi.spyOn(authAPI, 'getAccessCheck');

  await expect(authAPI.getAccessCheck()).rejects.toThrow();
  expect(getReissue).toBeCalledTimes(1);
  expect(getAccessCheck).toBeCalledTimes(1);
  expect(localStorage.getItem(STORAGE_KEYS.accessToken)).toBeNull();
  expect(localStorage.getItem(STORAGE_KEYS.refreshToken)).toBeNull();
});
