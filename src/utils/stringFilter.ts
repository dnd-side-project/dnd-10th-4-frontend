import { filterWordList } from '@/constants/filterWords';

export const filterString1 = (text: string) => {
  const regex = new RegExp(filterWordList.join('|'), 'gi');
  return text.replace(regex, (word) => '*'.repeat(word.length));
};

export const filterString2 = (text: string) => {
  let filteredText = text;
  filterWordList.forEach((word) => {
    if (filteredText.includes(word)) {
      filteredText = filteredText.replace(
        new RegExp(word, 'gi'),
        '*'.repeat(word.length),
      );
    }
  });
  return filteredText;
};
