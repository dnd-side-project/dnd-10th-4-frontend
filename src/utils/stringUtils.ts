/**
 * value 에서 숫자만 추출하여 최대 maxValue 까지만 반환합니다.
 * @param value 숫자로 변환할 문자열
 * @param maxValue 최대 값
 */
export const clampValue = (value: string, maxValue: number) => {
  const filteredValue = value.replace(/[^0-9]/g, '');

  return Number(filteredValue) > maxValue
    ? maxValue.toString()
    : filteredValue.toString().padStart(value.length, '0');
};
