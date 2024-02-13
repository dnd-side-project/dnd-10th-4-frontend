import { clampValue } from './stringUtils';

describe('clampValue', () => {
  it('주어진 값에서 숫자를 추출한 뒤 최대 maxValue 까지만 반환해야 한다', () => {
    expect(clampValue('3', 5)).toBe('3');
    expect(clampValue('6', 5)).toBe('5');
    expect(clampValue('a', 5)).toBe('0');
    expect(clampValue('aa', 5)).toBe('0');
    expect(clampValue('이상한2텍스트', 5)).toBe('2');
    expect(clampValue('이상한2텍스트6', 50)).toBe('26');
    expect(clampValue('이상한2텍스트6', 5)).toBe('5');
  });
});
