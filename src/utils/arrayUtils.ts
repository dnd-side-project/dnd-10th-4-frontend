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
