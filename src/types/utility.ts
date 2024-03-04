/** T 타입 내부의 모든 필드에서 null 타입을 제거합니다. */
export type NonNullableFields<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};
