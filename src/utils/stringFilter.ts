import { wordList } from '@/constants/filteringWords';

export const stringFilter = (text: string) => {
  const regex = new RegExp(wordList.join('|'), 'gi');
  return text.replace(regex, (word) => '*'.repeat(word.length));
};
