import { chunkArray } from './arrayUtils';

describe('chunkArray', () => {
  it('1차원 배열을 size개의 원소로 분리한 2차원 배열을 반환해야 함', () => {
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
