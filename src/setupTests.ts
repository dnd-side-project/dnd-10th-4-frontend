import { beforeAll, afterEach, afterAll } from 'vitest';
import { server } from '@/mocks/node';
import '@testing-library/jest-dom';

vi.mock('zustand');

vi.mock('react-toastify', () => ({
  toast: {
    success: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
  },
}));

beforeAll(() => {
  server.listen({
    onUnhandledRequest: 'error',
  });
});

afterEach(() => {
  vi.clearAllMocks();
  server.resetHandlers();
});

afterAll(() => {
  vi.resetAllMocks();
  server.close();
});
