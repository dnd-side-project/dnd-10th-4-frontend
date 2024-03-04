import STORAGE_KEYS from '@/constants/storageKeys';
import authAPI from './auth/apis';

afterEach(() => {
  localStorage.clear();
  localStorage.clear();
});

it('AT가 유효하면 API 요청이 그대로 수행된다', async () => {
  localStorage.setItem(STORAGE_KEYS.accessToken, 'fresh');
  localStorage.setItem(STORAGE_KEYS.refreshToken, 'fresh');

  expect(authAPI.getAccessCheck()).resolves.not.toThrow();
});

it('AT가 만료되었으면 토큰 재발급 API를 호출한 뒤, 원본 API를 재요청한다', async () => {
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

it('AT와 RT가 모두 만료되었으면, 스토리지에서 토큰을 제거한다', async () => {
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
