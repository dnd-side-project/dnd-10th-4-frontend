import { setupServer } from 'msw/node';
import mockHandlers from './handlers';

export const server = setupServer(...mockHandlers);
