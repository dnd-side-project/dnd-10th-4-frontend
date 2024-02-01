import { BACKEND_ENDPOINT } from '@/constants/endpoint';

/**
 * MSW 핸들러에서 사용할 base URL 경로를 반환합니다.
 */
export const baseURL = (path: string) => {
  return BACKEND_ENDPOINT + path;
};

/**
 * MSW 핸들러에서 응답 타입을 추론하기 위한 유틸리티 타입입니다.
 * api 함수의 반환 타입을 통해 응답 타입을 추론합니다.
 * (타입을 명시함으로써 API 명세 변경 시 모킹 핸들러 누락 방지)
 */
export type ResponseType<T> = T extends (...args: unknown[]) => Promise<infer U>
  ? U
  : unknown;
