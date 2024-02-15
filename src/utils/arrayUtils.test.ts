import {
  chunkArray,
  toggleItemInArray,
  pushUniqueItemToArray,
  getRandomItem,
} from './arrayUtils';

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

describe('toggleItemInArray', () => {
  it('주어진 배열에서 주어진 원소를 토글한 새로운 배열을 반환해야 한다', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(toggleItemInArray(arr, 3)).toEqual([1, 2, 4, 5]);
    expect(toggleItemInArray(arr, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('pushUniqueItemToArray', () => {
  it('주어진 배열에 주어진 원소가 없다면 원소를 추가한 새로운 배열을 반환해야 한다', () => {
    const arr = [1, 2, 3, 4, 5];
    expect(pushUniqueItemToArray(arr, 3)).toEqual([1, 2, 3, 4, 5]);
    expect(pushUniqueItemToArray(arr, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});

describe('getRandomItem', () => {
  it('주어진 배열에서 랜덤한 원소를 반환해야 한다', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(arr).toContain(getRandomItem(arr));
  });
});
