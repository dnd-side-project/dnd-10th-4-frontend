const formatDate = (date: Date): string => {
  const year = date.getFullYear().toString().substring(2, 4);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
};

/** 시간 차이를 계산한 뒤, TimeChip에서 사용되는 문자열 형태로 반환 */
const formatTimechipDate = (from: Date, to: Date): string => {
  const { minute, hour } = getTimeDifference(from, to);

  if (hour > 0) {
    return `${hour}h`.padStart(3, '0');
  } else {
    return `${minute}m`.padStart(3, '0');
  }
};

/** 시간 차이를 계산한 뒤, 흘러온 편지, 내게 온 편지 TimeChip에서 사용되는 문자열 형태로 반환 */
const formatDetailTimechipDate = (
  from: Date,
  to: Date,
): { timeText: string; isAlmostExpired: boolean } => {
  const { minute, hour } = getTimeDifference(from, to);

  const formattedHour = hour.toString().padStart(2, '0');
  const formattedMinute = (minute - hour * 60).toString().padStart(2, '0');

  const isAlmostExpired = hour === 0;
  const timeText = `${formattedHour}:${formattedMinute}`;

  return { timeText, isAlmostExpired };
};

/** Date 객체가 정상적인지 확인 */
const isValidDate = (date: Date): boolean => {
  return date instanceof Date && !isNaN(date as unknown as number);
};

/** 두 Date 객체의 시간 차이 반환 */
const getTimeDifference = (from: Date, to: Date) => {
  if (!isValidDate(from) || !isValidDate(to)) {
    throw new Error('Invalid Date');
  }

  const diff = to.getTime() - from.getTime();

  const second = Math.max(Math.floor(diff / 1000), 0);
  const minute = Math.max(Math.floor(diff / (1000 * 60)), 0);
  const hour = Math.max(Math.floor(diff / (1000 * 60 * 60)), 0);

  return { second, minute, hour };
};

export {
  formatDate,
  isValidDate,
  getTimeDifference,
  formatTimechipDate,
  formatDetailTimechipDate,
};
