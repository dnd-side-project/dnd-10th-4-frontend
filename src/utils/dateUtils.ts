const formatDate = (date: Date) => {
  const year = date.getFullYear().toString().substring(2, 4);
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${year}년 ${month}월 ${day}일에 받은 편지`;
};

export default formatDate;
