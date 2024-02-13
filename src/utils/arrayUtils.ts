/**
 * 배열을 주어진 크기로 분리합니다.
 * @param arr 분리할 배열
 * @param size 몇 개의 원소씩 분리할지의 크기
 */
export const chunkArray = <T>(arr: T[], size: number) => {
  const result: T[][] = [];

  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
};

/**
 * 배열에서 주어진 원소를 추가하거나 제거합니다.
 * @param arr 대상 배열
 * @param item 추가하거나 제거할 아이템
 */
export const toggleItemInArray = <T>(arr: readonly T[], item: T): T[] => {
  return arr.includes(item) ? arr.filter((t) => t !== item) : [...arr, item];
};

/**
 * 배열에서 랜덤한 원소를 반환합니다.
 */
export const getRandomItem = <T extends readonly unknown[]>(
  arr: T,
): T[number] => {
  return arr[Math.floor(Math.random() * arr.length)];
};
