import { setupWorker } from 'msw/browser';
import mockHandlers from './handlers';

export const worker = setupWorker(...mockHandlers);
