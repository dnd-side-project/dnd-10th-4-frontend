const formatDate = (date: Date): string => {
  const year = date.getFullYear().toString().substring(2, 4);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일`;
};

export { formatDate };
