import { wordList } from '@/constants/filteringWords';

export const stringFilter1 = (text: string) => {
  const regex = new RegExp(wordList.join('|'), 'gi');
  return text.replace(regex, (word) => '*'.repeat(word.length));
};

export const stringFilter2 = (text: string) => {
  let filterString = text;
  wordList.forEach((word) => {
    if (filterString.includes(word)) {
      filterString = filterString.replace(
        new RegExp(word, 'gi'),
        '*'.repeat(word.length),
      );
    }
  });
  return filterString;
};
