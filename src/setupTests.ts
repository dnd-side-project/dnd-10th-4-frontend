import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '@/mocks/node';
import STORAGE_KEYS from './constants/storageKeys';
import '@testing-library/jest-dom';

vi.mock('zustand');

vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}));

vi.spyOn(console, 'error').mockImplementation(() => undefined);

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

beforeEach(() => {
  localStorage.setItem(STORAGE_KEYS.accessToken, 'fresh');
  localStorage.setItem(STORAGE_KEYS.refreshToken, 'fresh');
});

afterEach(() => {
  vi.clearAllMocks();
  server.resetHandlers();
  localStorage.clear();
});

afterAll(() => {
  vi.resetAllMocks();
  server.close();
});
