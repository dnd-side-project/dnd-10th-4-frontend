import { BACKEND_ENDPOINT } from '@/constants/endpoint';

export const baseURL = (path: string) => {
  return BACKEND_ENDPOINT + path;
};

export type ResponseType<T> = T extends (...args: unknown[]) => Promise<infer U>
  ? U
  : unknown;
