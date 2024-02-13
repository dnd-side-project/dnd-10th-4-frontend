import { chunkArray, getRandomItem, toggleItemInArray } from './arrayUtils';

describe('chunkArray', () => {
  it('1차원 배열을 size개의 원소로 분리한 2차원 배열을 반환해야 한다', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3)).toEqual([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8],
    ]);

    expect(chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ]);
  });
});

describe('getRandomItem', () => {
  it('주어진 배열에서 랜덤한 원소를 반환해야 한다', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;
    expect(arr).toContain(getRandomItem(arr));
  });
});

describe('toggleItemInArray', () => {
  it('주어진 배열에서 주어진 원소를 토글한 새로운 배열을 반환해야 한다', () => {
    const arr = [1, 2, 3, 4, 5] as const;
    expect(toggleItemInArray(arr, 3)).toEqual([1, 2, 4, 5]);
    expect(toggleItemInArray(arr, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
